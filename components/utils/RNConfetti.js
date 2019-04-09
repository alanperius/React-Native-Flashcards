import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text, TouchableOpacity
} from 'react-native';
import {MaterialCommunityIcons, Ionicons} from '@expo/vector-icons'
import Confetti from 'react-native-confetti';
import {red} from "../../utils/colors";

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
            <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.dislike}>
                <Text>Back</Text>
            </TouchableOpacity>
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
    }

});