import { Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');
export default {
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        margin: 9,
        marginTop: 4
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20
    },
    dataView: {
        flex: 1,
        backgroundColor: 'red'
    }
}