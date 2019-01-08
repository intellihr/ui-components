import styled from 'styled-components'

interface IContentSpacerContentItemProps {
  /** Size of the space between this content item and the next */
  spacingSize?: 'small' | 'medium' | 'large'
}

function spacingForContentItem(props: IContentSpacerContentItemProps): number {
  switch (props.spacingSize) {
    case 'small':
      return 24
    case 'medium':
      return 48
    case 'large':
      return 80
    default:
      return 0
  }
}

const StyledContentItem = styled.div<IContentSpacerContentItemProps>`
  margin-bottom: ${spacingForContentItem}px;

  :last-child {
    margin-bottom: 0px;
  }
`

export {
  StyledContentItem
}
