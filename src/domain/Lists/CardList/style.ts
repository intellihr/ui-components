import styled, { css } from 'styled-components'

import { Variables } from '../../../common'

export interface IExpandComponentWrapperProps {
  isExpanded: boolean
}

const CardWrapper = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  max-width: 900px;
  margin: 0 auto .5rem;
  padding: ${Variables.Spacing.sMedium}px ${Variables.Spacing.sLarge}px ${Variables.Spacing.sMedium}px ${Variables.Spacing.sMedium}px
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${Variables.Color.n100};
  border: 1px solid ${Variables.Color.n250};
  border-radius: ${Variables.Style.borderRadius}px;
  transition: background-color .25s ease-out;

  &:hover {
    cursor: pointer;
    background-color: ${Variables.Color.n200};
  }
`

const ExpandComponentWrapper = styled.div`
  display: none;

  ${(props: IExpandComponentWrapperProps) => props.isExpanded && css`
      display: block;
  `}
`

export {
  CardWrapper,
  ExpandComponentWrapper
}
