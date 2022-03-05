/**
 * name1                라디오토글 첫번째 텍스트
 * name2                라디오토글 두번째 텍스트
 * SelectFirst          첫번째 라디오토글 클릭시 이벤트     
 * SelectSecond         두번째 라디오토글 클릭시 이벤트     
 * 
 */
import * as React from 'react';
import { View, Text } from 'react-native';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import { RadioButton } from 'react-native-paper';

const JRadioButton = (props)=>{
    
    const [checked, setChecked] = React.useState('first');

    const isPressFirst = ()=>{
        setChecked('first');
        props.SelectFirst();
    }
    const isPressSecond =()=>{
        setChecked('second');
        props.SelectSecond();
    }
    return(
        <View style ={{flexDirection:'row'}}>
            <RadioButton
                color = {!props.color ? 'red': props.color}
                value= "first"
                status ={checked === 'first' ? 'checked' : 'unchecked'}
                onPress ={isPressFirst}
            />
            <Text style = {{textAlignVertical:'center'}}>{props.name1}</Text>
            <RadioButton
                color = {!props.color ? 'red': props.color}
                value="second"
                status ={checked === 'second' ? 'checked':'unchecked'}
                onPress={isPressSecond}
            />
            <Text style ={{textAlignVertical:'center'}}>{props.name2}</Text>
        </View>
    );
};

export default JRadioButton;