import styled from 'styled-components'

const ActionDescriptionWrapper = styled.div`
  margin-top: 6px;
`

const ActionLinksWrapper = styled.div`
  margin-top: 14px;
  
  .action-link {
    display: block;
    margin-top: 0;
    margin-bottom: 8px;
  }
`

const ActionTitleWrapper = styled.div`
  font-weight: 800;
`

const ActionListHeaderWrapper = styled.div`
  margin-bottom: 10px;
`

const ActionListBodyWrapper = styled.div`
  ol {
    counter-reset: ol-action-list;
    margin-left:0;
    padding-left:0;
    list-style: none;

    > li {
      display: flex;
      margin-bottom: 16px;

      &:last-child {
        margin-bottom: 0;
      }

      &:before {
        content: counter(ol-action-list) '.';
        counter-increment: ol-action-list;
        font-weight: 800;
        margin-right: 26px;
      }
    }
  }
`

export {
  ActionTitleWrapper,
  ActionLinksWrapper,
  ActionDescriptionWrapper,
  ActionListHeaderWrapper,
  ActionListBodyWrapper
}
