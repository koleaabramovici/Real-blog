import React from 'react'
import {Link} from 'react-router-dom'
import Home from '../pages/Home';
import About from '../pages/About';
import Postlist from '../pages/Postlist';
import Contact from '../pages/Contact';
import { Switch, Route,  BrowserRouter as Router }  from "react-router-dom";


function Nav() {
  return (
    <Router>   
      <nav className="navbar navbar-expand-lg navbar-light" id="mainNav" >
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="index.html">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto py-4 py-lg-0">
                        <li className="nav-item"><Link to="/"  className="nav-link px-lg-3 py-3 py-lg-4">Home</Link></li>
                        <li className="nav-item"><Link to="/about"  className="nav-link px-lg-3 py-3 py-lg-4">About</Link></li>
                        <li className="nav-item"><Link to="/posts"  className="nav-link px-lg-3 py-3 py-lg-4" >Sample Post</Link></li>
                        <li className="nav-item"><Link  to="/contact" className="nav-link px-lg-3 py-3 py-lg-4" >Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
         <Switch>
       <Route path='/' component={Home} exact/>
       <Route path='/about' component={About} exact/>
       <Route path='/posts' component={Postlist} exact/>
       <Route path='/contact' component={Contact} exact/>

       {/* Read please what exact do */}
     </Switch>
    </Router>
  )
}

export default Nav
