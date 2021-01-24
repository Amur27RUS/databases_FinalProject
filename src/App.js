import './App.css';
import React from "react";
import Sidebar from "./Components/Sidebar";
import Monitor from "./Components/Monitor";
import {BrowserRouter as Router} from "react-router-dom";

function App() {

    //БИБЛИОТЕКА С КОМПОНЕНТАМИ: https://reactstrap.github.io/components/dropdowns/

  return (
      <Router>
      <div>
        <div id={'title'}>
            {/*<div className="energy">*/}
            {/*    <div className="bolt"/>*/}
            {/*    <div className="bolt"/>*/}
            {/*</div>*/}
          Dyson sphere monitor
        </div>
        <Sidebar />
        <Monitor />
      </div>
      </Router>
  );
}

export default App;
