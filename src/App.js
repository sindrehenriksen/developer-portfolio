import React from "react";
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "./App.scss";
import Main from "./containers/Main";
import Resume from "./containers/resume/Resume";
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'G-6BNK7B8VFT'
}

TagManager.initialize(tagManagerArgs)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
