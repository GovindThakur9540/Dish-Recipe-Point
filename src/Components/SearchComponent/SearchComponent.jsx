import React from 'react'
import {Link} from 'react-router-dom'
import './SearchComponent.css';

export default function SearchComponent(props) {
    return (
        <div className="search-bar">
            <form onSubmit={props.searchRecipe}>
            <label className="search">Search Dish :
            <input type="text" value={props.value} onChange={props.setSearch} placeholder="Enter Dish Name"/>
            </label>
            <button type="submit">Submit</button>
            <button><Link className="link1" to="/Fav">Favourite</Link></button>
            </form>
        </div>
    )
}