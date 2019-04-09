import styled from "styled-components/native"
import {gray2, purple, red} from "../../utils/colors";

export const ScrollContainer = styled.ScrollView`
 display: flex;
 flex: 1;
`;

export const BodyQuiz = styled.View`
  padding: 16px;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
  margin-left: 16px;
  margin-right: 16px;
  background-color: white;
  border-radius: 3px;
  min-height: 60px;
  elevation: 4;
  shadow-color: grey;
  shadow-offset: 5px 5px;
  shadow-opacity: 0.5;
  shadow-radius: 10px;
  
`;

export const Title = styled.Text`
  font-weight: bold;
  color: ${purple};
  font-size: 20px
`;

export const NoCard = styled.Text`
  font-weight: bold;
  color: ${gray2};
  font-size: 15px
`;

export const CardsCount = styled.Text`
  margin-top: 10px;
  color: #9e9e9e;
`

export const StartQuiz = styled.Text`
    margin: 5px;
    text-align: center;
`;

export const BodyCardDeck = styled.View`
  flex-direction: row;
  flex: 1;
  display: flex;
`;

export const Item = styled.View`
    flex: 1;
    margin: 5px;
    background: tomato;
    text-align: center;
    padding: 16px;
    align-items: center;
    margin-top: 16px;
    margin-bottom: 16px;
    margin-left: 16px;
    margin-right: 16px;
    background-color: white;
    border-radius: 3px;
    min-height: 60px;
    elevation: 4;
    shadow-color: grey;
    shadow-offset: 5px 5px;
    shadow-opacity: 0.5;
    shadow-radius: 10px;
`;

export const TextNew = styled.Text`
  color: ${purple};
`;

export const TextDelete = styled.Text`
  color: ${red};
  text-align: center;
`;

export const Container = styled.View`
  justify-content: center;
  padding: 16px;
  margin-bottom: 16px;
  margin-left: 16px;
  margin-right: 16px;
  background-color: white;
  border-radius: 3px;
  min-height: 60px;
  elevation: 4;
  shadow-color: grey;
  shadow-offset: 5px 5px;
  shadow-opacity: 0.5;
  shadow-radius: 10px;
  
`
export const ContainerAnswer = styled.View`
  flex-direction: row;
  display: flex;

`

export const ContainerAnswerInside = styled.View`
  justify-content: flex-start;
  flex: 1;
`

export const Answer = styled.Text`
  margin-top: 10px;
  color: #9e9e9e;
`

export const Box = styled.View`
flex: 1;
margin: 30px 60px;
padding: 10px;
text-align: center;
align-items: center;
border-bottom-width: 1px;
`