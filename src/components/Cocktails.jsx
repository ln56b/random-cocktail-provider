import React, { Component, Fragment } from 'react';
import axios from 'axios';
import CocktailInfo from './CocktailInfo';

//1. cccs create Class Component
class Cocktails extends Component {
  constructor(props) {
    super(props);
    //2. initialise state
    this.state = { 
      randomCocktail: null,
    };
    //6. Bind
    this.fetchRandomCocktail = this.fetchRandomCocktail.bind(this);
  }
  //12. Add DidMount to avoid need of a button
  componentDidMount() {
    this.fetchRandomCocktail();
  }
  //4. Initialise method to get it
  fetchRandomCocktail() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    //5. Define axios actions and setState
    axios.get(url)
      .then(response => response.data)
      .then(data => data.drinks[0])
      .then(drinkInfo => {
        this.setState({randomCocktail : drinkInfo})
      })

  }

  
  render() {
    return (
      /*3. Initialise action element in return*/
      /*8. create const infos as state in Component*/
      /*11 check if this.state is true && call component*/

      <Fragment>
        <button onClick={this.fetchRandomCocktail}>Another cocktail</button>
        {this.state.randomCocktail && <CocktailInfo infos= {this.state.randomCocktail} />}      
      </Fragment>
    );
  }
}

export default Cocktails;