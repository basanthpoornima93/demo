
import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    ScrollView
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

export default class Examp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    componentDidMount() {
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(responseJson => { this.setState({ dataSource: responseJson, filterSource: responseJson }); })
    }

    SearchFilterFunction(text) {
        //  Method-1   // const newData = this.state.filterSource.filter((item) => {
        //     const itemData = item.name ? item.name : '';
        //     const textData = text;
        //     return itemData.indexOf(textData) > -1;
        // });
        //  andMethod-2  // let arr = []
        // this.state.filterSource.map((item) => {
        //     const itemName = item.name ? item.name : '';
        //     const itemUserName = item.username ? item.username : '';
        //     if (itemName.match(text) || itemUserName.match(text)) {
        //         arr.push(item);
        //     }
        // });
        //andMethod-3
        let arr = [];
        this.state.filterSource.map((item) => {
            if (item.name && item.name.match(text) || item.username && item.username.match(text)) {
                arr.push(item);
            }
        });
        this.setState({ dataSource: arr, text: text });
    }

    render() {
        const getTableDat = this.state.dataSource && this.state.dataSource.map((val, k) => {
            return (
                <View key={k} style={{ flexDirection: 'row', justifyContent: 'space-between' }}  >
                    <Text style={{ width: 40, padding: 5, justifyContent: 'flex-start', textAlign: 'left', margin: 5, alignItems: 'flex-start', color: 'black' }}>{val.id} </Text>
                    <Text style={{ width: 180, padding: 5, justifyContent: 'flex-start', textAlign: 'left', margin: 5, alignItems: 'flex-start', color: 'black' }}>{val.name} </Text>
                    <Text style={{ width: 180, padding: 5, justifyContent: 'flex-start', textAlign: 'left', margin: 5, alignItems: 'flex-start', color: 'black' }}>{val.username} </Text>
                </View>
            )
        })
        return (
            <View style={styles.container}>
                <Icon name="search" style={{ color: 'skyblue', justifyContent: 'flex-end', alignSelf: 'flex-end', fontSize: 16, padding: 5, marginTop: 5 }} />
                <TextInput
                    style={{ marginTop: -26 }}
                    onChangeText={text => this.SearchFilterFunction(text)}
                    value={this.state.text}
                    placeholder="Search Here"
                />
                <ScrollView>
                    {getTableDat}
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff'
    }
});