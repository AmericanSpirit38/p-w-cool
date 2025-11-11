import React from 'react';
import { useState } from 'react';
import githubLogo from './assets/github-icon.svg'
import instagramLogo from './assets/instagram-icon.svg'
import linkedinLogo from './assets/linkedin-icon.svg'
import xLogo from './assets/x-icon.svg'
import profilePicture from './assets/OliverSim.jpg'

import './App.css'

function App() {
    const [ButtonPressCount, setButtonPressCount] = useState(0);
  return (
    <>
        <div className="body">
            <div className="name">
                <button onClick={() => {
                    alert("Hello visitor! Can you find the secret? " + (5 - ButtonPressCount));
                    setButtonPressCount(c => c + 1);
                    if (ButtonPressCount + 1 > 5) {
                        alert("Is there something wrong with the image? Seems like something is hidden there... ");
                    }
                }}>
                    <div className="name">
                        Oliver Sim
                    </div>
                </button>
            </div>
            <div className="image-container">
                <img src={profilePicture} alt="Profile picture"/>
            </div>
            <div className="logo-container">
                <div className="logo">
                    <a href="https://github.com/AmericanSpirit38" target="_blank">
                        <img src={githubLogo} className="logo" alt="Linked github logo" />
                    </a>
                </div>
                <div className="logo">
                    <a href="https://www.instagram.com/oliver.sim.9/" target="_blank">
                        <img src={instagramLogo} className="logo" alt="linked instagram logo" />
                    </a>
                </div>
                <div className="logo">
                    <a href="https://www.linkedin.com/in/oliver-sim-978b2b364/" target="_blank">
                        <img src={linkedinLogo} className="logo" alt="linked linkedIn logo" />
                    </a>
                </div>
                <div className="logo">
                    <a href="https://x.com/OliverSim10" target="_blank">
                        <img src={xLogo} className="logo" alt="linked x logo" />
                    </a>
                </div>

            </div>


        </div>
    </>
  )
}

export default App
