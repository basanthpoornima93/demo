import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { Container, Content } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Resume from 'react-native-vector-icons/SimpleLineIcons';
import { Actions } from 'react-native-router-flux';
import Carousel from 'react-native-looped-carousel';
// import MarqueeLabelVertical from 'react-native-lahk-marquee-label-vertical';
import AnimateNumber from 'react-native-animate-number';
import styles from './styles';
// const { theme } = require('../../config/themes/variable');
let data = ['Search Companies', 'Search Jobs', 'Search Resumes'];
let i = 0;

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchData: 0
        };
        this.intervel = null;
    }

    componentDidMount() {
        this.animateData();
        
    }

    onLayoutDidChange = (e) => {
        const layout = e.nativeEvent.layout;
        this.setState({ size: { width: layout.width, height: layout.height } });
    }

    animateData = () => {
        this.intervel = setInterval(() => {
            if (i === data.length - 1) {
                this.setState({ searchData: 0 });
                i = 0;
            } else {
                this.setState({ searchData: (i = i + 1) });
            }
        }, 2000);
    }
    componentWillUnmount() {
        clearInterval(this.intervel);
    }

    render() {
        return (
            <Container>
                <StatusBar
                    backgroundColor={styles.gray}
                    barStyle="light-content"
                />
                <Content>
                    <View style={styles.container}>
                        <View style={styles.imageContainer}>
                            <Image source={require('../../images/iphone.jpg')} style={styles.image} />
                            <View style={styles.overlay}>
                                <TouchableOpacity style={styles.sigInContainer} 
                                 onPress={() => Actions.Signin()}
                                >
                                    <Text style={styles.sigInText}>SignIn</Text>
                                </TouchableOpacity>
                                <Text style={[styles.paragraph, styles.fontSizeTitle]}>TALENTSCREEN</Text>
                                <Text style={[styles.paragraph, styles.fontSizesubTitle]}>Screen First Resume Next</Text>
                                <TouchableOpacity style={styles.searchButton} 
                                // onPress={() => Actions.searchPage()} 
                                >
                                    {/* <MarqueeLabelVertical duration={2000} textStyle={styles.textStyle}>
                                        {data[this.state.searchData]}
                                    </MarqueeLabelVertical> */}
                                    <Text>{data[this.state.searchData]}</Text>
                                    <View style={styles.iconStyle}>
                                        <Icon name="search" style={styles.iconText} size={20} />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.resumeView}>
                                    <Resume name="arrow-up-circle" style={styles.iconResumeText} size={20} />
                                    <Text style={styles.fontSizeResumeTitle}>UPLOAD RESUME</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.subjectsMainView}>
                            <Text style={styles.featuresText}>Features</Text>
                            <View style={styles.carouselStyle} onLayout={this.onLayoutDidChange}>
                                <Carousel
                                    delay={5000}
                                    style={this.state.size}
                                    autoplay
                                    bullets
                                    bulletStyle={styles.bulletStyle}
                                    chosenBulletStyle={styles.chosenBulletStyle}
                                    onAnimateNextPage={(p) => { }}
                                >
                                    <View style={styles.defaultStyle}>
                                        <Image source={require('../../images/interview.png')} style={styles.imageAnim} size={50} />
                                        <Text style={[styles.mainText]}  >Interviews</Text>
                                        <Text style={styles.subText}>
                                            There are so many interviews in TalentScreen, Based on your skills and experience Employer can schedule Interview in TalentScreen website
                                </Text>
                                    </View>
                                    <View style={styles.defaultStyle}>
                                        <Image source={require('../../images/Resume.jpg')} style={styles.imageAnim} size={50} />
                                        <Text style={[styles.mainText]} >Resumes</Text>
                                        <Text style={styles.subText}>
                                            Our App is more into Screening and enhancing .One Product, Multiple Attribute, Numerous Circumstances
                                </Text>
                                    </View>
                                    <View style={styles.defaultStyle}>
                                        <Image source={require('../../images/quiz.jpg')} style={styles.imageAnim} size={50} />
                                        <Text style={[styles.mainText]}  >Quizes</Text>
                                        <Text style={styles.subText}>
                                            Test your skills using our various challenges such as Choice , Coding , Video and Typed Quizes and share the results with your friends in Social Networking sites.
                                </Text>
                                    </View>
                                    <View style={styles.defaultStyle}>
                                        <Image source={require('../../images/jobs.jpg')} style={styles.imageAnim} size={50} />
                                        <Text style={[styles.mainText]}  >Jobs</Text>
                                        <Text style={styles.subText}>
                                            Receive suggestions on pursuing candidates based on skills you are targeting. Constantly find yourself updated with a list of best candidates in order to help  narrow down your talent search.
                                </Text>
                                    </View>
                                    <View style={styles.defaultStyle}>
                                        <Image source={require('../../images/report.jpg')} style={styles.imageAnim} size={50} />
                                        <Text style={styles.mainText}>Reports</Text>
                                        <Text style={styles.subText}>
                                            Generate and see the reports of best candidates by their quiz scores,candidates selected/interviewed,all the quizzes created and many other reports allowing you to keep an eye on every day activities.
                                </Text>
                                    </View>
                                </Carousel>
                            </View >
                        </View>
                        <View style={styles.subjectsContainer}>
                            <View style={styles.subjectsView}>
                                <Text style={styles.subjectsText}>Subjects</Text>
                                <ScrollView horizontal={true}>
                                    <View style={styles.shortCardView}>
                                        <View style={styles.subjectsImage}>
                                            <Image source={require('../../images/subjects/nodejs.jpg')} style={styles.imageStyle} />
                                            <Text style={styles.mainTextStyle}>NODE JS</Text>
                                        </View>
                                        <View style={styles.valuesView}>
                                            <View style={styles.inputView}>
                                                <Text style={styles.valuesStyle}>50</Text>
                                                <Text style={styles.labelStyle}>Quizzes</Text>
                                            </View>
                                            <View style={styles.inputView}>
                                                <Text style={styles.valuesStyle}>100</Text>
                                                <Text style={styles.labelStyle}>Questions</Text>
                                            </View>
                                            <View style={styles.inputView}>
                                                <Text style={styles.valuesStyle}>3</Text>
                                                <Text style={styles.labelStyle}>Levels</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.shortCardView}>
                                        <View style={styles.subjectsImage}>
                                            <Image source={require('../../images/subjects/agile.png')} style={styles.imageStyle} />
                                            <Text style={styles.mainTextStyle}>AGILE</Text>
                                        </View>
                                        <View style={styles.valuesView}>
                                            <View style={styles.inputView}>
                                                <Text style={styles.valuesStyle}>30</Text>
                                                <Text style={styles.labelStyle}>Quizzes</Text>
                                            </View>
                                            <View style={styles.inputView} >
                                                <Text style={styles.valuesStyle}>150</Text>
                                                <Text style={styles.labelStyle}>Questions</Text>
                                            </View>
                                            <View style={styles.inputView}>
                                                <Text style={styles.valuesStyle}>3</Text>
                                                <Text style={styles.labelStyle}>Levels</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.shortCardView}>
                                        <View style={styles.subjectsImage}>
                                            <Image source={require('../../images/subjects/angular.png')} style={styles.imageStyle} />
                                            <Text style={styles.mainTextStyle}>ANGULAR</Text>
                                        </View>
                                        <View style={styles.valuesView}>
                                            <View style={styles.inputView}>
                                                <Text style={styles.valuesStyle}>25</Text>
                                                <Text style={styles.labelStyle}>Quizzes</Text>
                                            </View>
                                            <View style={styles.inputView} >
                                                <Text style={styles.valuesStyle}>75</Text>
                                                <Text style={styles.labelStyle}>Questions</Text>
                                            </View>
                                            <View style={styles.inputView}>
                                                <Text style={styles.valuesStyle}>3</Text>
                                                <Text style={styles.labelStyle}>Levels</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.shortCardView}>
                                        <View style={styles.subjectsImage}>
                                            <Image source={require('../../images/subjects/react.jpg')} style={styles.imageStyle} />
                                            <Text style={styles.mainTextStyle}>REACT</Text>
                                        </View>
                                        <View style={styles.valuesView}>
                                            <View style={styles.inputView}>
                                                <Text style={styles.valuesStyle}>40</Text>
                                                <Text style={styles.labelStyle}>Quizzes</Text>
                                            </View>
                                            <View style={styles.inputView} >
                                                <Text style={styles.valuesStyle}>15</Text>
                                                <Text style={styles.labelStyle}>Questions</Text>
                                            </View>
                                            <View style={styles.inputView}>
                                                <Text style={styles.valuesStyle}>3</Text>
                                                <Text style={styles.labelStyle}>Levels</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.shortCardView}>
                                        <View style={styles.subjectsImage}>
                                            <Image source={require('../../images/subjects/javascript.jpg')} style={styles.imageStyle} />
                                            <Text style={styles.mainTextStyle}>JAVASCRIPT</Text>
                                        </View>
                                        <View style={styles.valuesView}>
                                            <View style={styles.inputView}>
                                                <Text style={styles.valuesStyle}>50</Text>
                                                <Text style={styles.labelStyle}>Quizzes</Text>
                                            </View>
                                            <View style={styles.inputView} >
                                                <Text style={styles.valuesStyle}>100</Text>
                                                <Text style={styles.labelStyle}>Questions</Text>
                                            </View>
                                            <View style={styles.inputView}>
                                                <Text style={styles.valuesStyle}>3</Text>
                                                <Text style={styles.labelStyle}>Levels</Text>
                                            </View>
                                        </View>
                                    </View>
                                </ScrollView>
                            </View>
                        </View>
                        <View style={[styles.carouselStyle, styles.bottomCardMainView]}>
                            <View style={styles.bottomCardView}>
                                <View style={styles.imageMainView}>
                                    <View style={styles.imageView}>
                            <Image source={require('../../images/home.png')} style={styles.image} />
                                        <Image source={require('../../images/candidates.png')} style={styles.imageStyles} />
                                    </View>
                                    <View style={styles.imageSubView}>
                                        <Text style={styles.textMainView}>Candidate</Text>
                                        <View style={styles.bottomContainer}>
                                            <AnimateNumber value={1717} style={{ color: 'blue' }} countBy={10} />
                                            <Text style={styles.textSubView}>TotalChallenges</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.imageMainView}>
                                    <View style={styles.imageView}>
                                        <Image source={require('../../images/emp.jpg')} style={styles.imageStyles} />
                                    </View>
                                    <View style={styles.imageSubView}>
                                        <Text style={styles.textMainView}>Employer</Text>
                                        <View style={styles.bottomContainer}>
                                            <AnimateNumber value={500} style={{ color: 'blue' }} countBy={5} />
                                            <Text style={styles.textSubView}>Employees</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View >
                </Content>
            </Container>
        );
    }
}
