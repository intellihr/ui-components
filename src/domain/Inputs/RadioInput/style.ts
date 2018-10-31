import styled from 'styled-components'
import { Variables } from '../../../common'

export const OptionLabel = styled.label`
    display: block;
    cursor: default;
    line-height: ${Variables.LineHeight.lhSmall}px;
    color: ${Variables.Color.n800};
    font-size: ${Variables.FontSize.fzSmall}px;
    margin-bottom: 12px;
    
    > span:before {
         content: "";
         display: inline-block;
         vertical-align: middle;
         height: 16px;
         width: 16px;
         border-radius: 50%;
         background-color: ${Variables.Color.n150};
         border: 2px solid ${Variables.Color.n400};
         margin-right: 12px;
         
    }
    
    > input:hover + span:before {
      background-color: ${Variables.Color.n300};
    }
    
    > input:checked + span:before {
         border-color: ${Variables.Color.i400};
         background-image: radial-gradient(
                             circle closest-side,
                             ${Variables.Color.i400},
                             ${Variables.Color.i400} 50%,
                             transparent 50%,
                             transparent 100%);
    }

    > input:disabled + span { opacity: .5; }
    > input:disabled:hover + span { opacity: .5; }
    
    > input:disabled:checked + span:before {
    border-color: ${Variables.Color.n300};
         background-image: radial-gradient(
                             circle closest-side,
                             ${Variables.Color.n300},
                             ${Variables.Color.n300},
                             transparent 50%,
                             transparent 100%);
    }
    
    > input:disabled:hover + span:before {
    border-color: ${Variables.Color.n400};
    background-color: ${Variables.Color.n150};
    }
    
    > input { display: none; }
`

export const StyledRadioInput = styled.input`

`

export const RadioGroup = styled.div`

`
