import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import '../styles.css';

class Header extends Component {
    render() {
        return (
            <div className="purple">
                <Navbar dark color="secondary">
                    <div className="container">
                        <NavbarBrand href="/">Clay by Zuly</NavbarBrand>
                    </div>
                </Navbar>
            </div>
        );
    }
}

/*    <header class="jumbotron jumbotron-fluid">
        <div class="container">
            <div class="row">
                <div class="col-6 col-sm-3 col-md-2 align-self-center offset-2">
                    <a href="index.html"><img src="img/logo.JPG" class="img-fluid" /></a> 
                </div>
                <div class="col">
                    <h1>Clay by Zuly</h1>
                    <h2>elegant clay jewelry</h2>
                </div>
            </div>
        </div>
    </header> 
    
    <nav class="navbar navbar-expand-sm navbar-light sticky-top">
        <div class="container">
            <a class="btn social" target="_blank" href="http://instagram.com/"><i class="fa fa-instagram"></i></a>
            <a class="btn social" target="_blank" href="http://facebook.com/"><i class="fa fa-facebook"></i></a>
    
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#clayNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="clayNavbar">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active"><a class="nav-link" href="#"> Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="aboutme.html"> About me</a></li>
                    <li class="nav-item dropdown">	
                        <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown"> Collections</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="collections.html"> All</a></li>
                            <li><a class="dropdown-item" href="#"> Submenu item 2 </a></li>
                            <li><a class="dropdown-item" href="#"> Submenu item 3 </a></li>
                        </ul>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="faqs.html"> FAQs</a></li>
                </ul>
            </div>
            <a class="btn social" target="_blank" href="#"><i class="fa fa-shopping-cart"></i></a>
        </div>
    </nav> */

export default Header;