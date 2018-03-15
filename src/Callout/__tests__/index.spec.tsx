import { shallow } from 'enzyme'
import React from 'react'
import ReactDOM from 'react-dom'
import reactRenderer from 'react-test-renderer'

import { Callout } from '../'

describe('Callout', () => {
  it('Renders successfully', () => {
    const component = reactRenderer.create(
      <Callout type="success" justifyCenter>
        <div className="title">
            Well done!
        </div>
              You successfully read this important alert message.
      </Callout>
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot();
  })

  it('Renders with DOM assertion', () => {
    const component = shallow(
      <Callout type="success" justifyCenter>
        <div className="title">
            Well done!
        </div>
              You successfully read this important alert message.
      </Callout>
    )

    component.find('div').first().hasClass('justify-center')
  })

  it('Renders successfully when messages are passed', () => {
    const messages: string[] = ['You are wrong', 'hey', 'what']
    const component = reactRenderer.create(
      <Callout type="warning" messages={messages}/>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot();
  })

  it('Renders successfully when only message is passed', () => {
    const msg: string = 'hello world'
    const component = reactRenderer.create(
      <Callout type="info" message={msg} />
    )
    const tree = component.toJSON()
    expect(tree).toEqual(expect.anything())
    expect(tree).toMatchSnapshot();
  })

  it('Renders successfully when only message is passed', () => {
    const msg: string = 'hello world'
    const component = shallow(
      <Callout type="info" message={msg} />
    )
    component.find('div').first().hasClass('callout')
  })

  it('Renders successfully when both messages and message is passed', () => {
    const msg: string = 'hello world'
    const messages: string[] = ['You are wrong', 'hey', 'what']

    const component = reactRenderer.create(
      <Callout type="info" message={msg} messages={messages} />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot();
  })

  it('Renders successfully when messages has length 1', () => {
    const messages: string[] = ['Hello world']

    const component = reactRenderer.create(
      <Callout type="info" messages={messages} justifyCenter/>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot();
  })
})
