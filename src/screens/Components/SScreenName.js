/**
 * name             Text에 표시될 String        필수
 * textColor        Text Color string          default '#000'
 * backColor        배경색                      default '#fff'
 */

import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SScreenName = (props) => {
    return(
        <View style={styles.SScreenNameWrap} >
            <Text style={{
                width: 200,
                padding: 10,
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                color: !props.textColor ? '#000' : props.textColor,
                backgroundColor: !props.backColor ? '#fff' : props.backColor,
                borderRadius: 5,
                shadowColor: "#000",
                shadowOffset: {
                    width: 1,
                    height: 2,
                },
                shadowOpacity: 0.4,
                shadowRadius: 4.84,
                elevation: 5,
            }} >
                {props.name}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    SScreenNameWrap: {
        zIndex: 0,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: 10,
        marginLeft: 10,
    },
});

export default SScreenName;