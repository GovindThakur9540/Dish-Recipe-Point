import React from 'react'

export default function FavouriteComponent(props) {
    console.log(props);
    let unique = [...new Set(props.favDish)]

        let displayFav = () =>{
       if(unique.length>0)
       {
        let favDish =  unique.map(dish=>{
                return(
                    <div className="inner-recipe" key={dish.recipe.label}>
                        <img src={dish.recipe.image} alt=""/>
                        <h2>{dish.recipe.label}</h2>
                        <button className="fav-btn"><a href={dish.recipe.url}>See Recipe</a></button>
                    </div>
                )
            })
        return favDish
       }
    }
    return (
        <div className="fav">
        {(unique.length>0)?<h1>Favourite Recipes</h1>:<h1>Please add some recipes to favourite</h1>}
            <div className="recipe">
                {displayFav()}
            </div>
        </div>
    )
}