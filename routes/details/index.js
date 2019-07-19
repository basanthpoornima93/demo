import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles';

export default class Detail extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <View style={styles.mainView}>
                        <Text style={styles.mainText}> SQL</Text>
                    </View>
                    <View style={styles.subView}>
                        <Text style={styles.sqlText}>SQL</Text>
                        <Text style={styles.dataText}>Create any trait from your data</Text>
                    </View>
                    <View style={styles.horView} />
                    <Text style={styles.caseText}>Use Cases</Text>

                    <View style={styles.subText}>
                        <Text style={styles.dataView}>
                            <Icon name='dot-single' style={styles.dotView} />
                            If no value/condition is found to be TRUE, then the CASE statement will return the value in the ELSE clause.
                        </Text>
                        <Text style={styles.dataView}>
                            <Icon name='dot-single' style={styles.dotView} />
                            If the ELSE clause is omitted and no condition is found to be true, then the CASE statement will return NULL.
                        </Text>
                        <Text style={styles.dataView}>
                            <Icon name='dot-single' style={styles.dotView} />
                            You can not use the CASE statement to control program flow, instead, use loops and conditional statements.
                        </Text>
                        <Text style={styles.dataView}>
                            <Icon name='dot-single' style={styles.dotView} />
                            Conditions are evaluated in the order listed. Once a condition is found to be true, the CASE statement will return the result and not evaluate the conditions any further.
                        </Text>
                    </View>
                    <Text style={styles.finalText}>
                        The CASE statement goes through conditions and return a value when the first condition is met (like an IF-THEN-ELSE statement). So, once a condition is true, it will stop reading and return the result.
                    </Text>
                    <TouchableOpacity style={styles.btnView}>
                        <Text style={styles.btnText}>Configue....</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

