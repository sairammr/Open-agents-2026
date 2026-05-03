import Topbar from '@/components/Topbar'
import CopyableCode from '@/components/CopyableCode'
import {
  PACKAGES,
  RECEIPT_REGISTRY,
  ENS,
  TEST_COUNTS,
} from '@/lib/openacid'

export const metadata = {
  title: 'docs · openacid',
  description:
    'Reference documentation for the four ACID primitives, all five npm packages, runtime composition rules, recipes, and live deployment addresses.',
}

const TOC: { id: string; title: string; sub?: { id: string; title: string }[] }[] = [
  { id: 'overview', title: 'Overview' },
  {
    id: 'install',
    title: 'Install',
    sub: [
      { id: 'install-pkgs', title: 'Packages' },
      { id: 'install-quickstart', title: 'Quickstart' },
    ],
  },
  {
    id: 'primitives',
    title: 'Primitives',
    sub: [
      { id: 'saga', title: 'saga' },
      { id: 'invariant', title: 'invariant' },
      { id: 'idempotent', title: 'idempotent' },
      { id: 'receipted', title: 'receipted' },
      { id: 'composition', title: 'Composition' },
    ],
  },
  {
    id: 'adapters',
    title: 'Adapters',
    sub: [
      { id: 'adapter-memory', title: 'memory' },
      { id: 'adapter-viem', title: 'viem' },
      { id: 'adapter-0g', title: '0g-storage' },
      { id: 'adapter-ens', title: 'ens' },
    ],
  },
  {
    id: 'recipes',
    title: 'Recipes',
    sub: [
      { id: 'recipe-killnine', title: 'kill -9 recovery' },
      { id: 'recipe-allowance', title: 'allowance hygiene' },
      { id: 'recipe-isolation', title: 'isolation under retries' },
      { id: 'recipe-verify', title: 'verify a receipt' },
      { id: 'recipe-compose', title: 'introspect composition' },
      { id: 'recipe-mirror', title: 'mirror to ENS' },
      { id: 'recipe-timeout', title: 'hard timeouts' },
      { id: 'recipe-whitelist', title: 'recipient whitelist' },
    ],
  },
  { id: 'demo', title: 'Demo' },
  { id: 'live', title: 'Live deployment' },
  { id: 'errors', title: 'Errors' },
  { id: 'limitations', title: 'Limitations' },
]

const adapters = PACKAGES.filter((p) => p.name !== '@openacid/acid')

const SAGA_STEP_TYPES = `interface SagaStep<A> {
  id: string
  do: (ctx: SagaContext<A>) => Promise<unknown>
  compensateOn?: 'failure' | 'never'
}

interface SagaContext<A> {
  args: A
  sagaId: string
  attempt: number
  results: Record<string, unknown>
}

type CompensationFn<A> = (ctx: SagaContext<A>, stepResult: unknown) => Promise<void>`

const QUICKSTART = `import { saga, invariant, idempotent, receipted } from '@openacid/acid'
import { MemoryStorageAdapter, MemorySigner } from '@openacid/adapter-memory'

const storage = new MemoryStorageAdapter()
const signer = new MemorySigner(process.env.PRIVATE_KEY as \`0x\${string}\`)

const rebalance = receipted({
  storage,
  signer,
  chain: { chainId: 16602 },         // 0G Galileo
  fnName: 'rebalance',
})(
  invariant({
    pre:  async (a) => a.amount > 0n,
    post: async (_a, results) => results.swap !== undefined,
  })(
    idempotent({
      key: (a) => \`rebalance:\${a.targetRatio}:\${a.deadline}\`,
      storage,
      ttl: 600,
    })(
      saga({
        steps: [
          { id: 'approve', do: async () => approveTx() },
          { id: 'swap',    do: async () => swapTx() },
        ],
        compensations: { approve: async () => revokeTx() },
        storage,
      }),
    ),
  ),
)

await rebalance({ targetRatio: 60, amount: 1000n, deadline: deadline() })`

const SAGA_EXAMPLE = `import { saga } from '@openacid/acid'

const swap = saga<{ amountIn: bigint }>({
  steps: [
    { id: 'approve', do: async (ctx) => approveTx(ctx.args.amountIn) },
    { id: 'swap',    do: async (ctx) => swapTx(ctx.args.amountIn) },
    { id: 'stake',   do: async (ctx) => stakeTx(ctx.results.swap) },
  ],
  compensations: {
    approve: async () => approveTx(0n),     // revoke
    swap:    async () => null,               // no-op (idempotent on chain)
  },
  storage,
})

await swap({ amountIn: 1000n })`

const INVARIANT_EXAMPLE = `import { invariant, noOrphanAllowances } from '@openacid/acid'

const guarded = invariant({
  pre:  async (args) => args.amount > 0n,
  post: noOrphanAllowances({
    getAllowances: async () => [
      { token: USDC, spender: router, amount: await readAllowance(...) },
    ],
  }),
  onViolation: 'throw',
})(swap)`

const IDEMPOTENT_EXAMPLE = `import { idempotent } from '@openacid/acid'

const dedup = idempotent({
  key: (a) => \`rebalance:\${a.targetRatio}:\${a.deadline}\`,
  storage,
  inFlight: 'block',     // 'block' | 'return-pending' | 'reject'
  ttl: 600,              // cache for 10 min after completion
  strictKeys: true,      // reject Date.now()-based keys
})(action)`

const RECEIPTED_EXAMPLE = `import { receipted, verifyReceipt } from '@openacid/acid'

const action = receipted({
  storage,
  signer,
  chain: { chainId: 16602 },
  fnName: 'rebalance',
  prevReceiptKey: 'agent-1',
  collectTxRefs: (r) => extractTxHashes(r),
  onReceipt: async (receipt) => {
    await mirrorToEns(receipt)
  },
})(saga)

// later, anywhere — verify the receipt
const ok = await verifyReceipt(receipt, agentAddress, { chainId: 16602 })`

const COMPOSITION_EXAMPLE = `import { inspectComposition, getCompositionLabel, checkComposition } from '@openacid/acid'

const fn = receipted(o1)(invariant(o2)(idempotent(o3)(saga(o4))))

inspectComposition(fn)    // ['receipted','invariant','idempotent','saga']
getCompositionLabel(fn)   // 'receipted→invariant→idempotent→saga'
checkComposition(fn)      // [] — no warnings; recommended order`

const KILL9_EXAMPLE = `import { chainAwareBroadcast } from '@openacid/acid'

const out = await chainAwareBroadcast(
  {
    storage,
    chain,
    trackKey: \`swap:\${args.id}:tx\`,
    confirmations: 1,
  },
  async () => walletClient.writeContract({ ... }),  // returns hash
)

if (out.reused) {
  // last run already broadcast; we just waited for finality.
}`

const ALLOWANCE_EXAMPLE = `import { invariant, noOrphanAllowances } from '@openacid/acid'

invariant({
  post: noOrphanAllowances({
    getAllowances: async () => [
      { token: USDC, spender: router, amount: await readAllowance(USDC, agent, router) },
    ],
  }),
})(swapSaga)`

const ISOLATION_EXAMPLE = `import { idempotent } from '@openacid/acid'

const dedup = idempotent({
  key: (a) => \`rebalance:\${a.targetRatio}:\${a.deadline}\`,
  storage,
  inFlight: 'block',
  ttl: 600,
})(rebalance)

// two parallel calls with the same args → one execution, both resolve to the same result
await Promise.all([dedup(args), dedup(args)])`

const VERIFY_EXAMPLE = `import { verifyReceipt } from '@openacid/acid'

const ok = await verifyReceipt(
  receipt,
  agentAddress,
  { chainId: 16602 },
)

// On chain: ReceiptRegistry.verifyReceipt(anchorId, digest, proof, sig)
//   → ecrecover(digest, v, r, s) === anchor.signer`

const COMPOSE_EXAMPLE = `import { getCompositionLabel } from '@openacid/acid'

console.log('action:', getCompositionLabel(action))
// "receipted→invariant→idempotent→saga"`

const MIRROR_EXAMPLE = `import { receipted } from '@openacid/acid'
import { EnsReceiptMirror } from '@openacid/adapter-ens'

const mirror = new EnsReceiptMirror({
  walletClient,                                          // viem wallet on Sepolia
  resolver: '0xE99638b40E4Fff0129D56f03b55b6bbC4BBE49b5',
  subname: 'openacid.eth',
})

const action = receipted({ ..., onReceipt: mirror.onReceipt })(saga)`

const TIMEOUT_EXAMPLE = `import { withTimeout, TimeoutError } from '@openacid/acid'

const safe = withTimeout({ ms: 30_000, label: 'rebalance' })(action)

try {
  await safe(args)
} catch (err) {
  if (err instanceof TimeoutError) {
    // loop survives; re-queue or skip
  }
  throw err
}`

const WHITELIST_EXAMPLE = `import { invariant, recipientWhitelist } from '@openacid/acid'

invariant({
  post: recipientWhitelist({
    allowed: [router, vault, agentSelf],
    getRecipients: async (_a, r) => extractAddresses(r),
  }),
})(action)`

export default function DocsPage() {
  return (
    <div className="docs-page">
      <Topbar />
      <div className="docs-layout">
        <aside className="docs-aside">
          <p className="docs-aside-title">on this page</p>
          <ul className="docs-aside-list">
            {TOC.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`}>{t.title}</a>
                {t.sub?.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className="sub">
                    {s.title}
                  </a>
                ))}
              </li>
            ))}
          </ul>
        </aside>

        <main className="docs-main">
          <section id="overview" className="anchor-target">
            <span className="docs-eyebrow">openacid · v{PACKAGES[0].versions[PACKAGES[0].versions.length - 1]}</span>
            <h1>Documentation</h1>
            <p className="lede">
              The four primitives — <code>saga</code>, <code>invariant</code>, <code>idempotent</code>,{' '}
              <code>receipted</code> — are higher-order functions you compose around an action. Wrap once;
              the wrapped function becomes crash-safe, deduplicated, invariant-enforced, and
              audit-trailed.
            </p>
            <p>
              All four share the same shape: <code>(opts) =&gt; (fn) =&gt; (args) =&gt; Promise&lt;R&gt;</code>.
              The recommended outer-to-inner order is{' '}
              <strong>receipted &rarr; invariant &rarr; idempotent &rarr; saga</strong>; reversals are
              caught by <code>checkComposition()</code>.
            </p>
            <p>
              {TEST_COUNTS.vitest} vitest tests ({TEST_COUNTS.vitestLive0G} live on 0G Galileo) ·{' '}
              {TEST_COUNTS.forge} forge tests · {TEST_COUNTS.total} total · MIT licensed.
            </p>
          </section>

          <section id="install" className="anchor-target">
            <h2>Install</h2>
            <h3 id="install-pkgs" className="anchor-target">Packages</h3>
            <p>
              Five packages under the <code>@openacid</code> npm scope. Start with{' '}
              <code>@openacid/acid</code>; add adapters as needed.
            </p>
            <CopyableCode
              code="pnpm add @openacid/acid @openacid/adapter-memory"
              label="local + tests"
            />
            <CopyableCode
              code="pnpm add @openacid/adapter-viem @openacid/adapter-0g-storage @openacid/adapter-ens"
              label="production wiring"
            />
            <h4>Requirements</h4>
            <ul>
              <li>
                <strong>Node 20+</strong>. ESM + CJS dual builds; full <code>.d.ts</code> typings.
              </li>
              <li>
                <strong>viem 2.x</strong> as a peer dependency for the chain/signer/ens adapters.
              </li>
              <li>
                <strong>Funded testnet wallets</strong> only when you wire the live adapters; the memory
                adapter needs nothing.
              </li>
            </ul>

            <h3 id="install-quickstart" className="anchor-target">Quickstart</h3>
            <p>
              The full pipeline. Save as <code>agent.ts</code>, set <code>PRIVATE_KEY</code>, run with{' '}
              <code>tsx</code>.
            </p>
            <pre>
              <code>{QUICKSTART}</code>
            </pre>
          </section>

          <section id="primitives" className="anchor-target">
            <h2>Primitives</h2>
            <p>
              Each primitive is a higher-order function. Compose them by nesting; the order is
              semantic.
            </p>

            <h3 id="saga" className="anchor-target">saga</h3>
            <p>
              Multi-step transactions with compensation. Either every step commits or every executed
              step is reversed in reverse order.
            </p>
            <p>
              Saga state is persisted per-step and content-addressed by{' '}
              <code>hash(args)</code>. Identical args resume the same saga; on crash mid-step, the
              restart treats the in-flight step as failed and compensates prior steps.
              Compensations are themselves idempotent, keyed by{' '}
              <code>{`${'${sagaId}'}:compensate:${'${stepId}'}`}</code>.
            </p>
            <h4>Options</h4>
            <table>
              <thead>
                <tr>
                  <th>option</th>
                  <th>type</th>
                  <th>notes</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>steps</td><td>SagaStep&lt;A&gt;[]</td><td>ordered list; each has id and async do(ctx)</td></tr>
                <tr><td>compensations</td><td>Record&lt;stepId, CompensationFn&gt;</td><td>reverse-order undo on failure</td></tr>
                <tr><td>storage</td><td>StorageAdapter</td><td>persists saga state for crash recovery</td></tr>
                <tr><td>onPartialFailure</td><td>'compensate' | 'halt' | 'retry-forward'</td><td>default: compensate</td></tr>
                <tr><td>namespace</td><td>string</td><td>storage key prefix; default 'saga'</td></tr>
              </tbody>
            </table>
            <h4>Step + Context</h4>
            <pre>
              <code>{SAGA_STEP_TYPES}</code>
            </pre>
            <h4>Example</h4>
            <pre>
              <code>{SAGA_EXAMPLE}</code>
            </pre>

            <h3 id="invariant" className="anchor-target">invariant</h3>
            <p>
              Pre/post predicate enforcement at action boundaries. <code>pre</code> rejects before the
              wrapped fn runs; <code>post</code> rejects after the fn returns when the produced state
              is invalid.
            </p>
            <p>
              Predicates return <code>true</code> (pass) or an{' '}
              <code>InvariantViolation {`{ reason, severity, context }`}</code>. The library exports
              five built-ins: <code>noOrphanAllowances</code>, <code>balanceWithinBound</code>,{' '}
              <code>gasUnderCap</code>, <code>slippageBelow</code>, <code>recipientWhitelist</code>.
            </p>
            <h4>Options</h4>
            <table>
              <thead>
                <tr>
                  <th>option</th>
                  <th>type</th>
                  <th>notes</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>pre</td><td>(args, ctx) =&gt; Promise&lt;bool | Violation&gt;</td><td>reject before fn runs</td></tr>
                <tr><td>post</td><td>(args, result, ctx) =&gt; Promise&lt;bool | Violation&gt;</td><td>reject after fn returns</td></tr>
                <tr><td>onViolation</td><td>'throw' | 'compensate' | 'log-only'</td><td>default: throw</td></tr>
                <tr><td>compensate</td><td>(args, result, violation, phase) =&gt; Promise&lt;void&gt;</td><td>required when onViolation='compensate'</td></tr>
                <tr><td>onLog</td><td>(violation, phase, args, result?) =&gt; void</td><td>consumer for log-only mode</td></tr>
              </tbody>
            </table>
            <h4>Example</h4>
            <pre>
              <code>{INVARIANT_EXAMPLE}</code>
            </pre>

            <h3 id="idempotent" className="anchor-target">idempotent</h3>
            <p>
              Exactly-once execution under concurrent retries and crashes. The first call claims an
              in-flight marker via <code>storage.cas</code>; duplicate-during-execution either blocks
              (default), returns a pending handle, or rejects. Duplicate-after-completion returns the
              cached result without re-invoking the wrapped fn.
            </p>
            <p>
              Strict-key mode catches non-deterministic keys by calling <code>key(args)</code> twice
              and comparing — <code>Date.now()</code> or <code>Math.random()</code>-based keys throw{' '}
              <code>NonDeterministicKeyError</code>.
            </p>
            <h4>Options</h4>
            <table>
              <thead>
                <tr>
                  <th>option</th>
                  <th>type</th>
                  <th>notes</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>key</td><td>(args) =&gt; string</td><td>deterministic; rejected by strict-key check if it varies</td></tr>
                <tr><td>storage</td><td>StorageAdapter</td><td>in-flight marker + result cache</td></tr>
                <tr><td>inFlight</td><td>'block' | 'return-pending' | 'reject'</td><td>default: block</td></tr>
                <tr><td>ttl</td><td>number (seconds)</td><td>completed-result cache TTL; default 3600</td></tr>
                <tr><td>strictKeys</td><td>boolean</td><td>default true</td></tr>
                <tr><td>pollIntervalMs</td><td>number</td><td>'block' mode poll cadence; default 50</td></tr>
                <tr><td>blockTimeoutMs</td><td>number</td><td>give up waiting after N ms; default 30000</td></tr>
                <tr><td>namespace</td><td>string</td><td>storage key prefix; default 'idempotent'</td></tr>
              </tbody>
            </table>
            <h4>Example</h4>
            <pre>
              <code>{IDEMPOTENT_EXAMPLE}</code>
            </pre>

            <h3 id="receipted" className="anchor-target">receipted</h3>
            <p>
              Signed, chained, content-addressed receipts. Every wrapped call produces a{' '}
              <code>Receipt</code> persisted to the configured storage; receipts are EIP-712 signed by
              the configured signer with a domain that includes <code>chainId</code>, preventing
              cross-chain replay.
            </p>
            <p>
              Receipts are emitted even when the wrapped fn throws — the audit trail covers attempts,
              not just successes. Use <code>verifyReceipt(receipt, expectedSigner, domain)</code> to
              recover the signer; it works on any EVM with no library required (the on-chain side is{' '}
              <code>ecrecover(digest, v, r, s)</code>).
            </p>
            <h4>Options</h4>
            <table>
              <thead>
                <tr>
                  <th>option</th>
                  <th>type</th>
                  <th>notes</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>storage</td><td>StorageAdapter</td><td>where receipts persist (typically 0G Storage)</td></tr>
                <tr><td>signer</td><td>SignerAdapter</td><td>signs the EIP-712 typed-data digest</td></tr>
                <tr><td>chain</td><td>{`{ chainId; verifyingContract? }`}</td><td>EIP-712 domain</td></tr>
                <tr><td>fnName</td><td>string</td><td>human-readable identifier in the receipt</td></tr>
                <tr><td>prevReceiptKey</td><td>string</td><td>agent-scoped key for receipt chaining</td></tr>
                <tr><td>collectTxRefs</td><td>(result) =&gt; string[]</td><td>extract on-chain tx hashes for the receipt</td></tr>
                <tr><td>onReceipt</td><td>(receipt) =&gt; Promise&lt;void&gt;</td><td>callback fired after persistence</td></tr>
                <tr><td>namespace</td><td>string</td><td>storage key prefix; default 'receipt'</td></tr>
              </tbody>
            </table>
            <h4>Receipt shape</h4>
            <ul>
              <li><code>callId</code> — content-addressed identifier (bytes32)</li>
              <li><code>prevReceipt</code> — chain pointer (bytes32 | null)</li>
              <li><code>fnName</code>, <code>inputHash</code>, <code>outputHash</code></li>
              <li><code>txRefs[]</code> — on-chain tx hashes captured by <code>collectTxRefs</code></li>
              <li><code>startedAt</code>, <code>endedAt</code>, <code>retries</code></li>
              <li><code>signature</code> — 65-byte secp256k1 over the EIP-712 digest</li>
              <li><code>cid</code> — content-addressed pointer in the durable backend</li>
            </ul>
            <h4>Example</h4>
            <pre>
              <code>{RECEIPTED_EXAMPLE}</code>
            </pre>

            <h3 id="composition" className="anchor-target">Composition</h3>
            <p>
              Each wrapper tags its returned function with a non-enumerable symbol; the helpers walk
              the tag chain at runtime.
            </p>
            <ul>
              <li>
                <code>inspectComposition(fn)</code> — returns an array like{' '}
                <code>['receipted','invariant','idempotent','saga']</code>.
              </li>
              <li>
                <code>getCompositionLabel(fn)</code> — renders the chain with arrows.
              </li>
              <li>
                <code>checkComposition(fn)</code> — returns{' '}
                <code>{`CompositionWarning[]`}</code> for inverted orders or duplicated wrappers; empty
                array on the recommended layout.
              </li>
            </ul>
            <pre>
              <code>{COMPOSITION_EXAMPLE}</code>
            </pre>
          </section>

          <section id="adapters" className="anchor-target">
            <h2>Adapters</h2>
            <p>
              Concrete implementations of <code>StorageAdapter</code>, <code>ChainAdapter</code>, and{' '}
              <code>SignerAdapter</code>. Every storage adapter must pass the 12-case{' '}
              <code>storageConformanceCases</code> contract suite exported from core.
            </p>

            {adapters.map((a) => {
              const slug =
                a.name === '@openacid/adapter-memory'
                  ? 'adapter-memory'
                  : a.name === '@openacid/adapter-viem'
                    ? 'adapter-viem'
                    : a.name === '@openacid/adapter-0g-storage'
                      ? 'adapter-0g'
                      : 'adapter-ens'
              return (
                <div key={a.name}>
                  <h3 id={slug} className="anchor-target">
                    {a.name}
                  </h3>
                  <p>{a.description}</p>
                  <CopyableCode code={a.install} />
                  <p>
                    <strong>Exports:</strong> {a.exports.join(' · ')}
                  </p>
                  <p>
                    <a href={a.npm} target="_blank" rel="noreferrer">
                      view on npm ↗
                    </a>{' '}
                    · workspace path <code>{a.workspace}</code> · latest{' '}
                    <code>v{a.versions[a.versions.length - 1]}</code> · history{' '}
                    {a.versions.join(' → ')}
                  </p>
                </div>
              )
            })}
          </section>

          <section id="recipes" className="anchor-target">
            <h2>Recipes</h2>
            <p>Eight patterns drawn from the reference agent and the integration tests.</p>

            <h3 id="recipe-killnine" className="anchor-target">kill -9 recovery</h3>
            <p>
              Process dies after broadcasting an approve, before the swap. On restart you do not want
              to re-broadcast.
            </p>
            <pre>
              <code>{KILL9_EXAMPLE}</code>
            </pre>

            <h3 id="recipe-allowance" className="anchor-target">Allowance hygiene</h3>
            <p>
              A "successful" saga can leak an allowance pointing at a router. A postcondition catches
              it.
            </p>
            <pre>
              <code>{ALLOWANCE_EXAMPLE}</code>
            </pre>

            <h3 id="recipe-isolation" className="anchor-target">Isolation under retries</h3>
            <p>
              LLM planner emits the same tool call twice within a few hundred milliseconds. You want
              one swap, two identical results.
            </p>
            <pre>
              <code>{ISOLATION_EXAMPLE}</code>
            </pre>

            <h3 id="recipe-verify" className="anchor-target">Verify a stored receipt</h3>
            <p>
              Recover the signer from a stored receipt. Works off-chain (in JS) and on-chain (via the
              registry contract).
            </p>
            <pre>
              <code>{VERIFY_EXAMPLE}</code>
            </pre>

            <h3 id="recipe-compose" className="anchor-target">Introspect composition</h3>
            <p>
              Confirm at runtime that your wrappers are nested in the recommended order. Useful for
              log decoration.
            </p>
            <pre>
              <code>{COMPOSE_EXAMPLE}</code>
            </pre>

            <h3 id="recipe-mirror" className="anchor-target">Mirror to ENS</h3>
            <p>
              Publish receipt CIDs as ENS text records. Any third party can resolve{' '}
              <code>{ENS.name}/receipt.latest</code> with no library install.
            </p>
            <pre>
              <code>{MIRROR_EXAMPLE}</code>
            </pre>

            <h3 id="recipe-timeout" className="anchor-target">Hard timeouts</h3>
            <p>
              Bound a hung call so the agent loop survives. <code>withTimeout</code> races the wrapped
              fn against a deadline and throws <code>TimeoutError</code>.
            </p>
            <pre>
              <code>{TIMEOUT_EXAMPLE}</code>
            </pre>

            <h3 id="recipe-whitelist" className="anchor-target">Recipient whitelist</h3>
            <p>
              Defense in depth: even if a buggy step or a poisoned LLM output produces a swap to an
              unknown address, the postcondition rejects it.
            </p>
            <pre>
              <code>{WHITELIST_EXAMPLE}</code>
            </pre>
          </section>

          <section id="demo" className="anchor-target">
            <h2>Demo</h2>
            <p>
              Five scripted scenes ship with the reference agent. The first four run in-memory in
              seconds; the fifth runs one tick of the rebalancer against real Base Sepolia + 0G
              Galileo + Sepolia ENS, then polls the resolver until <code>receipt.latest</code>{' '}
              reflects the new callId.
            </p>
            <CopyableCode code="./scripts/demo.sh" label="A/C/I/D in sequence (~6s)" />
            <CopyableCode
              code="pnpm --filter @openacid/example-uniswap-agent demo:live"
              label="live tick (env required)"
            />
            <table>
              <thead>
                <tr>
                  <th>scene</th>
                  <th>command</th>
                  <th>what it proves</th>
                  <th>time</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>A</td><td>demo:a</td><td>saga + reverse compensations</td><td>~2s</td></tr>
                <tr><td>C</td><td>demo:c</td><td>noOrphanAllowances rejects a buggy "success"</td><td>~1s</td></tr>
                <tr><td>I</td><td>demo:i</td><td>two parallel calls, exactly one execution</td><td>~1.5s</td></tr>
                <tr><td>D</td><td>demo:d</td><td>kill-9 simulation; verifyReceipt recovers signer</td><td>~1s</td></tr>
                <tr><td>★</td><td>demo:live</td><td>real Base Sepolia + 0G + ENS readback</td><td>~30-40s</td></tr>
              </tbody>
            </table>
          </section>

          <section id="live" className="anchor-target">
            <h2>Live deployment</h2>
            <p>
              Every claim in this documentation has an on-chain receipt. Verify with the{' '}
              <code>cast</code> snippets below.
            </p>

            <h3>ReceiptRegistry on {RECEIPT_REGISTRY.chainName}</h3>
            <ul>
              <li>
                <strong>Address:</strong> <code>{RECEIPT_REGISTRY.address}</code>
              </li>
              <li>
                <strong>Chain ID:</strong> {RECEIPT_REGISTRY.chainId}
              </li>
              <li>
                <strong>RPC:</strong> <code>{RECEIPT_REGISTRY.rpc}</code>
              </li>
              <li>
                <strong>Explorer:</strong>{' '}
                <a
                  href={`${RECEIPT_REGISTRY.explorer}/address/${RECEIPT_REGISTRY.address}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  contract page ↗
                </a>{' '}
                ·{' '}
                <a
                  href={`${RECEIPT_REGISTRY.explorer}/tx/${RECEIPT_REGISTRY.deployTx}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  deploy tx ↗
                </a>
              </li>
            </ul>

            <h3>ENS parent name</h3>
            <ul>
              <li>
                <strong>Name:</strong> <code>{ENS.name}</code> on {ENS.network} (chainId{' '}
                {ENS.chainId})
              </li>
              <li>
                <strong>Resolver:</strong> <code>{ENS.resolver}</code>
              </li>
              <li>
                <strong>Records:</strong> {ENS.records.join(' · ')}
              </li>
              <li>
                <strong>Owner:</strong> <code>{ENS.owner}</code>
              </li>
              <li>
                <strong>Register tx:</strong>{' '}
                <a
                  href={`https://sepolia.etherscan.io/tx/${ENS.registerTx}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  view ↗
                </a>
              </li>
            </ul>

            <h4>Read the latest receipt CID</h4>
            <CopyableCode
              code={`cast call ${ENS.resolver} \\\n  "text(bytes32,string)(string)" \\\n  $(cast namehash ${ENS.name}) "receipt.latest" \\\n  --rpc-url https://ethereum-sepolia-rpc.publicnode.com`}
            />

            <h4>Read the agent's anchor count</h4>
            <CopyableCode
              code={`cast call ${RECEIPT_REGISTRY.address} \\\n  "anchorCount(address)(uint64)" \\\n  ${ENS.owner} \\\n  --rpc-url ${RECEIPT_REGISTRY.rpc}`}
            />
          </section>

          <section id="errors" className="anchor-target">
            <h2>Errors</h2>
            <p>
              All errors extend <code>AcidError</code> (which extends <code>Error</code>). Saga and
              compensation errors carry an <code>Error.cause</code> chain pointing at the underlying
              throw, plus saga metadata <code>{`{ sagaId, attempt }`}</code> on the instance.
            </p>
            <table>
              <thead>
                <tr>
                  <th>class</th>
                  <th>thrown by</th>
                  <th>fields</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>NonDeterministicKeyError</td><td>idempotent (strict mode)</td><td>samples</td></tr>
                <tr><td>IdempotentInFlightError</td><td>idempotent (reject mode / block timeout)</td><td>key</td></tr>
                <tr><td>IdempotentInFlightLostError</td><td>idempotent (in-flight marker disappeared)</td><td>key</td></tr>
                <tr><td>InvariantViolationError</td><td>invariant</td><td>phase, reason, severity, context</td></tr>
                <tr><td>SagaStepError</td><td>saga (step throws)</td><td>stepId, cause, sagaId, attempt</td></tr>
                <tr><td>SagaCompensationError</td><td>saga (compensation throws)</td><td>stepId, cause, sagaId, attempt</td></tr>
                <tr><td>ReceiptVerificationError</td><td>verifyReceipt (signature mismatch)</td><td>reason</td></tr>
                <tr><td>TimeoutError</td><td>withTimeout</td><td>timeoutMs, label</td></tr>
              </tbody>
            </table>
          </section>

          <section id="limitations" className="anchor-target">
            <h2>Limitations</h2>
            <p>Every guarantee has a scope. The library is honest about its boundaries.</p>
            <table>
              <thead>
                <tr>
                  <th>property</th>
                  <th>bound</th>
                  <th>notes</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Atomicity</td><td>bounded by saga scope</td><td>forget to wrap → no atomicity for that step</td></tr>
                <tr><td>Consistency</td><td>predicates are user-defined</td><td>GIGO — the library cannot infer your invariants</td></tr>
                <tr><td>Isolation</td><td>action-level, not multi-action</td><td>cross-saga serializability needs an external lock manager (v1)</td></tr>
                <tr><td>Durability</td><td>1-block finality on L2s for v0</td><td>reorg-aware durability is v1; pin a longer waitForFinality in production</td></tr>
                <tr><td>LLM determinism</td><td>approximate replay</td><td>requires pinned model + seed; receipts are audit, not exact replay</td></tr>
                <tr><td>Receipt signatures</td><td>tamper-evident</td><td>not tamper-proof — proves attestation, not truth</td></tr>
                <tr><td>0G Storage adapter</td><td>single-process atomic cas</td><td>multi-process atomicity needs an external lock service</td></tr>
                <tr><td>ENS subname registrar</td><td>parent name only in v0</td><td>per-agent subname registrar deferred to v1</td></tr>
              </tbody>
            </table>
            <hr />
            <p>
              <a href="/packages">Browse npm packages →</a> · <a href="/">Back to home</a>
            </p>
          </section>
        </main>
      </div>
    </div>
  )
}
