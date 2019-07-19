// import React, { Component } from 'react';
// import { Text, View, BackHandler } from 'react-native';
// import services from '.././services';


// export default class Data extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             id: '',
//             title: '',
//             data: services.sendData()
//         }
//     }
//     componentDidMount() {
//         // return fetch('https://jsonplaceholder.typicode.com/posts')
//         //     .then(response => response.json())
//         //     .then(responseJson => { this.setState({ dataSource: responseJson, filterSource: responseJson }); })
//         BackHandler.addEventListener('hardwareBackPress', () => {
//             Actions.FetchData();
//             return true;
//         });
//         // this.sendData();
//     }
//     // sendData = (data) => {
//     //     return data
//     // }

//     render() {
// console.warn(this.state.data.title);
//         return (
//             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                 <Text>
//                     hiii

//                     {/* {this.state.data} */}
//                 </Text>
//             </View>
//         );

//     }
// }


var a=20;
function f(){
  console.log(a);
  var a=30;
  console.log(a)
}
f()
console.log(a)