import React from 'react'
import './Recipes.styles.scss'

import { ReactComponent as SearchIcon } from '../images/search.svg'
import RecipesFilter from './RecipesFilter.component'
import RecipeItem from './RecipeItem.component'
import recipes from '../data/recipes'


const Recipes = () => {

    return (
        <div className="recipes">
                <h2 className="recipes-title">Recipes</h2>
                <SearchIcon className="recipesSearchIcon"/>
                <input type="text" placeholder='Search recipes and more...' className="recipes-search"/>
                <select name="sort" id="recipes-sort" className="recipes-sort">
                    <option value="Newest" className="sort-option">Newest</option>
                    <option value="Best Rated" className="sort-option">Best Rated</option>
                    <option value="Featured" className="sort-option">Featured</option>
                    <option value="Time" className="sort-option">Time</option>
                </select>

                <RecipesFilter />

                {recipes.map(recipe => <RecipeItem
                                            name={recipe.name}
                                            imgUrl={recipe.imgUrl}
                                            author={recipe.author}
                                            rating={recipe.rating}
                                            ratingsNumber={recipe.ratingsNumber} />)}

        </div>
    )
}

export default Recipes