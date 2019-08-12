import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class ClassItem extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return(
            <View>
                <TouchableOpacity 
                  onPress={() => navigate('CourseInformation', {
                    class_title: this.props.class_title,
                    class_number: this.props.class_number,
                    professor: this.props.professor,
                  })
                }>
                  <ListItem
                    title={this.props.class_title}
                    subtitle={
                        <View>
                            <Text>{this.props.class_number} | {this.props.professor}</Text>
                        </View>  
                    }
                  />
                </TouchableOpacity>
            </View>
        );
    }
}
