import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Text, Image} from 'react-native';
const portugal = require('./images/portugal.png');


export default class Title extends Component {
  render() {
      return (
        <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Shakarez{"\n"}Image{"\n"}Generator{"\n"}</Text>
        <Image style={styles.icon} source = {portugal}/>
        
        <Text style={styles.about}>The largest and most exclusive collection of Shakarez images on the internet.</Text>
        <Text style={styles.about}>Come collect your favorite images and relive the most magical moments of this fan-favorite,
          Brazilian content creator.</Text>
       
      </ScrollView>
      )
    }
}

const styles = StyleSheet.create({
    title: {
      flex: 5,
        fontSize: 70,
        color: 'black',
        fontFamily: 'monospace',
        textAlign: 'center',
      },
    container: {
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    about: {
      flex: 1,
      textAlign: 'center',
      fontSize: 20,
      color: 'black',
      padding: 1,
    },
  });