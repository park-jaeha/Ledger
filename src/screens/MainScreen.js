import * as React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, BackHandler } from 'react-native';
import { NavigationService } from './../common';


const MainScreen = (props)=>{
    React.useEffect(() => {
        const backAction = () => {
            Alert.alert(
                '앱 종료',
                '정말로 앱을 종료하시겠습니까?', [
                    {
                        text: '취소',
                        onPress: () => console.log("Cancel Pressed"),
                        style: 'cancel'
                    }, { text: '종료', onPress: async () => {
                        BackHandler.exitApp();
                    } }
                ], { cancelable: false }
            );
            return true;
        };
    
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
    
        return () => backHandler.remove();
    }, []);


    const returnFunc =()=>{
        props.returnFunc();
    }
    return(
        <View style ={styles.MainScreenWrap}>
            <Text>Test Ledger Main page</Text>
            <TouchableOpacity
                style={{
                width: 230 ,
                justifyContent: 'flex-end',
                backgroundColor:  '#000' ,
                padding:12,
                marginTop: 20,
                borderRadius: 30,}}

                onPress = {returnFunc}
            >
                <Text style ={{ color:'#fff', textAlign:'center'}}>로그인페이지</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    MainScreenWrap :{
        flex:1
    }
});

export default MainScreen;