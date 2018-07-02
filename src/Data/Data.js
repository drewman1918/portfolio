import React from 'react';
import cosmoImg from "./assets/Cosmo.jpg"
import css from './assets/css3.svg';
import express from './assets/express.png';
import git from './assets/git.svg';
import html from './assets/html5.svg';
import javascript from './assets/javascript.svg';
import jest from './assets/jest.svg';
import massive from './assets/massive.png';
import node from './assets/nodejs.png';
import postgres from './assets/postgresql.svg';
import postman from './assets/postmanLogo.png';
import react from './assets/react.svg';
import redux from './assets/redux.svg';
import Alarm from '@material-ui/icons/Alarm';
import Add from '@material-ui/icons/Add';
import Airplane from '@material-ui/icons/AirplanemodeActive';
import drexyTime from './assets/drexytime.png';
import drexyTime2 from './assets/drexytime2.png';
import drexyTime3 from './assets/drexytime3.png';
import drexyTime4 from './assets/drexytime4.png';
import drexyTime5 from './assets/drexytime5.png';
import southwest1 from './assets/southwest.png';
import southwest2 from './assets/southwest2.png';
import BYU from './assets/BYU Graduation.jpg';
import cosmoDunk from './assets/cosmoDunk.jpg';
import china from './assets/china.png';
import devmountain from './assets/devmountain.jpeg';

export default {

    //data for the slides on the about page
    aboutSlides: [
        {
            title: "Brigham Young University",
            description: "I spent four years studying Economics at BYU, and graduated in April 2017 with a 3.85 GPA in Economics. My education taught me to think analytically to find meaningful insights hidden in big data.",
            img: BYU,
            alt: "Cosmo"
        },
        {
            title: "Cosmo & Dunk Team",
            description: "If I wasn't studying Econ, I was wearing a furry costume at sporting events, or jumping off trampolines at basketball games. I had an athletic scholarhsip to be Cosmo, the mascot of BYU, and later joined the Utah Jazz Dunk Team (which I still do)!",
            img: cosmoDunk,
            alt: "Cosmo"
        },
        {
            title: "PureBloom Products",
            description: "After graduating I partnered with my sisters to form PureBloom Products, an eCommerce business. I started developing WordPress sites here, but mainly we focused on Amazon. My primary responsibility was to analyze markets on Amazon to find profitable niches, and assist in sourcing products from China.",
            img: china,
            alt: "Cosmo"
        },
        {
            title: "DevMountain",
            description: "While working for PureBloom I realized my favorite responsibilities were developing the websites and creating our business reports on Google Sheets. I began to explore coding further, and finally took the leap by enrolling at DevMountain in April 2018.",
            img: devmountain,
            alt: "Cosmo"
        },
    ],

    //**********SKILLS SECTION**********//
    //skills title
    skillsTitle: '"You know, like nunchuck skills, bow hunting skills, computer hacking skills. Girls only like guys who have great skills." -Napoleon Dynamite',

    //data for the skills cards
    skillsCards: [
        {title: "css3", img: css, alt: "css"},
        {title: "Endpoint Testing", img: postman, alt: "postman"},
        {title: "Express.js", img: express, alt: "express"},
        {title: "Git", img: git, alt: "git"},
        {title: "HTML5", img: html, alt: "html"},
        {title: "Javascript ES6", img: javascript, alt: "javascript"},
        {title: "Massive.js", img: massive, alt: "massive"},
        {title: "Node.js", img: node, alt: "node"},
        {title: "Postgresql", img: postgres, alt: "postgres"},
        {title: "React", img: react, alt: "react"},
        {title: "Redux", img: redux, alt: "redux"},
        {title: "Unit Testing", img: jest, alt: "jest"},
    ],

    //DATA FOR PROJECTS
    projectsCards: [
        {
            img: <Alarm style={{ width: '100px', height: '100px', color: '#17bb77' }} />, 
            alt: 'drexytime', 
            title: 'DrexyTime',
            li1: 'Full stack time tracking application developed specifically for accounting and legal firms. Built with React, Redux, NodeJS, Express, Massive, PostgresQL, and AWS S3 to enable a clean and simple time tracking on a per project basis.',
            li2: "Quickly view, edit, or delete time entries. Dynamically generated invoices, provides in-depth employee statistics about employee efficiency and profitability",
            li3: 'Awarded "Best Business Solution" by DevMountain', 
            link: 'https://www.drexytime.com',
            github: 'https://github.com/drewman1918/DrexyTime',
            photos: [drexyTime, drexyTime2, drexyTime3, drexyTime4, drexyTime5]
        },
        {
            img: <Airplane style={{ width: '100px', height: '100px', color: '#17bb77' }} />, 
            alt: 'southwest check-In', 
            title: 'Southwest Check-In', 
            li1: 'Simple application using CRON and Puppeteer to automatically check users into their flights exactly 24 hours in advance of takeoff. Built with React, NodeJS, Express, Massive, and PostgresQL.', 
            li2: 'This project was built to practice working with time across timezones, CRON scheduling, and automation.', 
            li3: '', 
            link: 'https://www.checkin.drewbloomfield.com/#/dashboard',
            github: 'https://github.com/drewman1918/airlineCheckin',
            photos: [southwest1, southwest2]
        },
            
        {
            img: <Add style={{ width: '100px', height: '100px', color: '#17bb77' }} />,
            alt: 'drexytime',
            title: 'MedTel', 
            li1: 'Coming Soon', 
            li2: "", 
            li3: '', 
            link: '',
            github: 'https://github.com/CARSDev/MedTel',
            photos: [drexyTime, drexyTime, drexyTime]
        },
        
    ]
}