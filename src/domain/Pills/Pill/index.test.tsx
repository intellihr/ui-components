import { Pill } from '../'

describe('Pill Index', () => {
  it('should export Pill Component', () => {
    expect(Pill.name).toMatchSnapshot()
  })
})
