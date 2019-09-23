import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
// import the different screens
import Loading from './src/components/loading'
import SignUp from './src/pages/signup'
import Login from './src/pages/login'
import Main from './src/pages/main'
import Infor from './src/pages/infor'
import Alerts from './src/pages/alerts'
import Logout from './src/pages/logout'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
  },
  SignUp: {
    screen: SignUp,
  },
  Main: {
    screen: Main,
  },
  Infor: {
    screen: Infor,
  },
  Alerts: {
    screen: Alerts,
  },
  Logout: {
    screen: Logout,
  },

},
{
  initialRouteName: 'Main',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#FF69B4',
    },
    headerTintColor: '#333',
    headerBackTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

export default createAppContainer(AppNavigator);