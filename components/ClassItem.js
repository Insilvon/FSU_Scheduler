import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class ClassItem extends Component {
    render() {
        return(
            <View>
                <TouchableOpacity>
                    <ListItem
                    title={this.props.name}
                    subtitle={
                        <View>
                            <Text>{this.props.professor}</Text>
                        </View>  
                    }
                    />
                </TouchableOpacity>
            </View>
        );
    }
}