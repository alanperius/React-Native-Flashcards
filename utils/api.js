import {AsyncStorage} from 'react-native'

const DECK_STORAGE_KEY = 'Flashcards:Deck'

export function getAllDecksAPI () {
    let setData = false

    if(setData === false){
        clearAllDecks()
        setInitialData()
        setData = true
    }

    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then(JSON.parse)
}

export function addDeckAPI (deck) {
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
        [deck.id]: deck
    }))
}

export function addCardAPI (card, idDeck) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            const deck = data[idDeck]
            deck.cards.push(card)

            return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
                [deck.id]: deck
            }))
        })
}

export function deleteCardAPI (cardId, idDeck) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            const deck = data[idDeck]
            deck.cards = deck.cards.filter(card => card.id !== cardId)

            return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
                [deck.id]: deck
            }))
        })
}

export function deleteDeck (key) {

    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            data[key] = undefined
            delete data[key]
            AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
        })
}

export function clearAllDecks () {
    return AsyncStorage.removeItem(DECK_STORAGE_KEY)
}

export function setInitialData () {
    let dummyData = initialData
    AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(dummyData))
    return dummyData
}

export function fetchCardsResults() {
    return AsyncStorage.getItem(DECK_STORAGE_KEY).then(formatCalendarResults)
}


export const initialData = {
    "894tuq4ut84ut8v4t8wun89g": {
            id: "894tuq4ut84ut8v4t8wun89g",
            timestamp: 1468166872634,
            title: "React",
            cards:
                [
                    {
                        answer: 'A library for managing user interfaces',
                        id: "8573792c4eb1439882230eaca334f24a",
                        question: 'What is React?',
                        timestamp: 1468166872634
                    },
                    {
                        question: 'Where do you make Ajax requests in React?',
                        answer: 'The componentDidMount lifecycle event',
                        id: "18fc004d1d8d44258a44dbd1a5194523",
                        timestamp: 1468166872634
                    },
                    {
                        answer: "Escrever algo",
                        id: "164931a71e2b478fbf62c10e93bfe0ee",
                        question: "What is state?",
                        timestamp: 1468166872634
                    },
                ],
        }
    ,
    "8tu4bsun805n8un48ve89":
        {
            id: "8tu4bsun805n8un48ve89",
            timestamp: 1548023647028,
            title: 'JavaScript',
            cards:
                [
                    {
                        question: 'What is a closure?',
                        answer: 'The combination of a function and the lexical environment within which that function was declared.',
                        id: "0f0b21333165411e8d3079b3de009b9f1",
                        timestamp: 1548023761647
                    },
                    {
                        question: 'What is a closure?2',
                        answer: 'The combination of a function and the lexical environment within which that function was declared.',
                        id: "0f0b21333165411e8d3079b3de009b9f2",
                        timestamp: 1548023761647
                    },
                    {
                        question: 'What is a closure?3',
                        answer: 'The combination of a function and the lexical environment within which that function was declared.',
                        id: "0f0b21333165411e8d3079b3de009b9f3",
                        timestamp: 1548023761647
                    },
                    {
                        question: 'What is a closure?4',
                        answer: 'The combination of a function and the lexical environment within which that function was declared.',
                        id: "0f0b21333165411e8d3079b3de009b9f4",
                        timestamp: 1548023761647
                    },
                    {
                        question: 'What is a closure?5',
                        answer: 'The combination of a function and the lexical environment within which that function was declared.',
                        id: "0f0b21333165411e8d3079b3de009b9f5",
                        timestamp: 1548023761647
                    },

                ],
        }
    ,
    "99b1649e10e946c1aff4ae65033e2":
        {
            id: "99b1649e10e946c1aff4ae65033e2",
            timestamp: 1548023797490,
            title: "Soccer",
            cards:
                [
                    {
                        answer: "Grêmio Foot Ball Porto Alegrense",
                        id: "882035c25a634f3fba0ae5b940ccaf8f",
                        question: "What is Best team in the World?",
                        timestamp: 1548023870106
                    },
                    {
                        answer: "SC Inter",
                        id: "42e97cb82776474c946cf1a0dfe66f3f",
                        question: "What is the worse team in the world?",
                        timestamp: 1548023832694
                    }
                ],

        }
};