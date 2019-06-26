import styled from 'styled-components'

const MenuWrapper = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  position: relative;

  li {
    display: block;
  }

  .Collapsible__trigger {
    a {
      position: relative;

      &::after {
        content: '\\e920';
        display: inline-block;
        font-family: 'intellihr';
        position: absolute;
        right: 1rem;
      }
    }

    &.is-open {
      a {
        font-weight: 600;

        &::after {
          font-weight: initial;
          transform: rotate(180deg);
        }
      }
    }
  }
`

export {
  MenuWrapper
}
