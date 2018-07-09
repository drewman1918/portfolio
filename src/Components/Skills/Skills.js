import React, { Component } from 'react';
import data from './../../Data/Data';
import ScrollableAnchor from 'react-scrollable-anchor';
import "./Skills.css"

export default class Skills extends Component{
    constructor() {
        super()

        this.state = {
            cardInfo: data.skillsCards
        }
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        let skillsTab = document.getElementById("tab3").offsetTop;
        let skillsTop = document.getElementById("skills2").offsetTop - window.pageYOffset
        let projectsTab = document.getElementById("tab4").offsetTop;
        let projectsTop = document.getElementById("projects2").offsetTop - window.pageYOffset

        if (projectsTop < projectsTab) {
            if (document.getElementById(`card1`).classList.contains('comeToScreen') === true) {
                this.removeClass();
            }
        } else if (skillsTop < skillsTab) {
            if (document.getElementById(`card1`).classList.contains('comeToScreen') === false) {
                this.addClass();
            }
        } else {
            if (document.getElementById(`card1`).classList.contains('comeToScreen') === true) {
                this.removeClass();
            }
        }
    }

    addClass = () => {
        this.state.cardInfo.map((x, i) => {
            setTimeout(() => {
                document.getElementById(`card${i+1}`).className = "iconContainer comeToScreen"
            }, (i+1) * 100)
        })
        document.getElementById("skillsTitle").className = "skillsTitle activeTitle "
    }

    removeClass = () => {
        this.state.cardInfo.map((x, i) => {
            setTimeout(() => {
                document.getElementById(`card${i+1}`).className = "iconContainer"
            }, (i+1) * 100)
        })
        document.getElementById("skillsTitle").className = "skillsTitle"
    }
    
    render() {

        let cards = this.state.cardInfo.map((data, i) => {
            const { title, img, alt } = data
            return (
                <div key = {`card${i}`} id={`card${i + 1}`} className="iconContainer"><img src={img} alt={alt} /><p>{title}</p></div>
            )
        })
        
        return (
            <div className="skills" id="skills2">
                
                <h2 className="skillsTitle" id="skillsTitle">
                    <h3 className="skillsHeader">My Skills</h3>
                    {data.skillsTitle}
                </h2>

                <div className="skillsContainer">
                    {cards}
                </div>

                <ScrollableAnchor id="projects"><h3 className="projectsHeader">My Projects</h3></ScrollableAnchor>
            </div>
        )
    }
}