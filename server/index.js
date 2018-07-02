require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer')

const {
    SERVER_PORT,
    EMAIL,
    EMAIL_PASSWORD,
} = process.env;

const app = express();
app.use(express.static(`${__dirname}/../build`));
app.use(bodyParser.json());

// Nodemailer
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL,
        pass: EMAIL_PASSWORD
    }
});

app.post('/api/email', (req, res, next) => {
    const { senderName, message, senderEmail } = req.body;
    var mail = {
        from: EMAIL,
        to: EMAIL,
        subject: "Inquiry from your portfolio!",
        html: "Name: " + senderName + "<br/> Message: " + message + "<br/>" + "Respond to: " + senderEmail
    }
    transporter.sendMail(mail, (error, response) => {
        if (error) {
        } else {
        }
        transporter.close();
    })
    res.sendStatus(201);
})

app.listen(SERVER_PORT, () => console.log(`Bragging about myself on port: ${SERVER_PORT}`))