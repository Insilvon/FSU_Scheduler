import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class CourseInformation extends Component {
    static navigationOptions = {
        title: 'Detailed Course Information',
        headerStyle: {
          backgroundColor: '#D21245',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    };
    render() {
        const class_title = this.props.navigation.state.params.class_title;
        const class_number = this.props.navigation.state.params.class_number;
        const professor = this.props.navigation.state.params.professor;
        return(
            <View style={styles.container}>
                <View>
                    <Text>The Course Title: {class_title}</Text>
                </View>
                <View>
                    <Text>The Course Number {class_number}</Text>
                </View>
                <View>
                    <Text>Professor: {professor}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        alignSelf: 'stretch',
      },
  });