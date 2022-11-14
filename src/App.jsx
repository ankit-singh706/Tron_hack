import React,{useState,useEffect} from 'react';
import '../src/App.css';
import { useTronlink } from 'use-tronlink';

// Importing Video
import VideoBg from './video_bg3.mp4';
import GameBg from './assets/game_bg.png';
import GameBg2 from './assets/game_bg1.png';
import GameBg3 from './assets/game_bg2.png';
import GameBg4 from './assets/game_bg3.png';
import Tron from './assets/floating_tron.png';



function App() {
  const [currentAccount, setCurrentAccount] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const checkIfWalletIsConnected = async () => {
        try {
            const { ethereum } = window

            if (!ethereum) {
                console.log('Make sure you have MetaMask!')

                setIsLoading(false)
                return
            } else {
                console.log('We have the ethereum object', ethereum)

                const accounts = await ethereum.request({
                    method: 'eth_accounts',
                })

                if (accounts.length !== 0) {
                    const account = accounts[0]
                    console.log('Found an authorized account:', account)
                    setCurrentAccount(account)
                } else {
                    console.log('No authorized account found')
                }
            }
        } catch (error) {
            console.log(error)
        }

        setIsLoading(false)
    }

    const connectWalletAction = async () => {
        try {
            const { ethereum } = window

            if (!ethereum) {
                alert('Get MetaMask!')
                return
            }
            const accounts = await ethereum.request({
                //request access to account
                method: 'eth_requestAccounts',
            })
            console.log('Connected', accounts[0]) //print the public address
            setCurrentAccount(accounts[0])
        } catch (error) {
            console.log(error)
        }
    }

    const checkNetwork = async () => {
        try {
            if (window.ethereum.networkVersion !== '4') {
                // alert('Please connect to Rinkeby!')
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        setIsLoading(true)
        checkIfWalletIsConnected()
        checkNetwork()
    }, [])
  const [wallet,setWallet] = useState({});
  const [connect,setConnect] = useState(false);
  console.log(connect)

  useEffect(() => {
    if(connect){
      const wallet_details = useTronlink();
      console.log(wallet_details)
    }
  },[])
  



  function getVideo() {
    return (
      <video height="100%" width="100%" autoPlay muted loop>
        <source
          src={VideoBg} alt="video" type="video/mp4" >
        </source>
      </video>
    )
  }

  return (
    <div>
      {getVideo()}
      <div className="content_holder">
        <div className="text">
          <h1>GAME-A-TRON</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit iusto quos, minus libero inventore nihil delectus voluptatem ducimus? Debitis dolorum velit quis ex quia! Repellat maiores inventore officiis mollitia nisi pariatur aliquid distinctio alias quisquam earum blanditiis facere necessitatibus sapiente, modi temporibus quae dolorum commodi eveniet provident. Facilis accusamus voluptates quis aliquid impedit rerum provident explicabo dolorem</p>
        </div>
        <div className="contents">
          <div className="content">
            <div className="box">
              <a href='/'><img src={GameBg} alt="Game1" /></a>
            </div>
            <div className="box">
              <a href='/'><img src={GameBg2} alt="Game1" /></a>
            </div>
            <div className="box">
              <a href='/'><img src={GameBg4} alt="Game1" /></a>
            </div>
            <div className="box">
              <a href='/'><img src={GameBg3} alt="Game1" /></a>
            </div>
          </div>
          <div className="right_content">
            <div className="tron bounce">
              <img src={Tron} alt="floating_tron" />
            </div>
            <div className="button">
              <button onClick={connectWalletAction}>Connect Wallet</button>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default App
