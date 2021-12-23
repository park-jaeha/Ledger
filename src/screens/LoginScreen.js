import * as React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity,ImageBackground, Platform, Image } from 'react-native';

const LoginScreen = (props)=>{

    return(
        <View style ={styles.LoginScreenWrap}>
            <Text>Test Ledger page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    LoginScreenWrap :{
        flex:1
    }
});

export default LoginScreen;