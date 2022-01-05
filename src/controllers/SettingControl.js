import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationService } from './../common';
/** Component import */
import SettingScreen from './../screens/detailScreens/SettingScreen';

const SettingControl = ()=>{

    return(
        <View style = {styles.SettingControlWrap}>
            <SettingScreen>

            </SettingScreen>
        </View>
    );
}
const styles= StyleSheet.create({
    SettingControlWrap:{
        flex:1,
    },
});
export default SettingControl;