import React, { Component } from 'react';
import { View, Text } from 'react-native'
import PropTypes from 'prop-types';
class Heading extends Component {

    render() {
        return (
            <View>
                <Text>{this.props.message}</Text>
            </View>
        )
    }
}
Heading.propTypes = {
    message: PropTypes.string
}
Heading.defaultProps = {
    message: 'Heading One'
}
export default Heading;