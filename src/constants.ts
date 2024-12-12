export const BSC_TESTNET_CHAIN_ID = 97;
export const mintContractAddress = "0xA3e40bBe8E8579Cd2619Ef9C6fEA362b760dac9f";
export const VAQUITA_CONTRACT_ADDRESS = "0xAe49A6520205fB223CAB1Fe17B1373ab979946e0";
export const BSC_TESTNET_USDC = "0x4B8eed87b61023F5BEcCeBd2868C058FEe6B7Ac7".toLowerCase().trim() as `0x${string}`;
export const USDC_DECIMALS = 1000000000000000000;
export const mintABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'public',
    type: 'function',
  },
] as const;
