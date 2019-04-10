import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid} from 'react-native';
import { Box} from "./styles"
import {purple, white} from "../../utils/colors";
import {connect} from "react-redux";
import {handleAddCard} from "../../redux/actions/decks";

class AddCard extends Component {
    state = {
        question: '',
        answer: '',
    }

    addCard = (question, answer, deckId) => {
        this.props.handleAddCard(question, answer, deckId)

        ToastAndroid.showWithGravity(
            ' Card was created with success! ',
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
        );

        this.setState(() => ({
            question: '',
            answer: '',
        }))


        this.props.navigation.navigate(
            'DeckDetail',
        )
    }

    render(){
        const {id, timestamp, title, cards} = this.props.navigation.state.params.deck
        return (
            <View>
                    <TextInput style = {styles.input}
                               underlineColorAndroid = "transparent"
                               placeholder = "Write a Question"
                               value={this.state.question}
                               placeholderTextColor = {purple}
                               autoCapitalize = "none"
                               onChangeText={(question) => this.setState({question})}/>

                        <TextInput style = {styles.input}
                                   underlineColorAndroid = "transparent"
                                   value={this.state.answer}

                                   placeholder = "Write a Answer"
                                   placeholderTextColor = {purple}
                                   autoCapitalize = "none"
                                   onChangeText={(answer) => this.setState({answer})}/>

                    <TouchableOpacity
                        style = {styles.submitButton}
                        onPress = {
                            () => this.addCard(this.state.question, this.state.answer, id)
                        }>
                        <Text style = {styles.submitButtonText}> Add Card </Text>
                    </TouchableOpacity>
            </View>

        )
    }
}
const mapStateToProps = state => {
    return {
        loading: state.loadingBar.default,
    }
};
export default connect(mapStateToProps, {handleAddCard})(AddCard);

const styles = StyleSheet.create({
    input: {
        margin: 15,
        height: 40,
        padding: 5,
        borderColor: purple,
        borderWidth: 1,

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