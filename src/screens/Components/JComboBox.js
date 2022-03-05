/**
 * values           ComboBox 의 내용(index)들
 * SelectFunc       ComboBox에서 Value Select 시 일어나는 이벤트함수
 * 미완성
 */
import { ComboBox } from 'react-native-combobox';

const JComboBox = (props) =>{

    const [selectValue,setSelectValue]= React.useState('');

    const values =[props.values];

    const SelectFunc =()=>{
        setSelectValue;
        props.SelectFunc();
    }
    return(
        <View>
            <ComboBox
                values={values}
                onValueSelect ={SelectFunc}
            />
        </View>
    );
};

export default JComboBox;