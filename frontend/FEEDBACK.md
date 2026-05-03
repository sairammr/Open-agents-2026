# FEEDBACK — Uniswap V4 + autonomous agent execution

We built openacid for ETHGlobal Open Agents. It's a library that wraps an agent's action in four primitives — saga, invariant, idempotent, receipted — so a crash mid-broadcast doesn't double-spend. The reference agent runs a 60/40 ETH/USDC rebalancer on Base Sepolia and routes through Uniswap V4.

Roughly half of the library's design choices were driven by the specific shape of V4 multi-step execution. What could go wrong with `approve → swap → stake`, what compensation looks like when step 2 fails, what an "orphan allowance" actually means after a botched swap. This is the unedited version of what we ran into. Half praise, half complaint. Hopefully useful.

## The good stuff

V4 testnet coverage is genuinely solid. PoolManager, PositionManager, Universal Router, StateView, V4Quoter — all live on both Base Sepolia and Unichain Sepolia. We pointed our agent at `sepolia.base.org` for hours during dev and didn't get rate-limited once. That sounds like a low bar but it's not. Half the L2 testnets we've poked at this year fall over under sustained polling.

The Universal Router shape is right for sagas. A swap on V4 is naturally a multi-step thing — approve, then a router command payload, then maybe stake the output. The fact that V4 lets you compose those steps via `commands + inputs` matches exactly how we wanted to model it on our side. Step boundaries on the saga line up with command boundaries on V4. That doesn't happen by accident; somebody clearly thought about composition when designing the router.

Hooks are smart. We didn't deploy a custom hook (out of scope for the hackathon), but the architecture means a protocol can layer its own consistency checks on top of ours. That's a real defense-in-depth story for autonomous agents — even if our postcondition misses something, a well-designed hook on the pool side rejects the swap.

## The friction

The Universal Router payload is the single reason our example agent ships with a dry-run swap step. To execute a basic single-pool swap from agent code you have to encode a `PathKey[]`, pull a quote from V4Quoter, pack the V4_SWAP byte, then encode settle + take pairs. Each piece is small. Together they're an afternoon if you haven't done it before. The hackathon clock didn't permit, so we documented the live V4 swap as a one-PR extension and shipped the saga in dry-run for everything except the chain reads.

If Uniswap published `@uniswap/v4-router-helpers` with a `singlePoolSwap({ poolKey, amountIn, amountOutMin, recipient, deadline })` returning `(commands, inputs)`, half the agent builders showing up next year would land V4 swaps on day one instead of day three. We'd ship one ourselves but Uniswap-blessed carries more weight.

V4Quoter is missing a combined gas estimate. Our `gasUnderCap` invariant wants both the output amount AND the gas estimate in a single call. Today that's two RPCs — `quoteExactInputSingle` plus a separate `eth_estimateGas`. Trivial for a one-shot frontend, but meaningful latency for a poll-loop agent that quotes on every tick. A `quoteAndEstimateGas` view function would pay for itself almost immediately.

The docs assume one human at a wallet. There's no "your process is going to crash mid-broadcast, here's how to handle it" page. We hit the obvious things — replaced-by-fee scenarios, mempool drops, hooks that perform side-effects before reverting — and the docs essentially shrug at all of them. Most of openacid exists to fill that gap, but the gap shouldn't be ours to fix forever. A 1-page "retry-safe Uniswap agent" cookbook on `docs.uniswap.org` would unblock a real number of hackathon teams.

There's also no canonical pattern for agents whose action lives on Uniswap but whose audit trail lives elsewhere. Our receipts go to 0G Storage and anchor on a `ReceiptRegistry` contract deployed on 0G Chain. The swap is on Base; the proof is on 0G. That split is going to be increasingly common as agent platforms emerge with their own attestation infrastructure. A short doc from Uniswap on "how partner protocols should reference V4 txs in their own audit storage" would mean people build it consistently instead of one-off.

## What we wished existed (short list)

Things that would have saved us hours:

- A first-party V4 swap helper for the common single-pool case
- A combined `quoteAndEstimateGas` view on V4Quoter
- A 1-page retry-safe agent cookbook — replaced txs, mempool drops, hooks with side-effects
- A "saga-friendly hook design" doc — what's safe inside a hook, what should defer until after the swap commits
- A testnet faucet that drops ETH plus a testnet stable in one go (today: two faucets, two waits, two captchas)

## What openacid adds back

The library's contribution is small and concrete. Five things that compose with V4 today:

- A `noOrphanAllowances` postcondition that detects any standing ERC-20 allowance pointing at the Universal Router after the saga commits and triggers the saga's compensation chain to revoke it. This closes the standing-approval phishing vector every V4 integrator has to think about.
- An `idempotent` wrapper keyed by intent (`rebalance:${targetRatio}:${deadline}`), so the same trigger firing twice executes once and returns the same result.
- A `chainAwareBroadcast` helper so the agent does NOT re-broadcast a swap that already mined when its host process crashes and restarts.
- EIP-712 signed receipts of every action — auditors verify with `ecrecover` against the receipt struct hash and don't need to install anything.
- A reference agent at `examples/multi-step-uniswap-agent` tying all of the above to a real V4 deployment on Base Sepolia.

If any of this is useful upstream — the retry-safe cookbook, the hook pattern doc, even just a more agent-shaped section on the V4 Quickstart — happy to PR it. Most of the writing already exists in our repo's docs.

— Romario Kavin & Sairam M R
*[github.com/RomarioKavin1/acid](https://github.com/RomarioKavin1/acid) · `npm i @openacid/acid`*
