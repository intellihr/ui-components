import { mount } from 'enzyme'
import React from 'react'

import { Variables } from '../../../common'
import { HighlightArea } from './HighlightArea'

describe('<HighLightArea />', () => {
    it(`should render a HighlightArea`, () => {
        const wrapper = mount(
            <HighlightArea
                color='grey'
                margins={Variables.Spacing.sMedium}
            >
                Hello
            </HighlightArea>
        )
        expect(wrapper).toMatchSnapshot()
    })
})
