/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Modal, Dimensions, Image, ScrollView} from 'react-native';
import ImageElement from './components/imageElement.js';

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

  newImage = () =>{
      this.setState({
        activeImageIndex: Math.floor(Math.random() * images.length)
      })
  }

  render() {
    const activeImage = images[this.state.activeImageIndex];

    if (this.state.activeImageIndex !== null) {
      return(
        <View>
          <ScrollView>
          <Image source={activeImage} style={styles.images}/>
          </ScrollView>

          <View style={styles.footer}>
          <Button title="new shaka" style={styles.button}
       onPress= {this.newImage}/>
       <Button title="save" style={styles.button} />

          </View>
        </View>
      )
    } else {
    return (
      <View>
        <ScrollView>
        <Text style={styles.title}>Shakarez Image Generator</Text>
        </ScrollView>
        
        <View style={styles.footer}>
        <Button title="new shaka" style={styles.button}
       onPress= {this.newImage}/>
       <Button title="save" style={styles.button} />
        </View>
      </View>
      );
    }
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
    fontFamily: 'sans-serif-condensed',
  },
  images: {
    height: 600,
    width: 450,
   resizeMode: 'stretch',
  },
  footer: {
    position: 'absolute',
    height: 40,
    bottom: 0,
 }
});
