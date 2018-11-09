import styled, { css } from 'styled-components'
import { Variables } from '../../../common'


const TabGroupContainer = styled.div`
  border: 1px solid ${Variables.Color.n400};
  border-radius: ${Variables.Style.borderRadius};
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
`

const TabList = styled.ul`
  display: flex;
  height: 100%;
  justify-content: space-around;
  list-style-type: none;
  margin: 0;
  white-space: nowrap;
`

const TabListItem = styled.li`
  display: inline-block;
  width: 100%;

  &:last-child {
    button {
      border-right: 0;
    }
  }
`

interface ITabListItemButtonProps {
  active: boolean
  tabSize?: 'small' | 'medium' | 'large'
}

function stylesFortabSizes (props: ITabListItemButtonProps): any {
  if (props.tabSize === 'small') {
    return css`
      font-size: ${Variables.FontSize.fzXSmall}px;
      line-height: ${Variables.LineHeight.lhXSmall}px;
      padding: 7px 0;
    `
  }

  if (props.tabSize === 'medium') {
    return css`
      font-size: ${Variables.FontSize.fzSmall}px;
      line-height: ${Variables.LineHeight.lhSmall}px;
    `
  }
  if (props.tabSize === 'large') {
    return css`
      font-size: ${Variables.FontSize.fzBody}px;
      line-height: ${Variables.LineHeight.lhDisplayLarge}px;
      padding: 16px 0;
    `
  }
}


const TabListItemButton = styled.button`
  background-color: ${Variables.Color.n200};
  border-radius: 0;
  border-right: 1px solid ${Variables.Color.n400};
  color: ${Variables.Color.n600};
  display: block;
  font-size: ${Variables.FontSize.fzSmall}px;
  font-weight: ${Variables.FontWeight.fwMedium}px;
  outline: none;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color .15s ease-in;
  width: 100%;
  padding:10px 0;

  ${(props: ITabListItemButtonProps) => props.active && css `&, `}
  &:active,
  &:hover,
  &:focus {
    background-color: ${Variables.Color.n100};
    color: ${Variables.Color.i400};
    cursor: pointer;
  }
  
  ${stylesFortabSizes}
`

export {
  TabGroupContainer,
  TabList,
  TabListItem,
  TabListItemButton
}
