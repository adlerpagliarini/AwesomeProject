import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import _loginService from '../services/loginService';
import _valueService from '../services/valueService';
import _tokenManageService from '../services/tokenManageService';

export default class SignIn extends Component {
    static navigationOptions = {
        title: 'Login Service - Sign In | Up'
    };

    constructor(props) {
        super(props);
    }

    state = {
        username: '',
        password: '',
        errorMessage: null,
        values: []
    };

    async componentDidMount(){
        console.log('SignIn componentDidMount', this.props.navigation, this.props.actionIsLogged);
    }

    async componentDidUpdate(){
        console.log('componentDidUpdate: ', this.state);
    }

    signIn = async () => {
        try {
            const { username: email, password } = this.state;
            const response = await _loginService.RequestToken({email, password});
            console.log({email, password}, response);
            if(response) {
                await _tokenManageService.SetToken(response);
                this.props.actionIsLogged();
            }
        } catch (error) {
            this.setError(error);
        }
    };

    signUp = async () => {
        console.log(this.props.navigation);
        this.props.navigation.navigate('SignUp');
    }

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
                        onChangeText={(text) => { this.handleInputChange(text, 'username'); }}
                        value={this.state.username}
                    />
                    <TextInput
                        placeholder= 'Password'
                        style={styles.textInput}
                        secureTextEntry
                        returnKeyType= 'go'
                        onChangeText={(text) => { this.handleInputChange(text, 'password'); }}
                        value={this.state.password}
                    />
                    <View style={styles.signIn}>
                        <Button onPress={this.signIn} title="Sign In" />
                    </View>
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
        marginBottom: 20,
        paddingVertical: 10,
    },
    containerForm:{
        alignSelf: 'stretch',
    },
    textInput: {height: 40, width: '80%', alignSelf: 'center', borderBottomWidth: 1, borderBottomColor: '#0000ff'},
    signIn: {height: 40, width: '90%', alignSelf: 'center', marginTop: 10},
    signUp: {height: 40, width: '90%', alignSelf: 'center', marginTop: 20, backgroundColor: "#FAFAFA", color:'#000'}
  });