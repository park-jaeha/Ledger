import * as React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert, BackHandler } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { NavigationService } from '../../common';
import { userID, userPW } from '../LoginScreen';

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
    const [searchID, searchUserID] = React.useState('');

    const nextInp = React.useRef();

    const searchFunc = () => {
        props.SearchFunc(searchID,searchPW);
    }

    return(
        <View style ={styles.SearchScreenWrap}>
            <View style = {{flex =1,alignItems:'center'}}>
                <TextInput
                    style = {styles.SearchScreenTextInput}
                    placeholder = 'ID'
                    value={searchID}
                    onChangeText ={searchUserID}
                />
                <Hr text="line style"
                    lineStyle={{
                    backgroundColor: "blue",
                    height: 4
                    }}
                />
                <View style ={{flex:1}}>
                    <TouchableOpacity
                        style={{
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
        </View>
    );
}

const styles = StyleSheet.create({
    SearchScreenWrap :{
        flex:1,
        justifyContent:'center',
    },    SearchScreenTextInput: {
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

export default SearchScreen;