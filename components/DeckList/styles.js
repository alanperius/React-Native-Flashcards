import styled from "styled-components/native/dist/styled-components.native.esm"
import {purple} from "../../utils/colors";

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
export const ContainerCardsCount = styled.View`
  flex-direction: row; 
`
export const ContainerArrow = styled.View`
   background-color: red;
   align-items: flex-end;
   justify-content: center;
}
`

export const Title = styled.Text`
  font-weight: bold;
  color: ${purple};
`
export const CardsCount = styled.Text`
  margin-top: 6px;
  color: #9e9e9e;
`

export const Arrow = styled.View`
  justify-content: flex-end;
  background-color: red;
  height: 10px;
  width: 10px
`