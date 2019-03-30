import {hideLoading, showLoading} from "react-redux-loading";
import {getAllDecksAPI, addDeckAPI} from "../../utils/api";

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'

 function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks
    }
    
}

    export const handleAllCards = () => {
        return (dispatch) => {
            return getAllDecksAPI().then((decks) => {
                dispatch(receiveDecks(decks))
            })
                .catch(error =>  console.warn(error))
        }
    }


export function addDeck (deck) {
    return {
        type: ADD_DECK,
        deck
    }
}

export function handleAddDeck (deckTitle) {
    return (dispatch) => {
        const deckData = {
            id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
            timestamp: Date.now(),
            title: deckTitle,
            cards: []
        }

        console.log("=========new deck=====")
        console.log(deckData)

        return addDeckAPI(deckData)
            .then(() => dispatch(addDeck(deckData)))
            .catch(error => console.warn(error))
    }
}

