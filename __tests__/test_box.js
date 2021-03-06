/*global
describe
expect
it
*/

// Dependencies.
const React = require('react')
const T = require('react-addons-test-utils')

// UI components.
const Box = require('../source/components/box/template')

// Describe `<Component/>` name.
describe('Box', function () {
  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <Box>
      <p>
        Lorem ipsum dolor sit amet.
      </p>
      <p>
        Lorem ipsum dolor sit amet.
      </p>
    </Box>
  )

  // Get parent element.
  const parent = T.findRenderedDOMComponentWithClass(el, 't7-box')

  // Get content.
  const content = parent.querySelectorAll('p')

  // ===================
  // Test for existence.
  // ===================

  it('exists in the page', function () {
    expect(T.isCompositeComponent(el)).toBe(true)
  })

  // =================
  // Test for content.
  // =================

  it('has content', function () {
    expect(content.length).toBe(2)
  })
})
