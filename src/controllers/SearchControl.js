import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationService } from './../common';
import Toast from 'react-native-toast-message';
/** Component import */
import SearchScreen from './../screens/detailScreens/SearchScreen';
import Global from '../Global';
import MSSQLQuery from './../models/MSSQL/MSSQLQuery';

const SearchControl = ()=>{

    const searchFunc = async(id)=>{
        let MSSQLSelect = await MSSQLQuery("SELECT * FROM TB_USER WHERE USER_ID ='"+id+"'");
        if(id||MSSQLSelect.length>=1){
            Toast.show({
                type: 'success',
                position: 'top',
                text1 : 'Search Successed',
                text2 : 'DB연동에 성공하였습니다.',
                visibilityTime : 1000,
                autoHide : true,
                topOffset : 10,
                bottomOffset: 40,
            });
            console.log("success");
            Global.SearchedUserInfo.s_userId = MSSQLSelect[0].USER_ID;
            Global.SearchedUserInfo.s_userNm = MSSQLSelect[0].USER_NM;
            Global.SearchedUserInfo.s_userPw = MSSQLSelect[0].USER_PW;
            

        }else{
            Toast.show({
                type: 'error',
                position: 'top',
                text1 : 'Search Failed',
                text2 : '일치하는 ID가 없습니다.',
                visibilityTime : 1000,
                autoHide : true,
                topOffset : 10,
                bottomOffset: 40,
            });
            console.log("failed");
        }
    }
    return(
        <View style = {styles.SearchControlWrap}>
            <SearchScreen
                searchFunc = {searchFunc}
            >
            </SearchScreen>
            <Toast />
        </View>
    )
}
const styles= StyleSheet.create({
    SearchControlWrap:{
        flex:1.5,
        borderColor : '#0000ff',
        marginBottom:20,
        marginTop : 20,
        padding:5,
    },
    SearchControlUserInfo:{
        width : '100%',
        flexDirection : 'row',
        alignItems : 'center',
        borderBottomWidth : 0.5,
        padding:5,
        marginTop : 20,
        marginBottom : 20,
    },
    SearchControlUserInfoInside:{
        flexDirection : 'row',
        alignItems : 'center',
    }
});
export default SearchControl;