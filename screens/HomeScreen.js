import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
        headerStyle: {
          backgroundColor: '#D21245',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    };

    render() {
        const {navigate} = this.props.navigation;
        return(
          <View style={styles.container}>
            <View style={styles.container}>
              <Button
                buttonStyle = {styles.button}
                title="Course List"
                onPress={() => navigate('CourseList', {name: 'Test'})}
              />
              <Button
                buttonStyle = {styles.button}
                title="Current Schedule"
                onPress={() => navigate('Schedule', {name: 'My Schedule'})}
              />
              <Button
                buttonStyle = {styles.button}
                title="4-Year-Plan"
                onPress={() => navigate('Plan', {name: 'My Plan'})}
              />
              <Button
                buttonStyle = {styles.button}
                title="Degree Requirements"
                onPress={() => navigate('Requirements', {name: 'Requirements'})}
              />
            </View>
          </View>
            
        );
    }
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#D21245',
      margin: 5,
    },
    container: {
      flex: 2,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      alignSelf: 'stretch',
    },
  });
  