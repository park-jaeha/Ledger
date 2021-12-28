import * as React from 'react';
import { Alert } from 'react-native';
import mariaDB from 'react-native-my-sql-connection';

const config = require('./MariaDBConfig');

let queryResult;

const MariaConnSelect = async (query) => {
    try {
        const conn = await mariaDB.createConnection(config);
        let result = await conn.executeQuery(query);
        
        queryResult = result;

        conn.close();

        return queryResult;
    } catch(err) {
        let em = err.message;

        if(em.substr(11, 1) == "o") {
            Alert.alert(
                'Error',
                '네트워크 연결이 끊어졌습니다. 다시 한번 확인해 주세요.',
                [
                    {
                        text: '확인',
                        style: 'cancel'
                    }
                ], { cancelable: false }
            );
        }
        else if(em.substr(11, 1) == "e") {
            Alert.alert(
                'Error',
                'Database 값이 충돌하였습니다.',
                [
                    {
                        text: '확인',
                        style: 'cancel'
                    }
                ], { cancelable: false }
            );
        }

        return false;
    }
}

module.exports = MariaConnSelect;