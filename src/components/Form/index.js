import PropTypes from 'prop-types'
import React, { PureComponent as Component } from 'react'
import serialize from 'form-serialize'
import classnames from 'classnames'

class Form extends Component {


  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    children: PropTypes.node,
    className: PropTypes.string
  }

  static defaultProps = {
    className: null
  }


  constructor(...args) {
    super(...args)
    this.getValues = this.getValues.bind(this)
    this.submit = this.submit.bind(this)
    this.formSubmit = this.formSubmit.bind(this)
    this.setRef = this.setRef.bind(this)
  }

  getValues() {
    return serialize(this.form, {
      hash: true
    })
  }

  submit(...args) {
    const values = serialize(this.form, {
      hash: true
    })
    return this.props.onSubmit(values, ...args)
  }

  formSubmit(e) {
    e.preventDefault()
    this.submit()
  }

  setRef(name) {
    return (component) => {
      this[name] = component
    }
  }

  render() {
    const { className, ...rest } = this.props
    return (
      <form
        onSubmit={ this.formSubmit }
        noValidate
        className={ classnames(className) }
        ref={ this.setRef('form') }
        { ...rest }
      >
        {this.props.children}
      </form>
    )
  }
}

export default Form
