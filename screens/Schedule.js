import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default class Schedule extends Component {
    static navigationOptions = {
        title: 'Your Schedule',
        headerStyle: {
          backgroundColor: '#D21245',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    };
    render() {
        return(
            <View style={styles.container}>
                <Text>Your Schedule</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      alignSelf: 'stretch',
    },
  });