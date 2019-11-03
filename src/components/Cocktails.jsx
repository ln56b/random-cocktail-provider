import React, { Component, Fragment } from 'react';
import axios from 'axios';
import CocktailInfo from './CocktailInfo';

class Cocktails extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      randomCocktail: null,
    };
    this.fetchRandomCocktail = this.fetchRandomCocktail.bind(this);
  }
  componentDidMount() {
    this.fetchRandomCocktail();
  }

  fetchRandomCocktail() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    axios.get(url)
      .then(response => response.data)
      .then(data => data.drinks[0])
      .then(drinkInfo => {
        this.setState({randomCocktail : drinkInfo})
      })

  }

  
  render() {
    return (
      <Fragment>
        <button onClick={this.fetchRandomCocktail}>Another cocktail</button>
        {this.state.randomCocktail && <CocktailInfo infos= {this.state.randomCocktail} />}      
      </Fragment>
    );
  }
}

export default Cocktails;