
import {
     GET_WALLET_ADDRESS,
     GET_Images_Array
  
} from '../types/types'

import Web3 from "web3";
import { loadWeb3 } from '../../../apis/api';
// import { thbTokenAddress, thbTokenAbi } from "../../../Component/Utils/ThbToken"
// import { thbLpTokenAddress, thbLpTokenAbi } from '../../../Component/Utils/ThbLpToken'
// import { stakingContractAddress, stakingContractAbi } from '../../../Component/Utils/Staking'
// import { toast } from 'react-toastify';
// import { nftContratAddress, nftContractAbi } from '../../../Component/Utils/Nft'

const webSupply = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545/");

// let thbTokenContractOf = new webSupply.eth.Contract(thbTokenAbi, thbTokenAddress);
// let thbLpTokenContractOf = new webSupply.eth.Contract(thbLpTokenAbi, thbLpTokenAddress);
// let stakingCOntractOf = new webSupply.eth.Contract(stakingContractAbi, stakingContractAddress);

export const getWallet = (payload) => async (dispatch) => {
    // console.log("get wallet 121212");
    try{
        let address = await loadWeb3();
        console.log("payload",address);
        dispatch({
            type: GET_WALLET_ADDRESS,
            payload: address
        })
    }catch(e){
        console.log("Error Get Address",e);
    }
  
}



export const NftData = (payload) => async (dispatch) => {
    console.log("payload nft is",payload);
    try{
       
        dispatch({
            type: GET_Images_Array,
            // payload: address
        })
    }catch(e){
        console.log("Error Get Address",e);
    }
  
}




