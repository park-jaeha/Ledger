import * as React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity,ImageBackground, Platform, Image } from 'react-native';

const MainScreen = ()=>{

    return(
        <View style ={styles.MainScreenWrap}>
            <Text>Test Ledger Main page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    MainScreenWrap :{
        flex:1
    }
});

export default MainScreen;