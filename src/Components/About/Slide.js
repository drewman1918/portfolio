import React from 'react';
import "./About.css"


const Slide = (props) => {
    let { title, description, img, alt } = props.data;
    return (
        <div className="slide" id={props.id}>

            <div className="slideLeft">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

            <div className="slideRight">
                <img src= {img} alt = {alt}/>
            </div>

        </div>
    )
}

export default Slide;