import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';

import Start from "./components/slides/slide_1/start";
import Teamsize from "./components/slides/slide_2/teamsize";
import Competence from "./components/slides/slide_3/competence";
import Proximity from "./components/slides/slide_4/proximity";

import store from "./store/index";

import './styles/stylesheet.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
        	<Switch>
        		<Route exact path="/" component={Start}/>
        		<Route exact path="/teamsize" component={Teamsize}/>
            <Route exact path="/competence" component={Competence}/>
        		<Route exact path="/proximity" component={Proximity}/>
        	</Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
