import * as React from 'react'
import ListItem from './ListItem'
import styled from 'styled-components'
import { User } from '../interfaces'

const Button = styled.div`
  cursor: pointer;
  margin: auto;
  background-color: ${props => props.backgroundColor};
  width: 240px;
  height: 240px;
  border-radius: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: white;
`

type Props = {
  backgroundColor: string,
  buttonText: string,
  onClick: () => void
}

const CircularButton: React.FunctionComponent<Props> = ({ backgroundColor, buttonText, onClick }) => (
  <Button backgroundColor={backgroundColor} onClick={onClick} >
    {buttonText}
  </Button>
)

export default CircularButton
