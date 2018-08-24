'use strict'

import React, { Component } from 'react'
import { Form } from 'igroot'

import { FormItem } from './FormItem'
import { FormOption } from './FormOption'

function renderChildren(props, form) {
  return React.Children.map(props.children, child => {
    if (typeof child === 'string') return child 

    if (child.props && child.props.children) {
      const children = renderChildren(child.props, form)
      return React.cloneElement(child, { children, form })
    } else {
      return React.cloneElement(child, { form })
    }
  })
}

const KEY_ENTER = 13

/**
 * FormContainer Component
 */
@Form.create(
  {
    onValuesChange: (props, values) => {
     
    }
  }
)
export default class FormContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { onGetForm, form } = this.props 
    onGetForm && onGetForm(form)
  }

  componentWillUpdate() {
    const { onGetForm, form } = this.props 
    onGetForm && onGetForm(form)
  }

  handleKeyDown = (e) => {
    const { form, onSubmit } = this.props 
    
    if (e.keyCode === KEY_ENTER) {
      form.validateFields((err, values) => {
        if (!err) {
          onSubmit && onSubmit(values)
        }
      })
    }
  }

  render() {
    const { form } = this.props 

    return (
      <Form  onKeyDown={this.handleKeyDown}>
        {renderChildren(this.props, form)}
      </Form>
    )
  }
}