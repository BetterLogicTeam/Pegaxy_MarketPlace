
import {GET_WALLET_ADDRESS,GET_Images_Array} from '../types/types';

let initialState = {acc:"Connect Wallet"};

 const connectWallet = (state = { ...initialState}, action) => {
    
console.log('what is adress inside state',action.payload)
    switch(action.type){
        case GET_WALLET_ADDRESS:
            return {  
                ...state,acc:action.payload
            }
            case GET_Images_Array:
                return {  
                    ...state,acc:action.payload
                }
            default:return  {...state};
    }
}
export default connectWallet;