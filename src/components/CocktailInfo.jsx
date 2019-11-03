import React, { Fragment } from 'react';

const CocktailInfo = ({ infos }) => {
  const {strDrink, strDrinkThumb} = infos;
  return(
    <Fragment>
      <img src={strDrinkThumb}></img>
      <h1>{strDrink}</h1>
    </Fragment>
  )
};

export default CocktailInfo;