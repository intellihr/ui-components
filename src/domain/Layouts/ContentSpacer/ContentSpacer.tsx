import React from 'react'
import { StyledContentItem } from './style'
import { Props } from '../../../common/'

interface IContentSpacerContentItemProps {
  /** Size of the space between this content item and the next */
  spacingSize?: 'small' | 'medium' | 'large' | 'xlarge',
  /** Content item */
  content?: JSX.Element,
  /** Component context for the content item */
  componentContext?: string
}

interface IContentSpacerProps {
  /** Provide an array of items for the content */
  contentItems: IContentSpacerContentItemProps[],
  /** Component context for the overall content spacer */
  componentContext?: string
}

class ContentSpacer extends React.Component<IContentSpacerProps> {
  public render (): JSX.Element {
    const {
      contentItems,
      componentContext
    } = this.props

    return (
      <div
        data-component-type={Props.ComponentType.ContentSpacer}
        data-component-context={componentContext}
      >
        {
          contentItems.reduce((acc: JSX.Element[], contentItem) => {
            return [
              ...acc,
              <StyledContentItem
                spacingSize={contentItem.content && contentItem.spacingSize}
                key={acc.length}
                data-component-type={Props.ComponentType.ContentSpacerItem}
                data-component-context={contentItem.componentContext}
              >
                {contentItem.content}
              </StyledContentItem>
            ]
          }, [])
        }
      </div>
    )
  }
}

export {
  ContentSpacer,
  IContentSpacerContentItemProps
}
