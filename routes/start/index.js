import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, Alert, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import { Actions } from 'react-native-router-flux';



export default class Start extends Component {
  _onPressButton = () => {
    // Alert.alert('You tapped the button!')
    Actions.navigate();
  }
  render() {
    return (

      <View style={styles.mcontain}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={styles.sta}>
            <Text style={styles.first}>10:00-11:00AM</Text>
            <Text style={styles.second}>Monday , August 15</Text>
          </View>
          <View style={{ justifyContent: 'center' }}>
            <Image
              style={{ width: 80, height: 80, borderRadius: 50, paddingLeft: 10, alignSelf: 'center' }}
              source={require('../../images/interview.png')}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={styles.middle}>
            <Text style={styles.three}>Lendsey johnson</Text>
            <Text style={styles.four}>FIRST VISIT</Text>
          </View>

          <View style={styles.icon}>
            <View style={{ alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>
              <Icon style={{ fontSize: 20, color: '#005b8e' }} name="folder-open" />
            </View>
            <View style={{ alignSelf: 'center' }}>
              <Icon style={{ fontSize: 20, color: '#005b8e', }} name='calendar' />
            </View>
          </View>
        </View>
        <View style={styles.last}>
          <Text style={styles.five}>Blowout and style</Text>
          <Text style={styles.six}>1 hr</Text>
          <Text style={styles.seven}>$80.00</Text>
        </View>
        <View style={styles.fin} style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.fir}
            onPress={() => { Actions.navigate(); }}>
            <Text style={styles.click}>Reschedule</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sec}>
            <Text style={styles.clk}>Approve</Text>
          </TouchableOpacity>
        </View>
      </View >
    );
  }
}


// skip this line if using Create React Native App

