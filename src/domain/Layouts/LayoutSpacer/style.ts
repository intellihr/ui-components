import styled from 'styled-components'

interface ILayoutSpacerContentItemProps {
  /** Size of the space between this content item and the next */
  spacingSize?: 'small' | 'medium' | 'large' | 'xlarge'
}

const spacingForContentItem = (props: ILayoutSpacerContentItemProps): number => {
  switch (props.spacingSize) {
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
