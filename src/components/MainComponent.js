import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import  DishDetails  from './dishDetailComponent';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish:null
    };
  }
  onDishSelect(dishId){
    this.setState({
        selectedDish:dishId
    })
    }




  render(){
    return (
      <div className="App">
         <div className="container">
 
        <Navbar dark color="primary">
                          <NavbarBrand href="/">Ristorante Con Fusion </NavbarBrand>
            
            
        </Navbar>
        
        <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishSelect(dishId)} />
     
          
        <DishDetails dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      
        </div>
      </div>
    );                    
  }
}

export default Main;
