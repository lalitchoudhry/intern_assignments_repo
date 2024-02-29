import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// ICONS IMPORTS
import timeIcon from '../assets/icons/time.png';
import favoriteIcon from '../assets/icons/bookmark.png'
import savedIcon from '../assets/icons/saved.png';

import {getServingTime} from '../utils/getTime'

function RecipeCard({idMeal, strMeal, strMealThumb, handleSavedRecipes}) {
  // STATES AND VARIABLE
  const time = getServingTime();
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState((JSON.parse(localStorage.getItem("savedRecipe")) || []).find((saved) => saved.idMeal === idMeal));

  // FUNCTIONS
  const toggleSavedRecipes = () => {
    handleSavedRecipes({idMeal, strMeal, strMealThumb})
    setIsSaved(!isSaved);
  }

  const handleClickOnRecipe = () => {
    navigate(`/recipe/${idMeal}`)
  }

  // useEffects

  return (
    <div className='w-2/5 sm:w-52 m-5 p-5 bg-white rounded-lg cursor-pointer self-start relative'>
      <img className='absolute w-5 right-0.5 hover:scale-125' 
        src={isSaved ? savedIcon : favoriteIcon} 
        alt="icn" 
        onClick={toggleSavedRecipes}
      />
      <img className='rounded-lg hover:opacity-70' 
        src={strMealThumb} 
        alt="img" 
        onClick={handleClickOnRecipe}
      />
      <div className='child:my-1'>
        <h4 className='font-bold hover:underline truncate'>{strMeal}</h4>
        <div className='flex justify-between items-center'>
          <span className='flex justify-between items-center text-xs text-green font-bold'>
            <img className='w-4 mr-0.5' src={timeIcon} alt="icon" />
            {time}min
          </span>
          <button className='text-sm text-green hover:underline font-semibold'
            onClick={handleClickOnRecipe}
          >View detail</button>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard;