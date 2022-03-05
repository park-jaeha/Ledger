/**
 *      name                날짜 조건 이름 입력     필수
 *      getDate(_date)      날짜 state 저장        필수
 *      getDate2(_date)     날짜 state 저장        필수
 * 
 */

import * as React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import DataTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
/** Image Import */
import CalendarImg from './../../Images/Component/calendar.png';

const JCalendar = (props) => {
    React.useEffect(() => {
        props.getDate(today);
    });
    const BeforeTime =(date,paramType,param)=>{
        let unit =0;
        if(paramType ==='day'){
            unit = 1000 * 60 * 60 * 24; // 일
        } else if (paramType === 'hour'){
            unit = 1000*60*60; // 시간
        }else if (paramType === 'minute'){
            unit = 1000*60; // 분
        }else if (paramType === 'month'){
            unit = 1000*60*60*24*30;
        }
        
        return new Date(new Date(date.getTime() - unit * param));
    }

    const [date, setDate] = React.useState(new Date()); // 날짜를 추출하는 변수
    // const [today, setToday] = React.useState(moment(new Date()).format('YYYY-MM-DD') + ""); // 추출된 날짜를 포멧에 맞에 담는 변수
    const [today, setToday] = React.useState(moment(BeforeTime(new Date(),'month',1)).format('YYYY-MM-DD') +""); // 추출된 날짜를 포멧에 맞에 담는 변수
    const [todayTime, setTodayTime] = React.useState(moment(new Date()).format('YYYY/MM/DD/HH/mm/ss')); // 추출된 날짜를 포멧에 맞에 담는 변수
    const [today2, setToday2] = React.useState(moment(new Date()).format('YYYYMMDD')); // 추출된 날짜를 포멧에 맞에 담는 변수
    const [show, setShow] = React.useState(false);


    
    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        //currentDate = BeforeTime(currentDate,'month',1);
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        setToday(moment(currentDate).format('YYYY-MM-DD'));
        setTodayTime(moment(currentDate).format('YYYY/MM/DD/hh/mm/ss'));
        setToday2(moment(currentDate).format('YYYYMMDD'));
    };

    const showDatePicker = () => {
        setShow(!show);
    }
    return(
        <View style={styles.JCalendarWrap}>
            <Text style={styles.JCalendarTitle}>{props.name} :</Text>
            <TextInput
                style={styles.JCalendarInput}
                value={today}
                editable={false}
                color='#000000'
            />
            <TouchableOpacity
                style={styles.JCalendarBtn}
                onPress={showDatePicker}
            >
                <Image
                    style={styles.JCalendarImg}
                    source={CalendarImg}
                />
            </TouchableOpacity>
            {show && (
                <DataTimePicker
                    value={date}
                    mode='mode'
                    is24Hour={true}
                    display="calendar"
                    onChange={onChangeDate}
                    format='YYYY-MM-DD'
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    JCalendarWrap: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    JCalendarTitle: {
        width: '25%',
        color: '#000',//!props.fcolor ? '#000' : props.fcolor,
        fontSize: 17,
        fontWeight: 'bold',
    },
    JCalendarInput: {
        width: '56%',
        height: 35,
        textAlign: 'center',
        padding: 0,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        marginRight: 10,
    },
    JCalendarBtn: {},
    JCalendarImg: {
        width: 32,
        height: 32,
    },
});

export default JCalendar;