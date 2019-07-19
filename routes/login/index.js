import React, { Component } from 'react';
import {  Text, View, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchData: 0
        };
        this.intervel = null;
    }


    render() {
        return (
            <View style={styles.maincontainer}>
                <View style={styles.subcontainer}>
                    <Text style={styles.maintext}>Login To Your Account</Text>
                    <View style={styles.iconfbImg}>
                        <Icon name="facebook-square" style={styles.iconfb} size={30} />
                        <Text style={styles.fbtext} underlineColorAndroid='transparent'  >FaceBook</Text>
                    </View>
                    <View style={styles.ggicon}>
                        <Icon name='google-plus-square' style={styles.icongoog} size={30} />
                        <Text style={styles.ggtext}>Google</Text>
                    </View>
                    <Text style={styles.intext}>in</Text>
                    <Text style={styles.linkedText}>Linked In</Text>
                    <View style={styles.secmaincontainer}>
                    <View style={styles.emailview}>
                        <Text style={styles.Emailtext}>Email</Text>
                        <TextInput style={styles.EmailtextBoxStyle} placeholder="Email" 
                         underlineColorAndroid='transparent' onChangeText={(text) => this.setState({ email: text })} >
                         </TextInput>
                    </View>
                    <View>
                        <Text style={{fontWeight: "600",top: 3}}>Password</Text>
                        <TextInput style={styles.pswtextBoxStyle} placeholder="Password" 
                        secureTextEntry={this.state.isPasswordShow}  
                         underlineColorAndroid='transparent' onChangeText={(text) => this.setState({ Password: text })} ></TextInput>
                    </View>
                    <View style={{flexDirection: 'row',  justifyContent: 'space-around'}}>
                        <TouchableOpacity style={styles.forgetpsw} onPress={this.onPress} >
                            <Text style={{fontWeight: "600"}}>Forgot Password? </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.loginbtn} onPress={this.onPress} >
                            <Text style={{fontWeight: "600",color:'white',padding:5}}>Login </Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                </View>
            </View>

        );
    }

}