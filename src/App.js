import React, { useEffect, useState } from 'react';
import './App.css';
import { FaArrowAltCircleLeft } from 'react-icons/fa'
import store from "./redux/redux/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index_Main from './Components/Index_Main';
import MarketPlace_Main from './Components/MarketPlace_Main';
import Navbar_nav from './Components/MarketPlace/Navbar_market/Navbar_nav';
import Items from './Components/MarketPlace/Items/Items';
import Horse_Racing from './Components/MarketPlace/Racing/Horse_Racing'

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
import './Assest/Style/26cd02812510ee001c3d.css'
import './Assest/Style/bootstrap.css'
import './Assest/Style/responsive.css'
import './Assest/Style/styles.css'
import Header_MP from './Components/MarketPlace_Main/Header_MP/Header_MP';
import MarketPlaceFull from './Components/MarketPlaceFull';
import Auctions_NFT from './Components/MarketPlace_Main/Auction_NFT/Auctions_NFT';
import Buy_nft from './Components/MarketPlace_Main/Buy_NFT/Buy_nft';
import { Provider } from 'react-redux';
import Race_Finished from './Components/MarketPlace/Racing/Race_Finished';



function App() {
  const [modalShow, setModalShow] = React.useState(false);
  const [showsell, setshowsell] = useState(false)
  let [isSpinner, setIsSpinner] = useState(false)
  let [scoring, setScoring]=useState([])
  let dispatch = useDispatch();

  let [btnTxt, setBtTxt] = useState("Connect Metamask")
  // let { acc } = useSelector(state => state.connectWallet);

  // let arr = ["1", "2", "3", "4", "5", "6"]
  // setInterval(() => {
  //   tarr.map((value)=>{ setTimeout(() => {
  //     console.log(value)

  //   }, 3000);}) 


  // }, 2000);

  // arr.forEach((value,index) => {
  //   setTimeout(() => {
  //     console.log('array value is ',value)
  //   }, 2000*index);
  // })

  //   var arr = ['value1', 'value2', ' value3', 'value4'];
  // var arrayDelay = function(i) {
  //     if (arr[i]) {
  //         console.log(arr[i]);
  //         setTimeout(function(){arrayDelay(i+1);}, 4000);
  //     }
  // }
  // arrayDelay(0);

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

  useEffect(() => {
    getAccount()
    dispatch(getWallet());
  }, [])


  return (
    <div className="App">

      <Model_connect setModalShow={setModalShow} modalShow={modalShow} getAccount={getAccount} btnTxt={btnTxt} />
      {/* <Sell setshowsell={setshowsell} showsell={showsell}   /> */}
      <Auction setshowsell={setshowsell} showsell={showsell} />
      <BrowserRouter>
        <ToastContainer />
        {/* <DrawerSiderbar/> */}
        <Routes>
          <Route path="/" element={<Index_Main />} />
          {/* <Route path="MarketPlace_Main" element={<MarketPlace_Main />} /> */}
          {/* <Route path="Items" element={<Items setModalShow={setModalShow} btnTxt={btnTxt} />} /> */}
          <Route path="Items" element={<Navbar_nav setModalShow={setModalShow} btnTxt={btnTxt} />} >
            <Route path="/Items/My_Assets" element={<My_Assets_first />} />
            <Route path="/Items/Breeding" element={<Breeding />} />
            <Route path="/Items/Racing_main" element={<Racing_main />} />
            <Route path="/Items/Marketplace_play_game" element={<Marketplace_play_game />} />
            <Route path="/Items/pages" element={<Pages />} />
            <Route path="/Items/My_Items" element={<My_Iytems />} />
            <Route path="/Items/Mint" element={<Mint />} />
            <Route path="/Items/My_Profile" element={<My_Profile />} />
            <Route path="/Items/horse_racing" element={<Horse_Racing  setScoring={setScoring} />} />
            <Route path="/Items/Race_Finished" element={<Race_Finished  scoring={scoring} />} />

            <Route path="/Items/Finished_race" element={<Finished_race />} />
            <Route exact path="/Items/Details/:id" element={<Details />} />

          </Route>
          {/* <Route path="My_Profile" element={<My_Profile setModalShow={setModalShow} btnTxt={btnTxt} />} /> */}
          <Route path="My_Bids" element={<My_Bids setModalShow={setModalShow} btnTxt={btnTxt} />} />
          {/* <Route path="My_Items" element={<My_Iytems setModalShow={setModalShow} btnTxt={btnTxt} setshowsell={setshowsell} />} /> */}
          {/* <Route path="Mint" element={<Mint setModalShow={setModalShow} btnTxt={btnTxt} setIsSpinner={setIsSpinner} />} /> */}
          {/* <Route exact path="/Details/:id" element={<Details setModalShow={setModalShow} btnTxt={btnTxt} />} /> */}
          <Route exact path="MarketPlace" element={<MarketPlaceFull />} />
          <Route path="/Auctions_NFT" element={<Auctions_NFT />} />
          <Route path="/Buy_nft" element={<Buy_nft />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
