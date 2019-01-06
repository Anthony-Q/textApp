import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';


export default class Title extends Component {
  render() {
      return (
        <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Shakarez{"\n"}Image{"\n"}Generator{"\n"}</Text>
        <Text>The largest and most exclusive collection of Shakarez images on the internet.</Text>
        <Text>Come collect your favorite images and relive the most magical moments of this fan-favorite
          Brazilian content creator.
        </Text>
      </ScrollView>
      )
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
    container: {
      flex: 1,
    },
  });