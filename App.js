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
var { width, height } = Dimensions.get('window')
type Props = {};

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
          <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Shakarez{"\n"}Image{"\n"}Generator{"\n"}</Text>
            <Text>The largest and most exclusive collection of Shakarez images on the internet.</Text>
            <Text>Come collect your favorite images and relive the most magical moments of this fan-favorite
              Brazilian content creator.
            </Text>
          </ScrollView>

         <BottomButtons newImage={this.newImage.bind(this)}/>

        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 80,
    alignItems: 'center',
    color: 'black',
    justifyContent: 'center',
    fontFamily: 'monospace',
  },
  images: {
    height: 600,
    width: 500,
    resizeMode: 'contain',
    alignSelf: 'stretch',
  },
  footer: {
    width: "100%",
    position: 'absolute',
    bottom: 0,
  },
  container: {
    flex: 1,

  },
  button: {
    alignSelf: "stretch",
  }
});
