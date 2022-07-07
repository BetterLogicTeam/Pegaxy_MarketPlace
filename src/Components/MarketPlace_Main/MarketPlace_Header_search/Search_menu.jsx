import React from 'react'
import './Search_style.css'
import {BsArrowClockwise} from 'react-icons/bs'
import {FaSearch} from 'react-icons/fa'

export default function Search_menu() {
    return (
        <div>
            <div class="headerContent mt-5">
                <div class="header-left">
                    <div class="action-reload">
                        <div class="action-btn text-white " onClick={() => window.location.reload()}>
                           <BsArrowClockwise className='icon_arrow'/>
                        </div>
                        <span class="action-name">5,656 Items</span>
                    </div>
                    <div class="action-filter">
                        <button type="button" class="animated-button btn btn-outline-primary">Filter</button>
                    </div>
                </div>
                <div class="header-right">
                    <div class="item-filter filter-search">
                        <input placeholder="Search by Pega ID" class="form-control" type="text" value="" inputmode="numeric" />
                        <div class="icon-search">
                           <FaSearch className='icon_search'/>
                        </div>
                    </div>
                    <div class="item-filter">
                        <div class="drop-filter dropdown">
                            <button type="button" id="dropdown-filter" data-bs-toggle="dropdown" aria-expanded="false" class="dropdown-toggle btn btn-link">
                                <span>Default view</span>
                            </button>
                            <ul class="dropdown-menu dropdown_menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Default view</a></li>
                                <li><a class="dropdown-item" href="#">Stats view</a></li>


                            </ul>

                        </div>

                    </div>
                    <div class="item-filter">
                        <div class="drop-filter dropdown">
                            <button type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" class="dropdown-toggle btn btn-link">
                                <span>20 Pegas/page</span>
                            </button>
                            <ul class="dropdown-menu dropdown_menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">20 Pegas/page</a></li>
                                <li><a class="dropdown-item" href="#">40 Pegas/page</a></li>
                                <li><a class="dropdown-item" href="#">60 Pegas/page</a></li>
                                <li><a class="dropdown-item" href="#">80 Pegas/page</a></li>

                                <li><a class="dropdown-item" href="#">100 Pegas/page</a></li>

                            </ul>

                        </div>
                    </div>
                  
                    <div class="item-filter">
                        <div class="drop-filter dropdown">
                            <button type="button" aria-expanded="false" id="dropdownMenuButton1" data-bs-toggle="dropdown" class="dropdown-toggle btn btn-link nav_dropdown">
                                <span>Latest</span>
                            </button>
                            <ul class="dropdown-menu dropdown_menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Latest</a></li>
                                <li><a class="dropdown-item" href="#">Lowest Pega ID</a></li>
                                <li><a class="dropdown-item" href="#">Highest Pega ID</a></li>
                                <li><a class="dropdown-item" href="#">Lowest Price</a></li>
                                <li><a class="dropdown-item" href="#">Highest Price</a></li>
                                <li><a class="dropdown-item" href="#">Highest Energy</a></li>

                                <li><a class="dropdown-item" href="#">Highest Win Rate</a></li>
                                <li><a class="dropdown-item" href="#">Auction ends soon</a></li>

                            </ul>
                           
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}
