import { max } from 'moment';
import * as React from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity, Alert, BackHandler, FlatList, StatusBar  } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationService } from '../../common';
import Global from '../../Global';
import Item from './Items';
import { getActiveChildNavigationOptions } from 'react-navigation';
import SLoading from '../component/SLoading';

const arr = [];
for (let i = 0; i < 1000; i++) {
  arr.push(i);
}

const FlatlistScreen = () => {
    const [loading, setLoading] = React.useState(false);
    const [seconds, setSeconds] = React.useState(3);

    React.useEffect(() => {
        const countdown = setInterval(() => {
            if(parseInt(seconds) > 0){
                setSeconds(parseInt(seconds) -1);
            }else{
                clearInterval(countdown);
            }
        }, 1000);
    },[seconds]);

    const openLoading = () => {
        setLoading(true);
    }
    const closeLoading = () => {
        setLoading(false);
    }
    const onEndReached = async()=>{
        if(seconds){
        openLoading();
        await countdown();
        }else{
        setSeconds(3);
        closeLoading();
        }
    }
    return (
        <View>
            <SLoading
              loading={loading}
            />
            <FlatList
              keyExtractor={item => item.toString()}
              data={arr}
              renderItem={({item}) => <Item num={item} />}
              windowSize={1}
              onEndReachedThreshold={1}
              onEndReached={onEndReached}
            />
        </View>
    );
};

export default FlatlistScreen;