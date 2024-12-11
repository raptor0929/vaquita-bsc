import { bscTestnet } from 'viem/chains';
import { generateContractHook } from '../../hooks/contracts';
import { VAQUITA_CONTRACT_ADDRESS } from '../../../src/constants';
import VaquitaABI from './VaquitaABI';

/**
 * Returns contract data for the Vaquita contract.
 */
export const useVaquitaContract = generateContractHook({
  abi: VaquitaABI,
  [bscTestnet.id]: {
    chain: bscTestnet,
    address: VAQUITA_CONTRACT_ADDRESS,
  },

  // ... more chains for this contract go here
});
