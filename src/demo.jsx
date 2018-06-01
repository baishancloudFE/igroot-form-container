import React, { Component } from 'react'
import { Card, Row, Col, Input, Form } from 'igroot'
import { FormItem, FormContainer, FormOption } from './index'

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (params) => {
    console.log(params)
    const { onFilter } = this.props 
    onFilter && onFilter(params)
  }

  render() {
    return (
      <div style={{width: 800}}>
        <Card>
          <div className='tableList'>
            <div className='tableListForm'>
              <FormContainer>
                <Row>
                  <Col span={8}>
                    <FormItem label="备注" name="comment">
                      <Input placeholder='输入要搜索的备注关键字'/>
                    </FormItem>
                  </Col>
                  <Col span={8}>
                    <FormOption
                      option={['submit', 'reset']}
                      submitText="搜索"
                      onSubmit={this.handleSubmit}
                    />
                  </Col>
                </Row>
              </FormContainer>
            </div>
          </div>
        </Card>
      </div>
    )
  }
} 