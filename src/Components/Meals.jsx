import React, { useContext } from "react";
import RecipeContext from "./Context/RecipeContext";

function Meals() {
   const { RecipeData, HandleDetails } = useContext(RecipeContext);
   console.log(RecipeData)
   return (
      <main
    
      >
         <h1 className='text-center mt-5 text-secondary fw-bold '>Meals</h1>
         <div className='row gap-2 justify-content-center '>
            {RecipeData //chicking if we have data
               ? RecipeData.map(
                    ({
                       strArea,
                       strMealThumb,
                       strTags,
                       idMeal,
                       strCategory,
                       strInstructions,
                       strMeal,
                       strYoutube,
                       strSource,
                       strIngredient1,
                       strIngredient2,
                       strIngredient3,
                       strIngredient4,
                       strIngredient5,
                       strIngredient6,
                       strIngredient7,
                       strIngredient8,
                       strIngredient9,
                       strIngredient10,
                    

                    }) => {
                       return (
                          <div
                             onClick={() =>
                                HandleDetails(
                                   idMeal,
                                   strTags,
                                   strMealThumb,
                                   strCategory,
                                   strArea,
                                   strMeal,
                                   strYoutube,
                                   strSource,            
                                   strInstructions,
                                   strIngredient1,
                                   strIngredient2,
                                   strIngredient3,
                                   strIngredient4,
                                   strIngredient5,
                                   strIngredient6,
                                   strIngredient7,
                                   strIngredient8,
                                   strIngredient9,
                                   strIngredient10,
                                )
                             }
                             style={{ cursor: "pointer" }}
                             key={idMeal}
                             className='card bg-dark text-secondary col-10 col-md-8 col-lg-2 p-1 '
                          >
                             <img src={strMealThumb}  alt={strArea} />
                             <div className='card-body'>
                                <h5 className='card-title'>{strMeal}</h5>
                                <p className='card-text'>{strCategory}</p>
                                <p className='card-text text-muted'>
                                   {strArea}
                                </p>
                             </div>
                          </div>
                       );
                    }
                 )
               : null}
         </div>
      </main>
   );
}

export default Meals;
