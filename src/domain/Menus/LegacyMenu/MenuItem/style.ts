import styled from 'styled-components'

import { Variables } from '../../../../common'

const MenuItemWrapper = styled.li`
  &.active {
    a {
      border-left: 3px solid ${Variables.Color.i400};
      color: ${Variables.Color.i400};
      font-weight: 600;
      margin-left: 0;
    }
  }

  a, a:focus {
    padding: 1rem;
    display: block;
    align-items: center;
    line-height: 1;
    text-decoration: none;

    color: ${Variables.Color.n700};
    margin-left: 3px;
    height: 50px;

    &:hover {
      color: ${Variables.Color.n700};
      background-color: ${Variables.Color.n300};
      border-left: 3px solid ${Variables.Color.n300};
      margin-left: 0;
    }

     &.active {
      border-left: 3px solid ${Variables.Color.i400};
      color: ${Variables.Color.i400};
      font-weight: 600;
      margin-left: 0;
    }
  }
`

const IconWrapper = styled.span`
  margin-right: 0.25rem;
  vertical-align: top;
`

const LoadingIconWrapper = styled.span`
  float: right;
`

const SubMenuWrapper = styled.ul`
  margin: 0;

  a, a:focus  {
    padding-left: 2.8rem;
  }
`

const MenuItemLabelWrapper = styled.span`
  margin-left: 7.5px;
  white-space: nowrap;
  vertical-align: top;
`

export {
  IconWrapper,
  MenuItemWrapper,
  LoadingIconWrapper,
  SubMenuWrapper,
  MenuItemLabelWrapper
}
