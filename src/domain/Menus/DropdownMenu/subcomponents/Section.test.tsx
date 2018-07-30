import React from 'react'
import { shallow, mount } from 'enzyme'
import { FontAwesomeIcon } from '@Domain/Icons'
import { Section } from './Section'

describe('<Section />', () => {
  describe('Default sections', () => {
    const wrapper = shallow(
      <span>
        <Section
          text='Item 1'
        />
        <Section
          text='Item 2'
          onClick={() => {}}
        />
        <Section
          text='Item 3'
          href='https://intellihr.com.au'
          componentProps={{
            style: {'fontWeight': 600}
          }}
        />
        <Section
          component={<hr/>}
        />
        <Section
          text='Item 5'
          leftComponent={<FontAwesomeIcon type='hand-o-right'/>}
          rightComponent={<FontAwesomeIcon type='hand-o-left'/>}
        />
      </span>
    )

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('Left and Right sections', () => {
    const wrapper = mount(
      <Section
        text='surrounded'
        leftComponent={<FontAwesomeIcon type='hand-o-right'/>}
        rightComponent={<FontAwesomeIcon type='hand-o-left'/>}
      />
    )

    it('should render the left and right components', () => {
      const parent = wrapper
        .find({text: 'surrounded'})

      expect(
        parent
          .find('.fa-hand-o-right')
          .exists()
      ).toBeTruthy()

      expect(
        parent
          .find('.fa-hand-o-left')
          .exists()
      ).toBeTruthy()
    })
  })

  describe('Custom Components', () => {
    const wrapper = mount(
      <Section
        component={<div>asdf</div>}
      />
    )

    it('should contain a custom element', () => {
      expect(
        wrapper
          .find('li')
          .find('div')
          .filterWhere(element => element.text() === 'asdf')
          .exists()
      ).toBeTruthy()
    })
  })
})
