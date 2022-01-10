import {Dimensions} from 'react-native';
import MainScreen from './MainScreen';
import SearchScreen from './../controllers/SearchControl';
import SettingScreen from './../controllers/SettingControl';
// import CustomSidebarMenu from './CustomSidebarMenu';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';

const DrawNavigation = createDrawerNavigator(
    {
        Main : {
        screen: MainScreen,
        navigationOptions: {
        // drawerLabel: 'Home',
    },
    },
        Search: {
        screen: SearchScreen,
        navigationOptions: {
        // drawerLabel: 'Detail',
        },
    },
        Setting: {
        screen: SettingScreen,
        navigationOptions: {
        // drawerLabel: 'About',
        },
    },
    },
    {
        // contentComponent: CustomSidebarMenu,
        drawerWidth: Dimensions.get('window').width - 150,
    },
);

export default createAppContainer(DrawNavigation);