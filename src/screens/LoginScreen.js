import * as React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity,ImageBackground, Platform, Image } from 'react-native';
import fish from './../images/fish_48.png';

const LoginScreen = (props)=>{


    const LoginFunc = ()=>{
        props.LoginFunc();
    }

    return(
        <ImageBackground source = {fish} style ={{flex:1,}} blurRadius={10}>
            <View style ={styles.LoginScreenWrap} >
                <Text style ={{textAlign:'center'}}>Test Ledger page</Text>
                <TouchableOpacity
                    style={{
                    width: 120 ,
                    justifyContent: 'center',
                    alignSelf:'center',
                    backgroundColor:  '#000' ,
                    padding:12,
                    marginTop: 20,
                    borderRadius: 30,}}
                    onPress = {LoginFunc}
                >
                    <Text style ={{ color:'#fff', textAlign:'center'}}>메인페이지</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    LoginScreenWrap :{
        flex:1,
        justifyContent:'center',
    }
});

export default LoginScreen;