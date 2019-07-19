// import React, { Component } from 'react'
// import { View, Text, Image, StyleSheet } from 'react-native'
// import SelectMultiple from 'react-native-select-multiple'

// const fruits = [
//   { label: 'Apples', value: 'appls' },
//   { label: 'Oranges', value: 'orngs' },
//   { label: 'Pears', value: 'pears' }
// ]
// const renderLabel = (label, style) => {
//     console.warn(label);
//     return (
//         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//             <Image style={{ width: 42, height: 42 }} source={{ uri: 'https://dummyimage.com/100x100/52c25a/fff&text=S' }} />
//             <View style={{ marginLeft: 10 }}>
//                 <Text style={style}>{label}</Text>
//             </View>
//         </View>
//     )
// }
// export default class SecMul extends Component {
//     state = { selectedFruits: [] }

//     onSelectionsChange = (selectedFruits) => {
//         this.setState({ selectedFruits })
//     }
//     render() {
//         return (
//             <View style={{ flex: 1, backgroundColor: 'red' }}>
//                 <SelectMultiple
//                     items={fruits}
//                     renderLabel={renderLabel}
//                     selectedItems={this.state.selectedFruits}
//                     onSelectionsChange={this.onSelectionsChange} />
//             </View>
//         )
//     }
// }
// // export default class SecMul extends Component {
// //     render() {
// //         return (
// //             <View style={styles.container}>
// //                 <SelectMultiple
// //                     options={[
// //                         'JAVA',
// //                         'CSS',
// //                         'HTML',
// //                         'JS',
// //                         'RJ'
// //                     ]}
// //                     selectedOptional={['JAVA']}
// //                     maxSelectedOptions={3}
// //                     onselection={(option) => alert(option + 'was selected')}
// //                 />

// //             </View>
// //         );
// //     }
// // }
// // const styl = StyleSheet.create({
// //     container: {
// //         marginTop: 60,
// //         margin: 15
// //     }
// // });


import React, { Component } from 'react'
import { View } from 'react-native'
import SelectMultiple from 'react-native-select-multiple'

const fruits = ['Apples', 'Oranges', 'Pears']
// --- OR ---
// const fruits = [
//   { label: 'Apples', value: 'appls' },
//   { label: 'Oranges', value: 'orngs' },
//   { label: 'Pears', value: 'pears' }
// ]

class SecMul extends Component {
  state = { selectedFruits: [] }

  onSelectionsChange = (selectedFruits) => {
    // selectedFruits is array of { label, value }
    this.setState({ selectedFruits })
  }

  render () {
    return (
      <View>
        <SelectMultiple
          items={fruits}
          selectedItems={this.state.selectedFruits}
          onSelectionsChange={this.onSelectionsChange} />
      </View>
    )
  }
}
export default SecMul