// import React,{createContext,useState,useEffect} from 'react'
// import { Helmet } from "react-helmet";
// import ReactSwitch from "react-switch";
import React from 'react'
import {About,Footer,Header,Skills,Work} from './container'
import { Navbar } from './components';
// ...existing code...
// import DarkMode from './components/Darkmode/Darkmode';
import './App.scss';
// import {keepTheme} from './components/utils/themes'
// import Particles from 'react-tsparticles';
// import particles from './container/particles/particles';
// export const ThemeContext = createContext(null);
function App  ()  {
  // useEffect(() => {
  //   keepTheme()
  // })

  // const [theme, setTheme] = useState("dark");

  // const toggleTheme = () => {
  //   setTheme((curr) => (curr === "light" ? "dark" : "light"));
  // };
  return (
    // <ThemeContext.Provider value={{ theme, toggleTheme }}>
    
    <div className='app' >
      
      

        <Navbar/>

        
        
        <Header/>
        {/* <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div> */}
        
        <About/>
         
        
         <Skills/> 
        <Work/>
        
        <Footer/>
      
    </div>
    // </ThemeContext.Provider>
    
    
  );
}

export default App;