import React from 'react'
import {Link} from 'react-router-dom'
import './DisplayComponent.css';
export default function DisplayComponent(props) {
    

    let renderRecipe = () => {
        const data = props.recipeData
        let render=data.map(dish => {
                return(
                <div className="inner-recipe" key={dish.recipe.label}>
                    <img src={dish.recipe.image} alt=""/>
                    <h2>{dish.recipe.label}</h2>
                    <h3>Health Labels</h3>
                        {   dish.recipe.healthLabels.length > 0 ?
                        <p>{dish.recipe.healthLabels+""}</p>
                        :<div>No Health Labels</div>
                    }
                    <hr/>
                    <h3>Diet Labels</h3>
                        { dish.recipe.dietLabels.length>0? 
                        <p>{dish.recipe.dietLabels+""}</p>
                        :<div><p>No diet Labels</p></div>
                    }
                    <hr/>
                    <button onClick={()=>props.showLarge(dish)}><Link className="link" to="/EnlargeComponent">View More</Link></button>
                    <button onClick={()=>props.addFav(dish)}>Add to Favourite</button>
                </div>
                )
        })
        return render
    }

    return (
        <>
        <div className="mainrecipe-container">
            <h1>{props.title}</h1>
                <div className="recipe">
                    {
                        renderRecipe()
                    }
                </div>
        </div>
        <div className="toast" id="toast">
            <h3>Recipe Added To Favourite</h3>
        </div>
        </>
        
    )
}
