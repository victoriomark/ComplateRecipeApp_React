import React, { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import "./style/hero.css";
import RecipeContext from "./Context/RecipeContext";
function Hero() {
   const {SetText,DataText} = useContext(RecipeContext)
  
   return (
      <>
         <section
            id='hero_container'
            className='container-fuid flex-column gap-3 '
         >
            <div className='container d-flex gap-2 col-lg-3'>
               <input
               value={DataText}
                  onChange={(event) => SetText(event.target.value)}
                  className='form-control '
                  type='text'
                  placeholder='Search recipe here...'
               />
               <button className='btn btn-dark'>
                  <CiSearch />
               </button>
            </div>
            <div className='d-flex flex-column gap-2'>
               <h5 className='card-title'>What are your favorite cuisines?</h5>
               <p>PERSONALIZE YOUR EXPERIENCE</p>
            </div>
         </section>
      </>
   );
}

export default Hero;
