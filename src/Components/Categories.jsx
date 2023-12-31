import React, { useContext, useEffect } from "react";
import axios from "axios";
import './style/category.css'
import RecipeContext from "./Context/RecipeContext";
function Categories() {
   const {HandleCateryName} = useContext(RecipeContext)
   const [categories, setCategories] = React.useState([]);
   useEffect(() => {
      axios
         .get("https://www.themealdb.com/api/json/v1/1/categories.php")
         .then((Data) => {
            setCategories(Data.data.categories);
         });
   }, []);
   return (
      <>
         <main className='cotainer-fluid'>
            <div className="container">
               <h2 className="text-secondary text-center p-2 fw-bold  ">CATEGORIES</h2>
            </div>
            <div className='row gap-2  justify-content-center align-items-center '>
               {categories
                  ? categories.map(
                       ({ idCategory, strCategory, strCategoryThumb }) => {
                          return (
                             <div onClick={() => HandleCateryName( strCategory)} style={{width: "18rem"}} key={idCategory} className='card col-10 bg-dark   col-lg-2'>
                                <img src={strCategoryThumb} className="card-img-top" alt={strCategory} />
                                <div className='card-body'>
                                   <h5 className='card-title text-secondary fw-bold'>
                                      {strCategory}
                                   </h5>
                                </div>
                             </div>
                          );
                       }
                    )
                  : alert("Loading...")}
            </div>
         </main>
      </>
   );
}

export default Categories;
