import 'jest-styled-components'
import 'jest-canvas-mock'
import 'foundation-sites'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
