import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import images from './img'
import '../../styles.css';

class Home extends Component {
    state = {
        images: [
            { id: 1, src: './img/aztec-hoop.jpg', title: 'Aztec Hoops', description: 'bar'},
            { id: 2, title: 'item #2' },
            { id: 3, title: 'item #3' },
            { id: 4, title: 'item #4' },
            { id: 5, title: 'item #5' }
        ]
    }

    render() {
        const { items } = this.state;
        return (
            <Carousel>
                { images.map(({id, src, title, description}) => <img key={id} src={src} title={title} alt={description} />)}
            </Carousel>
        )
    }
}

//  FOR REFERENCE
/*     <div class="container">
        <div class="row row-content">
            <div class="col-md-8 mx-auto">
                <div id="homeCarousel" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#homeCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#homeCarousel" data-slide-to="1"></li>
                        <li data-target="#homeCarousel" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="img/clay-metal.JPG" alt="Clay and Metal earrings">
                            <div class="carousel-caption">
                                <h3>When clay meets metal</h3>
                                <p class="d-none d-sm-block">Sparkle in the light and sparkle at night with these beautiful earrings.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="img/clay-leaf.JPG" alt="React Lake Campground">
                            <div class="carousel-caption">
                                <h3>Clay Leaf</h3>
                                <p class="d-none d-sm-block">If you love nature, you'll love these clay leaf earrings for any occasion.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="img/clay-dagger.JPG" alt="Chrome River Campground">
                            <div class="carousel-caption">
                                <h3>The Daggers</h3>
                                <p class="d-none d-sm-block">If your feeling dangerous you might be a match for these gorgous daggers.</p>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#homeCarousel" role="button" data-slide="prev">    
                        <span class="carousel-control-prev-icon"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#homeCarousel" role="button" data-slide="next">  
                        <span class="carousel-control-next-icon"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    </div> */

export default Home;