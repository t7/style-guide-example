// Dependencies.
import React from 'react'

// CSS.
import '../../css/t7-form.css'

// Utility methods.
import utils from '../../utils'

// Define class.
class Textdiv extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Get default state.
    this.defaultState()
  }

  // Apply to `state`, because we
  // don't want to mutate `props`.
  defaultState () {
    const state = {
      id: this.props.id || utils.unique()
    }

    // If state exists, reset it.
    if (typeof this.state === 'object') {
      this.setState(state)

    // Otherwise, create state.
    } else {
      this.state = state
    }
  }

  // Automatically called after `render`.
  componentDidMount () {
    document.body.setAttribute('spellcheck', false)
  }

  handleBlur (e) {
    utils.convertContentEditable(e)
  }

  handleFocus (e) {
    utils.convertContentFocus(e)
  }

  handleKeyUp (e) {
    utils.convertContentEditable(e)
  }

  handlePaste (e) {
    utils.convertOnPaste(e)
  }

  handleChange (e) {
    const handleChange = this.props.handleChange

    // Exit, if no callback.
    if (typeof handleChange !== 'function') {
      return
    }

    const el = e.target
    const value = utils.convertToText(el.innerHTML)

    handleChange(e, value)
  }

  // Render method.
  render () {
    // State driven.
    const id = this.state.id

    // Props driven.
    const autofocus = this.props.autofocus
    const disabled = this.props.disabled
    const name = this.props.name || id
    const placeholder = this.props.placeholder
    const required = this.props.required

    var value = this.props.value || this.props.defaultValue

    if (!value && placeholder) {
      value = placeholder
    }

    value = utils.convertToMarkup(value)

    // Events.
    const handleBlur = this.handleBlur.bind(this)
    const handleChange = this.handleChange.bind(this)
    const handleFocus = this.handleFocus.bind(this)
    const handleKeyUp = this.handleKeyUp.bind(this)
    const handlePaste = this.handlePaste.bind(this)

    return (
      <div
        autoFocus={autofocus}
        className='t7-form__textarea'
        contentEditable={!disabled}
        dangerouslySetInnerHTML={{__html: value}}
        disabled={disabled}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}

        onBlur={handleBlur}
        onInput={handleChange}
        onFocus={handleFocus}
        onKeyUp={handleKeyUp}
        onPaste={handlePaste}
      />
    )
  }
}

// Validation.
Textdiv.propTypes = {
  autofocus: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  required: React.PropTypes.bool,

  // Default value.
  defaultValue: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),

  // Forced value.
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),

  // Events.
  handleChange: React.PropTypes.func
}

// Prop defaults.
Textdiv.defaultProps = {
  placeholder: '',

  // Control text value.
  defaultValue: '',
  value: ''
}

// Export.
export default Textdiv
