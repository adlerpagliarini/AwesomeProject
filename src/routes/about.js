import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default class About extends Component {
    
    static navigationOptions = {
        drawerLabel: 'About',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('./menu_icon.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
    };

    componentDidMount(){
        console.log('About: render here');
    }

    render(){
        return (
            <View style={styles.container}>
                <Text>About Page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FAFAFA',
        color:"#fff"
    },
});