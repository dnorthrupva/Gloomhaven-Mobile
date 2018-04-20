import React  from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import LogoTitle from './LogoTitle';

class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        return {
            headerLeft: (<Button
                onPress={() => alert("hi")}
                title="Left"
                color="blue"
              />),
            headerTitle: "Welcome!",
            headerRight: (<Button
                onPress={() => alert(currentUser)}
                title="Right"
                color="red"
            />),
          /* These values are used instead of the shared configuration! */
          headerStyle: {
            backgroundColor: navigationOptions.headerTintColor,
          },
          headerTintColor: navigationOptions.headerStyle.backgroundColor,
        };
      };
     render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
            title="Go to details"
            onPress={() => this.props.navigation.navigate('Details', {
              itemId: 29,
              otherParam: 'Character!'
            })}
          />
          <Button
            title="Characters"
            onPress={() => this.props.navigation.navigate('Characters')}
          />
        </View>
      );
    }
}
export default HomeScreen;