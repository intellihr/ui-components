import styled from 'styled-components'

interface ILayoutSpacerContentItemProps {
  /** Size of the space between this content item and the next */
  spacingSize?: '3xsmall' | '2xsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
}

const spacingForContentItem = (props: ILayoutSpacerContentItemProps): number => {
  switch (props.spacingSize) {
    case '3xsmall':
      return 8
    case '2xsmall':
      return 12
    case 'xsmall':
      return 16
    case 'small':
      return 24
    case 'medium':
      return 32
    case 'large':
      return 40
    case 'xlarge':
      return 56
    default:
      return 0
  }
}

const StyledContentItem = styled.div<ILayoutSpacerContentItemProps>`
  margin-bottom: ${spacingForContentItem}px;

  &:last-child {
    margin-bottom: 0px;
  }
`

export {
  StyledContentItem
}
