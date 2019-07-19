import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');


export default  {
    container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       marginTop: 70
    },
    activityIndicator: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       height: 80
    }
 }
 
 