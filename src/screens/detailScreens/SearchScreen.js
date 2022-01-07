import { max } from 'moment';
import * as React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert, BackHandler } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { NavigationService } from '../../common';

const SearchScreen = (props) =>{
    React.useEffect(() => {
        const backAction = () => {
            NavigationService.back();
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);
    /** 변수 */
    const [searchID, searchUserID] = React.useState('');
    const [Id, setId] = React.useState('');
    const [Name, setName] = React.useState('');
    const [Pwd, setPwd] = React.useState('');

    const searchFunc = () => {
        props.searchFunc(searchID);
        console.log("clicked");
    }  // props가 undefied로 뜸

    return(
        <View style ={styles.SearchScreenWrap}>
            <View style = {{flex:0.3, marginTop : 30, alignItems:'center', borderBottomColor: 'black', borderBottomWidth: 1,}}>
                <TextInput
                    style = {styles.SearchScreenTextInput}
                    placeholder = 'ID'
                    value={searchID}
                    onChangeText ={searchUserID}
                />
            </View>
            <View style={{width : '100%', height : 2, marginBottom : 15, marginTop : 15, backgroundColor : '#ffff'}}></View>
            <View style ={{flex:0.6}}>
                <View style ={styles.SearchControlUserInfo}>
                    <View style = {styles.SearchControlUserInfoInside}>
                        <Text style ={{color:'red', textAlign:'center'}}>ID</Text>
                        <Text>{Id}</Text>
                    </View>
                </View>
                <View style ={styles.SearchControlUserInfo}>
                    <View style = {styles.SearchControlUserInfoInside}>
                        <Text>이름</Text>
                        <Text>{Name}</Text>
                    </View>
                </View>
                <View style ={styles.SearchControlUserInfo}>
                    <View style = {styles.SearchControlUserInfoInside}>
                        <Text>Pwd</Text>
                        <Text>{Pwd}</Text>
                    </View>
                </View>
            </View>
                <View style ={{flex:0.4}}>
                    <TouchableOpacity
                        style={{
                            position :"absolute",
                            bottom : 100,
                            width: 120,
                            justifyContent: 'center',
                            alignSelf:'center',
                            backgroundColor:'#000',
                            padding:12,
                            marginTop: 20,
                            borderRadius:30,
                        }}
                        onPress = {searchFunc}>
                            <Text style = {{color:'#fff', textAlign:'center'}}>조회</Text>
                    </TouchableOpacity>
                </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    SearchScreenWrap :{
        flex:1,
        justifyContent:'center',
    },    SearchScreenTextInput: {
        width: '80%',
        height: 50,
        borderColor: '#cccccc',
        borderBottomWidth: 2,
        borderRadius: 15,
        marginLeft:7,
        marginBottom: 20,
        paddingLeft:15,
        textAlign:'left',
    },
    SearchControlUserInfo:{
        flex:0.2,
        width : '100%',
        flexDirection : 'row',
        alignItems : 'center',
        borderBottomWidth : 0.5,
        padding:5,
        marginTop : 20,
        marginBottom : 20,
    },
    SearchControlUserInfoInside:{
        flexDirection : 'row',
        alignItems : 'center',
    }
});

export default SearchScreen;