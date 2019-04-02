import {RECEIVE_DECKS, ADD_DECK, DELETE_DECK, ADD_CARD} from "../actions/decks";

export default function decks(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case ADD_DECK:
            return {
                ...state,
                [action.deck.id]: action.deck,
            }
        case DELETE_DECK:
                return Object.values(state).filter(deck => deck.id !== action.deck.id)
        case ADD_CARD:
            return {
                ...state,
                [action.card.deckId]: {
                    ...state[action.card.deckId],
                    [action.card.id]: action.card
                },
            }
        default:
            return state
    }
}


