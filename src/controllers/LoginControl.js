import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationService } from './../common';

/**Component Import */
import LoginScreen from '../screens/LoginScreen';
import MSSQLQuery from './../models/MSSQL/MSSQLQuery';
import Global from '../Global';

const LoginControl = ({navigation}) =>{

    const LoginFunc= async (userID,userPW)=>{
        let MSSQLSelect = await MSSQLQuery("SELECT * FROM TB_USER WHERE USER_ID ='"+userID+"' AND USER_PWD ='"+userPW+"'");
        if(!userID||!userPW||MSSQLSelect.length<1){
            Toast.show({
                type: 'error',
                position: 'top',
                text1: 'Faild',
                text2: 'ID 혹은 PW가 다릅니다. 다시 한번 확인해주세요.',
                visibilityTime: 1000,
                autoHide: true,
                topOffset: 10,
                bottomOffset: 40,
            });
        }
        else{
            Global.userInfo._userId = MSSQLSelect[0].USER_ID;
            Global.userInfo._userNm = MSSQLSelect[0].USER_NM;
            
            NavigationService.navigate('Main');
        }
    }
    return(
        <View style = {styles.LoginControlWrap}>
            <LoginScreen 
                LoginFunc = {LoginFunc}
            />
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </View>
    )
}

const styles = StyleSheet.create({
    LoginControlWrap: {
        flex: 1,
    }
});

export default LoginControl;