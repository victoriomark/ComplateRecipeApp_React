import React, { useContext, useEffect } from "react";
import RecipeContext from "../Context/RecipeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import "../style/category.css";
function DetailsPage() {
   useEffect(() => {
      AOS.init()
   }, []);

   const { Details } = useContext(RecipeContext);
   const {
      strTags,
      strMealThumb,
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
   } = Details;
   console.log(strIngredient1);

   return (
      <>
         <div className='container bg-black d-flex justify-content-around align-items-center  gap-2 p-2 mt-5 '>
            <div className='d-flex'>
               {
                  /* The code `location.pathname == "/details" ? (...) : (...)` is a conditional statement
           that checks if the current URL path is equal to "/details". */
                  location.pathname == "/details" ? (
                     <Link to='/home'>
                        <i className='text-info fa-solid fa-house'></i>
                     </Link>
                  ) : (
                     <Link to='/details'>
                        <i className='fa-solid fa-house'></i>
                     </Link>
                  )
               }
               <h5 className='card-title text-light'>/{strMeal}</h5>
            </div>
            <h5 className='text-center text-light'>Meals Details</h5>
         </div>
         <div
            style={{ overflow: "hidden" }}
            className='container bg-dark text-light p-4 '
         >
            <div
               data-aos='fade-left'
               data-aos-anchor='#example-anchor'
               data-aos-offset='500'
               data-aos-duration='500'
               className='container-lg  d-lg-flex gap-5'
            >
               <img
                  style={{ objectFit: "cover" }}
                  id='img_Details'
                  className='img-thumbnail col-lg-5'
                  src={strMealThumb}
                  alt=''
               />
               <div className='container bg-dark d-flex flex-column  '>
                  <h1 className='text-info'>{strMeal}</h1>
                  <h6 className='text-secondary'>{strArea} Food</h6>
                  <div className='d-flex gap-2 '>
                     <a className='link-opacity-75' href={strYoutube}>
                        <i className='fa-brands fa-youtube'></i>Tutorial
                     </a>
                     <h5>/</h5>
                     <a className='link-opacity-75' href={strSource}>
                        Source
                     </a>
                  </div>
                  <h3 className='pb-2 pt-4 fs-6 fw-bold text-info'>
                     Instraction:
                  </h3>
                  <p className='card-text text-light'>{strInstructions}</p>
               </div>
            </div>
            <h5 className='pb-2 pt-4 fs-6 fw-bold text-center text-info'>
               Ingredient:
            </h5>
            <div className='container-fluid  container-lg d-md-flex  d-lg-flex justify-content-evenly p-2'>
               <ol
                data-aos="fade-right"
                className='list-group  '>
                  <li className='text-info'>
                     <img
                        src={`https://www.themealdb.com/images/ingredients/${strIngredient1}-small.png`}
                        alt=''
                     />
                     {strIngredient1}
                  </li>

                  <li className='text-info'>
                     <img
                        src={`https://www.themealdb.com/images/ingredients/${strIngredient2}-small.png`}
                        alt=''
                     />
                     {strIngredient2}
                  </li>

                  <li className='text-info'>
                     <img
                        src={`https://www.themealdb.com/images/ingredients/${strIngredient3}-small.png`}
                        alt=''
                     />
                     {strIngredient3}
                  </li>

                  <li className='text-info'>
                     <img
                        src={`https://www.themealdb.com/images/ingredients/${strIngredient4}-small.png`}
                        alt=''
                     />
                     {strIngredient4}
                  </li>

                  <li className='text-info'>
                     <img
                        src={`https://www.themealdb.com/images/ingredients/${strIngredient5}-small.png`}
                        alt=''
                     />
                     {strIngredient5 || "🐷"}
                  </li>
               </ol>
               {/* second ol */}

               <ol 
               data-aos="fade-left"
               className='list-group  '>
                  <li className='text-info'>
                     <img
                        src={`https://www.themealdb.com/images/ingredients/${strIngredient6}-small.png`}
                        alt=''
                     />
                     {strIngredient6 || "🐷"}
                  </li>

                  <li className='text-info'>
                     <img
                        src={`https://www.themealdb.com/images/ingredients/${strIngredient7}-small.png`}
                        alt=''
                     />
                     {strIngredient7 || "🐷"}
                  </li>

                  <li className='text-info'>
                     <img
                        src={`https://www.themealdb.com/images/ingredients/${strIngredient8}-small.png`}
                        alt=''
                     />
                     {strIngredient8 || "🐷"}
                  </li>

                  <li className='text-info'>
                     <img
                        src={`https://www.themealdb.com/images/ingredients/${strIngredient9}-small.png`}
                        alt=''
                     />
                     {strIngredient9 || "🐷"}
                  </li>

                  <li className='text-info'>
                     <img
                        src={`https://www.themealdb.com/images/ingredients/${strIngredient10}-small.png`}
                        alt=''
                     />
                     {strIngredient10 || "🐷"}
                  </li>
               </ol>
            </div>
         </div>
      </>
   );
}

export default DetailsPage;
