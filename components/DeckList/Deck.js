import React from "react"
import {SimpleLineIcons} from '@expo/vector-icons'


import {Container, Title, CardsCount, ContainerCardsCount, ContainerArrow} from "./styles"

const Deck = ({ name, id, cardsCount, ...rest }) => (
    <Container {...rest}>
        <Title>{name}</Title>
        <ContainerArrow>
            <ContainerCardsCount>
                <CardsCount>
                    {cardsCount} {cardsCount.length < 2 ? "card" : "cards"}
                </CardsCount>
            </ContainerCardsCount>
                <SimpleLineIcons name="arrow-right"/>
        </ContainerArrow>
    </Container>
)

export default Deck