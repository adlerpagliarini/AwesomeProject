import { createStackNavigator, createAppContainer } from 'react-navigation';

import React from "react";
import CustomHeader from './CustomHeader';

import Profile from '../authentication/pages/profile';
import SignIn from '../authentication/pages/signIn';
import SignUp from '../authentication/pages/signUp';

const LoginStackNavigation = createStackNavigator(
    {
        Profile,
        SignIn:{
            screen: SignIn,
            navigationOptions: {
                title: "Sign In"
            }
        },
        SignUp:{
            screen: SignUp,
            navigationOptions: {
                title: "Sign Up"
            }
        }
    },
    {
        defaultNavigationOptions: {   
            header: (props) => <CustomHeader {...props} />,    
            headerStyle:{
                backgroundColor: "#0080ff"
            },
            headerTintColor: "#FFF"
        },
    }
);
const NavigationContainer = createAppContainer(LoginStackNavigation);

export default NavigationContainer;