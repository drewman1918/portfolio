import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Welcome from './Components/Welcome/Welcome';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import ScrollableAnchor from 'react-scrollable-anchor';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
          <ScrollableAnchor  id="welcome"><Welcome /></ScrollableAnchor>
          <ScrollableAnchor id="about"><About /></ScrollableAnchor>
          <ScrollableAnchor id="skills"><Skills /></ScrollableAnchor>
          <Projects />
          <ScrollableAnchor id="contact"><Contact /></ScrollableAnchor>
        </div>
      </div>
    );
  }
}

export default App;
