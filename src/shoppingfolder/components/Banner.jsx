import React from "react";
function Banner({image}){
  return(
    <div className="bannerSection">
       <div className="bannerBox">
        <img src={image} alt="banner"/>
       </div>
    </div>
  )
}
export default Banner;