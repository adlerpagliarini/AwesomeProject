import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Dimensions } from 'react-native';
import _loginService from '../services/loginService';
import _valueService from '../services/valueService';
import _tokenManageService from '../services/tokenManageService';
import User from '../model/user';
import Token from '../model/token';

export default class Login extends Component {
    static navigationOptions = {
        title: 'Login Service - Auto Login | Reset '
    };

    constructor(props) {
        super(props);
    }

    state = {
        username: '',
        password: '',
        user: new User(),
        auth: new Token(),
        errorMessage: null,
        values: []
    };

    async componentDidMount(){
        try {
            const authenticated = await _tokenManageService.GetToken();
            if(authenticated) {
                this.setState({auth: authenticated});
                setTimeout(() => {
                    this.signOut();
                }, 10000);
            }else{
                const user = await _loginService.GetUser();
                this.setState({username: user.email, password: user.password});
            }
        } catch (error) {
            this.setError(error);
        }
    }

    async componentDidUpdate(){
        console.log('componentDidUpdate: ', this.state);
    }

    signIn = async () => {
        try {
            const { username: email, password } = this.state;
            const user = new User({email, password});
            const response = await _loginService.RequestToken(user);
            await _tokenManageService.SetToken(response);
            this.setState({auth: new Token(response)});
        } catch (error) {
            this.setError(error);
        }
    };

    signOut = async () => {
        try {
            await _tokenManageService.Clear().then();
            this.setState({auth: new Token(), user: new User()});   
        } catch (error) {
            this.setError(error);
        }
    };

    loadValues = async () => {
        try {
            const values = await _valueService.GetAmountOfValue(10);
            this.setState({values});
        } catch (error) {
            this.setError(error);
        }
    }

    setError = (err) => {
        this.setState({errorMessage: err});
        setTimeout(() => {
            this.setState({errorMessage: null});
        }, 2000)
    }

    onChangeTextUsername = (text) => {
        this.setState(prevState =>
            ({user: new User({email: text, password: prevState.user.password})}))
        this.handleInputChange(text, 'username');
    }

    handleInputChange = (text, state) => {
        this.setState({[state]: text});
    };

    render(){
        return (
            <View style={styles.container}>
                {!this.state.auth.token &&
                    <View style={styles.containerForm}>
                        <TextInput
                            placeholder = 'Username'
                            returnKeyType = "next"
                            style={styles.textInput}
                            onChangeText={this.onChangeTextUsername}
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
                        <View style={styles.buttonView}>
                            <Button onPress={this.signIn} title="Entrar" />
                        </View>
                    </View>
                }
                {!!this.state.auth.token && <Button onPress={this.loadValues} title="Carregar API" />}
                {this.state.values.map((value, i) => (
                    <View key={i} style={styles.valueItem}><Text>{i} - {value}</Text></View>
                ))}
                {!!this.state.errorMessage && <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>}
            </View>
        )
    }
}

const { windowWidth } = Dimensions.get('window');

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
    valueItem: {
        paddingVertical: 10,
        fontSize: 20,
    },
    containerForm:{
        alignSelf: 'stretch',
    },
    textInput: {height: 40, width: '80%', alignSelf: 'center', borderBottomWidth: 1, borderBottomColor: '#0000ff'},
    buttonView: {height: 40, width: '90%', alignSelf: 'center', marginTop: 10}
  });