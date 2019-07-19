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
    signincon: {
        fontSize: 25,
        color: '#e9967a',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    tcontainer: {
        height: 50,
        backgroundColor: 'transparent',
        paddingLeft: 15,
        margin: 3,
        elevation: 10,
        borderRadius: 10
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
    sininvie: {
        height: 28,

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
    scontainer: {
        marginTop: 15,
        padding: 5,
        margin: 22
    },
    cardsHeading: {
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-between'
    },
    headingContentText: {
        flex: 1,
        marginLeft: 10,
        padding: 5,
        color: '#005b8e',
        fontSize: 14,
        fontWeight: '400',
        top: 5
    },
    viewAllStyle: {
        height: 25,
        width: 55,
        backgroundColor: '#2da1f6',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
        bottom: -1,
        borderRadius: 20,
        marginTop: 5
    },
    headingText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 10,
        fontWeight: '600'
    },
}