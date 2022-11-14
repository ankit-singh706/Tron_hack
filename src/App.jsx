import React from 'react';
import '../src/App.css';

// Importing Video
import VideoBg from './video_bg.mp4';
import GameBg from './assets/game_bg.jpg';
import Tron from './assets/floating_tron.png';

function App() {

  return(
    <div>
      <video height="100%" width="100%" autoPlay loop>
        <source src={VideoBg} type="video/mp4"/>
      </video>
      <div className="content_holder">
        <div className="text">
          <h1>GAME-FI</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit iusto quos, minus libero inventore nihil delectus voluptatem ducimus? Debitis dolorum velit quis ex quia! Repellat maiores inventore officiis mollitia nisi pariatur aliquid distinctio alias quisquam earum blanditiis facere necessitatibus sapiente, modi temporibus quae dolorum commodi eveniet provident. Facilis accusamus voluptates quis aliquid impedit rerum provident explicabo dolorem</p>
        </div>
        <div className="contents">
          <div className="content">
            <div className="box">
              <a href='/'><img src={GameBg} alt="Game1" /></a>
            </div>
            <div className="box">
              <a href='/'><img src={GameBg} alt="Game1" /></a>
            </div>
            <div className="box">
              <a href='/'><img src={GameBg} alt="Game1" /></a>
            </div>
            <div className="box">
              <a href='/'><img src={GameBg} alt="Game1" /></a>
            </div> 
          </div>
          <div className="tron">
              <img src={Tron} alt="floating_tron" />
            </div>
        </div>

      </div>
        
    </div>
  )
}

export default App
