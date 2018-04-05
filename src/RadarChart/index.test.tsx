import { RadarChart } from '../'

describe('RadarChart Index', () => {
  it('should export Radar Chart Component', () => {
    expect(RadarChart.name).toMatchSnapshot()
  })
})
