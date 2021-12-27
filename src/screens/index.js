import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
/** Component Import */
import LoginScreen from '../controllers/LoginControl';
import MainScreen from '../controllers/MainControl';

const AuthStack = createStackNavigator(
    {
        Main : {screen : MainScreen}
    },
    {
        initialRouteName: 'Main',
        defaultNavigationOptions:{
            headerShown:false,
        },
        // defaultNavigationOptions: {
        //     // title: '김구박',
        //     headerStyle: {
        //         backgroundColor: '#b33536',
        //     },
        //     headerTintColor: '#fff',
        //     headerTitleStyle: {
        //         fontWeight: 'bold',
        //     },
        // },
    },
);

const AppStack = createSwitchNavigator(
    {
        Login : {screen:LoginScreen}
    },
    {
        initialRouteName : 'Login'
    }
);

const AppNavigator = createSwitchNavigator(
    {
        App : AppStack,
        Auth : AuthStack
    },
    {
        initialRouteName: 'App',
    }
);

export default createAppContainer(AppNavigator);