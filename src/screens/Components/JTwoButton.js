/**
 * name                 기준에 넣을 이름 텍스트 ,    필수
 * text1                버튼1에 표시될 내용 텍스트, 기본값 : 합격
 * text2                버튼2에 표시될 내용 텍스트, 기본값 : 불합격 
 * fontSize             버튼의 글자크기     기본값 : 20
 * buttonPassPress      버튼1 클릭시 이벤트
 * buttonNonpassPress   버튼2 클릭시 이벤트
 *  
*/
import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const JTwoButton = (props) =>{
    const isPressPass = () => {
        setSelectionMode('1');
        props.buttonPassPress();
    }
    const isPressNonpass=()=>{
        setSelectionMode('2');
        props.buttonNonpassPress();
    }
    const [selectionMode, setSelectionMode] = React.useState('0');

    return (
        <View style={styles.JTwoButtonWrap}>
            {/* <View style = {{
                justifyContent:'center',
                alignItems:'center',
            }}>
                { <Text style ={{
                    marginTop:10,
                    textAlign:'center',
                    color:'#000',
                    fontWeight:'bold',
                    fontSize:18,
                }}>{props.name}</Text> 
            </View> */}
            <View style={styles.JButtonPass}>
                <TouchableOpacity
                    style={{
                        width: !props.width ? 150 : props.width,
                        justifyContent: 'flex-start',
                        alignItems:'center',
                        backgroundColor: selectionMode == '1' ? 'green':'#cccccc',
                        //elevation: selectionMode == '1'? 5 :0,
                        padding: !props.height ? 8 : props.height,
                        borderRadius: 10,
                    }}
                    onPress={isPressPass}
                >
                    <Text style={{
                        fontSize: !props.size ? 20 : props.size,
                        textAlign:'center',
                        color:'#fff',
                        }}>{!props.text1 ? '합격':props.text1}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.JButtonNonpass}>
                <TouchableOpacity
                    style={{
                        width: !props.width ? 150 : props.width,
                        justifyContent: 'flex-end',
                        backgroundColor: selectionMode== '2' ?'red':'#cccccc',
                        //elevation: selectionMode == '1'? 5 :0,
                        padding: !props.height ? 8 : props.height,
                        borderRadius: 10,
                    }}
                    onPress={isPressNonpass}
                >
                    <Text style={{ 
                        fontSize: !props.size ? 20 : props.size,
                        textAlign:'center',
                        color:'#fff',
                        }}>{!props.text2 ? '불합격':props.text2}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    JTwoButtonWrap: {
        //flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    JButtonPass:{
        alignItems: 'center',
    },
    JButtonNonpass:{
        alignItems: 'center',
    },
    JbuttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
    }
});

export default JTwoButton;