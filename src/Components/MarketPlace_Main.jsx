import React, { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Breeding from './MarketPlace/Breeding/Breeding';
import Items from './MarketPlace/Items/Items';
import Marketplace_play_game from './MarketPlace/MarketPlace_play_game/Marketplace_play_game';
import Model_connect from './MarketPlace/Model_connect/Model_connect';
import Pages from './MarketPlace/Pages/Pages';
import Navbar_nav from './MarketPlace/Navbar_market/Navbar_nav'
import Header from './Header/Header';
import About from './About_page/About';
import Game_play from './Game_play/Game_play';
import How_to_play from './How_to_play/How_to_play';
import Tokenomics from './Tokenomics/Tokenomics';
import Our_team from './Meet_our_team/Our_team';
import INVESTORS from './INVESTORS/INVESTORS';
import RoadMap from './RoadMap/RoadMap';
import Finished_race from './MarketPlace/Finished_Race/Finished_race';
import Racing_main from './MarketPlace/Racing/Racing_main';


export default function MarketPlace_Main() {
  const [modalShow, setModalShow] = React.useState(false);
  const [isChangeRoute, setIsChangeRoute] = useState("main")



  return(
    <>

    
<div className="main_div_app">
        <BrowserRouter>
          <Navbar_nav setModalShow={setModalShow} />
          <Routes>
            <Route path="Items" element={<Items />} />
            <Route path="pages" element={<Pages />} />
            <Route path="Marketplace_play_game" element={<Marketplace_play_game />} />
            <Route path="Breeding" element={<Breeding setModalShow={setModalShow} />} />
            <Route path="Racing_main" element={<Racing_main />} />
            <Route path="Finished_race" element={<Finished_race />} />
          </Routes>
        </BrowserRouter>
      </div>
    
    </>
  )


  // const ChnageMain = () => {
  //   setIsChangeRoute("main")
  // }
  // const ChangeStake = () => {
  //   setIsChangeRoute("Pdf")
  // }

  // const ChangeItems = () => {
  //   setIsChangeRoute("Items")
  // }
  // const ChangePages = () => {
  //   setIsChangeRoute("pages")
  // }
  // const ChangeMarketplace_play_game= () => {
  //   setIsChangeRoute("Marketplace_play_game")
  // }
  // const ChangeBreeding = () => {
  //   setIsChangeRoute("Breeding")
  // }
  // const ChangeFinished_race = () => {
  //   setIsChangeRoute("Finished_race")
  // }
  // const ChangeRacing_main = () => {
  //   setIsChangeRoute("Racing_main")
  // }
  



  // const Main = () => {
  //   return (
  //     <>
  //       <Header ChangeItems={ChangeItems} />
  //       <About />
  //       <Game_play />
  //       <How_to_play />
  //       <Tokenomics />
  //       {/* <SlideR /> */}
  //       <Our_team />
  //       <INVESTORS  />
  //       <RoadMap />


  //     </>
  //   )
  // }


  // const Items = () => {
  //   return (
  //     <>
  //       <Navbar_nav ChnageMain={ChnageMain} setModalShow={setModalShow} ChangeItems={ChangeItems} ChangePages={ChangePages} ChangeMarketplace_play_game={ChangeMarketplace_play_game} ChangeBreeding={ChangeBreeding}  ChangeFinished_race={ChangeFinished_race}  ChangeRacing_main={ChangeRacing_main}  />
  //       <Items />

  //     </>
  //   )
  // }

  // const Pages = () => {
  //   return (
  //     <>
  //       <Navbar_nav ChnageMain={ChnageMain} setModalShow={setModalShow} ChangeItems={ChangeItems} ChangePages={ChangePages} ChangeMarketplace_play_game={ChangeMarketplace_play_game} ChangeBreeding={ChangeBreeding}  ChangeFinished_race={ChangeFinished_race}  ChangeRacing_main={ChangeRacing_main} />
  //       <Pages />

  //     </>
  //   )
  // }
  // const Marketplace_play_game = () => {
  //   return (
  //     <>
  //       <Navbar_nav ChnageMain={ChnageMain} setModalShow={setModalShow} ChangeItems={ChangeItems} ChangePages={ChangePages} ChangeMarketplace_play_game={ChangeMarketplace_play_game} ChangeBreeding={ChangeBreeding}  ChangeFinished_race={ChangeFinished_race}  ChangeRacing_main={ChangeRacing_main} />
  //       <Marketplace_play_game />

  //     </>
  //   )
  // }
  // const Breeding = () => {
  //   return (
  //     <>
  //       <Navbar_nav ChnageMain={ChnageMain} setModalShow={setModalShow} ChangeItems={ChangeItems} ChangePages={ChangePages} ChangeMarketplace_play_game={ChangeMarketplace_play_game} ChangeBreeding={ChangeBreeding}  ChangeFinished_race={ChangeFinished_race}  ChangeRacing_main={ChangeRacing_main} />
  //       <Breeding />

  //     </>
  //   )
  // }
  // const Racing_main = () => {
  //   return (
  //     <>
  //       <Navbar_nav ChnageMain={ChnageMain} setModalShow={setModalShow} ChangeItems={ChangeItems} ChangePages={ChangePages} ChangeMarketplace_play_game={ChangeMarketplace_play_game} ChangeBreeding={ChangeBreeding}  ChangeFinished_race={ChangeFinished_race}  ChangeRacing_main={ChangeRacing_main} />
  //       <Racing_main />

  //     </>
  //   )
  // }

  // const Finished_race = () => {
  //   return (
  //     <>
  //       <Navbar_nav ChnageMain={ChnageMain} setModalShow={setModalShow} ChangeItems={ChangeItems} ChangePages={ChangePages} ChangeMarketplace_play_game={ChangeMarketplace_play_game} ChangeBreeding={ChangeBreeding}  ChangeFinished_race={ChangeFinished_race}  ChangeRacing_main={ChangeRacing_main} />
  //       <Finished_race />

  //     </>
  //   )
  // }
  // if (isChangeRoute == "main") {
  //   return (
  //     <div className='App'>
  //       <Main />
  //     </div>
  //   )
  // } else if (isChangeRoute == "Items") {
  //   return (
  //     <div className='App'>
  //       <Items />
  //     </div>
  //   )
  // }else if (isChangeRoute == "pages") {
  //   return (
  //     <div className='App'>
  //       <Pages />
  //     </div>
  //   )
  // }else if (isChangeRoute == "Marketplace_play_game") {
  //   return (
  //     <div className='App'>
  //       <Marketplace_play_game />
  //     </div>
  //   )
  // }else if (isChangeRoute == "Breeding") {
  //   return (
  //     <div className='App'>
  //       <Breeding />
  //     </div>
  //   )
  // }else if (isChangeRoute == "Racing_main") {
  //   return (
  //     <div className='App'>
  //       <Racing_main />
  //     </div>
  //   )
  // }else if (isChangeRoute == "Finished_race") {
  //   return (
  //     <div className='App'>
  //       <Finished_race />
  //     </div>
  //   )
  // }
  // <Route path="Items" element={<Items />} />
  // <Route path="pages" element={<Items />} />
  // <Route path="Marketplace_play_game" element={<Marketplace_play_game />} />
  // <Route path="Breeding" element={<Breeding setModalShow={setModalShow} />} />
  // <Route path="Racing_main" element={<Racing_main />} />
  // <Route path="Finished_race" element={<Finished_race />} />

  // return (
  //   <div>
  //     <Model_connect setModalShow={setModalShow} modalShow={modalShow} />
  //     <Navbar_nav setModalShow={setModalShow} />
  //     <Items />




  //   </div>
  // )
}
