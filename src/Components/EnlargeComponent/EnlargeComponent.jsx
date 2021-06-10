import React from 'react'
import { Link } from 'react-router-dom'
import './EnlargeComponent.css';

export default function EnlargeComponent(props) {

    let renderLarge = () => {
        const dish = props.largeRecipe
        return (
        <div className="large-container">
                <div className="header">
                    <div className="header-left">
                        <img src={dish.recipe.image}/>
                        <h2 className="calories"><span>Calories : </span>{dish.recipe.calories}</h2>
                    </div>
                    <div className="header-right">
                        <h1>{dish.recipe.label}</h1>
                        <div className="labels-container">
                            <p className="cautions"><span>Cautions :</span> {dish.recipe.cautions+" "}</p>
                            <p className="healthLabels"><span>Health Labels :</span>{dish.recipe.healthLabels +" "}</p>
                            <p className="dietLables"><span>Diet Labels :</span> {dish.recipe.dietLabels + " "}</p>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="ingrediants">
                    <h1>Ingredients</h1>
                        {dish.recipe.ingredients.map(ingredients=>{
                            return(
                                <ul>
                                    <li>{ingredients.text}  <img src={ingredients.image} alt={ingredients.text}></img> </li>
                                </ul>
                            )
                        })
                        }
                    </div>
                    <div className="recipe-link">
                        <button><a href={dish.recipe.url}>See Recipe</a></button>
                    </div>
                </div>
       </div>
        )
    }
    return (
        <div className="container">
            <button><Link className="link" to="/Dish-Recipe-Point">Go back</Link></button>
            {renderLarge()}
        </div>
    )
}
