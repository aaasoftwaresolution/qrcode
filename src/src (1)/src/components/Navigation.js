import React from "react";
import "../styles/navigation.css";
import { useState, useEffect } from "react";


export default function NavigationComponent(props) {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > 50) { // if scroll down hide the navbar
        setShow(false); 
      } else { // if scroll up show the navbar
        setShow(true);  
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    }
  };
    
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);
 
  return (
    <>
  
    <div className={`container3 fixed-top ${show && 'hidden'}`}>
      
    
      <div className="nav-pills "  id="navbar-example2" >
        <div className="d-flex justify-content-center ">
        <div class="row flex-nowrap navigationflow  ">
        
        { props.categories ? props.categories.map( (cat,index) => { 
          
          return(
            
        <div class="col-4 col-lg-4 col-sm-4 col-md-4 d-flex justify-content-center">
          <a href={`#${cat.catnameeng}`} style={{textDecoration:"none", fontWeight:"700"}} className="font-color">
          {cat.catnameeng} 
          </a>
        </div>)
}): "fff"}
        
        {/* <div class="col-3 col-lg-3 col-sm-3 col-md-3 ">
          <a class="link " href="#list-item-2">
            Pizza
          </a>
        </div>
        <div class="col-3 col-lg-3 col-sm-3 col-md-3">
          <a class="link" href="#list-item-3">
            Pasta
          </a>
        </div>
        <div class="col-3 col-lg-3 col-sm-3 col-md-3">
          <a class="link" href="#list-item-4">
            Burgers
          </a>
        </div>
        <div class="col-3 col-lg-3 col-sm-3 col-md-3">
          <a class="link" href="#list-item-5">
            Beverages
          </a>
        </div>
        <div class="col-3 col-lg-3 col-sm-3 col-md-3">
          <a class="link" href="#list-item-6">
            Drinks
          </a>
        </div> */}
        
        

        
      </div>
        </div>
      
      </div>
      
      

    
    </div>
  
  </>
  );
}
