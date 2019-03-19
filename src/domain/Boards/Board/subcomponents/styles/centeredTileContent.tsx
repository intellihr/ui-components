import styled, { css } from 'styled-components'

import { Variables } from '../../../../../common'

interface IContentWrapperProps {
  hasTitleLabel?: boolean
  limitedContentWidth: 'none' | 'small' | 'medium'
}

const CenteredContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: table;
  table-layout: fixed;

  ${(props: IContentWrapperProps) => {
    if (props.hasTitleLabel) {
      return css`
        height: calc(100% - 40px);
      `
    }
  }}

  ${(props: IContentWrapperProps) => {
    switch (props.limitedContentWidth) {
      case 'small':
        return css`
            max-width: 210px;
            `
      case 'medium':
        return css`
            max-width: 370px;
          `
      case 'none':
        return css`
            max-width: 100%;
          `
      }
  }}
`

const CenteredContentChildrenWrapper = styled.div`
  display: table-cell;
  text-align: center;
  vertical-align: middle;
`

const CenteredContentImageWrapper = styled.div`
  width: 94px;
  height: 94px;
  overflow: hidden;
  border-radius: 50%;
  margin-top: ${Variables.Spacing.sXLarge}px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  transition: color 0.15s ease-in, background-color 0.15s ease-in;
`

const CenteredContentTopRightComponentWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`

const CenteredContentImage = styled.img`
  object-fit: cover;
  min-width: 100%;
  min-height: 100%;
  margin: auto;
`

const CenteredContentHeading = styled.div`
  width: 100%;
  margin-top: ${Variables.Spacing.sMedium}px;
  padding: 0 ${Variables.Spacing.sSmall}px;
  font-weight: ${Variables.FontWeight.fwHeavy};
  line-height: ${Variables.LineHeight.lhDisplayLarge}px;
  font-size: ${Variables.FontSize.fzDisplayLarge}px;
  color: ${Variables.Color.n800};
  text-align: center;
  transition: color 0.15s ease-in;
`

const CenteredContentSubheading = styled.div`
  width: 100%;
  margin-top: ${Variables.Spacing.sXLarge}px;
  padding: 0 ${Variables.Spacing.sSmall}px;
  font-weight: ${Variables.FontWeight.fwNormal};
  line-height: ${Variables.LineHeight.lhBody}px;
  font-size: ${Variables.FontSize.fzBody}px;
  color: ${Variables.Color.n600};
  text-transform: uppercase;
  text-align: center;
  transition: color 0.15s ease-in;
`

const CenteredContentDescription = styled.div`
  width: 100%;
  margin-top: ${Variables.Spacing.sXSmall}px;
  padding: 0 ${Variables.Spacing.sSmall}px;
  margin-bottom: ${Variables.Spacing.sXLarge}px;
  font-weight: ${Variables.FontWeight.fwNormal};
  line-height: ${Variables.LineHeight.lhXSmall}px;
  font-size: ${Variables.FontSize.fzXSmall}px;
  color: ${Variables.Color.n600};
  text-align: center;
`

export {
  CenteredContentChildrenWrapper,
  CenteredContentDescription,
  CenteredContentWrapper,
  CenteredContentTopRightComponentWrapper,
  CenteredContentHeading,
  CenteredContentImage,
  CenteredContentImageWrapper,
  CenteredContentSubheading
}
