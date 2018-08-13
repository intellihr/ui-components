import React from 'react'
import styled, { StyledComponentClass, css } from 'styled-components'
import { Props } from '../../../../common/types'
import { getColor } from '../../../../common/legacy'
import { SectionType } from './Section'
const sassGlobals = require('../../../../common/sass/variables.scss')

const DefaultDropdownButton = styled.button`
  background-color: transparent;
  color: #929fab;
  cursor: pointer;
  margin: 0;
  padding: .5rem .3rem;
  transition: background-color .25s ease-out, color .25s ease-out;

  &:hover,
  &:active,
  &:focus {
    background-color: ${getColor('neutral-base')};
    color: ${getColor('main-text')};
    outline: none;
  }

  .fa {
    font-size: 1.5rem;
    line-height: 1;
    margin: 0;
    width: 1.3em;
  }
`

const StyledToggleContainer = styled.span`
  display: table-cell;

  > * {
    margin: 0;
  }
`

interface IStyledDropdownMenuProps {
  transformOrigin: Props.IPositionXY
}

const StyledDropdownMenu = styled.span`
  margin: 2px;
  position: absolute;
  width: min-content;
  z-index: ${sassGlobals['z-index-dropdown-menu']};

  transform: scale(0.1);
  transform-origin: ${(props: IStyledDropdownMenuProps) => props.transformOrigin.xPos + ' ' + props.transformOrigin.yPos};
  transition: transform 150ms cubic-bezier(0.5, 1.8, 0.9, 0.8);

  &.entering,
  &.entered {
    transform: scale(1);
  }
`

const StyledSectionList = styled.ul`
  background-color: ${getColor('main-background')};
  border-radius: 4px;
  box-shadow: 0 0 4px rgba(0, 0, 0, .15), 0 2px 4px rgba(0, 0, 0, .29);
  min-width: 140px;
  margin: 0;
  padding: 0;
`

interface IStyledSectionProps {
  sectionType: SectionType,
  clickable: boolean
}

const stripMapping: { [n: string]: { stripColor: string, backgroundColor: string } } = {
  stripAlert: {
    stripColor: getColor('alert-base'),
    backgroundColor: getColor('alert-light')
  },
  stripSuccess: {
    stripColor: getColor('success-base'),
    backgroundColor: getColor('success-light')
  },
  stripWarning: {
    stripColor: getColor('warning-base'),
    backgroundColor: getColor('warning-light')
  },
  stripPrimary: {
    stripColor: getColor('primary-base'),
    backgroundColor: getColor('primary-light')
  },
  stripSecondary: {
    stripColor: getColor('secondary-base'),
    backgroundColor: getColor('secondary-light')
  },
  stripNeutral: {
    stripColor: getColor('neutral-base'),
    backgroundColor: getColor('neutral-light')
  }
}

function styleForSectionType (section: IStyledSectionProps) {
  if (section.sectionType in stripMapping) {
    const mapping = stripMapping[section.sectionType]

    return css`
      color: ${getColor('main-text')};
      border-left: 5px solid ${mapping.stripColor};

      ${section.clickable && css`
        cursor: pointer;

        &:hover,
        &:active,
        &:focus {
          background-color: ${mapping.backgroundColor};
          color: ${getColor('main-text')}
        }
      `}
    `
  }

  if (section.sectionType === 'alert') {
    return css`
      &,
      .left-component,
      .right-component {
        background-color: transparent;
        border-color: transparent;
        color: ${getColor('alert-base')};

        ${section.clickable && css`
          cursor: pointer;

          &:focus,
          &:hover {
            background-color: ${getColor('alert-base')};

            &,
            .left-component,
            .right-component {
              color: ${getColor('alert-text')};
            }
          }

          &:active,
          &.active {
            background-color: ${getColor('alert-active')};
            color: ${getColor('alert-text')};
          }
        `}
      }
    `
  }

  if (section.sectionType === 'default') {
    return css`
      &,
      .left-component,
      .right-component {
        color: ${getColor('main-text')};

        ${section.clickable && css`
          cursor: pointer;

          &:hover,
          &:active,
          &:focus {
            background-color: ${getColor('neutral-light')};

            &,
            .left-component,
            .right-component {
              color: ${getColor('link-text')};
            }
          }
        }
      `}
    `
  }
}

const StyledSection = styled.li`
  background: transparent;
  border: none;
  display: block;
  list-style: none;
  padding: 0;
  white-space: pre;
  width: 100%;

  hr {
    height: 0;
    margin-bottom: 0;
    margin-top: 0;
    padding: 0;
  }

  > a,
  > button,
  > span {
    border-radius: 0;
    display: block;
    line-height: 1;
    min-width: 100%;
    outline: 0;
    padding: 1em;
    text-align: left;

    &,
    .left-component,
    .right-component {
      transition: background .3s ease-in-out, color .3s ease-in-out;
    }

    ${styleForSectionType}
  }

  &:first-of-type {
    border-radius: 4px 4px 0 0;

    > a,
    > button {
      border-radius: 4px 4px 0 0;
    }
  }

  &:last-of-type {
    border-radius: 0 0 4px 4px;

    > a,
    > button {
      border-radius: 0 0 4px 4px;
    }
  }

  &:only-of-type {
    border-radius: 4px;

    > a,
    > button {
      border-radius: 4px;
    }
  }

  .left-component {
    margin-right: 5px;
  }

  .right-component {
    margin-left: 5px;
  }
`

export {
  DefaultDropdownButton,
  StyledToggleContainer,
  StyledDropdownMenu,
  StyledSectionList,
  StyledSection
}
