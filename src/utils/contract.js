// Web3
import Web3 from 'web3';
import { SilverHunterAbi } from '../abis/SilverHunterAbi';
import { CastleAbi } from '../abis/CastleAbi';

export const web3 = new Web3(Web3.givenProvider);

export const SilverHunterAddress = '0x4Eb8363f847c2aF5554456e83d497c5E319d588f';
export const CastleAddress = '0x43F2c1EfC0f1FD319311b817cC4fc08508231428';

export const SilverHunterContract = new web3.eth.Contract(SilverHunterAbi, SilverHunterAddress);
export const CastleContract = new web3.eth.Contract(CastleAbi, CastleAddress);