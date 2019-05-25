import styled from 'styled-components'

interface IAvatarPictureContainerProps {
  /** URL to the image to be rendered responsively */
  imageUrl: string
}

const AvatarPictureContainer = styled.div<IAvatarPictureContainerProps>`
  width: 100%;
  height: 100%;

  background: transparent url('${({ imageUrl }) => imageUrl}') center center / cover no-repeat;
`

const AvatarPicture = styled.img`
  visibility: hidden;
`

export {
  AvatarPictureContainer,
  AvatarPicture
}
