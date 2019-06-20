import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SectionOne from './components/Section1';
import SectionTwo from './components/Section2';
import ProjectPage from './components/ProjectPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/project/:id"
            render={rtProps =>
              <React.Fragment>
                <ProjectPage></ProjectPage>
              </React.Fragment>} />
          <Route path="/"
            render={rtProps =>
              <React.Fragment>
                <Header></Header>
                <SectionOne></SectionOne>
                <SectionTwo></SectionTwo>
              </React.Fragment>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
