import React, { Component } from 'react'
import './Projects.css';

export default class Slider extends Component {
    render() {
        let slides = this.props.images.map((picture, i) => {
            return (
                <div className="dialogPhoto" key={`photo${i}`}>
                    <img src={picture} alt = "portfolio"/>
                </div>
            )
        })
        
        return (
            <div className="dialogPhotos">
                {slides}
            </div>
    )
  }
}
