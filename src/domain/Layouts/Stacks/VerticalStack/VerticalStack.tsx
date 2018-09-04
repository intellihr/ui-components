import React from 'react'
import styled, { css } from 'styled-components'
import { Variables } from '../../../../common'

export interface IVerticalStackProps {
  /** how much padding given between each stack item on mobile. */
  mobilePadding?: number,
  /** how much padding given between each stack item on desktop. */
  desktopPadding?: number
}

const StyledVerticalStack = styled.div<IVerticalStackProps>`
  display: flex;
  flex-direction: column; 
`

const StyledVerticalStackItem = styled.div<IVerticalStackProps>`
 ${(props: IVerticalStackProps) => css`   
    @media only screen and (max-width: ${Variables.Breakpoint.breakpointTablet - 1}px) {
      padding-top: ${props.mobilePadding}px;
    }
    
    @media only screen and (min-width: ${Variables.Breakpoint.breakpointTablet}px) {
      padding-top: ${props.desktopPadding}px;
    }
  `}
`

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

    return React.Children.map(children,(child, index) => {
      if (index === 0) {
        return (
          <StyledVerticalStackItem
            mobilePadding={0}
            desktopPadding={0}
          >
            {child}
          </StyledVerticalStackItem>
        )
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
