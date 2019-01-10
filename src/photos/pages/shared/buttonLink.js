import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonLink = ({ props }) => ( console.log(props),
    <TouchableOpacity style={styles.menuButton} onPress={() => {
        props.navigation.navigate(props.linkTo, props.linkToParams)
    }}>
        <Text style={styles.menuButtonText}>
            {props.linkText}
        </Text>
    </TouchableOpacity>
)

export default ButtonLink;

const styles = StyleSheet.create({
    menuButton:{
        height: 32,
        borderRadius: 5,
        borderWidth: 2,
        padding:20,
        margin:10,
        alignItems: "center", /* alinha horizontal quando column */
        justifyContent: "center", /* alinha vertical quando column */
        borderColor: "#DA552F",
        backgroundColor: "transparent",
    },
    menuButtonText:{
        fontSize: 16,
        color:"#DA552F",
        fontWeight: "bold"
    }
  });