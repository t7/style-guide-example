// Dependencies.
import React from 'react'

// Utility methods.
import utils from '../../utils'

// UI components.
import Checkbox from '../form_checkbox/template'
import ListClean from '../list_clean/template'
import ListInline from '../list_inline/template'

// Define class.
class CheckboxList extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    const inline = this.props.inline
    const options = this.props.options

    // Used in conditional.
    var List = ListClean

    if (inline) {
      List = ListInline
    }

    return (
      <List>
        {
          options.map(function ({checked, disabled, id, label, value, onChange}) {
            return (
              <li key={id}>
                <Checkbox
                  checked={checked}
                  disabled={disabled}
                  id={id}
                  label={label}
                  onChange={onChange}
                />
              </li>
            )
          })
        }
      </List>
    )
  }
}

// Validation.
CheckboxList.propTypes = {
  inline: React.PropTypes.bool,
  options: React.PropTypes.array
}

// Prop defaults.
CheckboxList.defaultProps = {
  inline: false,
  options: [
    {
      id: utils.unique(),
      label: 'Checkbox list - label 01',

      // Events.
      onChange: function (e, value, checked) {
        utils.log(e, value, checked)
      }
    },
    {
      id: utils.unique(),
      label: 'Checkbox list - label 02',

      // Events.
      onChange: function (e, value, checked) {
        utils.log(e, value, checked)
      }
    },
    {
      id: utils.unique(),
      label: 'Checkbox list - label 03',

      // Events.
      onChange: function (e, value, checked) {
        utils.log(e, value, checked)
      }
    }
  ]
}

// Export.
export default CheckboxList
