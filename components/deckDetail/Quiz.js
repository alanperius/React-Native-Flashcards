import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {gray2, green, purple, red, white} from "../../utils/colors";
import {connect} from "react-redux";
import {Ionicons} from '@expo/vector-icons';
import FlipCard from 'react-native-flip-card'
import RNConfetti from '../utils/RNConfetti'

class Quiz extends Component {
    state = {
        rightAnswers: 0,
        cardIndex: 0,
        showAnswer: false,
        finished: false,
    };

    showAnswer = () => {
        this.setState(() => ({
            showAnswer: true,
        }))
    };

    correctAnswer = () => {
        this.setState((state) => ({
            rightAnswers: state.rightAnswers + 1,
        }));
        this.nextCard()
    };

    nextCard = () => {
        if (this.state.cardIndex === this.props.deckCards.length - 1) {
            this.setState(() => ({
                finished: true,
            }))
            //clearLocalNotification().then(setLocalNotification)
        } else {
            this.setState((state) => ({
                showAnswer: false,
                cardIndex: state.cardIndex + 1,
            }))
        }
    };

    render() {
        const {deck, cardSequence, deckCards} = this.props;
        const {cardIndex, showAnswer, rightAnswers, finished} = this.state;
        const currentCardId = cardSequence[cardIndex];
        const currentCard = deckCards.filter(card => card.id === currentCardId);
        const total = (rightAnswers / deckCards.length * 100).toFixed(2);
        if (finished) {
            return (
                <View style={styles.quiz}>
                    {total == 100 ?
                        <RNConfetti/>
                        :
                        <View style={styles.containerScore}>
                            <Text style={styles.score}> You scored {rightAnswers} out of {deckCards.length}</Text>
                            <Text style={styles.total}>{total}%</Text>
                            {total < 60 && (
                                <Text style={styles.learn}>Learn more and try again!  </Text>
                            )}
                            <View style={[styles.contentLikeDislike]}>

                                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.dislike}>
                                    <Text>Back</Text>
                                </TouchableOpacity>
                            </View>
                        </View>


                    }


                </View>
            )
        }

        return (
            <ScrollView style={styles.container}>
                <View>
                    <Text style={styles.cardCount}>Card {cardIndex + 1} of {deckCards.length}</Text>
                </View>

                <View style={[styles.container]}>

                    <FlipCard
                        style={[styles.card]}
                        friction={6}
                        perspective={1000}
                        flipHorizontal={true}
                        flipVertical={false}
                        flip={false}
                        clickable={true}
                        onFlipEnd={(isFlipEnd) => {
                            console.log('isFlipEnd', isFlipEnd)
                        }}
                    >
                        {/* Face Side */}
                        <View style={styles.cardQuiz}>
                            <Text style={styles.cardTitle}>{currentCard[0].question}</Text>
                        </View>
                        {/* Back Side */}
                        <View style={styles.cardQuiz}>
                            <Text style={styles.cardTitle}>{currentCard[0].answer}</Text>
                            <View style={[styles.contentLikeDislike]}>

                                <TouchableOpacity onPress={this.correctAnswer}
                                                  style={styles.like}>
                                    <Ionicons name="md-thumbs-up" size={50} color={green}/>
                                    <Text>Correct</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.nextCard}
                                                  style={styles.dislike}>
                                    <Ionicons name="md-thumbs-down" size={50} color={red}/>
                                    <Text>Incorrect</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </FlipCard>

                </View>
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    like: {
        padding: 10,
        margin: 15,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dislike: {
        padding: 10,
        margin: 15,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitButtonText: {
        color: 'white',

    },
    containerCards: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardQuiz: {
        backgroundColor: purple,
        minHeight: 400,
        justifyContent: 'center',
        alignItems: 'center',
    },

    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    contentLikeDislike: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        borderRadius: 20,
        backgroundColor: white,
        color: white,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
    },
    cardCount: {
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        borderRadius: 20,
        backgroundColor: purple,
        color: white,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,

    },
    card: {
        backgroundColor: white,
        padding: 10,
        marginBottom: 10,
        textAlign: 'center',
        borderColor: purple,
        borderWidth: 2,
        borderRadius: 4,
    },
    cardTitle: {
        fontSize: 16,
        color: white,
        fontWeight: 'bold',
        marginBottom: 5,
        flex: 1,
        textAlign: 'center',
    },
    cardText: {
        fontSize: 16,
    },
    button: {
        backgroundColor: red,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        marginBottom: 10,
        height: 45,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    quiz: {
        flex: 1,
        textAlign: 'center',
        padding: 16,
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 50,
        marginLeft: 25,
        marginRight: 25,
        backgroundColor: white,
        borderRadius: 3,
        minHeight: 60,
        elevation: 4,
        shadowColor: 'grey',
        shadowOpacity: 0.5,
        shadowRadius: 10
    },
    total: {
        fontSize: 60,
        textAlign: 'center',
    },
    score: {
        fontSize: 30,
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    containerScore: {
        flex: 1,
        margin: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    learn: {
        fontSize: 20,
        textAlign: 'center',
        color: red,
        margin: 5
    },
});

const mapStateToProps = (state, {navigation}) => {
    console.log("=============");
    const {deck} = navigation.state.params;
    const deckCards = Object.values(deck.cards);
    const deckCardsId = [];

    deckCards.map((card) => {
        deckCardsId.push(card.id)
    });

    console.log("342198u43298043209872438972430798409827342938074239807289743");
    console.log(deckCardsId);
    const cardSequence = deckCardsId ? deckCardsId.sort(function (a, b) {
        return 0.5 - Math.random()
    }) : null;
    console.log(cardSequence);
    return {
        deck: deck,
        cardSequence,
        deckCards,
        loading: state.loadingBar.default,
    }
};

export default connect(mapStateToProps)(Quiz)