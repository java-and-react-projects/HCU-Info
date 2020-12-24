import React from 'react';
import {Switch, Route,Redirect} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar';
import SCIS from './SCIS';
import Footer from './Footer';
import IGM from './IGM';
import LifeScience from './LifeScience';
import MBA from './MBA';
import Research from './Research';
import Mathmetics from './Mathmetics';

const App =()=> {
  return (
    <div>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/service" component={Service}/>
    <Route exact path="/scis" component={SCIS}/>
    <Route exact path="/igm" component={IGM}/>
    <Route exact path="/lifescience" component={LifeScience}/>
    <Route exact path="/mba" component={MBA}/>
    <Route exact path="/research" component={Research}/>
    <Route exact path="/mathmetics" component={Mathmetics}/>
    <Redirect to="/" />
     </Switch>
     <Footer/>
    </div>
  );
}

export default App;
