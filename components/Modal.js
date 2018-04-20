import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
class ModalScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 30 }}>This is a modal!</Text>
          <Button
            iconRight={{name: 'code'}}
            backgroundColor="blue"
            onPress={() => this.props.navigation.goBack()}
            title="Dismiss"
          />
        </View>
      );
    }
  }

export default ModalScreen;