/**
 * modalVisible         modal을 나타내기 위한 변수 blean                            필수
 * toggleModal          modal의 상태를 변경하는 함수                                필수
 * modalName            modal 구분을 위한 이름 string                              필수
 * sendArray            List에 넣을 data Array                                    필수
 * selectLocationFunc   검색 기능을 사용하기 위한 함수                             필수
 * getCompany           List를 선택하면 데이터를 부모에게 전달하기 위한 함수        
 */

import * as React from 'react';
import { StyleSheet, View, Modal, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
/** Component Import */
import SScreenName from './SScreenName';
import SButton from './SButton';
/** Image Import */

const SModal = (props) => {
    const [visible, setVisible] = React.useState(false);
    const [text, setText] = React.useState('');

    React.useEffect(() => {
        setVisible(true);
    });

    const SearchFunc = async () => {
        props.selectCompanyFunc(text);
    }

    return(
        <>
            {visible &&
                <Modal
                    statusBarTranslucent={true}
                    visible={props.modalVisible}
                    onRequestClose={props.toggleModal}
                >
                    <View style ={{flex:1,backgroundColor:'#b33536'}}>
                        <View style ={styles.MainTapWrap}>
                            <View style={styles.ModalHead} >
                                <SScreenName
                                    name={props.modalName}
                                    textColor='#fff'
                                    backColor='#b33536'
                                />
                            </View>
                            <View style={styles.InputArea} >
                                <TextInput
                                    style={styles.InputTextInput}
                                    value={text}
                                    onChangeText={setText}
                                    onEndEditing={SearchFunc}
                                    placeholder='업체명으로 검색...'
                                />
                                <SButton
                                    name='검색'
                                    width={100}
                                    height={8}
                                    buttonPress={SearchFunc}
                                />
                            </View>
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
                                                        props.getCompany(item.CUSTOMER_CODE, item.CUSTOMER_NAME);
                                                        props.toggleModal();
                                                    }}
                                                >
                                                    <View style = {{flex:0.3}}>
                                                        <Text style={styles.ListRow} >{index+1}</Text>
                                                    </View>
                                                    <View style = {{flex:0.7, flexDirection:'row',justifyContent:'space-evenly'}}>
                                                    <Text style={styles.ListRow} >{item.CUSTOMER_CODE}</Text>
                                                    </View>
                                                    <View style = {{flex:1.3}}>
                                                    <Text style={styles.ListRow} >{item.CUSTOMER_NAME}</Text>
                                                    </View>
                                                    
                                                </TouchableOpacity>
                                            </View>
                                        );
                                    }}
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
        flex: 0.5,
        // backgroundColor: 'blue'
    },
    MainTapWrap:{
        flex:1,
        marginTop:20,
        // marginBottom:15,
        // marginLeft:10,
        // marginRight:10,
        elevation:5,
        backgroundColor:'#fff',
        //borderWidth:2,
        borderColor:'#b31136',
        borderRadius:15,
    },
    InputArea: {
        flex: 1,
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
        flex: 4,
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
});

export default SModal;