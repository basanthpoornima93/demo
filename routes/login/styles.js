import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default {
    defaultColor: 'skyBlue',
    flex: 2,
    maincontainer: {
        justifyContent: 'center',
        marginTop: 50,
        marginLeft: 30,
        height: height / 1.5,
        width: width / 1.2,
        paddingLeft: 10,
        backgroundColor: '#6495ed'
    },
    subcontainer: {
        backgroundColor: '#ffffff',
        height: height / 1.8,
        width: width / 1.3,
        paddingLeft: 5
    },
    maintext: {
        color: '#0000ff',
        fontSize: 22,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    iconfbImg: {
        top: 35
    },
    iconfb: {
        top: 15,
        height: 45,
        width: 29,
        color: '#00008b'
    },
    fbtext: {
        bottom: 32,
        paddingLeft: 38,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'skyblue',
        height: 36,
        width: width / 2.7,
        borderColor: '#00008b',
        borderWidth: 1
    },
    ggicon: {
        top: 15
    },
    icongoog: {
        top: 15,
        height: 45,
        width: 29,
        color: '#00008b'
    },
    ggtext: {
        bottom: 30,
        paddingLeft: 40,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'skyblue',
        height: 36,
        width: width / 2.7,
        borderColor: '#00008b',
        borderWidth: 1
    },
    intext: {
        top: 5,
        height: 36,
        width: 36,
        paddingLeft: 6,
        borderRadius: 9,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: '#00008b',
        alignItems: 'center',
        justifyContent: 'center',
    },
    linkedText: {
        bottom: 30,
        paddingLeft: 43,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'skyblue',
        height: 36,
        width: width / 2.7,
        borderColor: '#00008b',
        borderWidth: 1
    },
    secmaincontainer: {
        alignSelf: 'center',
        padding: 10,
        paddingLeft: 30,
        backgroundColor: 'white',
        bottom: 190,
        marginLeft: 150,
        height: height/ 2
    },
    Emailtext: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    EmailtextBoxStyle: {
        height: 20,
        width: width / 3,
        backgroundColor: '#f5f5f5',
    },
    pswtextBoxStyle:{
        height: 20,
        width: width / 3,
        backgroundColor: '#f5f5f5',
        top: 7
    },
    forgetpsw:{
        top: 30,
        marginVertical: 17,
        height: 40,
        width: width / 5,
        paddingLeft: 5,
        backgroundColor: 'white',
        justifyContent: 'center',
        borderColor:'red',
        borderWidth: 3
    },
    loginbtn:{
        backgroundColor:'#0000ff',
        justifyContent: 'center',
        height: 40,
        width: width / 6,
        paddingLeft: 20,
       top:46
        
    }

};