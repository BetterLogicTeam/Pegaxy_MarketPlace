
import {
     GET_WALLET_ADDRESS
  
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

export const getWallet = () => async (dispatch) => {
    // console.log("get wallet 121212");
    let address = await loadWeb3();
    dispatch({
        type: GET_WALLET_ADDRESS,
        payload: address
    })
}




