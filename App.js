/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Modal, Dimensions, Image} from 'react-native';
import ImageElement from './components/imageElement.js';

type Props = {};
export default class App extends Component<Props> {

  state = {
    modalVisible: false,
    modalImage: require('./components/images/shaka_1.jpg'),
    images: [
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
      return <Image key={key} onPress={() => this.modalToggle(true, key)}>
      <View style={styles.imagewrap}>
        <ImageElement imgsource={val}></ImageElement>
      </View>
      </Image>
      
    })
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
