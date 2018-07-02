import React, { Component } from 'react';
import stamp from './stamp.png';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import MapContainer from './MapContainer';
import "./Contact.css"

export default class Contact extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            email: '',
            message: '',
            sent: false
        }
    }

    inputHandler = (e, property) => {
        this.setState({
            [property]: e.target.value
        })
    }
    
    sendEmail = () => {
        axios.post('/api/email', { senderName: this.state.name, senderEmail: this.state.email, message: this.state.message })
            .then(() => {
                document.getElementById("postcard").classList.add("sent")
                setTimeout(() => {
                    this.setState({
                        sent: true
                    })
                }, 1500)
                this.setState({
                    message: ''
                })
            });
    }

    render() {
        return (
            <div className="contact" id="contact2">
                
                <div className="triangle"></div>

                <h2>Send me a postcard!</h2>

                <div className="contactRow">
                
                {(this.state.sent) ?
                    <div className="contactSent">
                        <h2>Thanks, I'll get back to you soon!</h2>
                    </div>
                :
                    <div className="postcard" id="postcard">
                        <div className="postcardLeft">
                            <textarea type="text" placeholder="Type your message here:" onChange={(e) => this.inputHandler(e, "message")} value={this.state.message} />
                        </div>

                        <div className="postcardRight">
                            <img src={stamp} alt="stamp" />
                
                            <div className="inputFields">
                        
                                <TextField
                                    fullWidth
                                    id="name"
                                    label="Full Name"
                                    margin="normal"
                                    onChange={(e) => this.inputHandler(e, "name")}
                                    value={this.state.name}
                                />

                                <TextField
                                    fullWidth
                                    id="name"
                                    label="Email"
                                    margin="normal"
                                    onChange={(e) => this.inputHandler(e, "email")}
                                    value={this.state.email}
                                />
                        
                            </div>

                            <Button variant="outlined" onClick={this.sendEmail}>Send</Button>

                        </div>
                    </div>
                    }

                <div className="contactRight">
                    
                    <h3>I currently live in Alpine, Utah</h3>
                    
                    <MapContainer />
                
                </div>
                
                </div> 
            </div>
        )
    }
}