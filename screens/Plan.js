import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default class Plan extends Component {
    static navigationOptions = {
        title: '4-Year Plan',
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
                <Text>Your Plan</Text>
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