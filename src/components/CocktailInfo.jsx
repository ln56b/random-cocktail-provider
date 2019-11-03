import React, { Fragment } from 'react';

//7. Initialise SL info component
//9. Catch infos as props and destructurate it via a new const.
//10. Get destructurated props in the div.
const CocktailInfo = ({ infos }) => {
  const {strDrink, strDrinkThumb} = infos;
  return(
    <Fragment>
      <img src={strDrinkThumb} alt={strDrink}></img>
      <h1>{strDrink}</h1>
    </Fragment>
  )
};

export default CocktailInfo;