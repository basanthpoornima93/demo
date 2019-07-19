import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity, TextInput, Dimensions, ScrollView, BackHandler, AsyncStorage, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import { Item } from 'native-base';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');

export default class Initial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: null,
            lname: null,
            skipCount: 0,
            email: null,
            password: null,
            confirmpassword: null,
            mobileno: null,
            isVisible: false,
            eyeIcon: 'eye-slash',
            left: (width / 2) - 50,
            top: (height / 5) - 100,
            isPasswordShow: true,
            isconfirmpassword: true,
            selectSignIn: true,
            details: [],
            isMsg: false,
            msg: null
        };
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', () => {
            Actions.homePage();
            return true;
        });
        AsyncStorage.getItem('data').then((value) => {
            let data = JSON.parse(value);
            this.setState({ details: data.source })
        });
    }

    myFunction = () => {
        let obj = {};
        obj.name = this.state.fname + this.state.lname;
        obj.email = this.state.email;
        obj.password = this.state.password;
        obj.confirmpassword = this.state.confirmpassword;
        obj.mobileno = this.state.mobileno;
        let arr = [];
        arr = this.state.details;
        arr.push(obj);
        AsyncStorage.setItem('data', JSON.stringify({ source: arr }));
        setTimeout(() => {
            Actions.Profile();
        }, 2000);
      
    }

    // getData = () => {
    //    console.log("in getData");
    //     AsyncStorage.getItem('data').then((value) => {
    //         let data = JSON.parse(value);
    //         console.log(data);
    //     });
        
    // }


    submit = () => {
        let _self = this;
        _self.setState({ selectSignIn: false });
        const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(_self.state.email);
        const isMobileno = /^[0-9]$/.test(_self.setState.mobileno);
        if (_self.state.email === null || _self.state.email === '' || !isEmailValid) {
            if (_self.state.email === null || _self.state.email === '') {
                _self.setState({ selectSignIn: true, msg: 'Please enter email', isMsg: true });
                // _self.alertMessage();
            } else {
                _self.setState({ selectSignIn: true, msg: 'Please enter valid email', isMsg: true });
                // _self.alertMessage('Please enter valid email');
            }
        } else if (_self.state.password === null || _self.state.password === '') {
            _self.setState({ selectSignIn: true, msg: 'Please enter password', isMsg: true });
            //_self.alertMessage('Please enter password');
        } else if (_self.state.password.length < 4) {
            _self.setState({ selectSignIn: true, msg: 'Please enter valid password', isMsg: true });
            //_self.alertMessage('Please enter valid password');

        } else if (_self.state.password === _self.state.confirmpassword) {
            _self.setState({ isVisible: true });
            _self.myFunction();
        }
        else {
            _self.setState({ selectSignIn: true, msg: "Please enter same password in confirm password", isMsg: true })
            // _self.alertMessage("Please enter same password in confirm password");
        } if (_self.state.mobileno === null || _self.state.mobileno === '' || !isMobileno) {
            if (_self.state.mobileno === null || _self.state.mobileno === '') {
                _self.setState({ selectSignIn: true, msg: 'please enter your phone number', isMsg: true });
                // _self.alertMessage("please enter your phone number")
            }
            else if (_self.state.mobileno.length < 9) {
                if (_self.state.mobileno === null || _self.state.mobileno === '') {
                    _self.setState({ selectSignIn: true, msg: 'please enter valid email', isMsg: true })
                } else {
                    _self.setState({ selectSignIn: true, msg: "Your Phone Number should only consists of 10 numbers", isMsg: true });

                }
            }
        }
    }
   
    alertMessage = (data) => {
       alert(data);
    }

    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                <View >
                    <View>
                        <Image
                            source={require('../../images/home.png')}
                            style={styles.img}>
                        </Image>
                        {this.state.isMsg ? <Text style={{ color: 'red' }}>{this.state.msg}</Text> : null}
                    </View>

                    <View style={styles.mcontainer} >
                        <Item rounded style={styles.roundedcont}>
                            <Icon name="user" color='gray' style={styles.iconcont} size={10} />
                            <TextInput style={styles.fnamecontainer} placeholder="First Name!" maxLength={35}
                                underlineColorAndroid='transparent' onChangeText={(text) => this.setState({ fname: text })} />
                        </Item>
                        <Item rounded style={styles.lnameitem}>
                            <Icon name="user" color="gray" style={styles.lnameicon} />
                            <TextInput style={styles.lnamecontainer} placeholder="Last Name!"
                                underlineColorAndroid='transparent' onChangeText={(text) => this.setState({ lname: text })} />
                        </Item>
                    </View>
                    <View>
                        <Item rounded style={styles.emailitem}>
                            <Icon name="user" color="black" size={10} style={{ padding: 10 }} />
                            <TextInput style={styles.emailcontainer} placeholder="Your Email address"
                                underlineColorAndroid='transparent' onChangeText={(text) => this.setState({ email: text })} />
                        </Item>
                        <Item rounded style={styles.pwsitem}>
                            <Icon name="user" size={10} color="black" style={{ padding: 10 }} />
                            <TextInput style={styles.pswcontainer} placeholder="Password" secureTextEntry={this.state.isPasswordShow}
                                underlineColorAndroid='transparent' onChangeText={(text) => this.setState({ password: text })} />
                        </Item>
                        <Item rounded style={styles.conpwsitem}>
                            <Icon name="user" size={10} color="black" style={{ padding: 10 }} />
                            <TextInput style={styles.conpswcontainer} placeholder="confirmpassword" secureTextEntry={this.state.isconfirmpassword}
                                underlineColorAndroid='transparent' onChangeText={(text) => this.setState({ confirmpassword: text })} />
                        </Item>
                        <Item rounded style={styles.mobilenoitem}>
                            <Icon name="user" color="black" size={10} style={{ padding: 10 }} />
                            <TextInput style={styles.mobilenocon} placeholder="mobileno" secureTextEntry={this.state.isMobileno} maxLength={10}
                                underlineColorAndroid='transparent' keyboardType={'numeric'} returnKeyType="next"
                                onChangeText={(text) => this.setState({ mobileno: text })} /></Item>
                    </View>
                    <View style={{ top: 30, alignSelf: 'center', }}>
                        <TouchableOpacity style={this.state.selectSignIn ? styles.signInSelectButton : styles.signInUnSelectButton} onPress={() => this.submit()} >
                            <Text style={this.state.selectSignIn ? styles.signInSelectButtonColor : styles.signInUnSelectButtonColor} style={{ textAlign: 'center' }}>Sign in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}                  