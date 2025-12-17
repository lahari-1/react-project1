import React from "react";
import Header from "../Header";
import Banner from "../Banner";
import Collections from "../Collections";
import Footer from "../Footer";
import { Gents, Ladies } from "../../data";
function MainPage(){
  console.log(Gents)
  return(
    <div>
      <Header/>
      <Banner image="/assets/GentsBanner.gif"/>
      <Collections data={Gents}/>
      <Banner image="/assets/LadiesBanner.gif"/>
      <Collections data={Ladies}/>
      <Footer/>
    </div>
  )
}
export default MainPage;