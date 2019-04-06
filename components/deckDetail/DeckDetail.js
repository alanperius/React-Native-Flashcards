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
    Box
} from "./styles"
import {MaterialCommunityIcons, MaterialIcons, Ionicons} from '@expo/vector-icons'
import {connect} from "react-redux";
import {handleDeleteDeck, handleDeleteCard} from "../../redux/actions/decks";
import Card from './Card'



class DeckDetail extends Component {

    removeDeck = (deckId) => {
        console.log("deckIddeckId")
        console.log(deckId)
        this.props.handleDeleteDeck(deckId)
        this.toHome()
        ToastAndroid.showWithGravity(
            'Deck deleted Successfully!!!!! ',
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
        );

    }

    removeCard = (cardId, deckId) => {
        this.props.handleDeleteCard(cardId, deckId)
        ToastAndroid.showWithGravity(
            'Card deleted Successfully!!!!! ',
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
        );

    }

    toHome = () => {
        this.props.navigation.navigate(
            'home',
        )
    };

    render(){
        const {id, timestamp, title, cards} = this.props.deck

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
                            {text: 'OK', onPress: () => this.removeDeck(id)},
                        ])}>
                    <Item>
                        <Ionicons name="md-trash" size={100} color={red} />
                        <TextDelete>Delete {title} Deck</TextDelete>
                    </Item>
                    </TouchableOpacity>
                </BodyCardDeck>

                <Box>
                    <Title>
                        Cards
                    </Title>
                </Box>
                {cards.map((card) => {
                    return (
                        <View style={styles.container}  key={card.id} >
                            <Card id={card.id} answer={card.answer} question={card.question} timestamp={card.timestamp} onDelete={this.removeCard} deckId={id} />
                        </View>
                    )
                })
                }

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

export default connect(mapStateToProps, {handleDeleteDeck, handleDeleteCard})(DeckDetail);

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


