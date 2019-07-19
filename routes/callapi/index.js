import React, { Component } from 'react';
import { Text, View, AppRegistry, FlatList } from 'react-native';
import styles from './styles';

export default class CallApi extends Component {
    state = {
        data: []
    };
    componentWillMount() {
        this.fetchData();
    }
    fetchData = async () => {
        const response = await fetch('https://randomuser.me/api?results=50')
        const json = await response.json();
        this.setState({ data: json.results });
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(x, i) => i}
                    renderItem={({ item }) =>
                        <Text style={styles.text}>
                            {item.name.first}
                        </Text>
                    }
                />
            </View>
        );
    }

}