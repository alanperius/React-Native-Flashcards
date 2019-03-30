import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux'
import {handleAllCards} from "../../redux/actions/decks";
import {purple, white} from "../../utils/colors";
import Deck from './Deck'

class DeckList extends Component {


    componentDidMount = () => {
        this.props.handleAllCards();
    };


    render() {
        const {decks, loading} = this.props;
        console.log("======================");
        console.log(Object.values(decks));
        return (
            <View style={styles.container}>
                <View style={styles.head}>
                    <Text style={styles.title}>
                        FlashCards
                    </Text>
                </View>

                <View>
                    {Object.values(decks).map((deck) => {
                        return (
                            <View key={deck.id}>

                                <Deck id={deck.id} name={deck.title} cardsCount={deck.cards ? deck.cards.length : 0}/>
                            </View>
                        )

                    })}
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
export default connect(mapStateToProps, {handleAllCards})(DeckList);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    decks: {
        /* height: 100,
         backgroundColor: gray,
         margin: 20,
         borderRadius: 5,
         justifyContent: 'center',
         padding: 10*/
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
