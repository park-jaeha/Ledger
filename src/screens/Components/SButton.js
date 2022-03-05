/**
 * name                 Button에 표시할 String                  필수
 * buttonPress          Button을 눌렀을 때 실행될 함수           필수
 * width                Button 너비 Number                      defualt 250
 * height               Button 높이 Number                      defualt 20
 * backColor            Button 배경색 string                    default '#b33536'
 */

import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SButton = (props) => {
    const isPress = () => {
        props.buttonPress();
    }

    return (
        <View style={styles.SButtonWrap}>
            <TouchableOpacity
                style={{
                    width: !props.width ? 250 : props.width,
                    justifyContent: 'flex-end',
                    backgroundColor: !props.backColor ? '#b33536' : props.backColor,
                    padding: !props.height ? 20 : props.height,
                    marginTop: 20,
                    borderRadius: 30,
                }}
                onPress={isPress}
            >
                <Text style={styles.SbuttonText}>{props.name}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    SButtonWrap: {
        alignItems: 'center',
        marginBottom: 20,
    },
    SbuttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
    }
});

export default SButton;