import {addCardAPI, addDeckAPI, deleteCardAPI, deleteDeck, getAllDecksAPI} from "../../utils/api";

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const DELETE_DECK = 'DELETE_DECK';
export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';

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



function delDeck(deckId) {
    return {
        type: DELETE_DECK,
        deckId
    }
}

export function handleDeleteDeck(deckId) {
    console.log("DELETE DECK")
    console.log(deckId)
    return (dispatch) => {
        return deleteDeck(deckId)
            .then(() => dispatch(delDeck(deckId)))
            .catch(error => console.warn(error))
    }
}

function delCard(cardId, deckId) {
    return {
        type: DELETE_CARD,
        cardId,
        deckId
    }
}

export function handleDeleteCard(cardId, deckId) {
    console.log("DELETE CARD")
    console.log(cardId)
    console.log(deckId)
    /*return (dispatch) => {
        return dispatch(delCard(cardId, deckId))
            .then(deleteCardAPI(cardId, deckId))
    }*/
    return (dispatch) => {
        return deleteCardAPI(cardId, deckId)
            .then(() => dispatch(delCard(cardId, deckId)))
            .catch(error => console.warn(error))
    }


}

