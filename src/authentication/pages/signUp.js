import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Dimensions } from 'react-native';
import _loginService from '../services/loginService';
import _valueService from '../services/valueService';

export default class SignUp extends Component {
    static navigationOptions = {
        title: 'React Native - Sign Up'
    };

    constructor(props) {
        super(props);
    }

    state = {
        email: '',
        password: '',
        confirmPassword: '',
        errorMessage: null,
    };

    async componentDidMount(){
    }

    signUp = async () => {
        const { email, password, confirmPassword } = this.state;

        try {
            if(password !== confirmPassword) throw "Passwords doesn't match!";
            const username = await _loginService.Register({email, password});
            if (username) this.props.navigation.goBack();
        } catch (error) {
            this.setError(error);
        }
    };

    setError = (err) => {
        this.setState({errorMessage: err});
        setTimeout(() => {
            this.setState({errorMessage: null});
        }, 10000)
    }

    handleInputChange = (text, state) => {
        this.setState({[state]: text});
    };

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.containerForm}>
                    <TextInput
                        placeholder = 'Email'
                        returnKeyType = "next"
                        style={styles.textInput}
                        onChangeText={(text) => { this.handleInputChange(text, 'email'); }}
                        value={this.state.username}
                    />
                    <TextInput
                        placeholder= 'Password'
                        style={styles.textInput}
                        secureTextEntry
                        returnKeyType= 'next'
                        onChangeText={(text) => { this.handleInputChange(text, 'password'); }}
                        value={this.state.password}
                    />
                    <TextInput
                        placeholder= 'Confirm Password'
                        style={styles.textInput}
                        secureTextEntry
                        returnKeyType= 'go'
                        onChangeText={(text) => { this.handleInputChange(text, 'confirmPassword'); }}
                        value={this.state.confirmPassword}
                    />
                    <View style={styles.signUp}>
                        <Button onPress={this.signUp} title="Sign Up" />
                    </View>
                </View>       
                {!!this.state.errorMessage && <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fafafa',
      alignItems:'center',
      marginTop: 10,
      color: '#141823',
    },
    errorMessage: {
        color: '#ff0000',
        backgroundColor:'#000',
        fontSize: 30,
        marginTop: 20,
        paddingVertical: 10,
    },
    containerForm:{
        alignSelf: 'stretch',
    },
    textInput: {height: 40, width: '80%', alignSelf: 'center', borderBottomWidth: 1, borderBottomColor: '#0000ff'},
    signUp: {height: 40, width: '90%', alignSelf: 'center', marginTop: 10},
  });