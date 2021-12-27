import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import NavigationService from '../common/NavigationService';
/**Component Import */
import MainScreen from '../screens/MainScreen';

const MainControl = () =>{

    const returnFunc = async()=>{
        NavigationService.navigate('Login');
    }
    return(
        <View style = {styles.MainControlWrap}>
            <MainScreen 
            returnFunc = {returnFunc}
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