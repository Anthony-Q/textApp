/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Modal, Dimensions} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.title}>Shakarez Image Generator</Text>
        <Button title="Generate New Shaka"/>
        <Button title="Save" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    textAlign: 'center',
    fontFamily: 'Helvetica',
  },
  title: {
    fontSize: 50,
    alignItems: 'center',
    color: 'black',
    justifyContent: 'center',
    fontFamily: 'Helvetica',
  }
});
