import {
  clamp,
  debounce
} from 'lodash'
import React, { RefObject } from 'react'

import { Props, Utils } from '../../../common'
import { IntelliIcon } from '../../Icons'
import {
  CarouselChevronButton,
  CarouselContainer,
  CarouselList,
  CarouselParent,
  CarouselStyleConstants,
  CarouselTile
} from './style'

export interface ICarouselProps {
  /** Callback when the scroll position changes */
  onScrollUpdate?: (newScrollValue: number) => void
  /** The data-component-context */
  componentContext?: string
  /** The margins around the component */
  margins?: Props.IMargins
}

export class Carousel extends React.PureComponent<ICarouselProps, never> {
  public static Tile = CarouselTile

  private carouselListRef: RefObject<HTMLUListElement> = React.createRef()
  private currentlyMounted: boolean = false

  private handleScrollUpdate = debounce(() => {
    // Force a react re-render to correctly update the dom
    if (this.currentlyMounted && this.carouselListRef.current) {
      this.forceUpdate()
    }
  }, 100, { leading: true })

  public componentDidMount (): void {
    this.currentlyMounted = true

    window.addEventListener('resize', this.handleScrollUpdate)

    // Force an update to set the arrows correctly
    this.forceUpdate()
  }

  public componentWillUnmount (): void {
    window.removeEventListener('resize', this.handleScrollUpdate)

    this.currentlyMounted = false
  }

  public render (): JSX.Element | null {
    const {
      componentContext,
      margins
    } = this.props

    return (
      <CarouselContainer
        data-component-context={componentContext}
        data-component-type={Props.ComponentType.Carousel}
        margins={margins}
      >
        {this.leftChevron}
        {this.carouselList}
        {this.rightChevron}
      </CarouselContainer>
    )
  }

  public scrollLeft = () => this.handleScrollButton('left')
  public scrollRight = () => this.handleScrollButton('right')

  private get leftChevron (): JSX.Element | null {
    const carouselListEl = this.carouselListRef.current

    if (!carouselListEl || carouselListEl.scrollWidth <= carouselListEl.clientWidth) {
      return null
    }

    const isOnLeft = (carouselListEl.scrollLeft <= 0)

    return (
      <CarouselChevronButton
        type='button'
        disabled={isOnLeft}
        float='left'
        onClick={this.scrollLeft}
        tabIndex={-1}
        aria-hidden
      >
        <IntelliIcon
          icon='arrow-left'
        />
      </CarouselChevronButton>
    )
  }

  private get rightChevron (): JSX.Element | null {
    const carouselListEl = this.carouselListRef.current

    if (!carouselListEl || carouselListEl.scrollWidth <= carouselListEl.clientWidth) {
      return null
    }

    const isOnRight = (carouselListEl.scrollLeft + carouselListEl.clientWidth > carouselListEl.scrollWidth - 1)

    return (
      <CarouselChevronButton
        type='button'
        disabled={isOnRight}
        float='right'
        onClick={this.scrollRight}
        tabIndex={-1}
        aria-hidden
      >
        <IntelliIcon
          icon='arrow-right'
        />
      </CarouselChevronButton>
    )
  }

  private get carouselList (): JSX.Element {
    const {
      children
    } = this.props

    return (
      <CarouselParent>
        <CarouselList
          ref={this.carouselListRef}
          onScroll={this.handleScrollUpdate}
          role='tablist'
        >
          {children}
        </CarouselList>
      </CarouselParent>
    )
  }

  private handleScrollValueChange = (newScrollValue: number): boolean => {
    const {
      onScrollUpdate
    } = this.props

    if (this.currentlyMounted && this.carouselListRef.current) {
      this.carouselListRef.current.scrollLeft = Math.round(newScrollValue)

      if (onScrollUpdate) {
        onScrollUpdate(newScrollValue)
      }

      return true
    }

    return false
  }

  private handleScrollButton = async (direction: 'left' | 'right'): Promise<void> => {
    const carouselList = this.carouselListRef.current
    // Left doesn't scroll as much to counter us only using the top left position
    const directionMultiplier = (direction === 'left') ? -0.6 : 1

    if (this.currentlyMounted && carouselList) {
      const currentScrollLeft = carouselList.scrollLeft
      const desiredScrollLeft = currentScrollLeft + directionMultiplier * carouselList.clientWidth
      let finalScrollLeft = 0

      // Determine the last tab whose top-left value is before the desired scroll position
      for (let i = 0; i < carouselList.children.length; i++) {
        const tab = carouselList.children.item(i) as HTMLElement
        const tabOffset = tab.offsetLeft - CarouselStyleConstants.MarginSize

        if (tabOffset <= desiredScrollLeft) {
          finalScrollLeft = tabOffset
        } else {
          break
        }
      }

      // Clamp scroll position between 0 and max left position (otherwise animation goes awry)
      finalScrollLeft = clamp(
        finalScrollLeft,
        0,
        carouselList.scrollWidth - carouselList.clientWidth
      )

      return Utils.smoothUpdate({
        startValue: currentScrollLeft,
        endValue: Math.round(finalScrollLeft),
        msTotal: CarouselStyleConstants.ScrollDuration,
        callback: this.handleScrollValueChange
      })
    }
  }
}
