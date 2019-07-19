import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default class Task2 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.listText}>List Details</Text>
                <TouchableOpacity style={styles.mainView} onPress={() => { Actions.details(); }}>
                    <View style={[styles.subView, styles.sqlView]}>
                        <Text style={styles.mainText}>SQL</Text>
                    </View>
                    <View style={styles.finalView} onPress={() => { Actions.details(); }}>
                        <Text style={styles.subText}>SQL</Text>
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
                </TouchableOpacity>
                <TouchableOpacity style={styles.mainView} onPress={() => { Actions.details(); }}>
                    <View style={[styles.subView, styles.noView]}>
                        <Text style={styles.mainText}>123</Text>
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
                </TouchableOpacity>
                <TouchableOpacity style={styles.mainView} onPress={() => { Actions.details(); }}>
                    <View style={[styles.subView, styles.agrView]}>
                        <Text style={styles.mainText}>SQL</Text>
                    </View>
                    <View style={styles.finalView}>
                        <Text style={styles.subText}>SQL</Text>
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
                </TouchableOpacity>
                <TouchableOpacity style={styles.mainView} onPress={() => { Actions.details(); }}>
                    <View style={[styles.subView, styles.firsView]}>
                        <Text style={styles.mainText}>SQL</Text>
                    </View>
                    <View style={styles.finalView}>
                        <Text style={styles.subText}>SQL</Text>
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
                </TouchableOpacity>
                <TouchableOpacity style={styles.mainView} onPress={() => { Actions.details(); }}>
                    <View style={[styles.subView, styles.finView]}>
                        <Text style={styles.mainText}>SQL</Text>
                    </View>
                    <View style={styles.finalView}>
                        <Text style={styles.subText}>SQL</Text>
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
                </TouchableOpacity>
                <TouchableOpacity style={styles.mainView} onPress={() => { Actions.details(); }}>
                    <View style={[styles.subView, styles.lastView]}>
                        <Text style={styles.mainText}>SQL</Text>
                    </View>
                    <View style={styles.finalView}>
                        <Text style={styles.subText}>SQL</Text>
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
                </TouchableOpacity>
                <View style={styles.buttIcon}>
                    <TouchableOpacity style={styles.touchView}>
                        <Icon name='angle-right' style={styles.iconDes} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
