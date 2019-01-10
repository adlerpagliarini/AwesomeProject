import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { _isSignedIn, _logout } from '../services/authProfile';
import _valueService from '../services/valueService';
import SignIn from './signIn';

export default class Profile extends Component {
    static navigationOptions = {
        title: 'Profile'
    };

    constructor(props) {
        super(props);
    }

    state = {
        signedIn: false,
        checkedSignIn: false,
        errorMessage: null,
        values: []
    };

    async componentDidMount(){
        console.log('Profile componentDidMount', this.props.navigation);

        this.isLoggedIn();
        this.createNavigationListeners();
    }

    isLoggedIn = () => {
        _isSignedIn().then(res => this.setState({ signedIn: res, checkedSignIn: true }))
        .catch(err => this.setState({ errorMessage: "An error occurred", checkedSignIn: true}));
    };

    createNavigationListeners = () => {
        const { addListener } = this.props.navigation;
        const self = this;
        this.listeners = [
            addListener('didFocus', () => {
                console.log('didFocus', self.state);
                self.isLoggedIn();
            }),
            addListener('willBlur', () => {
                console.log('willBlur', self.state);
            }),
        ];
    }

    deleteNavigationListeners = () =>{
        this.listeners.forEach(
            sub => { sub.remove() },
        );
    }

    componentWillUnmount() {
        console.log('componentWillUnmount', self.state);
        this.deleteNavigationListeners();
    }

    manageParentFromChild = () => {
        this.isLoggedIn();
    }

    logout = () => {
        _logout().then(res => this.setState({signedIn: res}))
        .catch(err => this.setState({errorMessage: "An error occurred"}));   
    }

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
        }, 5000)
    }

    render(){
        const { checkedSignIn, signedIn } = this.state;
        if (!checkedSignIn) {
            return null;
        }
        if (signedIn) {
            return (<View style={styles.container}>
                        <View style={styles.buttons}>
                            <Button onPress={this.loadValues} title="Carregar API" />
                            <Button onPress={this.logout} title="Logout" />
                        </View>
                        {this.state.values.map((value, i) => (
                                <View key={i} style={styles.valueItem}><Text>{i} - {value}</Text></View>
                        ))}
                    </View>);
        } else {
            return <SignIn {...this.props} actionIsLogged={this.manageParentFromChild}/>;
        }
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
    buttons: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    valueItem: {
        color: 'orange',
        fontSize: 20,
        paddingVertical: 10,
        fontSize: 20,
    },
  });