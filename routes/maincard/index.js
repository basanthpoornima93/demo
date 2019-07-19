import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import SelectMultiple from 'react-native-select-multiple'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default class MainCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: ['SQL',123,'hgyg']
        }
    }
    // onSelecthange = () => {
    //     this.setState({ data })
    // }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.listText}>List Details</Text>
                <SelectMultiple>
                    <View>
                        <View style={styles.mainView} >
                            <View style={[styles.subView, styles.sqlView]}>
                                <Text style={styles.mainText}>{this.state.data}</Text>
                            </View>
                            <View style={styles.finalView} >
                                <Text style={styles.subText}>{this.data}</Text>
                                <Text style={styles.decText}>Create any trait from your data</Text>
                                <View style={styles.iconView}>
                                    <View style={styles.rating}>
                                        <Icon name="star" style={styles.iconStyle} />
                                        <Icon name="star" style={styles.iconStyle} />
                                        <Icon name="star" style={styles.iconStyle} />
                                        <Icon name="star" />
                                        <Icon name="star" />
                                    </View>
                                    <View >
                                        <Text style={styles.review}>206 Reviews</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.mainView} >
                            <View style={[styles.subView, styles.noView]}>
                                <Text style={styles.mainText}>{this.state.data}</Text>
                            </View>
                            <View style={styles.finalView}>
                                <Text style={styles.subText}>EventCounter</Text>
                                <Text numberOfLines={1} style={styles.decText}>Store a count of a certain event over a period of time</Text>
                                <View style={styles.iconView}>
                                    <View style={styles.rating}>
                                        <Icon name="star" style={styles.iconStyle} />
                                        <Icon name="star" style={styles.iconStyle} />
                                        <Icon name="star" style={styles.iconStyle} />
                                        <Icon name="star" />
                                        <Icon name="star" />
                                    </View>
                                    <View >
                                        <Text style={styles.review}>206 Reviews</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.mainView} >
                            <View style={[styles.subView, styles.agrView]}>
                                <Text style={styles.mainText}>SQL</Text>
                            </View>
                            <View style={styles.finalView}>
                                <Text style={styles.subText}>{this.state.data}</Text>
                                <Text style={styles.decText}>Create any trait from your data</Text>
                                <View style={styles.iconView}>
                                    <View style={styles.rating}>
                                        <Icon name="star" style={styles.iconStyle} />
                                        <Icon name="star" style={styles.iconStyle} />
                                        <Icon name="star" style={styles.iconStyle} />
                                        <Icon name="star" />
                                        <Icon name="star" />
                                    </View>
                                    <View >
                                        <Text style={styles.review}>206 Reviews</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.mainView} >
                            <View style={[styles.subView, styles.firsView]}>
                                <Text style={styles.mainText}>SQL</Text>
                            </View>
                            <View style={styles.finalView}>
                                <Text style={styles.subText}>{this.state.data}</Text>
                                <Text style={styles.decText}>Create any trait from your data</Text>
                                <View style={styles.iconView}>
                                    <View style={styles.rating}>
                                        <Icon name="star" style={styles.iconStyle} />
                                        <Icon name="star" style={styles.iconStyle} />
                                        <Icon name="star" style={styles.iconStyle} />
                                        <Icon name="star" />
                                        <Icon name="star" />
                                    </View>
                                    <View >
                                        <Text style={styles.review}>206 Reviews</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.mainView} >
                            <View style={[styles.subView, styles.finView]}>
                                <Text style={styles.mainText}>SQL</Text>
                            </View>
                            <View style={styles.finalView}>
                                <Text style={styles.subText}>{this.state.data}</Text>
                                <Text style={styles.decText}>Create any trait from your data</Text>
                                <View style={styles.iconView}>
                                    <View style={styles.rating}>
                                        <Icon name="star" style={styles.iconStyle} />
                                        <Icon name="star" style={styles.iconStyle} />
                                        <Icon name="star" style={styles.iconStyle} />
                                        <Icon name="star" />
                                        <Icon name="star" />
                                    </View>
                                    <View >
                                        <Text style={styles.review}>206 Reviews</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.mainView} >
                            <View style={[styles.subView, styles.lastView]}>
                                <Text style={styles.mainText}>SQL</Text>
                            </View>
                            <View style={styles.finalView}>
                                <Text style={styles.subText}>{this.state.data}</Text>
                                <Text style={styles.decText}>Create any trait from your data</Text>
                                <View style={styles.iconView}>
                                    <View style={styles.rating}>
                                        <Icon name="star" style={styles.iconStyle} />
                                        <Icon name="star" style={styles.iconStyle} />
                                        <Icon name="star" style={styles.iconStyle} />
                                        <Icon name="star" />
                                        <Icon name="star" />
                                    </View>
                                    <View  >
                                        <Text style={styles.review}>206 Reviews</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.buttIcon}>
                            <TouchableOpacity style={styles.touchView}>
                                <Icon name='angle-right' style={styles.iconDes} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </SelectMultiple>
            </View>
        )
    }
}
