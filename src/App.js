import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Apartment from "./components/Apartment";
import Building from "./components/Building";
import Details from "./components/Details";
import Home from "./components/Home";
import Location from "./components/Location";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import React, { useState, useEffect } from "react";
// import axios from "axios";

function App() {
  const [projectName, setProjectName] = useState("home_ground");
  // project name will be dynamic if we get the value from backend
  // useEffect(() => {
  //   axios.get("").then((response)=>{
  //     setProjectName(response.data)
  //   }).catch((error)=>{
  //     console.log(error)
  //   })
  // }, [])
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index={true} element={<Home />} />
        </Route>
        <Route path={`/${projectName}/building`}>
          <Route index={true} element={<Building />} />
          <Route index={false} path=":id/detail" element={<Details />} />
        </Route>
        <Route
          exact
          path={`${projectName}/apartment`}
          element={<Apartment />}
        />
        <Route exact path={`${projectName}/location`} element={<Location />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
