import { createStackNavigator, createAppContainer } from 'react-navigation';

import Menu from './menu';
import Products from '../products/pages';
import Photos from '../photos/pages/photos';
import PhotoDetails from '../photos/pages/photoDetails';
import CustomHeader from './CustomHeader';
import React from "react";

const StackNavigation = createStackNavigator(
    {
        Menu,
        Products,
        Photos,
        PhotoDetails
    },
    {
        defaultNavigationOptions: {   
            header: (props) => <CustomHeader {...props} />,    
            headerStyle:{
                backgroundColor: "#DA552F"
            },
            headerTintColor: "#FFF"
        },
    }
);
const NavigationContainer = createAppContainer(StackNavigation);

export default NavigationContainer;