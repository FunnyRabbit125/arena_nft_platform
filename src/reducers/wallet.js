import {
    WALLET_CONNECTED,
    CONNECTION_ERROR
} from '../actions/types';

const initialState = {
    walletAddress: "",
}

function walletReducer(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case WALLET_CONNECTED:
            return {
                walletAddress: payload,
            }
        case CONNECTION_ERROR:
            return {
                walletAddress: "",
            }
        default:
            return state;
    }
}

export default walletReducer;