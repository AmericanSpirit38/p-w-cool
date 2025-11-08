import { useState } from 'react'
import githubLogo from './assets/github-icon.svg'
import instagramLogo from './assets/instagram-icon.svg'

import './App.css'

function App() {

  return (
    <>
        <div className="body">
            <div className="name">
                <button onClick={() => {
                    alert("Hello! My name is Oliver Sim, and I'm a software developer specializing in web development. Welcome to my portfolio site!")
                }}>
                    <div className="name">
                        Oliver Sim
                    </div>
                </button>
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
            </div>


        </div>
    </>
  )
}

export default App
