import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import StackNavigation from './StackNavigation';
import LoginStackNavigation from './LoginStackNavigation';
import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

/*import About from './about';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';*/

const TabNavigation = createBottomTabNavigator({
       Menu:{
         screen: StackNavigation,
       },
       Profile: {
          screen: LoginStackNavigation,
       },
       /*About: {
          screen: About,
          navigationOptions: ({navigation}) => ({
            tabBarLabel: ({ tintColor }) => <TouchableOpacity onPress={()=>navigation.navigate('About')} style={{flex: 1, alignItems:'center', justifyContent: 'center'}}><Text>About</Text></TouchableOpacity>,
         }),
       }*/
    },{
    
      defaultNavigationOptions: ({ navigation }) => ({
         tabBarIcon: ({ focused, horizontal, tintColor }) => {
           const { routeName } = navigation.state;
           let IconComponent = Ionicons;
           let iconName;
           if (routeName === 'Menu') {
             iconName = `ios-home`;
           } else if (routeName === 'Profile') {
             iconName = `ios-log-in`;
           }
           return <IconComponent name={iconName} size={25} color={tintColor} />;
         },
      }),
      navigationOptions: ({ navigation }) => ({
         //define the icon for each tab here...
      }),
      tabBarOptions: {
        showIcon: true,
        activeTintColor: '#fff',
        inactiveTintColor: '#ddd',
        style: {
          backgroundColor: '#DA552F',
       }
    }
 });

const NavigationContainer = createAppContainer(TabNavigation);

export default NavigationContainer;