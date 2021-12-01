import React, { Component } from 'react';
//import {  } from 'reactstrap';
import '../../styles.css';
import items from '../../data/items.js'

class Collections extends Component {
    render() {
        return <div className="green">collections</div>
    }
}

//  FOR REFERENCE
//  items.js (data folder) will hold our collections, similar to the campsites data
//  map every item to a card and render them inside these divs
//  NOTE: do not add images yet, leave them as a colored div for now

/*  render() {
    // const cards = items.map(your code here)
    return (
        <div class="container collections">
            <h2 class="content-title text-uppercase mt-4 text-center">collections</h2>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-content pt-0 ml-auto" align="center">
            ...
            ...
            {cards} 
            ...
            ...
            </div>
        </div>
    ) */

/* example of one card:
            <div class="col my-4">
                <div class="card h-100" style="width: 18rem;">
                    <img src="img/clay-metal.JPG" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-clay-lite">Buy Now!</a>
                    </div>
                </div>
            </div> */

export default Collections;