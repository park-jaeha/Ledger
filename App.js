import * as React from 'react';
import {  } from 'react-native';
import Router from './src/Router';
import SplashScreen from 'react-native-splash-screen';

const App = () => {

  React.useEffect(()=>{
    setTimeout(()=>{
      SplashScreen.hide(); 
    },1000);
  },[]);

  return(
    <Router />
  );
}

export default App;
