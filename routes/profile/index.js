import React, { Component } from 'react';
import { Image, Text, View, AsyncStorage, ScrollView } from 'react-native';
import styles from './styles';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: []
        };
    }
    componentDidMount() {
        AsyncStorage.getItem('data').then((value) => {
            let data = JSON.parse(value);
            console.log(data);
            this.setState({ details: data.source });
            if(data.source===null){
                return "No data is available"
            }
            console.log(data);
        });
    }

    render() {
        const list = this.state.details.map((m, n) => {
            return (
                <View key={n} style={{ top: 10 }} style={styles.mainView}>
                    <Image
                        source={require('../../images/nida.png')}
                        style={{}} style={styles.imageview} />
                    <Text style={styles.maintextView}>Mobile app designer</Text>
                    <Text style={styles.nametext}>Name is:{m.name}</Text>
                    <Text style={styles.emailtext}>Email id:{m.email}</Text>
                    <Text style={styles.mobilenoview}>Mobile number:{m.mobileno}</Text>
                </View>
            );
        })
        return (
            <View style={{ flex: 1, backgroundColor: 'gray' }}>
                <ScrollView>
                    {list}
                </ScrollView>
            </View>
        );
    }
}