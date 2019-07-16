import styled from 'styled-components'

import { Props, Variables } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

const CarouselStyleConstants = {
  MarginSize: Variables.Spacing.sMedium,
  ScrollDuration: 250
}

interface ICarouselContainerProps {
  /** Margins around the highlight area */
  margins?: Props.IMargins
}

interface ICarouselTileProps {
  /** Color of the tile background */
  background?: 'grey' | 'white'
}

const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  ${(props: ICarouselContainerProps) => styleForMargins(props.margins)}
`

interface ITabChevronButtonProps {
  float: 'left' | 'right'
}

const CarouselChevronButton = styled.button`
  color: ${Variables.Color.n600};
  cursor: pointer;
  float: ${(props: ITabChevronButtonProps) => props.float};
  font-weight: ${Variables.FontWeight.fwSemiBold};
  margin: 0 ${CarouselStyleConstants.MarginSize / 2}px;
  outline: none;
  text-align: center;
  width: 25px;
  transition: width .3s ease-in, color .15s ease-in, opacity .3s linear;

  &:hover {
    color: ${Variables.Color.n800};
  }

  &:disabled {
    width: 0;
    margin: 0;
    opacity: 0;
    cursor: default;
  }

  .icon {
    margin: 0;
  }
`

const CarouselParent = styled.div`
  overflow: hidden;
`

const CarouselList = styled.ul`
  -ms-overflow-style: none;
  list-style-type: none;
  margin: 0;
  overflow-x: scroll;
  overflow-y: hidden;
  padding-left: 0;
  position: relative;
  scrollbar-width: none;
  white-space: nowrap;

  &::-webkit-scrollbar {
      width: 0;
      height: 0;
  }

  &:after,
  &:before {
    display: table;
    content: ' ';
  }
`

const CarouselTile = styled.div`
  display: inline-block;
  width: 200px;
  height: 90px;
  padding: ${Variables.Spacing.sMedium}px;
  border-radius: ${Variables.Style.borderRadius}px;
  border: 1px solid ${Variables.Color.n250};
  margin: 0 ${Variables.Spacing.sXSmall / 2}px;
  background-color: ${(props: ICarouselTileProps) => {
    switch (props.background) {
      case 'white':
        return Variables.Color.n100
      case 'grey':
      default:
        return Variables.Color.n150
    }
  }};

  &:first-of-type {
    margin-left: 0;
  }

   &:last-of-type {
    margin-right: 0;
  }
`

CarouselTile.defaultProps = {
  background: 'grey'
}

export {
  CarouselStyleConstants,
  CarouselContainer,
  CarouselChevronButton,
  CarouselList,
  CarouselParent,
  CarouselTile,
  ICarouselTileProps
}
