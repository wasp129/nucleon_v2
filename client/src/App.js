import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Start from "./components/slides/slide_1/start";
import Teamsize from "./components/slides/slide_2/teamsize";
import Competence from "./components/slides/slide_3/competence";

import './styles/stylesheet.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Switch>
      		<Route exact path="/" component={Start}/>
      		<Route exact path="/page2" component={Teamsize}/>
      		<Route exact path="/page3" component={Competence}/>
      	</Switch>
      </div>
    );
  }
}

export default App;
