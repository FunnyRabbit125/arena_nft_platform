import {
    WALLET_CONNECTED,
    CONNECTION_ERROR
} from './types';

// Connect Wallet
export const setWallet = (address) => dispatch => {
    if (address.length) {
        dispatch({
            type: WALLET_CONNECTED,
            payload: address
        });
    } else {
        dispatch({
            type: CONNECTION_ERROR,
        });
    }
};