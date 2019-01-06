import React, {Component} from 'react';
import {Button, View, StyleSheet} from 'react-native';


export default class BottomButtons extends Component {
  render() {
      return (
          <View style={styles.container}>

            <View style={styles.buttonContainer}>
              <Button title="new shaka" />
            </View>

            <View style={styles.buttonContainer}>
              <Button title="save" onPress={this.props.newImage}/>
            </View>

          </View>
      )
  }
}



const styles = StyleSheet.create({
    container: {
        bottom: 0,
        position: 'absolute',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:  'center',
    },
    buttonContainer: {
      flex: 1,
    },
});