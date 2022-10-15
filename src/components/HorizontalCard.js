import React, { useEffect, useState } from "react";

// import axios from "../../Axios";
// import AOS from "aos";
// import "aos/dist/aos.css";
import "../styles/horizontal.css";
// import "../../../styles/navigation.css";

export default function HorizontCards(props) {
  
 
  return (
    <>
      <div class="row flex-nowrap overflow d-flex justify-content-center mb-5">
        {props.categories
          ? props.categories.map((card, index) => {
              return (
                <>
               
                  <div class="col-sm-3 col-4 col-md-3" >
                    <div className="card p-1 shadow rounded " data-aos="fade-right">
                      <div className=" ">
                    <p class="card-text p-2 text-center" >{card.catnameeng}</p>
                    </div>
                    <a class="link" href={`#${card.catnameeng}`}>
                 
              <img  style={{ "width":"70px", "height":"70px" }} className="card-img-top horizontal-image pb-2"
               src={card.file} alt="Card image cap" />
                    
                    </a>
                    </div>
                  </div>
                 
                </>
               );
            })
          : ""} 
      </div>
    </>
  );
}
