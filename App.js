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
export default class App extends Component<Props> {

  state = {
    modalVisible: false,
    modalImage: require('./components/images/shaka_30.jpg'),
    images: [
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
    ]
  }

  modalToggle(visible, imageKey) {
    this.setState({
      modalImage: this.state.images[imageKey]
    })
    this.setState({
      modalVisible: true
    })
  }

  getImage() {
    return this.state.modalImage;
  }



  render() {
    let images = this.state.images.map((val, key) => {
      return <TouchableHighlight key={key} onPress={() => this.modalToggle(true, key)}>
      <View style={styles.imagewrap}>
        <ImageElement imgsource={val}></ImageElement>
      </View>
      </TouchableHighlight>

    })
    return (
      <View style={styles.container}>
        {images}
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
    fontSize: 50,
    alignItems: 'center',
    color: 'black',
    justifyContent: 'center',
    fontFamily: 'Helvetica',
  }
});
