import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default {

    mcontainer: {
        flexDirection: 'row',
        borderBottomWidth: 5,
        borderColor: 'transparent',
        padding: 10
    },
    img: {
        height:250,
        width: width / 1
    },
    roundedcont: {
        height: height / 12,
        width: width / 2.1,
        margin: 15,
        borderRadius: 25,
        backgroundColor: 'transparent'
    },
    fnamecontainer: {
        height: height / 19,
        width: width / 2.5,
        backgroundColor: 'transparent',
        borderRadius: 25
    },
    iconcont: {
        margin: 10,
        color: 'black'
    },
    lnameitem: {
        height: height / 12,
        width: width / 2.3,
        margin: 15,
        borderRadius: 25,
        backgroundColor: 'transparent'
    },
    lnameicon: {
        margin: 1,
        color: 'black'
    },
    lnamecontainer: {
        height: height / 12,
        width: width / 2.7,
        backgroundColor: 'transparent',
        borderRadius: 25
    },
    emailitem: {
        bottom: 14,
        backgroundColor: 'transparent'
    },
    emailcontainer: {
        top: 3,
        height: height / 15,
        width: width / 1,
        backgroundColor: 'transparent',
        borderRadius: 25,
        borderColor: 'gray'
    },
    pwsitem: {
        top: 3,
        backgroundColor: 'transparent'
    },
    pswcontainer: {
        height: height / 15,
        width: width / 1,
        borderRadius: 25,
        borderColor: 'gray'
    },
    conpwsitem: {
        top: 18,
        backgroundColor: 'transparent'
    },
    conpswcontainer: {
        height: height / 15,
        width: width / 1,
        borderRadius: 25,
        borderColor: 'gray'
    },
    mobilenoitem: {
        top: 26,
        backgroundColor: 'transparent'
    },
    mobilenocon: {
        height: height / 15,
        width: width / 1,
        borderRadius: 25,
        borderColor: 'gray'
    },
    signInSelectButton: {
        backgroundColor: 'red',
        height: 40,
        width: width / 2.5,
        padding: 30,
       borderRadius:25,
        alignItems: 'center'
    },
    signInUnSelectButton: {
        backgroundColor: 'gray',
        height: 40,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'transparent',
         alignItems: 'center'
    },
    signInUnSelectButtonColor: {
        color: 'blue',
        fontSize: 18
    },
};