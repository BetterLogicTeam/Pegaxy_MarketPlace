import React, { useState } from 'react';
import './App.css';
import { FaArrowAltCircleLeft } from 'react-icons/fa'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Index_Main from './Components/Index_Main';
import MarketPlace_Main from './Components/MarketPlace_Main';
import Navbar_nav from './Components/MarketPlace/Navbar_market/Navbar_nav';
import Items from './Components/MarketPlace/Items/Items';
import Pages from './Components/MarketPlace/Pages/Pages';
import Marketplace_play_game from './Components/MarketPlace/MarketPlace_play_game/Marketplace_play_game';
import Breeding from './Components/MarketPlace/Breeding/Breeding';
import Model_connect from './Components/MarketPlace/Model_connect/Model_connect';
import Racing_main from './Components/MarketPlace/Racing/Racing_main';
import Finished_race from './Components/MarketPlace/Finished_Race/Finished_race';
import { loadWeb3 } from './apis/api';
import My_Assets_first from './Components/MarketPlace/My_Assets/My_Assets_first';
import My_Profile from './Components/MarketPlace/My_Profile/My_Profile';
import My_Bids from './Components/MarketPlace/My_Bide/My_Bids';
import My_Iytems from './Components/MarketPlace/My_Items/My_Iytems';
import { getWallet } from './redux/redux/actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import Mint from './Components/MarketPlace/Mint/Mint';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Sell from './Components/MarketPlace/Sell/Sell';
import Auction from './Components/MarketPlace/AutionBidind/Auction';
import Details from './Components/MarketPlace/Details/Details';
import Spinner from './Components/Loading_Spinner/Spinner';




function App() {
  const [modalShow, setModalShow] = React.useState(false);
  const [showsell, setshowsell] = useState(false)
  let [isSpinner, setIsSpinner] = useState(false)

  // let dispatch = useDispatch();

  let [btnTxt, setBtTxt] = useState("Connect Metamask")
  // let { acc } = useSelector(state => state.connectWallet);


  const getAccount = async () => {
    // dispatch(getWallet());
      let acc = await loadWeb3();
      // console.log("ACC=",acc)
      if (acc == "No Wallet") {
          setBtTxt("No Wallet")
      }
      else if (acc == "Wrong Network") {
          setBtTxt("Wrong Network")
      } else {
          let myAcc = acc?.substring(0, 4) + "..." + acc?.substring(acc?.length - 4);
          setBtTxt(myAcc);

      }
  }


  return (
    <div className="App">
      <Model_connect setModalShow={setModalShow} modalShow={modalShow} getAccount={getAccount} btnTxt={btnTxt} />
      {/* <Sell setshowsell={setshowsell} showsell={showsell}   /> */}
      <Auction setshowsell={setshowsell} showsell={showsell}  /> 
     

      <BrowserRouter>
      <ToastContainer />


        <Routes>
          <Route path="/" element={<Index_Main />} />
          {/* <Route path="MarketPlace_Main" element={<MarketPlace_Main />} /> */}
          <Route path="Items" element={<Items setModalShow={setModalShow} btnTxt={btnTxt} />} />
          <Route path="pages" element={<Pages setModalShow={setModalShow} btnTxt={btnTxt} />} />
            <Route path="Marketplace_play_game" element={<Marketplace_play_game setModalShow={setModalShow} btnTxt={btnTxt} />} />
            <Route path="Breeding" element={<Breeding setModalShow={setModalShow} getAccount={getAccount} btnTxt={btnTxt} />} />
            <Route path="Racing_main" element={<Racing_main setModalShow={setModalShow} btnTxt={btnTxt} />} />
            <Route path="Finished_race" element={<Finished_race setModalShow={setModalShow} btnTxt={btnTxt} />} />
            <Route path="My_Assets" element={<My_Assets_first setModalShow={setModalShow} btnTxt={btnTxt} />} />
            <Route path="My_Profile" element={<My_Profile setModalShow={setModalShow} btnTxt={btnTxt} />} />
            <Route path="My_Bids" element={<My_Bids setModalShow={setModalShow} btnTxt={btnTxt} />} />
            <Route path="My_Items" element={<My_Iytems setModalShow={setModalShow} btnTxt={btnTxt} setshowsell={setshowsell} />} />
            <Route path="Mint" element={<Mint setModalShow={setModalShow} btnTxt={btnTxt} setIsSpinner={setIsSpinner} />} />
            <Route exact path="/Details/:id" element={<Details setModalShow={setModalShow} btnTxt={btnTxt} />} />






            




        </Routes>


      </BrowserRouter>








    </div>
  );
}

export default App;
