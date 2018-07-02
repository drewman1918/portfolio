import React, { Component } from 'react';
import linkedIn from "./linkedInLogo.png";
import github from './githubLogo.png';
import email from './email.ico';
import "./Header.css"

export default class Header extends Component{
    constructor() {
        super()

        this.state = {
            activeTab: 1
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        //About tab and section locations
        let aboutTab = document.getElementById("tab2").offsetTop;
        let aboutTop = document.getElementById("about2").offsetTop - window.pageYOffset

        //Skills tab and section locations
        let skillsTab = document.getElementById("tab3").offsetTop;
        let skillsTop = document.getElementById("skills2").offsetTop - window.pageYOffset

        //Projects tab and section locations
        let projectsTab = document.getElementById("tab4").offsetTop;
        let projectsTop = document.getElementById("projects2").offsetTop - window.pageYOffset
        
        //Contact tab and section locations
        let contactTab = document.getElementById("tab5").offsetTop;
        let contactTop = document.getElementById("contact2").offsetTop - window.pageYOffset

        //Logic to set active tab
        if (contactTop < contactTab) {
            this.setState({
                activeTab: 5
            })
        } else if (projectsTop < projectsTab) {
            this.setState({
                activeTab: 4
            })
        } else if (skillsTop < skillsTab) {
            this.setState({
                activeTab: 3
            })
        } else if (aboutTop < aboutTab) {
            this.setState({
                activeTab: 2
            })
        } else {
            this.setState({
                activeTab: 1
            })
        }
    }

    handleActive = (tab) => {
        window.removeEventListener('scroll', this.handleScroll)
        this.setState({
            activeTab: tab
        })
        setTimeout( () => {
            window.addEventListener('scroll', this.handleScroll)
        }, 500)
    }
    
    render() {
        return (
            <div className="header">
                <div className = "topOfHeader">
                    <h3>Drew Bloomfield</h3>
                    <p>Web Developer</p>
                </div>
                
                <div className = "middleOfHeader">
                    <a href="#welcome"><h2 id = "tab1" className={(this.state.activeTab === 1) ? "active one" : null} onClick={() => this.handleActive(1)}>Welcome</h2></a>
                    <a href="#about"><h2 id="tab2" className={(this.state.activeTab === 2) ? "active two" : null} onClick={() => this.handleActive(2)}>About</h2></a>
                    <a href="#skills"><h2 id="tab3" className={(this.state.activeTab === 3) ? "active three" : null} onClick={() => this.handleActive(3)}>Skills</h2></a>
                    <a href="#projects"><h2 id="tab4" className={(this.state.activeTab === 4) ? "active four" : null} onClick={() => this.handleActive(4)}>Projects</h2></a>
                    <a href="#contact"><h2 id="tab5" className={(this.state.activeTab === 5) ? "active five" : null} onClick={() => this.handleActive(5)}>Contact</h2></a>
                </div>

                <div className = "bottomOfHeader">
                    <a href="https://github.com/drewman1918" target="_blank" rel="noopener noreferrer"><img src={github} alt = "github"/></a>
                    <a href="https://www.linkedin.com/in/drexy/" target="_blank" rel="noopener noreferrer"><img src={linkedIn} alt="linkedIn" /></a>
                    <a href="#contact"><img src={email} alt = "github"/></a>
                </div>
            </div>

        )
    }
}