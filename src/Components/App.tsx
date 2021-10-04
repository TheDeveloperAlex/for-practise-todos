import React, { useEffect, useState } from "react";
import AppBar from "./AppBar/AppBar";
import Home from "./pages/todos/Home/Home";
import Todos from "./pages/todos/Todos";
import ContentContainer from "./Common/Container/ContentContainer/ContentContainer";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import themes from "./themes/themes";
import { GlobalStyles, Wrapper } from "./themes/GlobalStyled";
import Toggle from "react-toggle";
import "react-toggle/style.css"
import 'material-icons/iconfont/material-icons.css'
// import { Wrapper } from "./AppBar/AppBarStyled";

// import { store, persistor } from "./redux/store";

// interface

const App = () => {
  const [currentTheme, setCurrentTheme] = useState("dark");
  const changeTheme = () => {
    currentTheme === "light"
      ? setCurrentTheme("dark")
      : setCurrentTheme("light");
    // console.log(currentTheme);
    currentTheme === "dark"
      ? setCurrentTheme("light")
      : setCurrentTheme("dark");
    localStorage.setItem("theme", currentTheme);
  };
  // useEffect(() => {
  //   const storageTheme: string | null = localStorage.getItem("theme");
  //   if(storageTheme === "light") {
  //     setCurrentTheme("dark");
  //     if(document.querySelector('.react-toggle')){
  //       document.querySelector('.react-toggle')!.classList.remove("react-toggle--checked")
  //     }
  //   }
  //   if(storageTheme === "dark") {
  //     setCurrentTheme("light");
  //     if(document.querySelector('.react-toggle')){
  //       document.querySelector('.react-toggle')!.classList.add("react-toggle--checked")
  //     }
      
  //     // react-toggle--checked
  //   }
  //   if(storageTheme === null) {
  //     setCurrentTheme("dark");
  //     if(document.querySelector('.react-toggle')){
  //       document.querySelector('.react-toggle')!.classList.remove("react-toggle--checked")
  //     }
  //   }
    
  // }, [localStorage.getItem("theme")])

  // useEffect(() => {
  //   if(currentTheme === " dark") {
  //     if(document.querySelector('.react-toggle')){
  //       document.querySelector('.react-toggle')!.classList.remove("react-toggle--checked")
  //     }
  //   }

  //   if(currentTheme === "light") {
  //     if(document.querySelector('.react-toggle')){
  //       document.querySelector('.react-toggle')!.classList.add("react-toggle--checked")
  //     }
  //   }
  // }, [currentTheme])
  return (
    <>
      <ThemeProvider
        theme={currentTheme === "light" ? themes.dark : themes.light}
      >
        {/* <ContentContainer theme={currentTheme === "light" ? themes.dark : themes.light}> */}
        <GlobalStyles />
        <div>
          <Wrapper>
            <Toggle
              // defaultChecked={this.state.soupIsReady}
              className="custom-classname"
              id="Toggle"
              icons={{
                checked: <span className="material-icons sunIcon">wb_sunny</span>,
                unchecked: <span className="material-icons moonIcon">shield_moon</span>,
              }}
              onChange={changeTheme}
            />
          </Wrapper>
          {/* <button type="button" onClick={changeTheme}>
            change Theme
          </button> */}
          <AppBar theme={themes.light} />
          <Switch>
            <Route path="/" exact>
              <Home theme={themes.light} />
            </Route>
            <Route path="/todos">
              <Todos theme={themes.light} />
            </Route>
          </Switch>
        </div>

        {/* </ContentContainer> */}
      </ThemeProvider>
    </>
  );
};

export default App;
