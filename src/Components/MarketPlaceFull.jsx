import React from 'react'
import Header_MP from './MarketPlace_Main/Header_MP/Header_MP'
import SideBar_MP from './MarketPlace_Main/SideBar_MP/SideBar_MP'
import '../App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import Drawer from './MarketPlace_Main/Drawer/Drawer'
import Routes_MarketPlace from './Routes_MarketPlace'
import Auctions_NFT from './MarketPlace_Main/Auction_NFT/Auctions_NFT';
import Buy_nft from './MarketPlace_Main/Buy_NFT/Buy_nft';

export default function MarketPlaceFull() {
  return (
    <div className='bg_MP'>


        <Header_MP />
        <SideBar_MP />
        <Drawer />

      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Auctions_NFT />} />
          <Route exact path="/" element={<Buy_nft />} />

        </Routes>
      </BrowserRouter> */}
    </div>
  )
}
