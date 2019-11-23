import * as React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import ContentWrapper from '../components/styled/ContentWrapper'
import CircularButton from '../components/CircularButton'

const ButtonWrapper = styled.div`
  flex: 1;
  display: flex;
`

const ClientPage: React.FunctionComponent = () => (
  <ContentWrapper>
    <ButtonWrapper>
      <CircularButton backgroundColor={'#ff9559'} buttonText={'-'} />
    </ButtonWrapper>
    <ButtonWrapper>
      <CircularButton backgroundColor={'#007aff'} buttonText={'+'} />
    </ButtonWrapper>
  </ContentWrapper>
)

export default ClientPage