import {combineReducers} from 'redux';
import connectWallet from './reducers/getWalletAddrss'

const allReducer = combineReducers({

    connectWallet:connectWallet,


});

export default allReducer;