import { AttributeLabel } from '../'

describe('AttributeLabel Index', () => {
  it('should export AttributeLabel Component', () => {
    expect(AttributeLabel.name).toMatchSnapshot()
  })
})
