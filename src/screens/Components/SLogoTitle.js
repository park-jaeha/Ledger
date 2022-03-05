/**
 * Img              화면에 표시할 이미지 import
 * ImgWidth         이미지의 너비
 * ImgHeight        이미지의 높이
 * title1           화면 윗줄에 표시할 String
 * title2           화면 밑줄에 표시할 String
 */

import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SLogoTitle = (props) => {
    return(
        <View style={styles.SLogoTitleWrap}>
            <Image
                style={{
                    width: props.ImgWidth,
                    height: props.ImgHeight,
                }}
                source={props.Img}
            />
            <View style={styles.logoTextWrap}>
                <Text style={styles.logoText}>{props.title1}</Text>
                <Text style={styles.logoText}>{props.title2}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    SLogoTitleWrap: {
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft:10,
        alignItems: 'center',
    },
    logoTextWrap: {
        marginLeft: 10,
    },
    logoText: {
        color: '#003288',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default SLogoTitle;