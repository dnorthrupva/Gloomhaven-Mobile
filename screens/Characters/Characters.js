import React, { Component } from 'react';
import { View, Text} from 'react-native';
import {Button} from 'react-native-elements';

class Characters extends Component {
    componentDidMount(){
        console.log(this.props);
    }
    render() {
        return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Some Characters</Text>
                </View>
        );
    }
}

  
  export default Characters;