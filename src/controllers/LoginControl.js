import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationService } from './../common';

/**Component Import */
import LoginScreen from '../screens/LoginScreen';

const LoginControl = ({navigation}) =>{

    const LoginFunc= async ()=>{
        NavigationService.navigate('Main');
    }
    return(
        <View style = {styles.LoginControlWrap}>
            <LoginScreen 
                LoginFunc = {LoginFunc}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    LoginControlWrap: {
        flex: 1,
    }
});

export default LoginControl;