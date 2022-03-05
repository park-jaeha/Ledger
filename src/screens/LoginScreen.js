import * as React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity,ImageBackground, Platform, Image } from 'react-native';
/** Component Import */
import SLogoTitle from './Components/SLogoTitle';
/** Image Import */
import Logo from '../images/Logo/ReU.png';
import background from '../images/Login/background.png';
import login from '../images/Login/login.png';
import lock from '../images/Login/lock.png';

const LoginScreen = (props) => {
    const [userID, setUserID] = React.useState('SYSTEM');
    const [userPW, setUserPW] = React.useState('11111');

    const nextInput = React.useRef();

    const execLogin = () => {
        //console.log(userID,userPW);
        props.LoginFunc(userID, userPW);
    }

    return(
        <View style={styles.LoginScreenWrap}>
                <ImageBackground source={background} style={{
                    flex:1,
                }}>
                    <View style ={{flex:1, justifyContent:'space-between'}}>
                        <View style={styles.SLogoTitleWrap} >
                            <View style ={styles.circle}>
                                <SLogoTitle
                                    Img={Logo}
                                    ImgWidth={133}
                                    ImgHeight={77}
                                />
                            </View>
                        </View>
                        <View style = {{flex:0.1}}></View>
                        <View style = {styles.loginTab}>
                            <View style={styles.LoginScreenTextInputWrap} >
                                <View style = {{flex:0.35}}></View>
                                    <View style ={{flexDirection:'row'}}>
                                        <Image source = {login}></Image>
                                        <TextInput
                                            style={styles.LoginScreenTextInput}
                                            placeholder='ID'
                                            value={userID}
                                            onChangeText={setUserID}
                                            onEndEditing={ () => {nextInput.current.focus();} }
                                        />
                                    </View>
                                <View style ={{flexDirection:'row'}}>
                                    <Image source = {lock}></Image>
                                    <TextInput
                                        style={styles.LoginScreenTextInput}
                                        placeholder='PW'
                                        value={userPW}
                                        onChangeText={setUserPW}
                                        ref={nextInput}
                                        secureTextEntry={true}
                                    />
                                </View>
                                <View style = {{flex:0.7,marginBottom:10}}>
                                    <TouchableOpacity
                                    style={{
                                        width: 180 ,
                                        justifyContent: 'flex-end',
                                        backgroundColor:  '#697911' ,
                                        padding:12,
                                        marginTop: 20,
                                        borderRadius: 30,
                                    }}
                                    onPress={execLogin}
                                        // name='로그인'
                                        // buttonPress={execLogin}
                                    ><Text style={{fontSize: 18,
                                        textAlign: 'center',
                                        fontWeight:'bold',
                                        color: '#fff',}}>로그인</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    LoginScreenWrap: {
        flex: 1,
        backgroundColor:'#ffefba',
    },
    loginTab:{
        flex:1.5,
        justifyContent:'center',
        alignItems: 'center',
        alignContent:'center',
    },
    SLogoTitleWrap: {
        flex: 1,
        marginLeft:10,
        marginTop:10,
        justifyContent:'center',
        alignItems:'center',
    },
    circle:{
        flex:0.58,
        width:80*2,
        height:60,
        borderRadius:90,
        borderColor:'#000',
        backgroundColor:'#fff',
        ...Platform.select({
        ios:{
            shadowColor: "#000", //그림자색
            shadowOffset: { width: 10, height: 10 }, //그림자 위치
            shadowOpacity: 0.25,//그림자 투명도
            //shadowRadius:20,
        },
        android:{
            elevation: 5,
        },
        }),
    },
    LoginScreenTextInputWrap: {
        flex: 1.5,
        backgroundColor:'#fff',
        width:280,
        height:100,
        borderRadius:15,
        //marginTop:10,
        marginBottom:150,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent:'center',
        elevation: 5,
    },
    LoginScreenTextInput: {
        width: '70%',
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