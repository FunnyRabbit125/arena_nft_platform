// Web3
import Web3 from 'web3';
import { SilverHunterAbi } from '../abis/SilverHunterAbi';
import { CastleAbi } from '../abis/CastleAbi';
import { SilverAbi } from '../abis/SilverAbi';

export const web3 = new Web3(Web3.givenProvider);

export const SilverHunterAddress = '0x30D5Be49eAfe68B7587d899Decf8d25B76580a40';
export const CastleAddress = '0xaa92626fF2552D9B35739FfF3d92DC11E51D0356';
export const SilverAddress = '0x5c4833E573582e6E06df3b432b819Ab4Be1CAdD3';

export const SilverHunterContract = new web3.eth.Contract(SilverHunterAbi, SilverHunterAddress);
export const CastleContract = new web3.eth.Contract(CastleAbi, CastleAddress);
export const SilverContract = new web3.eth.Contract(SilverAbi, SilverAddress);