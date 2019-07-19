import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');


export default {
    container: {
        marginTop: 20,
        height: 460,
        width: 325,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 9
    },
    img: {
        flex: 1,
        paddingLeft: 30
    },
    signincon: {
        fontSize: 25,
        color: '#e9967a',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    scontainer: {
        marginTop: 15,
        padding: 5,
        margin: 22
    },
    tcontainer: {
        height: 50,
        backgroundColor: 'transparent',
        paddingLeft: 15,
        margin: 3,
        elevation: 10,
        borderRadius: 10
    },
    pswcontainer: {
        padding: 4,
        margin: 18,
        marginLeft: 20
    },
    ptcontainer: {
        height: 50,
        backgroundColor: 'transparent',
        margin: 3,
        paddingLeft: 15,
        elevation: 10,
        borderRadius: 10
    },
    sigcontainer: {
        justifyContent: 'center',
        alignSelf: 'center',
        elevation: 8,
        borderRadius: 20,
        height: 38,
        width: 120,
        backgroundColor: '#800080',
    },
    stext: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    logcontainer: {
        justifyContent: 'center',
        marginTop: 30
    },
    logtcontainer: {
        textAlign: 'center',
        fontSize: 12
    },
    finaltext: {
        fontSize: 12,
        textAlign: 'center'
    },
    signUpSelectButton: {
        backgroundColor: 'white',
        height: 40,
        width: width / 2,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'transparent',
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signInUnSelectButton: {
        backgroundColor: '#8a2be2',
        height: 60,
        width: 100,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    signInUnSelectButtonColor: {
        color: 'white',
        fontSize: 15
    },
    facebookview: {
        fontSize: 20,
        color: 'skyblue',
        height: 35,
        width: 35,
        backgroundColor: '#f5f5f5',
        borderRadius: 25,
        textAlign: 'center',
        justifyContent: 'center'
    }

};