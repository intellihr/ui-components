import styled, { css } from 'styled-components'

import { Variables } from '../../../../../common'

interface IContentWrapperProps {
  hasTitleLabel?: boolean
}

const CenteredContentWrapper = styled.div`
  width: 100%;
  min-height: 230px;
  display: flex;
  flex-wrap: wrap;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${(props: IContentWrapperProps) => {
    if (!props.hasTitleLabel) {
      return css`
        min-height: 270px;
      `
    }
  }}
`

const CenteredContentImageWrapper = styled.div`
  width: 94px;
  height: 94px;
  overflow: hidden;
  border-radius: 50%;

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  ${CenteredContentWrapper}:hover & {
    background-color: ${Variables.Color.n200};
  }
`

const CenteredContentImage = styled.img`
  object-fit: cover;
  min-width: 100%;
  min-height: 100%;
  margin: auto;
`

const CenteredContentHeading = styled.div`
  margin-top: 16px;
`

const CenteredContentSubheading = styled.div`
  margin-top: 32px;
`

const CenteredContentDescription = styled.div`
  margin-top: 8px;
`

export {
  CenteredContentDescription,
  CenteredContentWrapper,
  CenteredContentHeading,
  CenteredContentImage,
  CenteredContentImageWrapper,
  CenteredContentSubheading
}
