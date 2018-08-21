import React from 'react'
import styled, { StyledComponentClass, css } from 'styled-components'
import { Props } from '../../../../common/types'
import { SectionType } from './Section'
const variables = require('../../../../common/sass/variables.scss')

const DefaultDropdownButton = styled.button`
  background-color: transparent;
  border: 1px solid transparent;
  color: ${variables.n700};
  cursor: pointer;
  margin: 0;
  outline: none;
  padding: .5rem .3rem;
  transition: background-color .25s ease-out, color .25s ease-out;

  &:hover {
    background-color: ${variables.n200};
  }
  
  &:active {
    background-color: ${variables.n300};
  }
  
  &:focus {
    background-color: ${variables.n200};
    border-color: ${variables.n400};
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
  z-index: ${variables.zIndexDropdownMenu};

  transform: scale(0.1);
  transform-origin: ${(props: IStyledDropdownMenuProps) => props.transformOrigin.xPos + ' ' + props.transformOrigin.yPos};
  transition: transform 150ms cubic-bezier(0.5, 1.8, 0.9, 0.8);

  &.entering,
  &.entered {
    transform: scale(1);
  }
`

const StyledSectionList = styled.ul`
  background-color: ${variables.n100};
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
    stripColor: variables.r400,
    backgroundColor: variables.r100
  },
  stripSuccess: {
    stripColor: variables.g400,
    backgroundColor: variables.g100
  },
  stripWarning: {
    stripColor: variables.o400,
    backgroundColor: variables.o100
  },
  stripPrimary: {
    stripColor: variables.i400,
    backgroundColor: variables.i100
  },
  stripSecondary: {
    stripColor: variables.b400,
    backgroundColor: variables.b100
  },
  stripNeutral: {
    stripColor: variables.n400,
    backgroundColor: variables.n200
  }
}

function styleForSectionType (section: IStyledSectionProps) {
  if (section.sectionType in stripMapping) {
    const mapping = stripMapping[section.sectionType]

    return css`
      color: ${variables.n800};
      border-left: 5px solid ${mapping.stripColor};

      ${section.clickable && css`
        cursor: pointer;

        &:hover,
        &:active,
        &:focus {
          background-color: ${mapping.backgroundColor};
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
        color: ${variables.r600};

        ${section.clickable && css`
          cursor: pointer;

          &:focus,
          &:hover {
            background-color: ${variables.r100};
          }

          &:active,
          &.active {
            background-color: ${variables.r200};
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
        color: ${variables.n700};

        ${section.clickable && css`
          cursor: pointer;

          &:hover,
          &:active,
          &:focus {
            background-color: ${variables.n200};

            &,
            .left-component,
            .right-component {
              color: ${variables.i400};
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
