import {addCardAPI, addDeckAPI, deleteDeck, getAllDecksAPI} from "../../utils/api";

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const DELETE_DECK = 'DELETE_DECK';
export const ADD_CARD = 'ADD_CARD';

function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks
    }
}

export const handleAllDecks = () => {
    return (dispatch) => {
        return getAllDecksAPI().then((decks) => {
            dispatch(receiveDecks(decks))
        })
            .catch(error => console.warn(error))
    }
};


export function addDeck(deck) {
    return {
        type: ADD_DECK,
        deck
    }
}

export function handleAddDeck(deckTitle) {
    return (dispatch) => {
        const deckData = {
            id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
            timestamp: Date.now(),
            title: deckTitle,
            cards: []
        };
        return addDeckAPI(deckData)
            .then(() => dispatch(addDeck(deckData)))
            .catch(error => console.warn(error))
    }
}


export function addCard(card, idDeck) {
    return {
        type: ADD_CARD,
        card,
        idDeck
    }
}

export function handleAddCard(question, answer, idDeck ) {
    return (dispatch) => {
        const cardData = {
            id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
            timestamp: Date.now(),
            answer: answer,
            question: question
        };

        console.log("=========new Card=====");
        console.log(cardData);
        console.log(idDeck);

        return addCardAPI(cardData, idDeck)
            .then(() => dispatch(addCard(cardData, idDeck)))
            .catch(error => console.warn(error))
    }
}



function delDeck(deck) {
    return {
        type: DELETE_DECK,
        deck
    }
}

export function handleDeleteDeck(deck) {
    console.log("DELETE DECK")
    console.log(deck)
    return (dispatch) => {
        return deleteDeck(deck.id)
            .then(() => dispatch(delDeck(deck)))
            .catch(error => console.warn(error))
    }
}