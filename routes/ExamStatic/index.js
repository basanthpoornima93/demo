import React, { Component } from 'react';
import { Text, View, TextInput, AsyncStorage } from 'react-native';

export default class ExamStatic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            isLoad: false,
            tableHead: [{ id: 1, name: "Krupa", surName: "B" },
            { id: 2, name: "Basanth", surName: "B" },
            { id: 3, name: "Mounika", surName: "Y" },
            { id: 4, name: "Sonal", surName: "S" },
            { id: 5, name: "Sai", surName: "A" },
            { id: 6, name: "Poornima", surName: "P" },
            { id: 7, name: "Sujatha", surName: "A" }
            ]
        }
    }

    SearchFilterFunction = (text) => {
        const arr = [];
        this.state.tableHead.map((item) => {
            if (item.name && item.name.match(text) || item.surName && item.surName.match(text)) {
                arr.push(item);
            }
        });
        this.setState({ tableHead: arr, text: text })
    }
    setData = (event) => {
        this.setState({event })
    }

    render() {
        var getData = this.state.tableHead.map((val, k) => {
            return (
                <View key={k} style={{ height: 60, padding: 5, backgroundColor: '#f1f8ff', margin: 6, flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TextInput onChangeText={this.setData} value="" style={{ color: 'black', fontSize: 15, }}>{val.id}</TextInput>
                    <TextInput onChangeText={text => this.setData(text)} value="" style={{ color: 'black', fontSize: 15, width: 90 }}>{val.name}</TextInput>
                    <TextInput onChangeText={text => this.setData(text)} value="" style={{ color: 'black', fontSize: 15, }}>{val.surName}</TextInput>
                </View>

            )
        })

        return (
            <View style={{ padding: 16, paddingTop: 30, backgroundColor: '#fff' }}>
                <Text style={{ fontSize: 15, textAlign: 'center', margin: 5 }}>
                    {this.state.myKey}
                </Text>
                <TextInput
                    style={{ marginTop: -26 }}
                    onChangeText={text => this.SearchFilterFunction(text)}
                    value={this.state.text}
                    placeholder="Search Here"
                />
                {getData}
            </View>
        )

    }

}