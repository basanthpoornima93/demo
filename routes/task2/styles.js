import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
export default {
    container: {
        flex: 1,
        padding: 5
    },
    listText: {
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: '600',
        color: 'black',
        fontSize: 25,
        padding: 5
    },
    mainView: {
        marginTop: 7,
        height: 89,
        width: width - 20,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        flexDirection: 'row',
        margin: 4,
        padding: 7,
        marginLeft: 6,
        borderColor: 'gray'
    },
    subView: {
        height: 60,
        width: 60,
        borderRadius: 40,
        justifyContent: 'center'
    },
    sqlView: {
        backgroundColor: '#b241f4',
    },
    noView: {
        backgroundColor: '#41b8f4',
    },
    agrView: {
        backgroundColor: '#ead9d3'
    },
    firsView: {
        backgroundColor: '#8c8878'
    },
    finView: {
        backgroundColor: 'orange'
    },
    lastView: {
        backgroundColor: '#e83e44'
    },
    mainText: {
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: '600'
    },
    finalView: {
        flex: 1,
        padding: 5,
        margin: 5
    },
    subText: {
        fontWeight: '600',
        color: 'black',
        padding: 3
    },
    decText: {
        fontWeight: '400',
        color: 'black'
    },
    iconView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        marginTop: -4
    },
    iconStyle: {
        color: '#efc802',
        fontSize: 15,
        borderColor: 'black'
    },
    rating: {
        flexDirection: 'row'
    },
    buttIcon: {
        justifyContent: 'flex-end',
        alignSelf: 'flex-end'
    },
    touchView: {
        height: 40,
        width: 40,
        borderRadius: 30,
        backgroundColor: 'red',
        bottom: 30,
        justifyContent: 'center'
    },
    iconDes: {
        fontSize: 28,
        color: 'white',
        justifyContent: 'center',
        alignSelf: 'center',
        padding:5
    }
};