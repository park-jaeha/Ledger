import * as React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert, BackHandler } from 'react-native';
import { NavigationService } from '../../common';

const SettingScreen = (props) =>{
    React.useEffect(() => {
        const backAction = () => {
            NavigationService.back();
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);

    return(
        <View style ={styles.SettingScreenWrap}>
            <Text style ={{marginLeft:15,}}>Settings...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    SettingScreenWrap :{
        flex:1,
        justifyContent:'center',
    }
});

export default SettingScreen;