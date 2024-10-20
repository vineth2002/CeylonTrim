import React,{useState} from "react";
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/navBar';
import SignIn from "./pages/signin/SignIn";
import Register from "./pages/register/Register";
import Owner from "./pages/owner/Owner";
import User from "./pages/reg_user/User";
function App() {
   const[theme,setTheme]=useState('light');

  // return (
  //    <div className={`container ${theme}`}>
  //       <Navbar theme={theme} setTheme={setTheme}/> 
  //       <SignIn/>
  //    </div>
  //  );
  return (
    <Router>
    {/* <div className={`container ${theme}`}>
         <Navbar theme={theme} setTheme={setTheme}/> 
       </div> */}
        <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reg_user" element={<User />} />
            <Route path="/owner" element={<Owner />} />
        </Routes>
    </Router>
);
 }


export default App;
