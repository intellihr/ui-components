import { shallow } from 'enzyme'
import React from 'react'
import reactRenderer from 'react-test-renderer'

import { Callout } from '../Callout'

describe('Callout', () => {
  it('Renders successfully', () => {
    const component = reactRenderer.create(
      <Callout type='success' justifyCenter={true}>
        <div className='title'>
            Well done!
        </div>
              You successfully read this important alert message.
      </Callout>
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders with DOM assertion', () => {
    const component = shallow(
      <Callout type='success' justifyCenter={true}>
        <div className='title'>
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
      <Callout type='warning' messages={messages} />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders successfully when only message is passed', () => {
    const msg: string = 'hello world'
    const wrapper = shallow(
      <Callout type='info' message={msg} />
    )

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.instance().props.type).toEqual('info')
  })

  it('Renders successfully when both messages and message is passed', () => {
    const msg: string = 'hello world'
    const messages: string[] = ['You are wrong', 'hey', 'what']

    const component = reactRenderer.create(
      <Callout type='info' message={msg} messages={messages} />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders successfully when messages has length 1', () => {
    const messages: string[] = ['Hello world']

    const component = reactRenderer.create(
      <Callout type='info' messages={messages} justifyCenter={true} />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders without any message/messages or children', () => {
    const wrapper = shallow(
      <Callout type='info' />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
