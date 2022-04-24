import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import {Navbar, NavbarBrand, Container} from 'react-bootstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  
  render() {
    return(
      <div>
        <Navbar dark color="primary">
          <div className='container'></div>

        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>

        
    );}
}

export default App;
