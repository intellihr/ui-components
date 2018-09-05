import React from 'react'
import { StyledVerticalStack, StyledVerticalStackItem } from './style'

export interface IVerticalStackProps {
  /** how much padding given between each stack item on mobile. */
  mobilePadding?: number,
  /** how much padding given between each stack item on desktop. */
  desktopPadding?: number
}

class VerticalStack extends React.Component<IVerticalStackProps> {
  public static defaultProps: Partial<IVerticalStackProps> = {
    mobilePadding: 16,
    desktopPadding: 24
  }

  get stackChildren () {
    const {
      children,
      mobilePadding,
      desktopPadding
    } = this.props

    return React.Children.map(children,(child) => {
      if (!mobilePadding || !desktopPadding) {
        return null
      }

      return (
        <StyledVerticalStackItem
          mobilePadding={mobilePadding}
          desktopPadding={desktopPadding}
        >
          {child}
        </StyledVerticalStackItem>
      )
    })
  }

  public render (): JSX.Element | null {
    return (
      <StyledVerticalStack>
        {this.stackChildren}
      </StyledVerticalStack>
    )
  }
}

export {
  VerticalStack
}
