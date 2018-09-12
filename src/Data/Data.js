import React from 'react';
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
import { Alarm, Add, Android, QuestionAnswer } from '@material-ui/icons';
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
import medTel1 from './assets/medTel1.png'
import medTel2 from './assets/medTel2.png'
import medTel3 from './assets/medTel3.png'
import medTel4 from './assets/medTel4.png'
import medTel5 from './assets/medTel5.png'
import medTel6 from './assets/medTel6.png'
import eqometer1 from './assets/eqometer1.png'
import eqometer2 from './assets/eqometer2.png'
import eqometer3 from './assets/eqometer3.png'
import eqometer4 from './assets/eqometer4.png'
import eqometer5 from './assets/eqometer5.png'

export default {

    //data for the slides on the about page
    aboutSlides: [
        {
            title: "Brigham Young University",
            description: "I spent four years studying Economics at BYU, and graduated in April 2017 with a 3.85 GPA in Economics. My education taught me to think analytically to find meaningful insights hidden in big data.",
            img: BYU,
            alt: "BYU"
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
            alt: "pureBloom"
        },
        {
            title: "DevMountain",
            description: "While working for PureBloom I realized my favorite responsibilities were developing the websites and creating our business reports on Google Sheets. I began to explore coding further, and finally took the leap by enrolling at DevMountain in April 2018.",
            img: devmountain,
            alt: "devMountain"
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
            img: <QuestionAnswer style={{ width: '100px', height: '100px', color: '#17bb77' }} />, 
            alt: 'EQometer', 
            title: 'EQometer',
            li1: 'Commissioned by Leader Factor to deliver their 180-question emotional intelligence survey. Fully mobile repsonive. Development nearly completed (September 2018).',
            li2: 'Displays in-depth reporting in a dashboard and a downloadable PDF.',
            li3: 'Organizational capabilities - managers can register, pay for, and see results for their employees.', 
            photos: [eqometer1, eqometer2, eqometer3, eqometer4, eqometer5]
        },
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
            alt: 'medTel',
            title: 'MedTel', 
            li1: 'Group project using React, NodeJS, Express, Massive, BCrypt and PostgresQL to beautiful and simplify the medical charting process.', 
            li2: 'Schedule patient visits, track visits, conditions, allergies, medical devices, medications, family medical history, and lab/imaging results.', 
            li3: 'Used no third party software for sessions, security was custom built with BCrypt. Complex server and database to capture immense amounts of data on each patient.', 
            link: 'https://medtel.devmtn-projects.com/#/',
            github: 'https://github.com/CARSDev/MedTel',
            photos: [medTel1, medTel2, medTel3, medTel4, medTel5, medTel6,]
        },
        {
            img: <Android style={{ width: '100px', height: '100px', color: '#17bb77' }} />,
            alt: 'Discord Bot',
            title: 'Discord Bot', 
            li1: 'Small discord bot for computer gamers built with Node.JS.', 
            li2: 'Listens and responds to various commands to return helpful information.', 
            li3: '', 
            github: 'https://github.com/drewman1918/discord-bot',
        },
        {
            img: <Alarm style={{ width: '100px', height: '100px', color: '#17bb77' }} />,
            alt: 'Electron Timer',
            title: 'Electron Timer', 
            li1: 'Small countdown timer built with Electron for MacOS and Windows.', 
            li2: 'Will send a desktop notification when the time has elapsed. Simply built to practice electron.', 
            li3: 'Used by computer gamers who "AFK" for set intervals, and need to be reminded when their current activity needs attention.', 
            github: 'https://github.com/drewman1918/afk-timer',
        },
    ]
}