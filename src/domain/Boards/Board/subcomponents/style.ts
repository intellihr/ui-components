import styled, {css} from 'styled-components'
import {Props, Variables} from '../../../../common'
import {ICircleSkeletonWrapperProps} from '../../../Skeletons/CircleSkeleton/style'

interface ITileWrapperProps {
  isCompact?: boolean
}

const TileWrapper = styled.div`
  background-color: ${Variables.Color.n200};
  border-radius: 4px;
  min-height: 300px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.13);
  transition: background-color 0.15s ease-in;
  flex-grow: 1;
  margin-bottom: 24px;
  margin-right: 24px;
  
  ${(props: ITileWrapperProps) => {
    if (props.isCompact) {
      return css`
          min-width: 240px;
        `
    }else{
      return css`
          min-width: calc(100% - 24px) ;
        `
    }
  }}
`

const StyledTileLabel = styled.label`
  font-size: ${Variables.FontSize.fzSmall}px;
  line-height: ${Variables.LineHeight.lhSmall}px;
  font-weight: ${Variables.FontWeight.fwHeavy};
  text-transform: uppercase;
  margin-bottom: 12px;
`

export {
  StyledTileLabel,
  TileWrapper
}
