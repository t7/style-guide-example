// Dependencies.
import React from 'react'

// Layout components.
import App from '../../layouts/app'
import Main from '../../layouts/app_main'
import Sidebar from '../../layouts/app_sidebar'

// UI components.
import ColorList from '../../components/color_list/template'
import ColorItem from '../../components/color_list/template_item'
import Typography from '../../components/typography/template'

// Define class.
class Page extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    return (
      <App>

        <Sidebar>

          <ul>
            <li>
              <a href='#_colors'>Colors</a>
            </li>
            <li>
              <a href='#_typography'>Typography</a>
            </li>
          </ul>

        </Sidebar>

        <Main>

          <h1>
            Branding
          </h1>

          <p>
            This page contains branding related details, such as colors and typography.
          </p>

          <hr />

          <h2 id='_colors'>
            Colors
          </h2>

          <ColorList>
            {
              this.props.branding.colors.map(
                function ({value, title, description}, i) {
                  return (
                    <ColorItem
                      description={description}
                      key={i}
                      title={title}
                      value={value}
                    />
                  )
                }
              )
            }
          </ColorList>

          <hr />

          <h2 id='_typography'>
            Typography
          </h2>

          <p>
            The fonts shown below may require a paid license and are used here for example purposes only.
          </p>

          <p>
            In cases where a font is not available, the operating system's default <code>sans-serif</code> font will be used.
          </p>

          <p>
            The default on Windows is Arial. For Mac and iOS it is Helvetica. For Android devices it is Roboto.
          </p>

          {
            this.props.branding.typography.map(
              function ({fontFamily, title, link}, i) {
                return (
                  <Typography
                    fontFamily={fontFamily}
                    key={i}
                    link={link}
                    title={title}
                  />
                )
              }
            )
          }

        </Main>

      </App>
    )
  }
}

// Validation.
Page.propTypes = {
  branding: React.PropTypes.object
}

// Export.
export default Page
