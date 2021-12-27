import * as React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity,ImageBackground, Platform, Image } from 'react-native';
import fish from './../images/fish.png';

const LoginScreen = (props)=>{


    const LoginFunc = ()=>{
        props.LoginFunc();
    }

    return(
        <View style ={styles.LoginScreenWrap} >
            <ImageBackground source = {fish} style ={{flex:1, width : 80, height : 80, alignSelf:'center', justifyContent:'center'}}>
            <Text>Test Ledger page</Text>
            <TouchableOpacity
                style={{
                width: 100 ,
                justifyContent: 'center',
                backgroundColor:  '#000' ,
                padding:12,
                marginTop: 20,
                borderRadius: 30,}}

                onPress = {LoginFunc}
            >
                <Text style ={{ color:'#fff', textAlign:'center'}}>메인페이지</Text>
            </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    LoginScreenWrap :{
        flex:1
    }
});

export default LoginScreen;