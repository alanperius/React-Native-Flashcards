import {RECEIVE_DECKS, ADD_DECK, DELETE_DECK, ADD_CARD, DELETE_CARD} from "../actions/decks";

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
                return Object.values(state).filter(deck => deck.id !== action.deckId)
        case ADD_CARD:
            return {
                ...state,
                [action.idDeck]: {
                    ...state[action.idDeck],
                    cards: [...state[action.idDeck].cards, { ...action.card }]
                },
            }
        case DELETE_CARD:
            return {
                ...state,
                [action.deckId]: {
                    ...state[action.deckId],
                    cards: [...state[action.deckId].cards.filter(card => card.id !== action.cardId)]
                },
            }
        default:
            return state
    }
}


