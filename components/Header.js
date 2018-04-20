import React, { Component } from 'react';
import { Button, Header } from 'react-native-elements';
import LogoTitle from './LogoTitle';

class HeaderComponent extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <Header
                leftComponent={
                    <Button
                        onPress={() => navigation.navigate('MyModal')}
                        title="NEW"
                        color="#fff"
                    />
                }
                centerComponent= {<LogoTitle />}
                rightComponent={
                    <Button onPress={() => console.log("hi")} color="#fff" />
                }
                />
        );
    }
}

export default HeaderComponent;