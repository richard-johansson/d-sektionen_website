import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import HomePage from "./components/homePage";
import Member from "./components/member";
import NewStudents from "./components/newStudents";
import Logging from "./components/logging";
 
const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<HomePage />} />
       <Route path="/sokande" element={<NewStudents />} />
       <Route path="/medlem" element={<Member />} />
       <Route path="/medlem/logg" element={<Logging />} />
     </Routes>
   </div>
 );
};

export default App;