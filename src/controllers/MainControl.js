import * as React from 'react';
import { StyleSheet, View } from 'react-native';
/**Component Import */
import MainScreen from './../screens/detailScreens/MainScreen';

const MainControl = ({navigation}) =>{
    return(
        <View style = {styles.LoginControlWrap}>
            <MainScreen />
        </View>
    )
}

const styles = StyleSheet.create({
    LoginControlWrap: {
        flex: 1,
    }
});

export default MainControl;