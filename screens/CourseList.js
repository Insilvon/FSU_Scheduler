import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
//import { FlatList } from 'react-native-gesture-handler';
import ClassItem from '../components/ClassItem';

export default class CourseList extends Component {
    static navigationOptions = {
        title: 'Course Listings',
        headerStyle: {
          backgroundColor: '#D21245',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    };
    renderItem({item}) {
      return(
        <ClassItem
          name={item.class_name}
        />
      );
    }
    _renderItem = ({item}) => (
      <View style={styles.container}>
        <ClassItem
          navigation={this.props.navigation}
          class_title={item.class_title}
          class_number={item.class_number}
          professor={item.professor}
        />
      </View>
    );
    _keyExtractor = (item, index) => item.id;
    render() {    
      const data = [
        {
          class_title: 'Computer Science I',
          class_number: 'COSC 240',
          professor: 'John Snow',
        },
        {
          class_title: 'Computer Science II',
          class_number: 'COSC 241',
          professor: 'Ned Stark',
        }
      ];
      return(
        <View style={styles.container}>
          <FlatList
            data={data}
            keyExtractor={this._keyExtractor}
            //renderItem={this._renderItem}
            renderItem={this._renderItem}
          />
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#a1a1a1',
    },
  });