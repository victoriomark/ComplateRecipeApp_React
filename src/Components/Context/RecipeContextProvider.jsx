import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RecipeContext from "./RecipeContext";

export default function RecipeContextProvider({ children }) {
   const [RecipeData, SetRecipeData] = useState([]);
   const [DataText, SetText] = useState("");
   const [Details, SetDetails] = useState({});
   const navigate = useNavigate();

   const HandleCateryName = ( strCategory) =>{
    SetText(strCategory)
   
   }
   // Function to Cliking Card
   const HandleDetails = (
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
   ) => {
      // onbject for HanldleDetails
      const ValueDetails = {
         idMeal,
         strMealThumb,
         strTags,
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
      };
      // set ValueDetails object in SetDetails() useState
      SetDetails(ValueDetails);
      // Navigate to the details page
      navigate("/details");
   };

   return (
      <RecipeContext.Provider
         value={{
            SetText,
            DataText,
            SetRecipeData,
            RecipeData,
            HandleDetails,
            Details,
            HandleCateryName
         }}
      >
         {children}
      </RecipeContext.Provider>
   );
}
