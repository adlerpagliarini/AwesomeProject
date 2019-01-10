import React from 'react';
import { Header } from "react-navigation";
import { View, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native';

export default CustomHeader = props => {
        return (
            <View style={styles.headerContainer}>
                <View style={{...styles.icon, ...styles.drawerIcon}}>
                    <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
                        <Image source={require('./menu_icon.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={{...styles.originalHeader}} ><Header {...props} /></View>
            </View>
        )
}

const styles = StyleSheet.create({
    headerContainer:{
        backgroundColor: '#fff',
        height: 56,
        marginTop: Platform.OS == "ios" ? 20 : 0
    },
    icon:{
        width: 24,
        height: 24,
        flex: 1
    },
    drawerIcon:{
        position: 'absolute',
        zIndex: 99,
        right: 20,
        marginTop: (56/2)-12
    },
    originalHeader:{
      zIndex: 98,
    },
});