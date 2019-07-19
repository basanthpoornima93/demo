import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Table extends Component {
    constructor() {
        super();
        this.state = {}
        this.state.costomStyle = {
            color: 'red'
        }
        setInterval(() => {
            if (this.state.costomStyle.color == 'red') {
                this.setState({
                    costomStyle: {
                        color: 'green'
                    }
                })
            } else {
                this.setState({
                    costomStyle: {
                        color: 'red'
                    }
                })
            }
        }, 1000)
    }
    render() {
        return (
            <View style={styles.mainView}>
                <Text style={[styles.textView, this.state.costomStyle]}>Hello, world!</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textView: {
        color: 'black',
        fontWeight: '600',
        fontSize: 20
    }

});