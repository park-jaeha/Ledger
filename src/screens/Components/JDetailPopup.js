/**
 * JDetailPopupVisible         modal을 나타내기 위한 변수 blean                     필수
 * toggleModal          modal의 상태를 변경하는 함수                                필수
 * modalName            modal 구분을 위한 이름 string                              필수
 * buttonName           modal 상세정보 입력 후 저장                                기본 : 확인
 */

 import * as React from 'react';
import { StyleSheet, View, Modal, Text, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
 /** Component Import */
import SScreenName from './SScreenName';
import SButton from './SButton';
import SCalendar from './SCalendar';

const JDetailPopup = (props) =>{

    const [visible, setVisible] = React.useState(false);
    const [date,setDate] = React.useState('');
    const [ordQty,setOrdQty] = React.useState('');
    const [ordPrice,setOrdPrice] = React.useState('');
    const [remark,setRemark] = React.useState('');
    const [ordNo,setOrdNo] = React.useState('');
    React.useEffect(() => {
        setVisible(true);
    });

    React.useEffect(()=>{
        setOrdQty(props.selQty+"");
        setOrdPrice(props.selPrice+"");
        setRemark(props.remark);
        setOrdNo(props.ordNo);
        console.log(remark);
    },[]);

    const detailInfoFunc = async()=>{
        props.detailInfoFunc(date, ordQty,ordPrice, remark,ordNo);
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
                        {/* <View style ={{flex:0.06,}}>
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
                        </View> */}
                        <View style = {styles.subWrap}>
                            <View style = {styles.columnWrap}>
                                <Text style ={{flex:1, textAlign:'center', fontWeight:'bold',color:'#000'}}>주문일자</Text>
                                <Text style ={{flex:1, textAlign:'center', fontWeight:'bold',color:'#000'}}>품목명</Text>
                                <Text style ={{flex:1, textAlign:'center', fontWeight:'bold',color:'#000'}}>주문수량</Text>
                                <Text style ={{flex:1, textAlign:'center', fontWeight:'bold',color:'#000'}}>출하수량</Text>
                            </View>
                        </View>
                        <View style ={styles.mainInfoWrap}>
                            <View style = {styles.columnWrap}>
                                <Text style ={{flex:1, textAlign:'center'}}>{props.selYmd}</Text>
                                <Text style ={{flex:1, textAlign:'center'}}>{props.selName}</Text>
                                <Text style ={{flex:1, textAlign:'center'}}>{props.selQty}</Text>
                                <Text style ={{flex:1, textAlign:'center'}}>{props.outQty}</Text>
                            </View>
                        </View>
                        <View style = {styles.inputPartWrap}>
                            <View style={{flex:0.2}}>
                                <SCalendar
                                    name ="납기일자"
                                    getDate={getdate}
                                />
                            </View>
                            <View style={styles.inputPart}>
                                <Text style = {{
                                width:'27%', 
                                fontWeight:'bold',
                                fontSize:18,
                                color:'#000'}}>주문수량</Text>
                                <TextInput style={styles.PartTextInput}
                                onChangeText={setOrdQty}
                                value={ordQty}
                                keyboardType='numeric'
                                selectTextOnFocus={true}
                                />
                            </View>
                            <View style={styles.inputPart}>
                                <Text style = {{
                                width:'27%', 
                                fontWeight:'bold',
                                fontSize:18,
                                color:'#000'}}>주문단가</Text>
                                <TextInput style={styles.PartTextInput}
                                value={ordPrice}
                                onChangeText={setOrdPrice}
                                keyboardType='numeric'
                                selectTextOnFocus={true}
                                />
                            </View>
                            <View style={styles.inputPart}>
                                <Text style = {{
                                width:'27%', 
                                fontWeight:'bold',
                                fontSize:18,
                                color:'#000'}}>비고</Text>
                                <TextInput style={styles.PartTextInput}
                                value={remark}
                                onChangeText={setRemark}
                                selectTextOnFocus={true}
                                />
                            </View>
                            <View style={styles.inputPart}>
                                <Text style = {{
                                width:'27%', 
                                fontWeight:'bold',
                                fontSize:18,
                                color:'#000'}}>주문번호</Text>
                                <TextInput style={styles.PartTextInput}
                                placeholder ="미입력시 자동생성..."
                                value={ordNo}
                                onChangeText={setOrdNo}
                                selectTextOnFocus={true}
                                />
                            </View>
                            
                        </View>
                        <View>
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
        flex:0.5,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'
    },
    inputPart:{
        width:'90%',
        flex:0.25,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    PartTextInput:{
        //textAlign:'center',
        textAlignVertical:'center',
        fontSize:12,
        width:'70%',
        height:35,
        borderWidth:1,
        borderRadius:10,
    },
});

export default JDetailPopup;