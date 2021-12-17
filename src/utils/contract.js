// Web3
import Web3 from 'web3';
import { SilverHunterAbi } from '../abis/SilverHunterAbi';
import { CastleAbi } from '../abis/CastleAbi';
import { SilverAbi } from '../abis/SilverAbi';

export const web3 = new Web3(Web3.givenProvider);

export const SilverHunterAddress = '0x4Eb8363f847c2aF5554456e83d497c5E319d588f';
export const CastleAddress = '0x23dB83Cd213AD65Dd90C50AED15EA03654F619E7';
export const SilverAddress = '0x2336C5B3aba199A3A1B01D444f781C521eB17F62';

export const SilverHunterContract = new web3.eth.Contract(SilverHunterAbi, SilverHunterAddress);
export const CastleContract = new web3.eth.Contract(CastleAbi, CastleAddress);
export const SilverContract = new web3.eth.Contract(SilverAbi, SilverAddress);