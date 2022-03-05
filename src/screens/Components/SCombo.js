/**
 * name             Combo에 적용할 이름 String
 * placeholder      Combo 미 선택시 보일 String
 */

import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Combo from 'react-native-dropdown-picker';
/** Component Import */
/** Image Import */

const SCombo = (props) => {
    React.useEffect(() => {
        setItems(props.Items);
    });

    const [text, setText] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('');
    const [items, setItems] = React.useState([]);

    

    return(
        <View style={styles.SComboWrap} >
            <Text style={styles.ComboTitle} >{props.name}</Text>
            <Combo
                style={styles.ComboWrap}
                containerStyle={styles.ComboContainer}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder={props.placeholder}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    SComboWrap: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    ComboTitle: {
        width: '25%',
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    },
    ComboWrap: {
        // width: '100%',
        height: 35,
    },
    ComboContainer: {
        width: '70%',
    },
});

export default SCombo;