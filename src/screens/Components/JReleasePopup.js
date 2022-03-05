/**
 * modalVisible         modal을 나타내기 위한 변수 blean                            필수
 * toggleModal          modal의 상태를 변경하는 함수                                필수
 * modalName            modal 구분을 위한 이름 string                              필수
 * buttonName           modal 상세정보 입력 후 저장                                기본 : 확인
 */

 import * as React from 'react';
import { StyleSheet, View, Modal, Text, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Global from '../../Global';
 /** Component Import */
import SScreenName from './SScreenName';
import SButton from './SButton';
import SCalendar from './SCalendar';

const JReleasePopup = (props) =>{

    const [visible, setVisible] = React.useState(false);
    const [date,setDate] = React.useState('');

    React.useEffect(() => {
        setVisible(true);
    });

    const detailInfoFunc = async()=>{
        //출하번호, 납기일자, 출하자(Login 한 유저), 출하수량
        props.detailInfoFunc(props.poNo,date,Global.userInfo._userId,props.poQty);
        props.toggleModal();
    }
    const getdate =(_date) =>{
        setDate(_date);
    }
    return(
        <>
        {visible &&
            <Modal
                statusBarTranslucent={true}
                visible={props.modalVisible}
                onRequestClose={props.toggleModal}
            >
            
                <View style = {{flex:1, backgroundColor:'#b33536'}}>
                    <View style ={styles.MainTapWrap}>
                        <View style ={styles.ModalHead}>
                            <SScreenName
                                    name={props.modalName}
                                    textColor='#fff'
                                    backColor='#b33536'
                            />
                        </View>
                        <View style ={{flex:0.06,}}>
                            <Text style={{
                                fontWeight:'bold',
                                color:'#000',
                                fontSize:15,
                                marginLeft:15, 
                                borderWidth:1,
                                width:70, 
                                textAlign:'center', 
                                borderRadius:10,
                            }}
                            >기본정보</Text>
                        </View>
                        <View style = {styles.subWrap}>
                            <View style = {styles.columnWrap}>
                                <Text style ={{flex:1, textAlign:'center', fontWeight:'bold',color:'#000'}}>출하요청일자</Text>
                                <Text style ={{flex:1, textAlign:'center', fontWeight:'bold',color:'#000'}}>거래처명</Text>
                                <Text style ={{flex:1, textAlign:'center', fontWeight:'bold',color:'#000'}}>품명</Text>
                                <Text style ={{flex:1, textAlign:'center', fontWeight:'bold',color:'#000'}}>요청수량</Text>
                            </View>
                        </View>
                        <View style ={styles.mainInfoWrap}>
                            <View style = {styles.columnWrap}>
                                <Text style ={{flex:1, textAlign:'center'}}>{props.poDate}</Text>
                                <Text style ={{flex:1, textAlign:'center'}}>{props.companyName}</Text>
                                <Text style ={{flex:1, textAlign:'center'}}>{props.partName}</Text>
                                <Text style ={{flex:1, textAlign:'center'}}>{props.poQty}</Text>
                            </View>
                        </View>
                        <View style = {styles.inputPartWrap}>
                            <View style={styles.inputPart}>
                                <Text style = {styles.PartText}>출하번호</Text>
                                <Text
                                    style={styles.PartTextInput}
                                    value={props.poNo}
                                >{props.poNo}</Text>
                            </View>
                            <View style={styles.inputPart}>
                                <Text style = {styles.PartText}>출하의뢰자</Text>
                                <Text style={styles.PartTextInput}>{props.poBy}</Text>
                            </View>
                            <View style={styles.inputPart}>
                                <Text style = {styles.PartText}>출하자</Text>
                                <Text style={styles.PartTextInput}
                                >{Global.userInfo._userNm}</Text>
                            </View>
                        </View>
                        <View style={{flex:0.15, justifyContent:'center'}}>
                            <SCalendar
                                name ="*납기요청일자"
                                style ={{
                                    width: '25%',
                                    color: 'red',
                                    fontSize: 14,
                                    fontWeight: 'bold',
                                }}
                                getDate={getdate}
                            />
                        </View>
                        <View style={{flex:0.2}}>
                            <SButton
                                name={props.buttonName ? props.buttonName:'확인'}
                                width={150}
                                buttonPress={detailInfoFunc}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        }
        </>
    );
}

const styles = StyleSheet.create({
    ModalHead: {
        flex: 0.17,
        justifyContent:'center',
        alignItems:'center',
        //backgroundColor: 'blue'
    },
    MainTapWrap:{
        flex:1,
        marginTop:20,
        elevation:5,
        backgroundColor:'#fff',
        borderColor:'#b31136',
        borderRadius:15,
    },
    subWrap:{
        flex:0.05,
        marginTop:10,
        justifyContent:'center',
        borderWidth:1,
    },
    mainInfoWrap:{
        flex:0.1,
        //flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
    },
    columnWrap:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        alignContent:'center',
    },
    inputPartWrap:{
        flex:0.3,
        justifyContent:'space-evenly',
        alignItems:'center',
        borderWidth:1,
    },
    inputPart:{
        width:'90%',
        flex:0.25,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    PartText:{
        width:'27%', 
        // fontWeight:'bold',
        fontSize:16,
        color:'#000'
    },
    PartTextInput:{
        //textAlign:'center',
        textAlignVertical:'center',
        fontSize:13,
        color:'#000',
        width:'70%',
        height:35,
        paddingLeft:10,
        borderWidth:1,
        borderRadius:10,
    },
});

export default JReleasePopup;