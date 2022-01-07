import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationService } from './../common';
import { _userId, _userPw, _userNm} from '../Global';
import Toast from 'react-native-toast-message';
/** Component import */
import SearchScreen from './../screens/detailScreens/SearchScreen';

const SearchControl = ()=>{

    const searchFunc = async(id)=>{
        if(id == _userId){
            <View style ={styles.SearchControlUserInfo}>
                <View style = {styles.SearchControlUserInfoInside}>
                    <Text style = {{paddingLeft : 5}}>ID</Text>
                    <Text style = {{paddingLeft : 10}}>{id}</Text>
                </View>
            </View>
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
        }
    }
    return(
        <View style = {styles.SearchControlWrap}>
            <SearchScreen
                searchFunc = {searchFunc}
            >
            </SearchScreen>
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
    },
    SearchControlUserInfoInside:{
        flexDirection : 'row',
        alignItems : 'center',
    }
});
export default SearchControl;