import React, { Component } from 'react';
import { ActivityIndicator, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';



class Blink extends Component {
    state = { animating: true }

    closeActivityIndicator = () => setTimeout(() => this.setState({
        animating: false
    }), 60000)

    componentDidMount = () => this.closeActivityIndicator()
    render() {
        const animating = this.state.animating
        return (
            <View style={styles.container}>
                <ActivityIndicator
                    animating={animating}
                    color='#bc2b78'
                    size="small"
                    style={styles.activityIndicator} />
            </View>
        )
    }
}export default Blink


