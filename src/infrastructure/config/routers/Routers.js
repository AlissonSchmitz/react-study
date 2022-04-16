import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

//components
import Navigator from "../../visual/components/NavigatorComponent";

//views
import Series from "../../visual/views/Series";
import Movies from "../../visual/views/Movies";
import Documentaries from "../../visual/views/Documentaries";
import Home from "../../visual/views/Home";
import AboutMovie from "../../visual/views/AboutMovie";


function Rotas () {
   return(
    <BrowserRouter>
      <Navigator/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/AboutMovie" element={<AboutMovie/>}/>
        <Route path="/Series" element={<Series/>}/>
        <Route path="/Movies" element={<Movies/>}/>
        <Route path="/Documentaries" element={<Documentaries/>}/>
      </Routes>
  </BrowserRouter>
   )
}

export default Rotas