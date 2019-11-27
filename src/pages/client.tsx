import * as React from 'react'
import Link from 'next/link'
import { useMutation } from '@apollo/react-hooks';
import styled from 'styled-components'
import firebase from '../helpers/firebase'
import { ADD_CLICK } from '../helpers/api'
import ContentWrapper from '../components/styled/ContentWrapper'
import CircularButton from '../components/CircularButton'

const ButtonWrapper = styled.div`
  flex: 1;
  display: flex;
`

const ClientPage: React.FunctionComponent = () => {
  const [addClick, { data }] = useMutation(ADD_CLICK);
  const onClick = (type) => {
    addClick({ variables: { type } })
  }
  return (
    <ContentWrapper>
      <ButtonWrapper>
        <CircularButton backgroundColor={'#ff9559'} buttonText={'-'} onClick={() => onClick('orange')} />
      </ButtonWrapper>
      <ButtonWrapper>
        <CircularButton backgroundColor={'#007aff'} buttonText={'+'} onClick={() => onClick('blue')} />
      </ButtonWrapper>
    </ContentWrapper>
)
}

export default ClientPage