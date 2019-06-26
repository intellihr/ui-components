import styled, { css } from 'styled-components'

import { Variables } from '../../../common'

export interface IMainBox {
  textColor?: Variables.Color
}

export const MainBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
  border-bottom: 2px solid ${Variables.Color.n400};

  ${(props: IMainBox) => props.textColor && css`
    color: ${props.textColor};
  `}
`

export const HighLightBox = styled.div`
  display: flex;
  flex-direction: column;
`

export const HighLightCaption = styled.div`
  padding: 5px;
  font-size: 13px;
  line-height: 1.3;
`

export const HighlighImageBlock = styled.div`
  padding: 0 10px 10px 10px;
  height: 100%;
  width: 100%;
`

export const Col = styled.div`
  flex: 1;
  width: 32%;
`

export const Description = styled.div`
  font-size: 14px;
  line-height: 1.5;
`
