import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Image} from 'react-native';
import images from '../App.js';


export default class ImageElement extends Component {
  render() {
    const activeImage = images[this.state.activeImageIndex];
      return (
          <ScrollView contentContainerStyle={styles.container}>
            <Image source={this.props.activeImage} style={styles.images} />
          </ScrollView>
      )
  }
}

const styles = StyleSheet.create({
    images: {
      flex: 1,
      height: null,
      width: null,
      resizeMode: 'contain',
    },
    container: {
      flex: 1,
    },
  });