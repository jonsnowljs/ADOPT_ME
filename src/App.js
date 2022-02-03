import React, { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import ThemeContext from "./ThemeContext";
import { SiDatadog } from "react-icons/si";
;


const App = () => {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
      <div className="p-0 m-0">
        <Router>
          <header
            className="font-sans w-full mb-10 text-center"
          >
            <Link
              to="/"
              className=" text-7xl font-semibold p-7 text-blue-400 hover:text-blue-800"
            >
              <h1 className="flex items-center justify-center ">
                Adopt Me!
                <SiDatadog />
              </h1>
            </Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              <Details theme={theme} />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
