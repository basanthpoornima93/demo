
import { Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');
export default {
    mainContainer: {
        flex: 1
    },
    mcontain: {
        top: 50,
        padding: 10,
        backgroundColor: 'white',
        elevation: 3,
        margin: 30,
        height: height / 2
    },
    sta: {
        margin: 15,
        borderRadius: 5
    },
    maintext: {
        textAlign: 'left',
        fontSize: 20,
        color: 'red',
        fontWeight: '400',
    },
    first: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        justifyContent: 'space-between',
    },
    second: {
        fontSize: 16,
    },
    three: {
        fontWeight: 'bold',
        fontSize: 24,

        color: 'black',
        justifyContent: 'space-between',
    },
    four: {
        fontSize: 16,
    },
    five: {
        fontSize: 18,
    },
    six: {
        fontWeight: 'bold',
        backgroundColor: 'skyblue',
        fontSize: 16,
        height: 30,
        width: 30
    },
    last: {
        justifyContent: 'space-between',
        margin: 19,
        padding: 6,
        flexDirection: 'row'
    },
    seven: {
        textAlign: 'left',
        fontSize: 20,
        textAlign: 'right',
        color: 'purple'
    },
    // fin: {
    //     // margin: 19,
    //     // flexDirection: 'row',
    //     // justifyContent: 'space-around',
    //     // fontWeight: 'bold'
    // },
    fir: {

        backgroundColor: '#841584',
        height: 30,
        width: 95,
        margin: 15,
        borderRadius: 10,
        justifyContent: 'center',

    },
    sec: {
        top: 4,
        backgroundColor: '#841584',
        height: 30,
        width: 95,
        margin: 10,
        borderRadius: 10,
        justifyContent: 'center',
    },
    icon: {
        flexDirection: 'row',
    },
    click: {
        textAlign: 'right',
        top: 4,
        color: 'white',
        height: 35,
        width: 85,
        fontSize: 14,
        padding: 1,
        fontWeight: '500'
    },
    clk:{
        justifyContent: 'center',
        textAlign: 'right',
        top: 4,
        color: 'white',
        height: 35,
        width: 72,
        fontSize: 14,
        padding: 1,
        fontWeight: '500'
    }
};