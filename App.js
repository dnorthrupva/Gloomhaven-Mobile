import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import { YellowBox } from 'react-native';
import { connect } from "react-redux";
import firebase from 'firebase';
import ModalScreen from './components/Modal';
import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/Details';
import HeaderComponent from './components/Header';
import CharactersScreen from './screens/Characters';
YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);

const mapStateToProps = state => {
  return { user: state.user };
}

const mapDispatchToProps = dispatch => {
  return {
    getCharacters: characters => dispatch(getCharacters())
  };
};

const MainStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DetailsScreen
    },
    Characters: {
      screen: CharactersScreen
    }
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      user: null,
      characters: {}
    };
  }

  
  async componentDidMount() {

    await firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("Logged in", user);
      }
      else {
        console.log("Not logged in");
        this.setState({ loading: false });
      }
    });
  }

  render() {

  return (
    <MainStack />
    );
  }
}