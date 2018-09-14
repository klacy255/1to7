import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import { Actions } from 'react-native-router-flux'; //navigate from scene to scene
import axios from 'axios'; ////Promise based HTTP client


export default class SubmissionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      type: this.props.type,
      latitude: this.props.latitude,
      longitude: this.props.longitude
    }
  }

  backToMap(){
    Actions.map({
      latitude: this.state.latitude,
      longitude: this.state.longitude
    });
  }

  render() {
    return(
    <View style={styles.container}>
      <View style={styles.textbox}>
        <Text style={styles.text}>Thanks!</Text>
      </View>
      //submit button
      <View style={styles.button}>
        <TouchableOpacity
          onPress={this.backToMap.bind(this)}>
          <Text style={styles.buttonText}> Back to map </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  }
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    height: 60,
    fontSize: 30,
    color: '#000000'
  },
  button: {
    backgroundColor: '#33cc33',
    justifyContent: 'center',
    marginBottom: 20,
    alignItems: 'center',
    borderRadius: 10,
    height: 50,
    width: '60%'
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 24

  }
});
