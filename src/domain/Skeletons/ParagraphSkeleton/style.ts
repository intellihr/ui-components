import styled from 'styled-components'

import { Props } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'
import { styleForTypographyType } from '../../Typographies/services/textStyles'
import { styleForSkeletons } from '../style'

export interface IParagraphSkeletonWrapperProps {
  margins?: Props.IMargins
}

export const ParagraphSkeletonWrapper = styled.div`
  ${(props: IParagraphSkeletonWrapperProps) => styleForMargins(props.margins)};
`
