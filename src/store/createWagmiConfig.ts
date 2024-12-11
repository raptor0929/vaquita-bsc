'use client';

import { createConfig, http } from 'wagmi';
import { bscTestnet } from 'wagmi/chains';
import { metaMask } from 'wagmi/connectors';

export function createWagmiConfig(rpcUrl: string, projectId?: string) {
  // Keep this till we fully deprecated RK inside the template
  if (projectId) {
    console.log('projectId:', projectId);
  }

  // BSC Testnet RPC URL
  const bscTestnetUrl = rpcUrl || 'https://data-seed-prebsc-1-s1.binance.org:8545/';

  return createConfig({
    chains: [bscTestnet],
    connectors: [
      metaMask(),
    ],
    ssr: true,
    transports: {
      [bscTestnet.id]: http(bscTestnetUrl),
    },
  });
}