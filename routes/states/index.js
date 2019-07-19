import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class States extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myState: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
    }

    updateState = () => this.setState({ myState: 'state is updated' })
    render() {
        return (
            <View >
                <Text style={styles.myState} onPress={this.updateState}>
                    {this.state.myState}
                </Text>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    myState: {
        marginTop: 20,
        textAlign: 'center',
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 20,
        justifyContent: 'center',

    }
})


