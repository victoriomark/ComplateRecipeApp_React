import axios from "axios";
import { Routes, Route } from "react-router-dom";
import HeaDer from "./Components/HeaDer";
import Hero from "./Components/Hero";
import Meals from "./Components/Meals";
import Categories from "./Components/Categories";
import { useContext, useEffect } from "react";
import RecipeContext from "./Components/Context/RecipeContext";
import DetailsPage from "./Components/Pages/DetailsPage";

function App() {
   const { DataText, SetRecipeData } = useContext(RecipeContext);

   useEffect(() => {
      axios
         .get(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${DataText}`
         )
         .then((Data) => SetRecipeData(Data.data.meals));
   }, [DataText, SetRecipeData]);

   return (
      <>
         <HeaDer />
         <Hero />
         <Routes>
            <Route path='/' element={DataText ? <Meals /> : <Categories />} />
            <Route
               path='home'
               element={DataText ? <Meals /> : <Categories />}
            />
            <Route path='details' element={<DetailsPage />} />
         </Routes>
      </>
   );
}

export default App;
