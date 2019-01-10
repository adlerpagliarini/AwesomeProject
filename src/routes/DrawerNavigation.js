import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import TabNavigation from './TabNavigation';
import Products from '../products/pages';
import Photos from '../photos/pages/photos';
import Login from '../authentication/pages/login';
import SignIn from '../authentication/pages/signIn';

const DrawerNavigation = createDrawerNavigator({
    Home: {
        screen: TabNavigation
    },
    Photos,
    Products,
    Login,
    SignIn,
});
const NavigationContainer = createAppContainer(DrawerNavigation);

export default NavigationContainer;