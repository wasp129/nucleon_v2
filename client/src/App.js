import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';

import Start from "./components/slides/slide_1/start";
import Teamsize from "./components/slides/slide_2/teamsize";
import Competence from "./components/slides/slide_3/competence";
import Proximity from "./components/slides/slide_4/proximity";
import Bureaucracy from "./components/slides/slide_5/bureaucracy";
import Culture from "./components/slides/slide_6/culture";
import MethodUserInvovlement from "./components/slides/slide_7/userinvolvement";
import MethodReleaseProcess from "./components/slides/slide_8/releaseprocess";
import MethodQualityAssurance from "./components/slides/slide_9/qualityassurance";
import MethodMonths from "./components/slides/slide_10/months";

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
            <Route exact path="/bureaucracy" component={Bureaucracy}/>
            <Route exact path="/culture" component={Culture}/>
            <Route exact path="/method/userinvolvement" component={MethodUserInvovlement}/>
            <Route exact path="/method/releaseprocess" component={MethodReleaseProcess}/>
            <Route exact path="/method/qualityassurance" component={MethodQualityAssurance}/>
        		<Route exact path="/method/months" component={MethodMonths}/>
        	</Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
