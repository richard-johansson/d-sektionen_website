import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// import snackBar context from lib
import { SnackbarProvider } from "notistack";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import HomePage from "./components/homePage";
import Member from "./components/member";
import NewStudents from "./components/newStudents";
import Logging from "./components/logging";
import BookCar from "./components/bookCar";
 
const App = () => {
 return (
   <div>
     <SnackbarProvider maxSnack={1}>
     <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/sokande" element={<NewStudents />} />
          <Route path="/medlem" element={<Member />} />
          <Route path="/medlem/logg" element={<Logging />} />
          <Route path="/medlem/boka" element={<BookCar />} />
        </Routes>
     </SnackbarProvider>
   </div>
 );
};

export default App;