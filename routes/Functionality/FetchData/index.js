import React, { Component } from 'react';
import { Text, View, TextInput, ScrollView, StyleSheet, TouchableOpacity, Alert, FileList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import services from '../../services';

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            title: props.value.title,
            id: props.value.id
        }
    }

    saveData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
                id: this.state.id,
                title: this.state.title
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
        this.setState({ isEdit: false });

    }
    render() {
        return (
            <View style={{  flexDirection: 'row', backgroundColor: '#f1f8ff', margin: 2, padding: 7, flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                <Text style={{ color: 'black', fontWeight: '400' }}>{this.props.value.id}</Text>
                {this.state.isEdit ?
                    <TextInput
                        style={{ flex: 1, color: 'black', fontWeight: '400', justifyContent: 'center' }}
                        value={this.state.title}
                        onChangeText={(text) => { this.setState({ title: text }) }}
                    /> :
                    <Text style={{ color: 'black', fontWeight: '400' }}>{this.state.title}</Text>
                }
                <View style={{ justifyContent:'flex-end'}}>
                    {!this.state.isEdit ?
                        <TouchableOpacity onPress={() => { this.setState({ isEdit: !this.state.isEdit }) }} >
                            <Text style={{ borderWidth: 1, borderRadius: 3, height: 40, width: 55, color: 'white', backgroundColor: 'grey', textAlign: 'center', alignSelf: 'center', justifyContent: 'center', padding: 5 }}>Edit</Text>
                        </TouchableOpacity> : <TouchableOpacity onPress={() => this.saveData()} >
                            <Text style={{ borderWidth: 1, borderRadius: 3, height: 40, width: 55, color: 'white', backgroundColor: 'green', textAlign: 'center', alignSelf: 'center', justifyContent: 'center', padding: 5 }}>Save</Text>
                        </TouchableOpacity>}
                </View>
            </View >
        );
    }

}

export default class FetchData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            title: '',
            submit: '',
            id: '',
            dataSource: [],
            filterSource: []
        }
    }
    componentDidMount() {
        this.getData();

    }
    getData = () => {
        return fetch('https://jsonplaceholder.typicode.com/posts')//Fetching the data from service.
            .then(response => response.json())
            .then(responseJson => {
                this.setState({ dataSource: responseJson, filterSource: responseJson });
            })
    }

    SearchFilterFunction = (text) => {
        var arr = [];
        this.state.filterSource.map((item) => {
            if (item.title && item.title.match(text)) {
                arr.push(item)
            }
        });
        this.setState({ dataSource: arr, text: text });
    }


    render() {
        const getData = this.state.dataSource && this.state.dataSource.map((val, k) => {
            return <Display value={val} key={k} />
        });
        return (
            <View style={styles.container} >
                <TextInput
                    style={{ marginTop: -26 }}
                    onChangeText={text => this.SearchFilterFunction(text)}
                    value={this.state.text}
                    placeholder="Search Here"
                />
                <ScrollView>
                    {getData}
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        margin: 10,
        backgroundColor: '#fff'
    }
});