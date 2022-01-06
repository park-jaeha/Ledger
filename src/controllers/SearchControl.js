import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationService } from './../common';
/** Component import */
import SearchScreen from './../screens/detailScreens/SearchScreen';

const SearchControl = ()=>{

    return(
        <View style = {styles.SearchControlWrap}>
            <SearchScreen>

            </SearchScreen>
        </View>
    );
}
const styles= StyleSheet.create({
    SearchControlWrap:{
        flex:1,
    },
});
export default SearchControl;