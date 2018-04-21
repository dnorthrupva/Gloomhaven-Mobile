import React  from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import LogoTitle from './LogoTitle';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { getCharacters } from '../redux/actions/index';


const mapDispatchToProps = dispatch => {
  return {
    getCharacters: characters => dispatch(getCharacters())
  };
};

class HomeScreen extends React.Component {

  state = {
    user: null,
    characters: {}
  };

  async componentDidMount() {
    await firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("Logged in", user);
        this.setState({ user, loading: false });
        this.props.getCharacters();
      }
      else {
        console.log("Not logged in");
        this.setState({ loading: false });
      }
    });
  }
  
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        return {
            headerLeft: (<Button
                onPress={() => firebase.auth().signInWithEmailAndPassword('test@test.com', '123456')}
                title="Left"
                color="blue"
              />),
            headerTitle: "Welcome!",
            headerRight: (<Button
                onPress={() => console.log(this.state)}
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
       const currentUser = firebase.auth().currentUser
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
            title="Go to details"
            onPress={() => this.props.navigation.navigate('Details', {
              itemId: 29,
              otherParam: 'something'
            })}
          />
          <Button
            title="Characters"
            onPress={() => this.props.navigation.navigate('Characters')
            }
          />
        </View>
      );
    }
}
export default connect(null, mapDispatchToProps)(HomeScreen);