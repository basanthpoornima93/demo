import React, {Component } from 'react';
import {TextInput,View} from 'react-native';
import styles from './styles';
 export default class Task1 extends Component{
     render(){
         return(
             <View>
                 <TextInput style={styles.maintext} placeholder="enter firts name">
                 </TextInput>
                 <TextInput placeholder="enter last name">
                 </TextInput>
             </View>
         );
     }
 }
