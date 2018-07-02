import React from 'react';
import RightArrow from '@material-ui/icons/ArrowForward';
import LeftArrow from '@material-ui/icons/ArrowBack';
import "./About.css";


const SlideControls = (props) => {
    return (
        <div className="imageControls">
            
            <div className="arrowContainer">
            <LeftArrow onClick={() => props.moveSlide(-1)}
                style={{
                    color: "#fff",
                    borderRadius: "50%",
                    height: "36px",
                    width: "36px",
                    padding: "3px",
                    cursor: "pointer",
                }}/>
            </div>
            
            <div className="arrowContainer">
            <RightArrow onClick={() => props.moveSlide(1)}
                style={{
                    color: "#fff",
                    borderRadius: "50%",
                    height: "36px",
                    width: "36px",
                    padding: "3px",
                    cursor: "pointer"
                    }} />
            </div>
        </div>
    )
}

export default SlideControls;