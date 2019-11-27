import * as React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import QRCode from 'qrcode.react';
import { LineChart, Label, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

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
  orangeCount: number,
  blueCount: number,
  recordedList: Array<{
    timestamp: string,
    type: string
  }>,
  graphData: Array<Object>
}

class DashboardPage extends React.Component<null, States> {

  constructor(props) {
    super(props)
    this.state = {
      orangeCount: 0,
      blueCount: 0,
      recordedList: [],
      graphData: this.initializeGraphData()
    }
  }

  recordStarted = false
  listenerRef = null

  componentDidMount () {
    const currentTs = new Date().getTime()
    this.listenerRef = firebase.database().ref('counts')
    this.listenerRef.orderByKey().startAt(currentTs.toString()).on('child_added', snap => {
      const { orangeCount, blueCount, recordedList } = this.state
      const value = snap.val()
      recordedList.push(value)
      if (value.type === 'blue') {
        this.setState({
          blueCount: blueCount + 1,
          recordedList
        })
      } else {
        this.setState({
          orangeCount: orangeCount + 1,
          recordedList
        })
      }
      if (!this.recordStarted) {
        this.recordStarted = true
        setTimeout(() => {
          this.listenerRef.off()
          this.handleGraphPlotting()
        }, 5000)
      }
    })
  }

  initializeGraphData = (size = 6, divideBy = 1) => {
    let graphData = []
    for (var i = 0; i < size; i++) {
      graphData.push({
        ts: (i / divideBy).toString(),
        orange: 0,
        blue: 0,
        black: 0
      })
    }
    return graphData
  }

  handleGraphPlotting = () => {
    const { recordedList } = this.state
    const initialTs = recordedList.length !== 0 ? parseInt(recordedList[0].timestamp) : 0
    let graphData = this.initializeGraphData(12, 2)
    recordedList.forEach(({ type, timestamp }, index) => {
      const graphDataIndex = Math.floor((parseInt(timestamp) - initialTs) / 500)
      if (type === 'orange') {
        graphData[graphDataIndex] = {
          ...graphData[graphDataIndex],
          orange: graphData[graphDataIndex][type] + 1,
          black: graphData[graphDataIndex].black - 1
        }
      } else if (type === 'blue') {
        graphData[graphDataIndex] = {
          ...graphData[graphDataIndex],
          blue: graphData[graphDataIndex][type] + 1,
          black: graphData[graphDataIndex].black + 1
        }
      }
    })
    this.setState({
      graphData
    })
  }

  renderLineChart = () => {
    // const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}]
    const { graphData } = this.state
    return (
      <LineChart
        width={700} height={350} data={graphData}
        margin={{ bottom: 25, right: 10 }}
      >
        <Line type="monotone" dataKey="orange" stroke="#ff9559" />
        <Line type="monotone" dataKey="blue" stroke="#007aff" />
        <Line type="monotone" dataKey="black" stroke="#000" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis label={{ value: 'Second(s)', offset: -10, position: 'insideBottom', textAnchor: 'middle' }} />
        <YAxis label={{ value: 'Click(s)', angle: -90, position: 'insideLeft', textAnchor: 'middle' }} />
        <Tooltip labelStyle={{ color: 'white' }} />
      </LineChart>
    )
  }
  
  render () {
    const { orangeCount, blueCount } = this.state
    // TODO: move to config file
    const url = "http://ec2-13-59-81-130.us-east-2.compute.amazonaws.com/client"
    return (
      <DashboardWrapper>
        <Row>{this.renderLineChart()}</Row>
        <Row>
          <CountDisplay backgroundColor={'#ff9559'}>{orangeCount}</CountDisplay>
          <CountDisplay backgroundColor={'#007aff'}>{blueCount}</CountDisplay>
        </Row>
        <Row>
          <div className="black center">
            Please go to <a href={url}>{url}</a> to join the game.
          </div>
        </Row>
        <Row>
          <QRCode value={url} />
        </Row>
      </DashboardWrapper>
    )
  }
}

export default DashboardPage
