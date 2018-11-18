import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Teamsize from "./components/slides/slide_1/teamsize";
import './styles/stylesheet.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Switch>
      		<Route exact path="/" component={Teamsize}/>
      	</Switch>
      </div>
    );
  }
}

export default App;
