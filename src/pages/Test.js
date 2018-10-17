import React, { Component } from 'react';
import { publicService } from '../services'

import { Button } from 'antd-mobile';
import TestCom from '../components/TestCom'

export default class Test extends Component {
  componentDidMount () {
    publicService.getCommonData({}, res => {
      console.log(res)
    })
  }

  render() {
    return (
      <div className="page Test">
        <h1 className='test-title'>Test</h1>
        <Button type="primary">primary</Button>
        <TestCom />
      </div>
    );
  }
}
