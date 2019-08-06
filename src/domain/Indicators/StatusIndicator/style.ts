import styled from 'styled-components'

const StatusIndicator = styled.div`
   font-size: $fz-body;
   font-weight: normal;
   vertical-align: bottom;

   .icon {
     bottom: 2px;
     font-size: $fz-xsmall;
     margin-right: .5rem;
     position: relative;
   }
`

const StatusTitle = styled.div`
   display: flex;
   align-items: center;
`

export {
  StatusIndicator,
  StatusTitle
}
