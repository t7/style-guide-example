// Dependencies.
import React from 'react'

// CSS.
import './isg-app.css'

// UI components.
import Select from '../components/form_select/template'

// Get raw JS.
import raw_header_select from 'raw!./raw_header_select_js.txt'

// Define class.
class Header extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    // Options for `<select>`.
    const options = [
      {
        value: 'intro',
        name: 'Intro'
      },
      {
        value: 'branding',
        name: 'Branding'
      },
      {
        value: 'patterns',
        name: 'Patterns'
      },
      {
        value: 'requirements',
        name: 'Requirements'
      },
      {
        value: 'screens',
        name: 'Screens'
      }
    ]

    return (
      <header className='isg-app__header' role='banner'>

        <b className='isg-app__header__title'>
          Interactive Style Guide
        </b>

        <Select id='isg_header_select' options={options} width='auto' />

        <script dangerouslySetInnerHTML={{__html: raw_header_select}} />

        <span className='isg-app__header__logo'>
          TandemSeven
        </span>

      </header>
    )
  }
}

// Export.
export default Header
