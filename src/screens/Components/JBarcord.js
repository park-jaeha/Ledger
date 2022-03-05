/**
 *          ** 사용하기 위해서는 부모 Component에서
 *                  const [visible, setVisible] = React.useState(true); //기본값 true로 사용
 * 
 *                  const openBarcord = () => {
                        setVisible(true);
                    }
 *                 const closeBarcord = () => {
                        setVisible(false);
                    }
 *          ** 위처럼 State 변수 1개와 {열기, 닫기} 함수 2개 만들어 줘야함.
 * 
 * visible                    modal을 나타내기 위한 변수 blean                  필수
 * barcordFunc                barcord 입력 시 실행 될 함수                      필수     
 */

import * as React from 'react';
import { StyleSheet, View, Text, TextInput, Image, Keyboard, verticalScale } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
/** Component Import */
/** Image Import */
import CancelImg from '../../Images/Component/cancel_150px.png';

const JBarcord = (props) => {
    const [visible, setVisible] = React.useState(true);
    const [barcord,setBarcord] = React.useState('');
    // const [keyboardStatus, setKeyboardStatus] = React.useState(undefined);


    React.useEffect(()=>{
        inputRef.current.focus();
    })

    const inputRef = React.useRef([]);

    if(visible) {
        return(
            <View style={styles.JBarcordWrap} >
                <View style={styles.boxWrap}>
                    <View style={{flex:0.8, justifyContent:'flex-end',alignItems:'flex-end',}}>
                        <TouchableOpacity
                            onPress={()=>{props.close();}}
                            style={{
                                marginTop:10,
                                marginRight:10,
                            }}
                        >
                            <Image
                                source={CancelImg}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputPart}>
                        <Text style ={styles.textStyle}>Barcord</Text>
                        <TextInput
                            showSoftInputOnFocus={false}
                            style={styles.inputBarcord}
                            value={props.barcord}
                            onChangeText={props.setBarcord}
                            ref={inputRef}
                            autoFocus={true}
                            focusable={true}
                            onSubmitEditing={()=>{props.barcordFunc(barcord)}}
                        ></TextInput>
                    </View>
                </View>
            </View>
        );
    }
    else {
        return null;
    }
}

const styles = StyleSheet.create({
    JBarcordWrap:{
        flex:1,
        justifyContent:'center',
        position:'absolute',
        backgroundColor:'rgba(0,0,0,0.4)',
        top:0,
        left:0,
        right:0,
        bottom:0,
        zIndex:5,
    },
    boxWrap:{
        justifyContent:'center',
        // alignItems:'center',
        alignSelf:'center',
        width:300,
        height:180,
        backgroundColor:'rgba(0,0,0,0.8)',
        borderRadius:15,
    },
    inputPart:{
        flex:2,
        alignSelf:'center',
    },
    textStyle:{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'left',
    },
    inputBarcord:{
        width:250,
        backgroundColor:'#fff',
        borderRadius:10,
    }
});

export default JBarcord;