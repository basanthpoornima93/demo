import React, { Component } from 'react';
import { Text, View,  Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';



export default class Navigate extends Component {

    render() {
        return (
            <View style={styles.mcontain}>

                <View style={styles.scont}>
                    <View>
                        <Text style={styles.tconta}>M</Text>
                    </View>
                    <View >
                        <Text style={styles.mconta}>Sr.UX Designer</Text>
                    </View>
                    <View>
                        <Text style={styles.mdconta}> Atlassian,Bangalore</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.lconta}>5-7 years Exp</Text>
                        <Text style={styles.lsconta}>12-15Lacks P.A</Text>
                    </View>
                    <View style={{ alignSelf: 'center', bottom: 109, marginLeft: 339 }}>
                        <Icon style={{ fontSize: 23, color: 'pink' }} name="star" />
                    </View>
                </View>
                <View style={styles.sscont}>
                    <View >
                        <Icon style={styles.ic} name="file-code-o" />
                    </View>
                    <View >
                        <Text style={styles.m1conta}>Dotnet Developer</Text>
                    </View>
                    <View>
                        <Text style={styles.md1conta}> TwitchTechnologies,Ameerpet</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.lconta1}>3-5 years Exp</Text>
                        <Text style={styles.lsconta1}>5-8Lacks P.A</Text>
                    </View>
                    <View style={{ alignSelf: 'center', bottom: 109, marginLeft: 339 }}>
                        <Icon style={{ fontSize: 23, color: 'orange' }} name="star" />
                    </View>
                </View>
                <View style={styles.ss1cont}>
                    <View >
                        <Text style={styles.tex}>In</Text>
                    </View>
                    <View >
                        <Text style={styles.m2conta}>React.js Developer</Text>
                    </View>
                    <View>
                        <Text style={styles.md2conta}> Linked-in,Ameerpet</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.lconta2}>3-5 years Exp</Text>
                        <Text style={styles.lsconta2}>5-8Lacks P.A</Text>
                    </View>
                    <View style={{ alignSelf: 'center', bottom: 109, marginLeft: 339 }}>
                        <Icon style={{ fontSize: 23, color: 'pink' }} name="star" />
                    </View>
                </View>
                <View style={styles.ss2cont}>
                    <View >
                        <Text style={styles.tex1}>QT</Text>
                    </View>
                    <View >
                        <Text style={styles.m3conta}>Java Developer</Text>
                    </View>
                    <View>
                        <Text style={styles.md3conta}> QuatityThought,Ameerpet</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.lconta3}>5-7 years Exp</Text>
                        <Text style={styles.lsconta3}>7-9 8Lacks P.A</Text>
                    </View>
                    <View style={{ alignSelf: 'center', bottom: 109, marginLeft: 339 }}>
                        <Icon style={{ fontSize: 23, color: 'pink' }} name="star" />
                    </View>
                </View>
                <View style={styles.vi}>
                    <View ><Text style={styles.maintex}>Up Work</Text></View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Text style={styles.t1}>Web Dev</Text>
                        <Text style={styles.t2}>Mobile Dev</Text>
                        <Text style={styles.t3}>Design</Text>
                        <Text style={styles.t4}>Voice Process</Text>
                        <Text style={styles.t5}>Marketing</Text>
                    </View>
                    <View style={{ height: 300, width: 400, justifyContent: 'space-around' }}>
                        <Image
                            style={{ width: 400, height: 400, borderRadius: 10, }}
                            source={require('../../images/interview.png')}
                        />
                    </View>


                    {/* <View style={[styles.input, styles.alignTop]}>
                        <TouchableOpacity onPress={this.toggle}>
                            <Text style={styles.headingContentText}>Total Interviews Chart</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.toggle}>
                            <Icon name="smile-o" style={styles.cardsIconStyle} />
                        </TouchableOpacity>
                    </View> */}
                </View>
            </View >

        );
    }
}
