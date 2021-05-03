import React from 'react';
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "./components/pages/Home"
import Project from "./components/pages/Project"
import Contact from './components/pages/Contact';
import AboutMe from './components/pages/AboutMe';
import Footer from './components/Footer/Footer'
import './styles/main.css';


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <div className="App">
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Project} />
          <Route exact path="/contacts" component={Contact} />
          <Route exact path="/aboutme" component={AboutMe} />
      </Switch>
      </div>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
