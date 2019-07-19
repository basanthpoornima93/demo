import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default {
    imageview: {
        alignSelf: 'center',
        top: 9,
        height: 160,
        width: 150,
        borderRadius: 150
    },
    mainView: {
        padding: 15,
        top: 50,
        alignSelf: 'center',
        height: 450,
        width: 350,
        backgroundColor: "#fffafa"
    },
    maintextView: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 17,
        padding: 8
    },
    nametext: {
        fontWeight: '600',
        fontSize: 17,
        color: '#deb887'
    },
    emailtext: {
        fontWeight: '600',
        fontSize: 17,
        color: '#deb887'
    },
    mobilenoview: {
        fontWeight: '600',
        fontSize: 17,
        color: '#deb887'
    }
};