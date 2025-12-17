import React from "react";
function Collections({data}){
  return(
    <div className="collection">
      <h2>{data.title}</h2>
      <div className="grid">
        {
          data.products.map((item,index)=>(
            <div key={index} className="card">
            <img src={item.image} alt="fashion"/>
            <p>{item.price}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default Collections;