import styled from 'styled-components'
import { getColor } from '../Color'

export const PersonWrapper = styled.div`
  align-items: center;
  display: flex;
  padding: 2px;
  
  .person-secondary-text {
    color: ${getColor('main-text-light')};
    line-height: 1.3;
    margin-top: 2px;
  } 
  
  .person-tertiary-text {
    color: ${getColor('main-text-light')};
    font-size: .75rem;
    font-weight: 600;
  }
`

export const AvatarContainer = styled.div`
  align-self: start;
  position: relative;
  display: flex;
`

export const PersonInfo = styled.div`
    overflow: hidden;
    padding-left: 10px;
    align-self: center;
`
