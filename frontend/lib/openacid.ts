// Single source of truth for live deployment + package metadata.
// Update this file when versions / addresses change.

export const VERSION = '0.2.0'
export const NPM_ORG = 'openacid'
export const GITHUB = 'https://github.com/romariokavin1/acid'
export const NPM_ORG_PAGE = `https://www.npmjs.com/settings/${NPM_ORG}/packages`
export const NPM_PROFILE = `https://www.npmjs.com/~${NPM_ORG}`

export const RECEIPT_REGISTRY = {
  address: '0xd3E6277960025B4D0c161e20304a3a44231d0D1C' as const,
  chainId: 16602,
  chainName: '0G Galileo',
  rpc: 'https://evmrpc-testnet.0g.ai',
  explorer: 'https://chainscan-galileo.0g.ai',
  deployTx:
    '0x3dc372a467edbee7507f3bd90061874a8625f0efaf05eb62cd190779128687e1' as const,
}

export const ENS = {
  name: 'openacid.eth',
  network: 'Sepolia',
  chainId: 11155111,
  resolver: '0xE99638b40E4Fff0129D56f03b55b6bbC4BBE49b5' as const,
  registrar: '0xfb3cE5D01e0f33f41DbB39035dB9745962F1f968' as const,
  owner: '0x3ca83AE589a1d23AccfD43667FeE65605AdBDC9A' as const,
  registerTx:
    '0x6794e98cb61dd21bb8d858ab039277d1097eb0260e05ffe8fa400a713e8ce98f' as const,
  records: ['receipt.latest', 'receipt.head', 'agent.signer', 'description'],
}

export const TEST_COUNTS = {
  vitest: 117,
  vitestLive0G: 10,
  forge: 8,
  total: 125,
}

export const PACKAGES = [
  {
    name: '@openacid/acid',
    title: 'core',
    description:
      'The four primitives — saga, invariant, idempotent, receipted — plus shared types, errors, conformance suite, EIP-712 receipt encoding, composition introspection, chain-aware broadcast helper.',
    versions: ['0.1.0', '0.1.1', '0.1.2', '0.2.0'],
    install: 'npm i @openacid/acid',
    workspace: 'packages/core',
    npm: 'https://www.npmjs.com/package/@openacid/acid',
    exports: [
      'saga, invariant, idempotent, receipted',
      'verifyReceipt, receiptDigest, hashCanonical',
      'noOrphanAllowances, balanceWithinBound, gasUnderCap, slippageBelow, recipientWhitelist',
      'withTimeout, TimeoutError',
      'inspectComposition, getCompositionLabel, checkComposition',
      'chainAwareBroadcast, inspectInFlight',
      'storageConformanceCases',
    ],
    accent: 'sage' as const,
  },
  {
    name: '@openacid/adapter-memory',
    title: 'in-memory',
    description:
      'StorageAdapter with atomic compare-and-swap; MemorySigner with real secp256k1 signing. For tests and the dry-run demo path. Not for production.',
    versions: ['0.1.0', '0.1.1', '0.1.2', '0.2.0'],
    install: 'npm i @openacid/adapter-memory',
    workspace: 'packages/adapter-memory',
    npm: 'https://www.npmjs.com/package/@openacid/adapter-memory',
    exports: ['MemoryStorageAdapter', 'MemorySigner'],
    accent: 'lavender' as const,
  },
  {
    name: '@openacid/adapter-viem',
    title: 'viem · EVM',
    description:
      'ChainAdapter wrapping a viem PublicClient (getTxByHash, getTxByNonce, waitForFinality). ViemSigner for production wallets.',
    versions: ['0.1.0', '0.1.1', '0.1.2', '0.2.0'],
    install: 'npm i @openacid/adapter-viem',
    workspace: 'packages/adapter-viem',
    npm: 'https://www.npmjs.com/package/@openacid/adapter-viem',
    exports: ['ViemChainAdapter', 'ViemSigner'],
    accent: 'peach' as const,
  },
  {
    name: '@openacid/adapter-0g-storage',
    title: '0G durability',
    description:
      'Write-through StorageAdapter on 0G blob storage. Receipts persist as content-addressed blobs; pointers live in-process for hot reads. Live conformance suite passes 10/10 against Galileo testnet.',
    versions: ['0.1.0', '0.1.1', '0.1.2', '0.2.0'],
    install: 'npm i @openacid/adapter-0g-storage',
    workspace: 'packages/adapter-0g-storage',
    npm: 'https://www.npmjs.com/package/@openacid/adapter-0g-storage',
    exports: ['ZeroGStorageAdapter'],
    accent: 'butter' as const,
  },
  {
    name: '@openacid/adapter-ens',
    title: 'ENS mirror',
    description:
      'Mirrors receipt CIDs to ENS text records on every emitted receipt. Wires into receipted() via onReceipt. Any third party can resolve openacid.eth/receipt.latest with no library install.',
    versions: ['0.1.0', '0.1.1', '0.1.2', '0.2.0'],
    install: 'npm i @openacid/adapter-ens',
    workspace: 'packages/adapter-ens',
    npm: 'https://www.npmjs.com/package/@openacid/adapter-ens',
    exports: ['EnsReceiptMirror'],
    accent: 'sage' as const,
  },
] as const

export type PackageInfo = (typeof PACKAGES)[number]
export type PackageAccent = PackageInfo['accent']
