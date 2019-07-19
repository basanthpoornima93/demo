import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity, TextInput, Dimensions, AsyncStorage } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');


export default class Signin extends Component {
    _onPressButton = () => {
        Actions.Profile();
    }
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            isVisible: false,
            selectSignUp: true,
            details: [],
        };
    }

    componentDidMount() {
        AsyncStorage.getItem('data').then((value) => {
            let data = JSON.parse(value);
            this.setState({ details: data.source });
        });
    }

    myFun = () => {
        if (this.state.details.length) {
            this.state.details.map((val, k) => {
                if (val.email === this.state.email && val.password === this.state.password) {
                    Actions.Profile();
                } else {
                    console.warn('email or password invalid please click on login you can login through facebook signin');
                    
                }
            })
        } else {
            console.log('you have nothing in database');
            console.warn('you have nothing in database please click on abov link');
        }
     
    }
    render() {
        return (
            <View style={styles.ccontainer} >
                <Image
                    source={require('../../images/back.png')}
                    style={styles.img}>
                    <View style={styles.container}>
                        <View style={styles.fcontainer}>
                            <Text style={styles.signincon}> Sign in</Text>
                        </View>
                        <View style={styles.scontainer}>
                            <TextInput style={styles.tcontainer} placeholder="UserName or Email!"
                                underlineColorAndroid='transparent' onChangeText={(text) => this.setState({ email: text })} />
                        </View>
                        <View style={styles.scontainer}>
                            <TextInput style={styles.ptcontainer} placeholder="Password" secureTextEntry
                                underlineColorAndroid='transparent' onChangeText={(text) => this.setState({ password: text })} />
                        </View>
                        <View style={{ top: 15, alignSelf: 'center', borderRadius: 25, alignSelf: 'flex-start', flexDirection: 'row' }}>
                            <TouchableOpacity style={this.state.selectSignIn ? styles.signInSelectButton : styles.signInUnSelectButton} onPress={() => { this.myFun() }}>
                                <Text style={this.state.selectSignIn ? styles.signInSelectButtonColor : styles.signInUnSelectButtonColor}>Sign in</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={this.state.selectSignIn ? styles.signInSelectButton : styles.signInUnSelectButton} onPress={() => { Actions.Initial(); }}>
                                <Text style={this.state.selectSignIn ? styles.signInSelectButtonColor : styles.signInUnSelectButtonColor}>Login</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ top: 40, flexDirection:'row',  justifyContent: 'space-around', padding: 5 }}>
                            <TouchableOpacity style={styles.imgtouchfb} onPress={() => { Actions.Login(); }}>
                                <Icon style={styles.facebookview }  name="facebook" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Image>
            </View>
        );
    }
}