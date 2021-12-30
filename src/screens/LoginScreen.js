import * as React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity,ImageBackground, BackHandler, Alert } from 'react-native';
import fish from './../images/Logo/fish_48.png';
import { NavigationService } from './../common';


const LoginScreen = (props)=>{
    React.useEffect(() => {
        const backAction = () => {
            Alert.alert(
                '앱 종료',
                '정말로 앱을 종료하시겠습니까?', [
                    {
                        text: '취소',
                        onPress: () => console.log("Cancel Pressed"),
                        style: 'cancel'
                    }, { text: '종료', onPress: async () => {
                        BackHandler.exitApp();
                    } }
                ], { cancelable: false }
            );
            return true;
        };
    
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
    
        return () => backHandler.remove();
    }, []);


    const LoginFunc = ()=>{
        props.LoginFunc();
    }

    return(
        <ImageBackground source = {fish} style ={{flex:1,}} blurRadius={10}>
            <View style ={styles.LoginScreenWrap} >
                <Text style ={{alignSelf:'center', width:200, textAlign:'center', color :'#EAB0FC', backgroundColor:'#000'}}>Test Ledger page</Text>
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