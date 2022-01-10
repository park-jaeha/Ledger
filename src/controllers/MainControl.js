import * as React from 'react';
import { AsyncStorage, StyleSheet, View } from 'react-native';
import NavigationService from '../common/NavigationService';
/**Component Import */
import MainScreen from '../screens/MainScreen';

const MainControl = () =>{

    const returnFunc = async()=>{
        NavigationService.navigate('Login');
    }
    const settingFunc = async()=>{

    }
    const FlatlistFunc = async()=>{
        NavigationService.navigate('현우');
    }
    return(
        <View style = {styles.MainControlWrap}>
            <MainScreen 
            returnFunc = {returnFunc}
            settingFunc = {settingFunc}
            FlatlistFunc = {FlatlistFunc}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    MainControlWrap: {
        flex: 1,
    }
});

export default MainControl;