import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default class Accordian extends Component {
    render() {
        return (
            <View>
                <View style={styles.mainview}>
                    <Text style={styles.maintext}>Accordians Methods</Text>
                </View>
                {/* <Button class="ca"></Button> */}
            </View>

        );
    }
}