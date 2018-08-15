import { shallow, mount } from 'enzyme'
import React from 'react'
import { FormattedText } from './FormattedText'

const sampleMarkdown = `
FormattedText supports all syntax supported by markdown.

Typography
----------
Multiple line breaks will be collapsed to a single paragraph:




See?

# H1
## H2
### H3
#### H4
##### H5
###### H6

---

Links
-----
http://www.intellihr.com.au
[Inline link](http://www.google.com)

---

Images
------
![Alt text](https://i.imgur.com/eyUDgtd.jpg "Title Text")

---

Code
----

Inline code with \`blah\`

---

Tables
------
Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

---

Quotes
------

> What the navy seal did you just navy seal about me, you little navy seal? I'll have you know I navy sealed top of my class in the navy seals, and I've been involved in numerous secret raids on the navy seals, and I have over 300 confirmed...

---

Lists
-----

Unordered Lists:

 * Wow
 * Eat carrots
 * Eat things which aren't carrots
 
Ordered/multi-level lists:

 1. Nothing wrong with me
 2. Nothing wrong with me
 3. Nothing
    * Wrong
    * With
      - me?
`

describe('<FormattedText />', () => {
  it(`should render the formatted text`, () => {
    const wrapper = mount(
      <FormattedText
        text='Hello. I am a piece of paragraph text.

        This should be on a new line :)'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render any urls as links`, () => {
    const wrapper = mount(
      <FormattedText
        text={`http://www.heyguy.com

        also this one http://www.ozbargain.com.au`}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a big block of markdown`, () => {
    const wrapper = mount(
      <FormattedText
        text={sampleMarkdown}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should include a custom text renderer`, () => {
    const wrapper = shallow(
      <FormattedText
        text=':crocodile:'
        renderEmojis={true}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should not include a custom text renderer`, () => {
    const wrapper = shallow(
      <FormattedText
        text=':crocodile:'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
