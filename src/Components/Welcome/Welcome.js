import React, { Component } from 'react';
import "./Welcome.css";
import Particles from 'react-particles-js';
import Params from './ParticleParams';
import headshot from "./headshot.jpg";

export default class Welcome extends Component {
    constructor() {
        super()

        this.state = {
            visible: false,
            contentVisible: false
        }
    }
    
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                visible: true
            })
        }, 500)
        setTimeout(() => {
            this.setState({
                contentVisible: true
            })
        }, 1500 )
    }


    render() {
        return (
            <div className = "welcome">
                <div className={(this.state.visible) ? "welcomeContent" : "welcomeContent openingSize"} >
                    
                    <div className={(this.state.contentVisible) ? "overlay visible" : "invisible"}>
                        <a href="https://www.linkedin.com/in/drexy/" target="_blank" rel="noopener noreferrer">
                            <img src={headshot} alt="headshot" className="headshot" />
                        </a>
                    </div>

                    <div className = "rightContent">
                        <h1 className={(this.state.contentVisible) ? "visible" : "invisible"} >Hello!</h1>
                        <p className={(this.state.contentVisible) ? "visible" : "invisible"}>
                            I'm Drew Bloomfield, a data-obsessed economist trying to "hack it" as a full-stack software engineer
                            focused on React, NodeJS, and PostgreSQL. My economics background allows me to attack problems logically,
                            while the four years I spent as Cosmo, the mascot for Brigham Young University, taught me to express creative
                            solutions in a captivating way.</p>
                    </div>
                </div>
                
                
                <Particles
                    params={
                        Params.params
                    }
                />
            </div>
        )
    }
}