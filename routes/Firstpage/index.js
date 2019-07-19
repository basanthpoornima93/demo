import React, { Component } from 'react';
import { Text, View, TextInput, Picker, TouchableOpacity, Image, BackHandler,ScrollView } from 'react-native'
import styles from './styles';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'

export default class Firstpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: null,
            email: '',
            mobile: '',
            country: '',
            city: '',
            password: '',
            confpassword: '',
            selectSignIn: true,
            msg: null,
            isMsg: false,
            isVisibilty: false,
            details: [],
            isconfirmpassword: true,
            isPasswordShow: true,
            data: [],
            value: ''
        };
    }
    componentDidMount() {
        // BackHandler.addEventListener('hardwareBackPress', () => {
        //     Actions.homePage();
        //     return true;
        // });
        // let data = this.state.value;
        // this.setState({ details: data.source });
        // AsyncStorage.getItem('data').then((value) => {
        //     let data = JSON.parse(value);
        //     this.setState({ details: data.source })
        // });
      

    }
    myFunction = () => {
        let obj = {};
        obj.name = this.state.fullName;
        obj.email = this.state.email;
        obj.mobile = this.state.mobile;
        obj.country = this.state.country;
        obj.city = this.state.city;
        obj.password = this.state.password;
        obj.confpassword = this.state.confpassword;
        let arr = [];
        arr = this.state.details;
        arr.push(obj);
        var res=setItem('data', JSON.stringify({ source: arr }));
        console.warn(res);
        setTimeout(() => {
            Actions.Profile();
        }, 2000);
    }
    submit = () => {
        console.warn(this.state.data)
        const IsEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email);
        const isMobileValid = /^[0-9]$/.test(this.setState.mobileno);
        if (this.state.fullName === null || this.state.fullName === '') {
            this.setState({ selectSignIn: true, msg: "Please enter Full Name", isMsg: true })

        } else {
            if (this.state.fullName.length < 5) {
                this.setState({ selectSignIn: true, msg: "Name shouls be more than 5 character", isMsg: true })
            }
        } if (this.state.email === null || this.state.email === '' || !IsEmailValid) {
            if (this.state.email === null || this.state.email === '') {
                this.setState({ selectSignIn: true, msg: "Please enter your Email-id is", isMag: true })
            } else {
                this.setState({ selectSignIn: true, msg: "Plase enter valid Email", isMsg: true })
            }
        } if (this.state.password === null || this.state.password === '') {
            this.setState({ selectSignIn: true, msg: "Plase Enter Password", isMag: true })
        } else if (this.state.password.length < 4) {
            this.setState({ selectSignIn: true, msg: "Password Length is more than 4character", isMsg: true })
        } else if (this.state.password = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i) {
            this.setState({ selectSignIn: true, msg: "Password should be mix with special characters", isMsg: true })
        } if (this.state.password === this.state.confpassword) {
            this.setState({ isVisibilty: true })
            this.myFunction();
        } else {
            this.setState({ selectSignIn: true, msg: "Plase enter correct Confirmpassword", isMag: true });
        } if (this.state.mobile === null || this.state.mobile === '' || !isMobileValid) {
            if (this.state.mobile === null || this.state.mobile === '') {
                this.setState({ selectSignIn: true, msg: "Plase Enter your Mobile number", isMsg: true })
            } else if (this.state.mobile.length < 9) {
                this.setState({ msg: "Mobile number should be minimum  10 numbers" })
            }
        } if (this.state.country === null || this.state.country === '') {
            this.setState({ selectSignIn: true, msg: "Country Field should not be empty", isMsg: true })
        }
        if (this.state.city === null || this.state.city === '') {
            this.setState({ selectSignIn: true, msg: "City field should not be empty", isMsg: true })
        }
    }
    // alertMessage = (data) => {
    //     alert(data);
    // }
    render() {
        { this.state.data }
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                <View style={{ backfaceVisibility: 'hidden' }}>
                    <Image
                        source={require('../../images/nida.png')}
                        style={styles.proImg}
                    />
                    {this.state.isMsg ? <Text style={{ color: 'red' }}>{this.state.msg}</Text> : null}
                </View>
                <Image
                    source={require('../../images/back.png')}
                    style={styles.img}>
                    <View style={styles.mainContainer}>
                        <View>
                            <Text style={styles.mainText}>Registration</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <View>
                                <Text style={styles.nameView}>Full Name</Text>
                                <TextInput
                                    style={styles.fNameContainer}
                                    placeholder="Please enter your"
                                    underlineColorAndroid="transparent"
                                    maxLength={35}
                                    onChangeText={(text) => this.setState({ fullName: text })} />
                            </View>
                            <View>
                                <Text style={styles.nameView}>Position you are applying for</Text>
                                <Picker
                                    selectedValue={this.state.language}
                                    style={styles.pickerView}
                                    onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })
                                    }>
                                    <Picker.Item label="Fresher" value="Fresher" />
                                    <Picker.Item label="Experiance" value="Experiance" />
                                </Picker>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <View>
                                <Text style={styles.nameView}>Email</Text>
                                <TextInput
                                    style={styles.fNameContainer}
                                    placeholder="Please enter your"
                                    underlineColorAndroid="transparent"
                                    onChangeText={(text) => this.setState({ email: text })} />
                            </View>
                            <View>
                                <Text style={styles.nameView}>Phone number</Text>
                                <TextInput
                                    style={styles.fNameContainer}
                                    placeholder="Please enter your"
                                    underlineColorAndroid="transparent"
                                    maxLength={10}
                                    secureTextEntry={this.state.isMobileValid}
                                    keyboardType={'numeric'}
                                    returnKeyType="next"
                                    onChangeText={(text) => this.setState({ mobile: text })} />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <View>
                                <Text style={styles.nameView}>Country</Text>
                                <TextInput
                                    style={styles.fNameContainer}
                                    placeholder="Please enter your"
                                    underlineColorAndroid="transparent"
                                    onChangeText={(text) => this.setState({ country: text })} />
                            </View>
                            <View>
                                <Text style={styles.nameView}>City</Text>
                                <TextInput
                                    style={styles.fNameContainer}
                                    placeholder="Please enter your"
                                    underlineColorAndroid="transparent"
                                    onChangeText={(text) => this.setState({ city: text })} />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <View>
                                <Text style={styles.nameView}>Password</Text>
                                <TextInput
                                    style={styles.fNameContainer}
                                    placeholder="Please enter your"
                                    underlineColorAndroid="transparent"
                                    secureTextEntry={this.state.isPasswordShow}
                                    onChangeText={(text) => this.setState({ password: text })} />
                            </View>
                            <View>
                                <Text style={styles.nameView}>Confirm password</Text>
                                <TextInput
                                    style={styles.fNameContainer}
                                    placeholder="Please enter your"
                                    underlineColorAndroid="transparent"
                                    secureTextEntry={this.state.isconfirmpassword}
                                    onChangeText={(text) => this.setState({ confpassword: text })} />
                            </View>
                        </View>
                        <View>
                            <Text style={styles.nameView}>Gender</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <RadioGroup
                                    onSelect={(index, value) => this.onSelect(index, value)}
                                >
                                    <RadioButton value={'item1'} >
                                        <Text>Male</Text>
                                    </RadioButton>
                                    <RadioButton value={'item2'} >
                                        <Text>Female</Text>
                                    </RadioButton>
                                    <RadioButton value={'item3'}>
                                        <Text>Other</Text>
                                    </RadioButton>
                                </RadioGroup>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.touchableView} onPress={() => this.submit()}>
                                <Text style={styles.submitView}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Image>
                </ScrollView>
            </View>
        )
    }
}
