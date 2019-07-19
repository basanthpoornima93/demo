import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
// const defaultColor = require('../../config/themes/variable').theme;
// const { theme } = require('../../config/themes/variable');

export default {
    defaultColor: 'skyblue',
    sigInContainer: {
        alignItems: 'flex-end',
        margin: 10,
        marginBottom: 0
    },
    sigInText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white'
    },
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    imageContainer: {
        flex: 1
    },
    carouselStyle: {
        flex: 1,
        backgroundColor: '#e0e1e2',
        height: height / 2.4
    },
    subjectsContainer: {
        flex: 1,
        backgroundColor: '#e0e1e2'
    },
    subjectsView: {
        backgroundColor: 'white',
        marginTop: 10,
        paddingBottom: 10
    },
    subjectsText: {
        fontSize: 20,
        color: 'black',
        fontWeight: '600',
        paddingLeft: 10
    },
    searchButton: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        elevation: 5,
        marginTop: 60,
        marginLeft: 40,
        marginRight: 40,
        paddingLeft: 10,
        paddingRight: 20,
        justifyContent: 'center'
    },
    iconStyle: {
        backgroundColor: '#42a5f5',
        width: 40,
        marginLeft: 200
    },
    subjectsMainView: {
        marginLeft: 10
    },
    iconText: {
        color: '#ffffff',
        padding: 10
    },
    textStyle: {
        fontSize: 20,
        color: '#B5B5B5'
    },
    image: {
        flexGrow: 2,
        height: height / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    fontSizeTitle: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    fontSizesubTitle: {
        fontSize: 16,
        fontWeight: '400'
    },
    fontSizeResumeTitle: {
        fontSize: 16,
        textAlign: 'center',
        color: 'white',
        paddingLeft: 5
    },
    iconResumeText: {
        color: '#ffffff'
    },
    resumeView: {
        justifyContent: 'center',
        flexDirection: 'row',
        paddingBottom: 20,
        top: 30
    },
    paragraph: {
        color: 'white',
        textAlign: 'center',
        top: 50,
        paddingBottom: 20
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    mainText: {
        // color: theme,
        textAlign: 'center',
        top: 50,
        paddingBottom: 20,
        fontSize: 20,
        fontWeight: '600'
    },
    subText: {
        textAlign: 'center',
        top: 50,
        paddingBottom: 20,
        fontSize: 14,
        fontWeight: '200'
    },
    imageAnim: {
        alignSelf: 'center',
        top: 40,
        height: 50,
        width: 50
       
    },
    bulletStyle: {
        backgroundColor: '#e0e1e2'
    },
    chosenBulletStyle: {
        backgroundColor: '#42a5f5'
    },
    defaultStyle: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    shortCardView: {
        backgroundColor: 'white',
        height: height / 4,
        width: width / 2.5,
        shadowRadius: 5,
        shadowOpacity: 0.3,
        elevation: 5,
        margin: 5,
        marginBottom: 5,
        shadowOffset: { width: 0, height: 2 },
        justifyContent: 'center',
        borderColor: 'white',
        borderRadius: 5,
        borderWidth: 1
    },
    subjectsImage: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    },
    imageStyle: {
        height: 60,
        width: 60
    },
    mainTextStyle: {
        color: 'blue',
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'center'
    },
    subTextStyle: {
        color: 'blue',
        fontSize: 12,
        fontWeight: '200',
        textAlign: 'center'
    },
    lowerTextStyle: {
        color: '#a0a0a0',
        fontSize: 12,
        fontWeight: '200'
    },
    cardContentView: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    cardLowerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 2
    },
    valuesView: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    },
    inputView: {
        alignItems: 'center'
    },
    valuesStyle: {
        fontSize: 14,
        fontWeight: '400',
        color: 'black'
    },
    labelStyle: {
        fontSize: 10
    },
    imageView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30
    },
    imageSubView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageMainView: {
        flex: 1,
        backgroundColor: 'white',
        margin: 5
    },
    textMainView: {
        fontSize: 16,
        color: 'black',
        fontWeight: '600'
    },
    imageStyles: {
        height: 50,
        width: 50
    },
    textSubView: {
        fontSize: 14,
        paddingLeft: 3,
        fontWeight: '400'
    },
    bottomCardView: {
        flex: 1,
        flexDirection: 'row',
        height: height / 6,
        width: width - 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    featuresText: {
        fontSize: 20,
        color: 'black',
        fontWeight: '600'
    },
    bottomCardMainView: {
        height: height / 4
    },
    bottomContainer: {
        flexDirection: 'row'
    }
};