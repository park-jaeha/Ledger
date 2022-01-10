/**
 *          ** 사용하기 위해서는 부모 Component에서
 *                  const [loading, setLoading] = React.useState(false);
 * 
 *                  const openLoading = () => {
                        setLoading(true);
                    }
 *                 const closeLoading = () => {
                        setLoading(false);
                    }
 *          ** 위처럼 State 변수 1개와 {열기, 닫기} 함수 2개 만들어 줘야함.
 * 
 * 
 * 
 * loading                          modal을 나타내기 위한 변수 blean                            필수
 * text                             로딩 메세지를 위한 변수 String                              default=Loading
 */

import * as React from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import { DotsLoader, TextLoader, BubblesLoader } from 'react-native-indicator';
/** Component Import */
/** Image Import */

const SLoading = (props) => {
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        setVisible(props.loading);
    });

    if(visible) {
        return(
            <View style={styles.loadingWrap} >
                <BubblesLoader
                    // size={20}
                    color='#b33536'
                />
                <TextLoader
                    text={props.text}
                    textStyle={styles.textStyle}
                />
            </View>
        );
    }
    else {
        return null;
    }
}

SLoading.defaultProps = {
    text: 'Loading'
}

const styles = StyleSheet.create({
    loadingWrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 10,
    },
    textStyle: {
        color: '#efefef',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    }
});

export default SLoading;