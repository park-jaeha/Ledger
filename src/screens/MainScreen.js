import * as React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert, BackHandler } from 'react-native';
import { NavigationService } from './../common';
/** Component Import*/
import survive from './../images/survive.jpg';

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
    const settingFunc =()=>{
        props.settingFunc();
    }
    return(
        <View style ={styles.MainScreenWrap}>
            <View style ={styles.MainTitleWrap}>
                <Image source ={survive} style ={styles.titleImgWrap}></Image>
                <Text style ={{marginTop:20,fontSize:18,}}>ReU Test App</Text>
            </View>
            <View style = {styles.ContentWrap}>
                <Text style ={{textAlign:'center'}}>Test ReU Main page</Text>
                <TouchableOpacity
                    style={{
                    width: 230 ,
                    justifyContent: 'flex-end',
                    backgroundColor:  '#000' ,
                    padding:12,
                    marginTop: 20,
                    borderRadius: 30,
                    alignSelf:'center',
                    }}
                    onPress = {returnFunc}
                >
                    <Text style ={{ color:'#fff', textAlign:'center'}}>로그인페이지</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={()=>{NavigationService.navigate('설정')}} >
                <Text style ={{textAlign:'right',}}>Settings...</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    MainScreenWrap :{
        flex:1,
    },
    MainTitleWrap:{
        flex:0.9,
        justifyContent:'center',
        alignItems:'center',
    },
    titleImgWrap:{
        flex:0.5,
        width:200,
        borderRadius:50,
    },
    ContentWrap:{
        flex:0.4,

    }
});

export default MainScreen;