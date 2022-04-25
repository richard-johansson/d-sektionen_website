import React from "react";
 
// We use Route in order to define the different routes of our application
import { BrowserRouter, Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import HomePage from "./components/homePage";
import Member from "./components/member";
 
const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<HomePage />} />
       <Route path="/medlem" element={<Member />} />
     </Routes>
   </div>
 );
};
 
export default App;