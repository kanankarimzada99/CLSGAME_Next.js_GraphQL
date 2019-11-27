import * as React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import firebase from '../helpers/firebase'
import ContentWrapper from '../components/styled/ContentWrapper'
import CircularButton from '../components/CircularButton'

const ButtonWrapper = styled.div`
  flex: 1;
  display: flex;
`

const ClientPage: React.FunctionComponent = () => {
  const onPress = (type) => {
    const timestamp = new Date().getTime()
    firebase.database().ref(`counts/${timestamp}`).set({
      type,
      timestamp
    })
  }
  return (
    <ContentWrapper>
      <ButtonWrapper>
        <CircularButton backgroundColor={'#ff9559'} buttonText={'-'} onClick={() => onPress('orange')} />
      </ButtonWrapper>
      <ButtonWrapper>
        <CircularButton backgroundColor={'#007aff'} buttonText={'+'} onClick={() => onPress('blue')} />
      </ButtonWrapper>
    </ContentWrapper>
)
}

export default ClientPage