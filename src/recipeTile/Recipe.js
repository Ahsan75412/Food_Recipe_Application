import React from 'react';
import "./style.css";

const Recipe = ({ recipe }) => {

    return (
        // recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
            <div className='recipeTile'>

                <img 
                className='recipe__img' 
                src={recipe['recipe']['image']}
                alt="tile-img"
                onClick={() => window.open(recipe["recipe"]["url"])}

                 />

                <p className='recipe__name'>{recipe['recipe']['label']}</p>

            </div>
        // )
    );
    
};

export default Recipe;