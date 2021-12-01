import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./components/content/Home";
import About from "./components/content/About";
import Collections from "./components/content/Collections";
import Faqs from "./components/content/Faqs";
import { BrowserRouter, Switch, Route, Redirect  } from 'react-router-dom';
import './styles.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/collections' component={Collections} />
                    <Route exact path='/faqs' component={Faqs} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </BrowserRouter>
        );
    }
}

export default App;
