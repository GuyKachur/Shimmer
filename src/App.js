import React from "react";

import "./App.css";
//user imports
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import Upload from "./Components/Upload";
import ImageBox from "./Components/ImageBox"
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/upload">
          <Upload />
        </Route>
        <Route exact path="/">
          <Gallery />
        </Route>
        <Route exact path="/image/:id">
          <ImageBox/>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
