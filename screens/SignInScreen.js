import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text, AsyncStorage } from 'react-native';
import {Alert, FormInput, FormLabel, FormValidationMessage, Button } from 'react-native-elements';
import firebase from 'firebase';

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    },
    input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    },
});

class SignInScreen extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          username: 'test@test.com',
          password: '123456',
        };
      }
      
    onLogin() {
        const { username, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(username, password)
            .then((res) => {
                AsyncStorage.setItem('userToken', JSON.stringify(res.uid))
                // console.log(res.uid)
                this.props.navigation.navigate('Home')
            })
            .catch((err) => {
                console.log(err);
            })
        // Alert.alert('Credentials', `${username} + ${password}`);
        // alert(`${username} + ${password}`)

    }

    render() {
        return (
            <View style={styles.container}>
            <Text>{this.state.username} | {this.state.password} </Text>
            <TextInput
                value={this.state.username}
                onChangeText={(username) => this.setState({ username })}
                placeholder={'Username'}
                style={styles.input}
            />
            <TextInput
                value={this.state.password}
                onChangeText={(password) => this.setState({ password })}
                placeholder={'Password'}
                secureTextEntry={true}
                style={styles.input}
            />
            
            <Button
                title={'Login'}
                style={styles.input}
                onPress={this.onLogin.bind(this)}
            />
            </View>
        );
    }
}



export default SignInScreen;
    