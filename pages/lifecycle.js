import React from 'react'
import {Button} from 'antd'
import Router from 'next/router'
// import 'antd/lib/style/index.css'
export default class extends React.Component {
  static async getInitialProps ({ req, url}) {
    return req
      ? { userAgent: req.headers['user-agent'] }
      : { userAgent: navigator.userAgent }
  }
  constructor (props) {
    super(props)
    this.state = {
      text: 'init data'
    }
  }
  changeInitDataHandle () {
    this.setState({text: Math.random()})
  }
  render () {
    return <div>
      Hello World {this.props.userAgent}
      <hr />
      <span>{this.state.text}</span>
      <Button onClick={this.changeInitDataHandle.bind(this)}>这是一个antd的Button</Button>
    </div>
  }
}
