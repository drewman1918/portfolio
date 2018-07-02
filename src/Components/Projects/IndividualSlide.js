import React, { Component } from 'react'
import './Projects.css'

export default class IndividualSlide extends Component {
  render() {
    return (
        <div className="individualSlide" id={`modalSlide${this.props.index + 1}`}>
            <img src={this.props.img} alt = "slide"/>
      </div>
    )
  }
}
