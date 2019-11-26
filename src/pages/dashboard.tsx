import * as React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import ContentWrapper from '../components/styled/ContentWrapper'
import firebase from '../helpers/firebase'
// import firebase from 'firebase'
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

type States = {
  plusCount: number,
  minusCount: number,
}

class DashboardPage extends React.Component<null, States> {

  state = {
    plusCount: 0,
    minusCount: 0,
  }

  recordStarted = false
  listenerRef = null

  componentDidMount () {
    const currentTs = new Date().getTime()
    this.listenerRef = firebase.database().ref('counts')
    this.listenerRef.orderByKey().startAt(currentTs.toString()).on('child_added', snap => {
      const { plusCount, minusCount } = this.state
      const { type } = snap.val()
      if (type === 'minus') {
        this.setState({
          minusCount: minusCount + 1
        })
      } else {
        this.setState({
          plusCount: plusCount + 1
        })
      }
      if (!this.recordStarted) {
        this.recordStarted = true
        setTimeout(() => {
          this.listenerRef.off()
        }, 5000)
      }
    })
  }
  
  render () {
    const { plusCount, minusCount } = this.state
    return (
      <DashboardWrapper>
        <Row></Row>
        <Row>
          <CountDisplay backgroundColor={'#ff9559'}>{minusCount}</CountDisplay>
          <CountDisplay backgroundColor={'#007aff'}>{plusCount}</CountDisplay>
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
