import React,{useState} from "react";
import Navbar from './Components/Navbar/navBar'



function App() {
  const[theme,setTheme]=useState('light');

  return (
    <div className="NavBar">
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  );
}

export default App;
