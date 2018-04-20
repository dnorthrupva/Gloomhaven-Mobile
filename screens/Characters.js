import React, { Component } from 'react';
import { View, Text} from 'react-native';
class Characters extends Component {
    render() {
        return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Some Characters</Text>
                </View>
        );
    }
}

export default Characters;