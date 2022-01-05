import * as React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity,ImageBackground, BackHandler, Alert } from 'react-native';
import fish from './../images/Logo/fish_48.png';
import { NavigationService } from './../common';


const LoginScreen = (props)=>{
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
    const [userID, setUserID] = React.useState('JH');
    const [userPW, setUserPW] = React.useState('test');

    const nextInput = React.useRef();

    const LoginFunc = ()=>{
        props.LoginFunc(userID, userPW);
    }

    return(
        <ImageBackground source = {fish} style ={{flex:1,}} blurRadius={10}>
            <View style ={styles.LoginScreenWrap} >
                <View style = {{flex:1.5, justifyContent:'center'}}>
                <Text style ={styles.LogoTextWrap}>가계부 test</Text>
                </View>
                <View style = {{flex:1 ,alignItems:'center'}}> 
                <TextInput
                    style={styles.LoginScreenTextInput}
                    placeholder='ID'
                    value={userID}
                    onChangeText={setUserID}
                    onEndEditing={ () => {nextInput.current.focus();} }
                />
                <TextInput
                    style={styles.LoginScreenTextInput}
                    placeholder='PW'
                    value={userPW}
                    onChangeText={setUserPW}
                    ref={nextInput}
                    secureTextEntry={true}
                />
                </View>
                <View style ={{flex:1}}>
                <TouchableOpacity
                    style={{
                    width: 120 ,
                    justifyContent: 'center',
                    alignSelf:'center',
                    backgroundColor:  '#000' ,
                    padding:12,
                    marginTop: 20,
                    borderRadius: 30,}}
                    onPress = {LoginFunc}
                >
                    <Text style ={{ color:'#fff', textAlign:'center'}}>로그인</Text>
                </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    LoginScreenWrap :{
        flex:1,
        justifyContent:'center',
    },
    LogoTextWrap:{
        alignSelf:'center', 
        width:200, 
        textAlign:'center', 
        color :'#EAB0FC', 
        backgroundColor:'#000'
    },
    LoginScreenTextInput: {
        width: '80%',
        height: 30,
        borderColor: '#cccccc',
        borderBottomWidth: 2,
        borderRadius: 15,
        marginLeft:7,
        marginBottom: 20,
        padding:5,
        textAlign:'left',
    },
});

export default LoginScreen;