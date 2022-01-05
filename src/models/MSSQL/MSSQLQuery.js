import { Alert } from 'react-native';
import MSSQL from 'react-native-mssql';

let config = require('./../Config');

let queryResult;

const MSSQLQuery = async (query) => {
    try {
        const connected = await MSSQL.connect(config);
        const result = await MSSQL.executeQuery(query);

        queryResult = result;

        await MSSQL.close();
    }
    catch(err) {
        console.log("MSSQL Connection Error => " + err);
        Alert.alert(
            'Error',
            'MSSQL Connection Failed => ' + err, [
                {
                    text: '확인',
                    style: 'cancel'
                }
            ], { cancelable: false }
        );
    }
    
    return queryResult;
}

module.exports = MSSQLQuery;