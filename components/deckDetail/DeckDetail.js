import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity, Alert, ToastAndroid} from 'react-native';
import {gray2, purple, red, white} from "../../utils/colors";
import {
    ScrollContainer,
    BodyQuiz,
    Title,
    StartQuiz,
    BodyCardDeck,
    Item,
    TextNew,
    TextDelete,
    CardsCount,
} from "./styles"
import {MaterialCommunityIcons, MaterialIcons, Ionicons} from '@expo/vector-icons'
import {connect} from "react-redux";
import {handleDeleteDeck} from "../../redux/actions/decks";
import {NavigationActions} from "react-navigation";




class DeckDetail extends Component {

    removeDeck = (deck) => {
        this.props.handleDeleteDeck(deck)

        ToastAndroid.showWithGravity(
            deck.title+
            ' deck was deleted with success!!!!! ',
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
        );

        this.toHome()
    }

    toHome = () => {
        this.props.navigation.navigate(
            'home',
        )
    };

    render(){
        const {id, timestamp, title, cards} = this.props.deck
        console.log("=-===============================")
        console.log(cards)
        return (
            <ScrollContainer>
                <View style={styles.head}>
                    <Title>
                        {title}
                    </Title>
                    <CardsCount>{cards.length > 1 ? cards.length +' Cards' : cards.length + ' Card'} </CardsCount>
                </View>
                <TouchableOpacity>
                <BodyQuiz>
                    <MaterialCommunityIcons name="cards" size={100}  color={purple} />
                    <StartQuiz>Start a Quiz</StartQuiz>
                </BodyQuiz>
                </TouchableOpacity>
                <BodyCardDeck>
                    <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate(
                        'AddCard',
                        {
                            deck: this.props.deck
                        }
                    )}>
                    <Item>
                        <MaterialIcons name="note-add" size={100} color={purple}  />
                        <TextNew>Add new Card</TextNew>
                    </Item>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => Alert.alert(
                        'Delete Deck',
                        `Do you want to delete ${title}`,
                        [
                            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                            {text: 'OK', onPress: () => this.removeDeck(this.props.deck)},
                        ])}>
                    <Item>
                        <Ionicons name="md-trash" size={100} color={red} />
                        <TextDelete>Delete {title} Deck</TextDelete>
                    </Item>
                    </TouchableOpacity>
                </BodyCardDeck>

            </ScrollContainer>
        )
    }
}
const mapStateToProps = (state, {navigation}) => {

    const {id} = navigation.state.params.deck
    return {
        deck: state.decks[id],
        loading: state.loadingBar.default,
    }
};

export default connect(mapStateToProps, {handleDeleteDeck})(DeckDetail);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    head: {
        backgroundColor: gray2,
        justifyContent: 'center',
        height: 100,
        alignItems: 'center'
    },
    title: {
        fontSize: 29,
        color: white
    },
    btn: {
        flex: 1,
    }


});


