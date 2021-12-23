import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
/** Component Import */
import LoginScreen from '../controllers/LoginControl';
import MainScreen from './detailScreens/MainScreen';

const AuthStack = createStackNavigator(
    {
        Main : {screen : MainScreen}
    }
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