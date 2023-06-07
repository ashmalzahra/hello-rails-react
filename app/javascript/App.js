import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import Greeting from "./component/Greeting";

const App = () => {
  return <>
    <h1>This is my first Rails React App</h1>
    <Routes>
      <Route path="/" element={<Greeting />}/>
    </Routes>
  </>
}

export default App;