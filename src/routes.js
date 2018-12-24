import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/main';
import PhotoDetails from './pages/photoDetails';

const StackNavigation = createStackNavigator(
    {
        Main,
        PhotoDetails
    },
    {
        defaultNavigationOptions: {
            headerStyle:{
                backgroundColor: "#DA552F"
            },
            headerTintColor: "#FFF"
        }
    }
);
const NavigationContainer = createAppContainer(StackNavigation);

export default NavigationContainer;