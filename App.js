/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Modal, Dimensions, Image, TouchableHighlight} from 'react-native';
import ImageElement from './components/imageElement.js';

type Props = {};

const images = [
  require('./components/images/shaka_30.jpg'),
  require('./components/images/shaka_2.jpg'),
  require('./components/images/shaka_3.jpg'),
  require('./components/images/shaka_4.jpg'),
  require('./components/images/shaka_5.jpg'),
  require('./components/images/shaka_6.jpg'),
  require('./components/images/shaka_7.jpg'),
  require('./components/images/shaka_8.jpg'),
  require('./components/images/shaka_9.jpg'),
  require('./components/images/shaka_10.jpg'),
  require('./components/images/shaka_11.jpg'),
  require('./components/images/shaka_12.jpg'),
];

export default class App extends Component {

  state = {
    activeImageIndex: null,
  }

  newImage = () =>{
      this.setState({
        activeImageIndex: Math.floor(Math.random() * images.length)
      })
  }

  render() {
    const activeImage = images[this.state.activeImageIndex];
    return (
      <View>
      <Text style={styles.title}>Shakarez Image Generator</Text>
       <Button title="new shaka" style={styles.button}
       onPress= {this.newImage}/>
       <Image source={activeImage} />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#eee',
  },
  imagewrap: {
    margin: 2,
    padding: 2,
    height: 200,
    width: 100,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 80,
    alignItems: 'center',
    color: 'black',
    justifyContent: 'center',
    fontFamily: 'Helvetica',
  }
});
