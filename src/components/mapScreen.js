import React, { Component }from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import MapView from 'react-native-maps';
import { Actions } from 'react-native-router-flux'; //navigate from scene to scene
import axios from 'axios'; //Promise based HTTP client


export default class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      //default coordinate my house...
      coordinate: {
        latitude: 40.108777,
        longitude: -88.233833,
        latitudeDelta: .004,
        longitudeDelta: .004
      }
    };
    //bind functions that change state
    this.handleLocationInput = this.handleLocationInput.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }
  //change the state of the input box
  handleLocationInput(textInput) {
    this.setState({
      input: textInput
    });
  }
  //change the location state to reflect a change
  handleLocationChange(response) {
    this.setState({
      coordinate: response
    });
  }
  //submit handled on a location change
  submit(textInput) {
    //converting an address to latitude longitude. output json and input address
    axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + this.state.input.split(' ').join('') + "&key=" + MY_KEY)
    .then(response => this.updateCoordinate(response))
    .catch(error => console.log("Ajax more like Failjax: ", error))
  }
  //update the current coordinate
  updateCoordinate(response){
    //get the longitude and latitude of the first location.
    //TODO: handle multiple locations being returned.
    var location = response.data.results[0].geometry.location
    this.setState({
      coordinate: {
        latitude: location.lat,
        longitude: location.lng,
      }
    });
  }

  recycle() {
    Actions.recycle({
      coordinate: this.state.coordinate,
    });
  }

  render() {
    return (
    <View style={styles.container}>
      <MapView style ={styles.map}
        region={this.state.coordinate}
        onRegionChange={this.handleLocationChange}>
      </MapView>
      //non map views
      //text input view
      <View style={styles.textbox}>
        <TextInput
          placeholder="Enter location"
          style={styles.textboxText}
          onChangeText={this.handleLocationInput}
          value={this.state.input}
          onSubmitEditing={this.submit.bind(this)}
        />
      </View>
      //button view
      <View style={styles.button}>
        <TouchableOpacity
          onPress={this.recycle.bind(this)}>
          <Text style={styles.buttonText}> Recycle here! </Text>
        </TouchableOpacity>
      </View>
    //end container view
    </View>
    );
  };

};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#33cc33',
    marginTop: 20,
    marginBottom: 20,
    height: 50,
    width: '60%'
  },
  buttonText: {
    color: '#ffffff'
  },
  textbox: {
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 40,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: 50,
    width: '60%'

  },
  textBoxText: {
    color: '#000000',
    justifyContent: 'center'

  }
});
