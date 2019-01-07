/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Modal, Dimensions, Image, ScrollView } from 'react-native';
import BottomButtons from './components/buttons.js';
import Title from './components/title.js';

var { width, height } = Dimensions.get('window')
type Props = {};

const portugal = require('./components/images/portugal.png');

const images = [
  require('./components/images/shaka_1.jpg'),
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
  require('./components/images/shaka_13.jpg'),
  require('./components/images/shaka_14.jpg'),
  require('./components/images/shaka_15.jpg'),
  require('./components/images/shaka_16.jpg'),
  require('./components/images/shaka_17.jpg'),
  require('./components/images/shaka_18.jpg'),
  require('./components/images/shaka_19.jpg'),
  require('./components/images/shaka_20.jpg'),
  require('./components/images/shaka_21.jpg'),
  require('./components/images/shaka_22.jpg'),
  require('./components/images/shaka_23.jpg'),
  require('./components/images/shaka_24.jpg'),
  require('./components/images/shaka_25.jpg'),
  require('./components/images/shaka_26.jpg'),
  require('./components/images/shaka_27.jpg'),
  require('./components/images/shaka_28.jpg'),
  require('./components/images/shaka_29.jpg'),
  require('./components/images/shaka_30.jpg'),
  require('./components/images/shaka_31.jpg'),
  require('./components/images/shaka_32.jpg'),
  require('./components/images/shaka_33.jpg'),
  require('./components/images/shaka_34.jpg'),
  require('./components/images/shaka_35.jpg'),
  require('./components/images/shaka_36.jpg'),
];

export default class App extends Component {
  state = {
    activeImageIndex: null,
  }

  newImage = () => {
    this.setState({
      activeImageIndex: Math.floor(Math.random() * images.length)
    })
  }

  render() {
    const activeImage = images[this.state.activeImageIndex];
    if (this.state.activeImageIndex !== null) {
      return (
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.container}>
            <Image source={activeImage} style={styles.images} />
          </ScrollView>
          <BottomButtons newImage={this.newImage.bind(this)}/>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
        <Title />
         <BottomButtons newImage={this.newImage.bind(this)}/>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 70,
    alignItems: 'center',
    color: 'black',
    justifyContent: 'center',
    fontFamily: 'monospace',
  },
  images: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    backgroundColor: '#9C75F4',
  },
});
