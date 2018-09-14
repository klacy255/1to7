import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import { Scene, Router, Actions } from 'react-native-router-flux';  //Define all  routes in one React component


import axios from 'axios'; //Promise based HTTP client

//Components
import MapScreen from './src/components/mapScreen.js';
import SubmissionScreen from './src/components/submissionScreen.js';
import RecycleLocationScreen from './src/components/recycleLocationScreen.js';


export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
       <Scene key="root">
         <Scene
           key="map"
           component={MapScreen}
           initial
           hideNavBar={true}

         />
         <Scene
           key="recycle"
           component={RecycleLocationScreen}
           hideNavBar={true}

         />
         <Scene
           key="submission"
           component={SubmissionScreen}
           hideNavBar={true}

         />
       </Scene>
     </Router>
    );
  }
};
