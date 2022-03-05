/**
 * modalVisible         modal을 나타내기 위한 변수 blean                            필수
 * toggleModal          modal의 상태를 변경하는 함수                                필수
 * modalName            modal 구분을 위한 이름 string                              필수
 * sendArray            List에 넣을 data Array                                    필수
 * SearchFunc           검색 기능을 사용하기 위한 함수                              필수
 * getPart              List를 선택하면 데이터를 부모에게 전달하기 위한 함수        
 */

import * as React from 'react';
import { StyleSheet, View, Modal, Text, TextInput,KeyboardAvoidingView, TouchableOpacity, FlatList, BackHandler } from 'react-native';
 /** Component Import */
import SScreenName from './SScreenName';
import SButton from './SButton';
import { NavigationService } from '../../common';

const JPopup = (props) =>{
    React.useEffect(() => {
        const backAction = () => {
            props.getPart('','');
            console.log(props.getPart);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);

    const [visible, setVisible] = React.useState(false);
    const [text, setText] = React.useState('');
    const [selectedId, setSelectedId] = React.useState('');
    const [selectCode, setSelectCode] = React.useState([]); // 선택된 품목
    const [selectName, setSelectName] = React.useState([]); // 선택된 품목
    const [test,setTest] = React.useState('');// test용 스테이트
    React.useEffect(() => {
        setVisible(true);
    });

    const SearchFunc = async () => {
        props.selectPartFunc(text);
    }


    const inputFunc = async()=>{
        props.getPart(selectCode,selectName);
        props.inputFunc();
    }
    const cancel = ()=>{
        props.getPart('','');
    }
    // const selectRef = React.useRef([]); // ref 사용
    
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
                        <KeyboardAvoidingView style={styles.InputArea} >
                            <TextInput
                                style={styles.InputTextInput}
                                value={text}
                                onChangeText={setText}
                                onEndEditing={SearchFunc}
                                placeholder='품명으로 검색...'
                            />
                            <SButton
                                name='검색'
                                width={100}
                                height={8}
                                buttonPress={SearchFunc}
                            />
                        </KeyboardAvoidingView>
                        <View style={styles.ListAreaWrap} >
                            <FlatList
                                keyExtractor={(item, index) => index.toString()}
                                data={props.sendArray}
                                renderItem={({item, index}) => {
                                    return(
                                        <View style={styles.ListArea} >
                                            <TouchableOpacity
                                                style={styles.ListRowWrap}
                                                onPress={() => {
                                                    setSelectedId(item.PART_NM);
                                                    setSelectCode(item.PART_NO);
                                                    setSelectName(item.PART_NM);
                                                    props.getPart(item.PART_NO, item.PART_NM);
                                                }}
                                                style = {selectedId.includes(item.PART_NM) ? styles.selected : styles.ListRowWrap}
                                            >
                                                <View style = {{flex:0.3}}>
                                                    <Text style={styles.ListRow} >{index+1}</Text>
                                                </View>
                                                <View style = {{flex:0.7, flexDirection:'row',justifyContent:'space-evenly'}}>
                                                    <Text style={styles.ListRow} >{item.PART_NO}</Text>
                                                </View>
                                                <View style = {{flex:1.3}}>
                                                    <Text style={styles.ListRow} >{item.PART_NM}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    );
                                }}
                            />
                        </View>
                        <View>
                            <SButton
                                name='품번추가'
                                width={150}
                                buttonPress={inputFunc}
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
        flex: 0.6,
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
    InputArea: {
        flex: 0.8,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#dedede',
        // backgroundColor: 'red'
    },
    InputTextInput: {
        width: '60%',
        height: 35,
        padding: 0,
        paddingLeft: 5,
        borderWidth: 3,
        borderColor: '#b33536',
        borderRadius: 10,
    },

    ListAreaWrap: {
        flex: 3.5,
    },
    ListArea: {
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    ListRowWrap: {
        width: '95%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10,
        //marginBottom: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 4,
        backgroundColor: '#ebbcbc',
    },
    ListRow: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign:'center',
    },
    selected:{
        width: '95%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 4,
        backgroundColor: '#b33536',
    },
});

export default JPopup;