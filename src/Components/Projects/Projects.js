import React, { Component } from 'react';
import data from './../../Data/Data';
import Button from '@material-ui/core/Button';
import ScrollableAnchor from 'react-scrollable-anchor';
import "./Projects.css"
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Slider from './Slide';



function Transition(props) {
    return <Slide direction="up" {...props} />;
}


export default class Projects extends Component {
    constructor() {
        super()

        this.state = {
            open: null
        }
    }

    handleClickOpen = (i) => {
        this.setState({
            open: i
        });
    };

    handleClose = () => {
        this.setState({
            open: null
        });
    };
    
    render() {

        let cards = data.projectsCards.map((project, i) => {

            return (
                <div className='projectCard' id={`projectCard${i + 1}`} key={i} >
                    <div>
                        <div className="imageContainer">
                                {project.img}
                        </div>
                    
                        <h2>{project.title}</h2>
                    </div>
                    
                    <ul>
                        <li>{project.li1}</li>
                        <li>{project.li2}</li>
                        <li>{project.li3}</li>
                    </ul>

                    <div className="projectButtons">
                        <a href={project.link} target="blank"><Button className="projectCardButton">Demo</Button></a>
                        <a href={project.github} target="blank"><Button className="projectCardButton2">Github</Button></a>
                        <a><Button className="projectCardButton" onClick={ () => this.handleClickOpen(i)}>Media</Button></a>
                    </div>

                    <div className="projectModal">
                        <Dialog
                            fullScreen
                            open={this.state.open === i}
                            onClose={this.handleClose}
                            TransitionComponent={Transition}
                        >

                            <div className="dialogHeader">
                                <IconButton color="inherit" onClick={this.handleClose} aria-label="Close" style={{ zIndex: 1}}>
                                    <CloseIcon />
                                </IconButton>
                                <div className="photoHeader">
                                    <h2>{project.title} Photos</h2>
                                </div>
                            </div>

                            <div className="dialogContent">

                                <Slider images={project.photos} />

                            </div>


                        </Dialog>
                    </div>
                    
                </div>
            )
        })

        return (
            <div className="projects" id="projects2">
                <ScrollableAnchor id="projects">
                    <div className="projectsContainer">
                        {cards}
                    </div>
                </ScrollableAnchor>
            </div>
        )
    }
}