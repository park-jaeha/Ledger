/**
 * menuImg          Button 이미지에 표시할 import
 * name             Button Text에 표시할 String             필수
 * buttonPress      Button Click 시 실행할 함수             필수
 * backColor        Button 배경색                           default '#b33536'
 */

import * as React from 'react';
import { Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const SMenuButton = (props) => {
    const isPress = () => {
        props.buttonPress();
    }

    return(
        <>
            <TouchableOpacity
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderRadius:5,
                    paddingTop: 30,
                    paddingBottom: 30,
                    paddingLeft: 30,
                    paddingRight: 40,
                    marginLeft: 1.5,
                    marginRight: 1.5,
                    height:140,
                    backgroundColor: !props.backColor ? '#b33536' : props.backColor,
                }}
                onPress={isPress}
            >
                <Image
                    style={styles.menuImg}
                    source={props.menuImg}
                />
                <Text style={styles.menuTxt}>{props.name}</Text>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    menuBtn: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 40,
        paddingRight: 40,
        marginLeft: 1.5,
        marginRight: 1.5,
        backgroundColor: '#b33536',
    },
    menuImg: {
        width: 30,
        height: 30,
        marginRight: 5,
    },
    menuTxt: {
        fontSize: 21,
        fontWeight:'bold',
        color: '#fff',
    },
});

export default SMenuButton;