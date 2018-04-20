import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

class DetailsScreen extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
      const { params } = navigation.state;
  
      return {
        title: params ? params.otherParam : 'A Nested Details Screen',
        /* These values are used instead of the shared configuration! */
        headerStyle: {
          backgroundColor: navigationOptions.headerTintColor,
        },
        headerTintColor: navigationOptions.headerStyle.backgroundColor,
      };
    };
    render() {
      /* 2. Read the params from the navigation state */
      const { params } = this.props.navigation.state;
      const itemId = params ? params.itemId : null;
      const otherParam = params ? params.otherParam : null;
  
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          <Text>itemId: {JSON.stringify(itemId)}</Text>
          <Text>otherParam: {JSON.stringify(otherParam)}</Text>
          <Button
            title="Go to Details... again"
            onPress={() => this.props.navigation.navigate('Details')}
          />
            <Button
              title="Update the title"
              onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
            />
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      );
    }
  }

  export default DetailsScreen