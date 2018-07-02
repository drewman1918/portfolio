import React, { Component } from 'react';
import SlideControls from './SlideControls';
import data from "./../../Data/Data";
import Slide from "./Slide";
import "./About.css"

export default class About extends Component{
    constructor() {
        super()

        let slides = data.aboutSlides.map((data, i) => {
            return (
                <Slide data={data} id={`slide${i + 1}`} key={`slide${i}`} />
            )
        })

        let dots = data.aboutSlides.map((data, i) => {
            return (
                <div className="sliderDot" id={`dot${i + 1}`} key={`dot${i}`} onClick={() => this.setState({ activeSlide: i + 1 }, () => this.setSlides()) } />
            )
        })

        this.state = {
            activeSlide: 1,
            slides: slides,
            dots: dots
        }
    }

    componentDidMount() {
        this.setSlides();
    }

    setSlides = () => {
        let active = this.state.activeSlide;

        data.aboutSlides.map((x, i) => {
            if (i + 1 === active) {
                document.getElementById(`slide${i + 1}`).className = "slide"
                document.getElementById(`dot${i + 1}`).className = "sliderDot activeDot"
            } else if (i + 1 < active) {
                document.getElementById(`slide${i + 1}`).className = "slide offsetLeft"
                document.getElementById(`dot${i + 1}`).className = "sliderDot"
            } else {
                document.getElementById(`slide${i + 1}`).className = "slide offsetRight"
                document.getElementById(`dot${i + 1}`).className = "sliderDot"
            }
        })
    }

    moveSlide = (num) => {
        let active = this.state.activeSlide
        let slides = this.state.slides

        //If on the far right of the carousel and the user wants to go back to the beginning, do that. 
        if (slides.length === active && num === 1) {
            this.setState({
                activeSlide: 1
            }, () => {
                this.setSlides();
            })
        
        //If on the far left of the carousel and the user wants to go to the end, do that.
        } else if (active === 1 && num === -1) {
            this.setState({
                activeSlide: slides.length
            }, () => {
                this.setSlides();
            })

        //Otherwise, act normally.
        } else {
            this.setState({
                activeSlide: active + num
            }, () => {
                this.setSlides();
            })
        }


    }

    render() {

        return (
            <div>
                <div className="goldBorder"></div>

                <div className="about" id="about2">
                    {this.state.slides}
                    <SlideControls moveSlide={this.moveSlide} />
                </div>
                
                <div className="dotsContainer">{this.state.dots}</div>
            </div>
        )
    }
}