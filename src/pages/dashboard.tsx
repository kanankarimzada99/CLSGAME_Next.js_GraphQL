import * as React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import ContentWrapper from '../components/styled/ContentWrapper'
import { NextPage } from 'next'

const DashboardWrapper = styled(ContentWrapper)`
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 12px 0;
`

const CountDisplay = styled.div`
  border-radius: 7%;
  background-color: ${props => props.backgroundColor};
  font-size: 50px;
  text-align: center;
  width: 15%;
  padding: 25px;
  margin: 0 12px;
  color: #fff;
`


class DashboardPage extends React.Component {

  componentDidMount () {
    
  }

  renderCount = (backgroundColor) => {
    return (
      <CountDisplay backgroundColor={backgroundColor}>
        7
      </CountDisplay>
    )
  }
  render () {
    return (
      <DashboardWrapper>
        <Row></Row>
        <Row>
          <CountDisplay backgroundColor={'#ff9559'}>7</CountDisplay>
          <CountDisplay backgroundColor={'#007aff'}>0</CountDisplay>
        </Row>
        <Row>
          <div className="black center">
            Please go to <a href="https://game.clpsec.com/client">https://game.clpsec.com/client</a> to join the game.
          </div>
        </Row>
      </DashboardWrapper>
    )
  }
}

export default DashboardPage
