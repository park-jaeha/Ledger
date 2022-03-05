import * as React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert, BackHandler } from 'react-native';
import { NavigationService } from '../../common';
/**Component import */
import Calendar from '../component/Calendar';

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


    const [date, setDate] = React.useState('');

    const getDate = (_date) =>{
        setDate(_date);
    }
    return(
        <View style ={styles.SettingScreenWrap}>
            <Text style ={{marginLeft:15,}}>Settings...</Text>
            <Calendar 
                name = "test"
                getDate ={getDate}
            />
            <Text> 사장 : 안준범쿤</Text>  
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