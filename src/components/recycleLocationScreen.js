import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button  } from 'react-native';
import { Actions } from 'react-native-router-flux'; //navigate from scene to scene
import axios from 'axios'; ////Promise based HTTP client

export default class RecycleLocationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '',
    }
    this.handleNameInput= this.handleNameInput.bind(this);
    this.handleTypeInput= this.handleTypeInput.bind(this);
  }

  handleNameInput(textInput) {
    this.setState({
      name: textInput
    });
  }

  handleTypeInput(textInput) {
    this.setState({
      type: textInput
    });
  }

  submission() {
    Actions.submission({
      name: this.state.name,
      type: this.state.type,
      coordinate: this.props.coordinate,
    });

  }

  render() {
    return(
    <View style={styles.container}>
      //Name of recycling spot
      <View style={styles.textbox}>
        <TextInput
          placeholder="Name this recycling spot"
          style={styles.textboxText}
          onChangeText={this.handleNameInput}
          value={this.state.name}
        />
      </View>
      //type of recycling
      <View style={styles.textbox}>
        <TextInput
          placeholder="Type of Recycling (paper, plastic, all)"
          style={styles.textboxText}
          onChangeText={this.handleTypeInput}
          value={this.state.type}
        />
      </View>
      //submit button
      <View style={styles.button}>
        <TouchableOpacity
          onPress={this.submission.bind(this)}>
          <Text style={styles.buttonText}> Submit </Text>
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
  textbox: {
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    height: 60,
    width: '80%'
  },
  textBoxText: {
    color: '#000000'
  },
  button: {
    backgroundColor: '#33cc33',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    borderRadius: 10,
    height: 40,
    width: '60%'
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 24

  }
});
