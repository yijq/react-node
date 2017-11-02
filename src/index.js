import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'; 
import IndexPage from "./pages/index";
import DetailPage from "./pages/detail";

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={IndexPage} />
            <Route path="/detail/:id" component={DetailPage} />
        </div>
    </Router>
    ,  
    document.getElementById("app")
)

