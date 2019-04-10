import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text, TouchableOpacity
} from 'react-native';
import {MaterialCommunityIcons, Ionicons} from '@expo/vector-icons'
import Confetti from 'react-native-confetti';
import {purple, red, white} from "../../utils/colors";

class RNConfetti extends Component {
    componentDidMount() {
        if(this._confettiView) {
            this._confettiView.startConfetti();
        }
    }

    componentWillUnmount ()
    {
        if (this._confettiView)
        {
            this._confettiView.stopConfetti();
        }
    }

    render() {
        return <View style={styles.container}>
            <Confetti ref={(node) => this._confettiView = node} untilStopped={true}/>
            <Text style={styles.congrats}> CONGRATULATIONS!!!!</Text>
            <Text style={styles.text}> 100% CORRECT!!!!!</Text>
            <View style={styles.containerIcon}>
                <MaterialCommunityIcons name="emoticon-cool" size={70} />
                <MaterialCommunityIcons name="emoticon-cool" size={70} />
                <MaterialCommunityIcons name="emoticon-cool" size={70} />
            </View>

            </View>
    }
}
export default RNConfetti;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center'
    },
    containerIcon: {
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection: 'row',

    },
    congrats: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    contentLikeDislike: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        borderRadius: 20,
        backgroundColor: white,
        color: white,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
    },
    submitButton: {
        backgroundColor: purple,
        padding: 10,
        margin: 15,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitButtonText:{
        color: 'white',

    }

});