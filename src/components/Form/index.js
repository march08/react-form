import React, { PureComponent as Component } from 'react'
import serialize from 'form-serialize'

class Form extends Component {
  static defaultProps = {
    className: null
  }

  getValues = () => {
    return serialize(this.form, {
      hash: true
    })
  }

  submit = (...args) => {
    const values = serialize(this.form, {
      hash: true
    })
    return this.props.onSubmit(values, ...args)
  }

  formSubmit = (e) => {
    e.preventDefault()
    this.submit()
  }

  setRef = (name) => {
    return (component) => {
      this[name] = component
    }
  }

  render() {
    const { className, ...rest } = this.props
    return (
      <form {...rest} onSubmit={ this.formSubmit } noValidate ref={ this.setRef('form') }>
        {this.props.children}
      </form>
    )
  }
}

export default Form
