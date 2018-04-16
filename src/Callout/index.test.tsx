import { Callout } from '../'

describe('Callout Index', () => {
  it('should export Callout Component', () => {
    expect(Callout.name).toMatchSnapshot()
  })
})
