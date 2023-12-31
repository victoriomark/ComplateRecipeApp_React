import React from "react";
import Logo from "./logo/logo.png";
function HeaDer() {
   return (
      <>
         <header className='container-fluid  sticky-top d-flex align-items-center justify-content-between'>
            <div>
               <img
                  style={{
                     width: "70px",
                     height: "70px",
                     borderRadius: "50%",
                    scale :"1.2"
                  }}
                  src={Logo}
                  alt=''
               />
            </div>
            <ul id="Social" className="d-flex gap-3  ">
               <li>
                  <a href='#'>
                     <i class='fa-brands fa-facebook'></i>
                     <span>Facebook</span>
                  </a>
               </li>
               <li>
                  <a href='#'>
                   <i class="fa-brands fa-youtube"></i>
                   <span>Youtube</span>
                  </a>
               </li>
               <li>
                  <a href='#'>
                   <i class="fa-brands fa-instagram"></i>
                  </a>
               </li>
            </ul>
         </header>
      </>
   );
}

export default HeaDer;
