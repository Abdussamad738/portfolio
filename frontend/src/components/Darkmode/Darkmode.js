// // // import React from "react";
// // // import "../Darkmode/Darkmode.css";
// // // import "./../../App.scss";
// // // import "./../../index.css";
// // // const DarkMode = () => {
// // //   let clickedClass = "clicked";
// // //   const body = document.body;
// // //   const lightTheme = "light";
// // //   const darkTheme = "dark";
// // //   let theme;

// // //   if (localStorage) {
// // //     theme = localStorage.getItem("theme");
// // //     console.log(theme);
// // //   }

// // //   if (theme === lightTheme || theme === darkTheme) {
// // //     body.classList.add(theme);
    
// // //   } else {
// // //     body.classList.add(lightTheme);
// // //   }

// // //   const switchTheme = (e) => {
// // //     if (theme === darkTheme) {
// // //       body.classList.replace(darkTheme, lightTheme);
// // //       e.target.classList.remove(clickedClass);
// // //       localStorage.setItem("theme", "light");
// // //       console.log(theme);
// // //       theme = lightTheme;
// // //     } else {
// // //       body.classList.replace(lightTheme, darkTheme);
// // //       e.target.classList.add(clickedClass);
// // //       localStorage.setItem("theme", "dark");
// // //       console.log(theme,body.classList);
// // //       theme = darkTheme;
// // //     }
// // //   };

// // //   return (
// // //     <button
// // //       className={theme === "dark" ? clickedClass : ""}
// // //       id="darkMode"
// // //       onClick={(e) => switchTheme(e)}
// // //     ></button>
// // //   );
// // // };

// // // export default DarkMode;

// import React, { useState } from "react";
// import "./Darkmode.css";
// import styled, { ThemeProvider } from "styled-components";
// import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";

// const StyledApp = styled.div`
//   color: ${(props) => props.theme.fontColor};
// `;

// function DarkMode() {
//   const [theme, setTheme] = useState("light");

//   const themeToggler = () => {
//     theme === "light" ? setTheme("dark") : setTheme("light");
//   };

//   return (
//     <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
//       <GlobalStyles />
//       <StyledApp>
//         Hello World
//         <button onClick={() => themeToggler()}>Change Theme</button>
//       </StyledApp>
//     </ThemeProvider>
//   );
// }

// export default DarkMode;

// import React, { useEffect, useState } from 'react';
// import './Darkmode.css';
// import { setTheme } from '../utils/themes';

// function Darkmode() {
//     // false = dark mode because of the way I wrote the CSS
//     const [active, setActive] = useState(false)
//     // the opposite, for screenreaders
//     const [ariaActive, setAriaActive] = useState(true)
//     let theme = localStorage.getItem('theme')

//     const changeThemeAndToggle = () => {
//       if (localStorage.getItem('theme') === 'theme-dark') {
//         setTheme('theme-light')
//         setActive(true)
//         setAriaActive(false)
//       } else {
//         setTheme('theme-dark')
//         setActive(false)
//         setAriaActive(true)
//       }
//     }

//     const handleOnClick = () => {
//       changeThemeAndToggle()
//     }

//     const handleKeypress = e => {
//       if (e.code === "Enter") {
//         changeThemeAndToggle()
//       }
//     }

//     useEffect(() => {
//       if (localStorage.getItem('theme') === 'theme-dark') {
//         setActive(false)
//         setAriaActive(true)
//       } else if (localStorage.getItem('theme') === 'theme-light') {
//         setActive(true)
//         setAriaActive(false)
//       }
//     }, [theme])

//     return (
//       <div className="container--toggle">
//         <input aria-label="dark mode toggle" role="switch" aria-checked={ariaActive} onKeyPress={handleKeypress} type="checkbox" id="toggle" className="toggle--checkbox" onClick={handleOnClick} checked={active} readOnly />
//         <label htmlFor="toggle" className="toggle--label">
//           <span className="toggle--label-background"></span>
//           dark mode toggle
//         </label>
//       </div>
//     )
// }

// export default Darkmode;