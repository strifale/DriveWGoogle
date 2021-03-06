import React from 'react';
import { StyleSheet, Text, View, ScrollView, AppRegistry } from 'react-native';
import firebase from 'firebase';

import SignCont from './SignCont.js';

import MapView from 'react-native-maps'

const config = {
    databaseURL: "https://divew-89181.firebaseio.com",
    projectId: "divew-89181",
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export default class App extends React.Component {
  render() {
    return (
      <View>
        <SignCont
          containerStyles = {sideSignContStyles.item}
        />
      </View>
    );
  }
}


const mainSignContTyles = StyleSheet.create({
  item: {
    flexDirection : 'row'
  }
});

const sideSignContStyles = StyleSheet.create({
  item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      justifyContent: 'center',
      top: 30,
      width: 350,
      height: 350,
      padding: 0,
      margin: 10,
      borderColor: '#000000',
      borderWidth: 2,
      backgroundColor: '#ffffff'
    }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('DriveWGoogle', () => App);
