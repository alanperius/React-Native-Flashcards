import React from "react"
import {Ionicons} from '@expo/vector-icons'
import {Container, Title, Answer, ContainerAnswer, ContainerAnswerInside, BodyCardDeck} from "./styles"
import {Alert, ToastAndroid, TouchableOpacity} from "react-native";



const Card = ({onDelete, id, answer, question, timestamp, deckId, ...rest }) => (
    <Container {...rest}>
        <Title> Q: {question}</Title>
        <ContainerAnswer>
            <ContainerAnswerInside>
                <Answer>
                  Resposta
                </Answer>
            </ContainerAnswerInside>
            <TouchableOpacity onPress={() => Alert.alert(
                'Delete Card',
                `Do you want to delete?`,
                [
                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    {text: 'OK', onPress: () => onDelete(id, deckId)},
                ])}>

            <Ionicons name="md-trash" size={25}/>
            </TouchableOpacity >
        </ContainerAnswer>
    </Container>
)

export default Card