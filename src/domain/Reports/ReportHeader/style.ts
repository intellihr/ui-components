import styled from 'styled-components'

import { Variables } from '../../../common'

export const Wrapper = styled.div`
  align-items: center;
  color: ${Variables.Color.n600};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 40px;
  padding: 5px;
  text-transform: uppercase;
  width: 300px;

  &:hover {
    color: ${Variables.Color.i400};
    cursor: pointer;
  }
`

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 600;
  align-items: center;
`

export const Title = styled.div`
  color: ${Variables.Color.n700};
  font-size: 20px;
  font-weight: 600;
`

export const HelpContentBox = styled.div`
  margin: 10px 0 15px 0;
`

export const IconBox = styled.div`
  font-size: 10px;
`

export const ArrowIcon = styled.i`
  transform: rotate(180deg);
`

export const IconText = styled.span`
  padding: 0 10px;
`
