import styled from 'styled-components'

export interface IColorBoxProps {
  hex: string
}

export const ColorBox = styled.div`
  width: 10em;
  height: 7.5em;
  background-color: ${(props: IColorBoxProps) => props.hex};
  margin-bottom: 1em;
`

export const ColorName = styled.p`
  font-weight: 600;
`
export const WrappedList = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 50rem;
  margin-left: 0;
`
