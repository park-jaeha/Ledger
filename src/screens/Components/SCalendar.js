/**
 * name                    Text에 들어갈 String
 */

import * as React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import DataTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
/** Image Import */
import CalendarImg from './../../Images/Component/calendar.png';

const SCalendar = (props) => {
    React.useEffect(() => {
        props.getDate(today);
    });

    const [date, setDate] = React.useState(new Date()); // 날짜를 추출하는 변수
    const [today, setToday] = React.useState(moment(new Date()).format('YYYY-MM-DD') + ""); // 추출된 날짜를 포멧에 맞에 담는 변수
    const [todayTime, setTodayTime] = React.useState(moment(new Date()).format('YYYY/MM/DD/HH/mm/ss')); // 추출된 날짜를 포멧에 맞에 담는 변수
    const [today2, setToday2] = React.useState(moment(new Date()).format('YYYYMMDD')); // 추출된 날짜를 포멧에 맞에 담는 변수
    const [show, setShow] = React.useState(false);

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
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
        <View style={styles.SCalendarWrap}>
            <Text style={props.style ? props.style : styles.SCalendarTitle}>{props.name}</Text>
            <TextInput
                style={styles.SCalendarInput}
                value={today}
                editable={false}
                color='#000000'
            />
            <TouchableOpacity
                style={styles.SCalendarBtn}
                onPress={showDatePicker}
            >
                <Image
                    style={styles.SCalendarImg}
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
    SCalendarWrap: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    SCalendarTitle: {
        width: '25%',
        color: '#000',//!props.fcolor ? '#000' : props.fcolor,
        fontSize: 17,
        fontWeight: 'bold',
    },
    SCalendarInput: {
        width: '56%',
        height: 35,
        textAlign: 'center',
        padding: 0,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        marginRight: 10,
    },
    SCalendarBtn: {},
    SCalendarImg: {
        width: 32,
        height: 32,
    },
});

export default SCalendar;