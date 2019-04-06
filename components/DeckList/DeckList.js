import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import {connect} from 'react-redux'
import {handleAllDecks} from "../../redux/actions/decks";
import {blue, purple, white} from "../../utils/colors";
import Deck from './Deck'
import DeckDetail from "../deckDetail/DeckDetail";

class DeckList extends Component {


    componentDidMount = () => {
        this.props.handleAllDecks();
    };

    render() {
        const {decks, loading} = this.props;

        return (
            <ScrollView style={styles.container}>
                <View style={styles.head}>
                    <Text style={styles.title}>
                        FlashCards
                    </Text>
                </View>

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
        padding: 10,
        backgroundColor: blue
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
