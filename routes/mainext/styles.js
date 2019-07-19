import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
export default {
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 5
    },
    subContainer: {
        height: 640,
        width: width - 10,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 5
    },
    mainView: {
        height: 60,
        width: 60,
        borderRadius: 40,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#b241f4',
        marginTop: 4
    },
    mainText: {
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: '600'
    },
    subView: {
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 5
    },
    sqlText: {
        alignSelf: 'center',
        fontWeight: '600',
        color: 'black'
    },
    dataText: {
        fontWeight: '400',
        fontSize: 15
    },
    horView: {
        height: 1,
        width: width - 10,
        backgroundColor: 'lightgrey'
    },
    caseText: {
        fontSize: 20,
        fontWeight: '600',
        color: 'black',
        padding: 5,
        margin: 3
    },
    subText: {
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        padding: 5
    },
    finalText: {
        fontWeight: '400',
        padding: 5,
        color:'black'
    },
    dataView: {
        fontWeight: '400',
        color: 'black'
    },
    btnView: {
        height: 40,
        width: 90,
        borderRadius: 5,
        backgroundColor: '#41bc31',
        alignSelf: 'flex-end',
        justifyContent: 'center',
        margin: 7,
        marginTop: 20
    },
    btnText: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 15,
        fontWeight: '600'
    },
    dotView: {
        fontSize: 20,
        fontWeight: '600',
        color: 'black',
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        padding: 7
    }
};