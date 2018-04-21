import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { StackNavigator, SwitchNavigator } from 'react-navigation'; // Version can be specified in package.json
import { YellowBox } from 'react-native';
import store from './redux/store';
import { Provider, connect } from 'react-redux';
import firebase from 'firebase';
import ModalScreen from './components/Modal';
import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/Details';
import HeaderComponent from './components/Header';
import CharactersScreen from './screens/Characters/Characters';
import SignInScreen from './screens/SignInScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import ProfileScreen from './screens/ProfileScreen';
import './ReactotronConfig';
YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);

const mapDispatchToProps = dispatch => {
  return {
    getCharacters: characters => dispatch(getCharacters())
  };
};

const AppStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DetailsScreen
    },
    Characters: {
      screen: CharactersScreen
    },
    Profile: {
      screen: ProfileScreen
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

const AuthStack = StackNavigator({ SignIn: SignInScreen });

const SwitchStack = SwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
)
export class App extends React.Component {
  render() {

  return (
    <Provider store={store}>
      <SwitchStack />
    </Provider>
    );
  }
}

export default App