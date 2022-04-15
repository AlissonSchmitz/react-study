import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "../../visual/views/Home"
import AboutMovie from "../../visual/views/AboutMovie"

function Rotas () {
   return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/AboutMovie" element={<AboutMovie/>}/>
      </Routes>
  </BrowserRouter>
   )
}

export default Rotas