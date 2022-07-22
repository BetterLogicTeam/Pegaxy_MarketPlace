import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar_nav from '../Navbar_market/Navbar_nav'
import './Mint.css'
import {getWallet, NftData} from '../../../redux/redux/actions/actions'

import { toast } from "react-toastify";
import { loadWeb3 } from '../../../apis/api';
import { busdNftTokenAbi, busdNftTokenAddress, wireNftContractAbi, wireNftContractAddress, wireTokenAbi, wireTokenAddress } from '../../../utilies/constant';
import Spinner from '../../Loading_Spinner/Spinner';
import axios from 'axios';
import { useMoralis, useMoralisFile } from 'react-moralis'
import { CreateNFT, CreateNFT_ABI } from '../../../utilies/Contract';
import { Moralis } from 'moralis'
import { useSelector } from 'react-redux'
import {  useDispatch } from 'react-redux';

export default function Mint({ setModalShow, btnTxt }) {
  let dispatch = useDispatch();
  let { acc } = useSelector(state => state.connectWallet);

  console.log("check",acc);
    const [fileUrl, setFileUrl] = useState(null)
    const [formInput, updateFormInput] = useState({ price: '0', name: 'NFT Name', description: '' })
    const [nftImage, setNftImage] = useState()
    let [getInpiut, setGetInput] = useState({ first: "", second: "", third: "", image: "" })
    let [name, setName] = useState("");
    let [description, setDescription] = useState("");
    let [image, setImage] = useState("");
    let [myData, setMydata] = useState(null);
    let [addressacc, setaddressacc] = useState();
    let [isSpinner, setIsSpinner] = useState(false)
    let [myUrl, setMyUrl] = useState()
    const { saveFile, moralisFile } = useMoralisFile()
    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout, initialize } = useMoralis();


    const IpfsStorage = async (e) => {
        e.preventDefault()
        console.log("nftImage", nftImage.name)
        console.log("formInput", formInput);

        if (nftImage == undefined) {
            toast.error("Please Upload Image")
        } else {
            let nftImageName = nftImage.name;
            if (nftImageName.endsWith(".jpg") || nftImageName.endsWith(".png") || nftImageName.endsWith(".gif") || nftImageName.endsWith(".mp4") || nftImageName.endsWith(".webp") || nftImageName.endsWith(".jpeg") || nftImageName.endsWith(".PNG") || nftImageName.endsWith(".JPG") || nftImageName.endsWith(".JPEG") || nftImageName.endsWith(".jpeg") || nftImageName.endsWith(".GIF") || nftImageName.endsWith(".WEBP") || nftImageName.endsWith(".MP4") || nftImageName.endsWith(".pjpeg") || nftImageName.endsWith(".jfif") || nftImageName.endsWith(".avif")
                || nftImageName.endsWith(".SVG") || nftImageName.endsWith(".svg") || nftImageName.endsWith(".apng") || nftImageName.endsWith(".APNG") || nftImageName.endsWith(".AVIF")
            ) {
                if (formInput.name == '' || formInput.price == '' || formInput.description == '') {
                    toast.error("Please Enter Data In Input Field")

                } else {
                    await authenticate({ signingMessage: "Log in using Moralis" }
                    ).then(async function (user) {
                        console.log("logged in user:", user);
                        const fileIpfs = new Moralis.File(formInput.name, nftImage)
                        await fileIpfs.saveIPFS(null, { useMasterKey: true })
                        console.log("Iamge", fileIpfs._ipfs);
                        let urlimage = fileIpfs._ipfs
                        setMyUrl(fileIpfs._ipfs)
                        let metaData = {
                            image: fileIpfs._ipfs,
                            description: formInput.description,
                            title: formInput.name,
                            name: formInput.price
                        }
                        const fileIpf = new Moralis.File("metadata.json", {
                            base64: btoa(JSON.stringify(metaData))
                        })
                        await fileIpf.saveIPFS(null, { useMasterKey: true })
                        console.log("files", fileIpf._ipfs);
                         let response=await axios.get(fileIpf._ipfs)
                        console.log("what is ipfs data",response.data)
                        let postapiPushdata = await axios.post('https://pegaxy-openmarket.herokuapp.com/nft_market', {
                            "imageurl":response.data.image,
                            "description":response.data.description,
                            "title":response.data.title,
                            "price":response.data.name,
                            
                          })
                        
                          console.log("what is post request response",postapiPushdata)
               
                        setGetInput(fileIpf._ipfs)
                        
                        CreateNftUR(fileIpf._ipfs)

                    })
                        .catch(function (error) {
                            console.log(error);
                        });
                }
            } else {
                toast.error("Please Upload PNG, JPG, GIF, WEBP or MP4 Data")

            }

        }


        // let res = await axios.get("https://ipfs.moralis.io:2053/ipfs/QmdxwzpRRkfJfwLdqxbm2YsgaMXCopSJhJURLYuYw13S2h");
        // console.log("res", res.data);


    }





    const CreateNftUR = async (url) => {
        setIsSpinner(true)
        let acc = await loadWeb3();
        const web3 = window.web3;
        console.log("myUrl", url);
        try {
            let nftContractOf = new web3.eth.Contract(CreateNFT_ABI, CreateNFT);
            await nftContractOf.methods.createToken(url).send({
                from: acc,

            });
            setIsSpinner(false)


        } catch (e) {
            console.log("Error While Call Create Nft Function", e);
            setIsSpinner(false)

        }
    }


    const callfunctionhere = async () => {
        let acc = await loadWeb3()
        acc = acc.substring(0, 4) + '...' + acc.substring(acc.length - 4)
        setaddressacc(acc)

    }

    useEffect(() => {

        callfunctionhere()

    }, [])


    return (
        <div>

            <Navbar_nav setModalShow={setModalShow} btnTxt={btnTxt} />
            <div className='main_div_app'>
                <div class="container">
                    <div class="bx-view">
                        <div class="bx-full">
                            <div class="bx-header">
                                <div class="header-inner">
                                    <div class="header-tab center">
                                        <ul>
                                            <li class="active">
                                                <div class="item-tab">
                                                    <div class="item-tab-icon">
                                                        <div className='items_tab_inneree'>
                                                            <img alt="" src="https://cdn.pegaxy.io/statics/play/v9/images/icon/ic_item.png" decoding="async" data-nimg="fixed" className='items_img_here' />
                                                            <noscript></noscript>
                                                        </div>
                                                    </div>
                                                    <Link to="/Mint" className='text_de'>

                                                        <span class="item-tab-title active">MINT</span>
                                                    </Link>
                                                </div>
                                            </li>
                                            <li class="">
                                                <div class="item-tab ">
                                                    <div class="item-tab-icon">
                                                        <div className='items_tab_inneree'>
                                                            <img alt="" src="https://cdn.pegaxy.io/statics/play/v9/images/icon/ic_item.png" decoding="async" data-nimg="fixed" className='items_img_here' />
                                                            <noscript></noscript>
                                                        </div>
                                                    </div>
                                                    <Link to="/My_Items" className='text_de'>

                                                        <span class="item-tab-title ">ITEMS</span>
                                                    </Link>
                                                </div>
                                            </li>
                                            {/* <li class="">
                                                <div class="item-tab">
                                                    <div class="item-tab-icon">
                                                        <div className='items_tab_inneree'>
                                                            <img alt="" src="https://cdn.pegaxy.io/statics/play/v9/images/icon/ic_tickets.png" decoding="async" data-nimg="fixed" className='items_img_here' />
                                                            <noscript></noscript>
                                                        </div>
                                                    </div>
                                                    <Link to="/My_Bids" className='text_de'>
                                                        <span class="item-tab-title ">My Bids</span>

                                                    </Link>
                                                </div>
                                            </li> */}
                                            <li class="">
                                                <div class="item-tab">
                                                    <div class="item-tab-icon">
                                                        <div className='items_tab_inneree'>
                                                            <img alt="" src="https://cdn.pegaxy.io/statics/play/v9/images/icon/ic_tickets.png" decoding="async" data-nimg="fixed" className='items_img_here' />
                                                            <noscript></noscript>
                                                        </div>
                                                    </div>
                                                    <Link to="/My_Profile" className='text_de'>

                                                        <span class="item-tab-title">My Profit</span>
                                                    </Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="bx-content default  minting_hereeeee">
                                <div class="inner-content minting_page">
                                    {
                                        isSpinner ? (
                                            <>

                                                <Spinner />

                                            </>
                                        ) : (
                                            <div class="viewPega">
                                                <div className="innerdiv_mint">
                                                    <div className="row">
                                                        <div className="col-lg-6 mt-4">
                                                            <div className="inner_first_div_img">
                                                                <img src="images/gameplay-thumbnail2.png" alt="" width="100%" className='minting_img' />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 mt-4">
                                                            <div className="mint-content">
                                                                <div className="mint-item">
                                                                    <div className="quantity">

                                                                        <div class="form-create-item">
                                                                            {/* <form action="#"> */}
                                                                            <h4 class="title-create-item">Upload file</h4>
                                                                            <label class="uploadFile">
                                                                                <span class="filename text-white">PNG, JPG, GIF, WEBP or MP4.</span>
                                                                                <input type="file" class="inputfile form-control" name="fileInput" id="fileInput"
                                                                                    onChange={(e) => {
                                                                                        e.preventDefault();
                                                                                        setNftImage(e.target.files[0])

                                                                                    }}
                                                                                />
                                                                            </label>
                                                                            {/* </form> */}
                                                                            <div class="flat-tabs tab-create-item">
   
                                                                                <div class="content-tab">
                                                                                    <div class="content-inner" >
                                                                                        <form action="#">
                                                                                            <h4 class="title-create-item">Price</h4>
                                                                                            <input type="text" placeholder="Enter price for one item (ETH)"
                                                                                                onChange={e => updateFormInput({ ...formInput, price: e.target.value })}
                                                                                            />

                                                                                            <h4 class="title-create-item">Title</h4>
                                                                                            <input type="text" placeholder="Item Name" name="metadataName" id="metadataName"
                                                                                                onChange={e => updateFormInput({ ...formInput, name: e.target.value })}
                                                                                            />

                                                                                            <h4 class="title-create-item">Description</h4>
                                                                                            <textarea placeholder="e.g. “This is very limited item”" name="metadataDescription" id="metadataDescription" rows="5"  cols="44" className=' text_area'
                                                                                                onChange={e => updateFormInput({ ...formInput, description: e.target.value })}
                                                                                            ></textarea>
                                                                                       
                                                                                            {
                                                                                                fileUrl && (
                                                                                                    <img className="rounded mt-4" width="350" src={fileUrl} alt='' />
                                                                                                )
                                                                                            }

                                                                                            <button className="mt-3 btn_create" onClick={IpfsStorage}>
                                                                                                Create NFT
                                                                                            </button>


                                                                                            
                                                                                        </form>
                                                                                    </div>
                                                                                    <div class="content-inner" style={{ display: "none" }}>
                                                                                        <form action="#">
                                                                                            <h4 class="title-create-item">Minimum bid</h4>
                                                                                            <input type="text" placeholder="enter minimum bid" />
                                                                                            <div class="row">
                                                                                                <div class="col-md-6">
                                                                                                    <h5 class="title-create-item">Starting date</h5>
                                                                                                    <input type="date" name="bid_starting_date" id="bid_starting_date" class="form-control" min="1997-01-01" />
                                                                                                </div>
                                                                                                <div class="col-md-6">
                                                                                                    <h4 class="title-create-item">Expiration date</h4>
                                                                                                    <input type="date" name="bid_expiration_date" id="bid_expiration_date" class="form-control" />
                                                                                                </div>
                                                                                            </div>

                                                                                            <h4 class="title-create-item">Title</h4>
                                                                                            <input type="text" placeholder="Item Name" />

                                                                                            <h4 class="title-create-item">Description</h4>
                                                                                            <textarea placeholder="e.g. “This is very limited item”" onChange={(e) => setDescription(e.target.value)}></textarea>
                                                                                        </form>
                                                                                    </div>



                                                                                    {/* <div class="content-inner" style={{ display: "none" }}>
                      <form action="#">
                        <h4 class="title-create-item">Price</h4>
                        <input type="text" placeholder="Enter price for one item (ETH)" />

                        <h4 class="title-create-item">Minimum bid</h4>
                        <input type="text" placeholder="enter minimum bid" />

                        <div class="row">
                          <div class="col-md-6">
                            <h5 class="title-create-item">Starting date</h5>
                            <input type="date" name="bid_starting_date" id="bid_starting_date2" class="form-control" min="1997-01-01" />
                          </div>
                          <div class="col-md-6">
                            <h4 class="title-create-item">Expiration date</h4>
                            <input type="date" name="bid_expiration_date" id="bid_expiration_date2" class="form-control" />
                          </div>
                        </div>

                        <h4 class="title-create-item">Title</h4>
                        <input type="text" placeholder="Item Name" />

                        <h4 class="title-create-item">Description</h4>
                        <textarea placeholder="e.g. “This is very limited item”"></textarea>
                      </form>
                    </div> */}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>



                                                <div class="list-pick"></div>
                                            </div>
                                        )

                                    }

                                </div>
                            </div>


                        </div>
                    </div>
                </div>





            </div>



        </div>
    )
}
