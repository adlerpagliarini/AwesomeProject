import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ButtonLink from '../photos/pages/shared/buttonLink';
import CustomHeader from './CustomHeader';

export default class Pages extends Component {
   /* static navigationOptions = ({ navigation }) => ({
        header: (   // Your custom header
        <View
          style={{
            flexDirection: "row",
            height: 80,
            //marginTop: Platform.OS == "ios" ? 20 : 0 // only for IOS to give StatusBar Space
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text> BACK </Text>
          </TouchableOpacity>
          <Text> My Header </Text>
        </View>
     });*/

     /*static navigationOptions = ({ navigation }) => ({
        header: (
          <Home navigation = {navigation}/>
        ),
      })*/
    /*static navigationOptions = {
        header: <View
                    style={{
                        flexDirection: "row",
                        height: 80,
                        marginTop: Platform.OS == "ios" ? 20 : 0 // only for IOS to give StatusBar Space
                        }}
                >
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text> BACK </Text>
                    </TouchableOpacity>
                    <Text> My Header </Text>
                </View>;
        title: 'React Native - App'
    };*/

    /*static navigationOptions = {
        title: 'rect'
    }*/

    state = {
    };

    async componentDidMount(){
        console.log('Main DidMount', this.props);
    }
    
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.menu}>Menu</Text>
                <View style={styles.menuContainer}>
                    <ButtonLink props={{linkTo: 'Products', linkText: 'Products Layout', navigation: this.props.navigation}} />
                    <ButtonLink props={{linkTo: 'Photos', linkText: 'Get Started - Photo List', navigation: this.props.navigation}} />
                </View>
                <View style={styles.welcome}><Text style={styles.welcomeText}>by Adler Pagliarini</Text></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      marginTop: 10,
      color: '#141823'
    },
    welcome:{
        flex: 1,
        padding: 20,
        alignItems: 'center', /* margin auto */
        //justifyContent: 'center', /* vAlign middle */
        /* alignSelf: 'center', */ //nesse caso vai alinha no centro só com tamanho do texto
    },
    welcomeText:{
        fontWeight: "bold",
        color: '#ccc',
        fontSize: 24,
    },
    menu:{
        fontWeight: "bold",
        alignSelf: 'center'
    },
    menuContainer:{
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        margin: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start', /* alinha no centro no sentido do flexDirection */
        justifyContent: "center" /* alinha no centro oposto ao sentido do flexDirection */
    },
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