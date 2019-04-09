import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import {connect} from 'react-redux'
import {handleAllDecks} from "../../redux/actions/decks";
import {blue, gray, gray2, purple, red, white} from "../../utils/colors";
import Deck from './Deck'
import DeckDetail from "../deckDetail/DeckDetail";
import RNConfetti from '../utils/RNConfetti'

class DeckList extends Component {


    componentDidMount = () => {
        this.props.handleAllDecks();
    };

    render() {
        const {decks, loading} = this.props;

        return (
            <View >
                <View style={styles.head}>
                    <Text style={styles.title}>
                        FlashCards
                    </Text>
                </View>
                <ScrollView>
                <View style={styles.containerDecks}>
                    {Object.values(decks).map((deck) => {
                        return (
                            <View  key={deck.id}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate(
                                    'DeckDetail',
                                    {
                                        deck: deck
                                    }
                                )}>
                                    <Deck id={deck.id} name={deck.title} cardsCount={deck.cards ? deck.cards.length : 0}/>
                                </TouchableOpacity>

                            </View >
                        )

                    })}
                </View>

            </ScrollView>
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
export default connect(mapStateToProps, {handleAllDecks})(DeckList);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    containerDecks: {
        paddingBottom: 100,
        padding: 5

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
    }
});
