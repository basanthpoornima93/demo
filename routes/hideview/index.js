import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';

export default class Hideview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: false,
            display: false
        }
    }
    myFun = () => {
        this.setState({ expand: !this.state.expand });
    }

    render() {
        return (
            <View>
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
                    <View style={{ top: 15, alignSelf: 'center', borderRadius: 25, alignSelf: 'center', flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => { this.myFun() }}>
                            <Text style={styles.sininvie}>Sign in</Text>
                        </TouchableOpacity>
                    </View>
                    {this.state.expand ?
                        <View>
                            {!this.state.display ?
                                <View style={styles.cardsHeading}>
                                    <Text style={styles.headingContentText} >My Interviews</Text>
                                    <TouchableOpacity onPress={() => { this.setState({ display: true }) }} style={styles.viewAllStyle}>
                                        <Text style={styles.headingText} >View All</Text>
                                    </TouchableOpacity>
                                </View> : <View>
                                    <View style={styles.cardsHeading}>
                                        <Text style={styles.headingContentText} >My Interviews1</Text>
                                        <TouchableOpacity style={styles.viewAllStyle} onPress={() => { this.setState({ display: false }) }}>
                                            <Text style={styles.headingText} >View All</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.cardsHeading}>
                                        <Text style={styles.headingContentText} >My Interviews2</Text>
                                        <TouchableOpacity style={styles.viewAllStyle} onPress={() => { this.setState({ display: false }) }}>
                                            <Text style={styles.headingText} >View All</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.cardsHeading}>
                                        <Text style={styles.headingContentText} >My Interviews3</Text>
                                        <TouchableOpacity style={styles.viewAllStyle} onPress={() => { this.setState({ display: false }) }}>
                                            <Text style={styles.headingText} >View All</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>}
                        </View> : null}
                </View>
            </View>
        );
    }

}