import React,{Component} from 'react';
import {
  Navbar,
  NavbarBrand,

} from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';

class App extends Component{
  render(){
    return(
      <div className="">
        <Navbar dark color="primary">
          <NavbarBrand>Ristorante Con Fusion</NavbarBrand>
        </Navbar>

        <Menu />
      </div>
    );
  }
  
}
export default App;
