import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, TouchableOpacity, ToastAndroid} from 'react-native';
import {purple, white} from "../../utils/colors";
import {connect} from "react-redux";
import {handleAddDeck} from "../../redux/actions/decks";
import {NavigationActions} from "react-navigation";


class AddDeck extends Component {

    state = {
        deckName: ''
    };

    addDeck = (name) => {

        const deckData = {
            id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
            timestamp: Date.now(),
            title: name,
            cards: []
        };
        this.props.handleAddDeck(deckData)

        ToastAndroid.showWithGravity(
            this.state.deckName+
            ' deck was created with success! ',
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
        );

        this.setState(() => ({deckName: ''}))

        //fix to return to main tab
        this.toHome(deckData);
    }

    toHome = (deckData) => {
        this.props.navigation.navigate(
            'DeckDetail',
            {
                deck: deckData
            }
        )
    };

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.head}>
                    <Text style={styles.title}>
                        Add New Deck
                    </Text>
                </View>
                <View>
                    <TextInput style = {styles.input}
                               underlineColorAndroid = "transparent"
                               placeholder = "Deck name"
                               value={this.state.deckName}
                               placeholderTextColor = {purple}
                               autoCapitalize = "none"
                               onChangeText={(deckName) => this.setState({deckName})}/>

                    <TouchableOpacity
                        style = {styles.submitButton}
                        onPress = {
                            () => this.addDeck(this.state.deckName)
                        }>
                        <Text style = {styles.submitButtonText}> Add Deck </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        decks: state.decks,
        loading: state.loadingBar.default,
    }
};

export default connect(mapStateToProps, {handleAddDeck})(AddDeck);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    head: {
        backgroundColor: purple,
        justifyContent: 'center',
        height: 100,
        alignItems: 'center'
    },
    title: {
        fontSize: 29,
        color: white
    },
    input: {
        margin: 15,
        height: 40,
        padding: 5,
        borderColor: purple,
        borderWidth: 1
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