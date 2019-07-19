import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native';
import Heading from './Heading';
import CustomMultiPicker from "react-native-multiple-select-list";

// const fruits = ['Apples', 'Oranges', 'Pears']
// export default class Flat extends Component {
//     state = { selectedFruits: [] }

//     onSelectionsChange = (selectedFruits) => {
//         this.setState({ selectedFruits })
//     }
//     render() {
//         return (
//             <View>
//                 <FlatList
//                     items={fruits}
//                     selectedItems={this.state.selectedFruits}
//                     onSelectionsChange={this.onSelectionsChange} />
//             </View>
//         )
//     }
// }
class Flat extends Component {
    render() {
        <CustomMultiPicker
            search={true} // should show search bar?
            multiple={true}
        />
        return (
            <View>
                <Heading message={'hello'} />
            </View>
        )
    }
}
export default Flat;
