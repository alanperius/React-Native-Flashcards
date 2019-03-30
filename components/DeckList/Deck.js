import React from "react"
import {SimpleLineIcons} from '@expo/vector-icons'


import { Container, Title, CardsCount, ContainerCardsCount, ContainerArrow } from "./styles"

const Deck = ({ name, id, cardsCount, ...rest }) => (
    <Container {...rest}>
        <Title>{name}</Title>
        <ContainerCardsCount>
            <CardsCount>
                {cardsCount} {cardsCount.length < 2 ? "card" : "cards"}
                <SimpleLineIcons name="arrow-right"/>
            </CardsCount>


        </ContainerCardsCount>

    </Container>
)

export default Deck