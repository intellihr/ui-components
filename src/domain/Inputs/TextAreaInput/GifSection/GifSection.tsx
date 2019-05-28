import React from 'react'

import { StyledGif, StyledMainGifContainer, StyledRemoveButton } from '../style'

interface IGifSectionProps {
  /** url of the gif */
  gifUrl: string
  /** Callback to change the gif */
  handleGifChange: (url: string) => void
  /** Callback to remove the gif */
  clearGif: () => void
}

const GifSection: React.FC<IGifSectionProps> = ({
  gifUrl,
  clearGif
}) => {
  const hasGif = gifUrl !== ''

  return (
    <>
      {hasGif && (
        <StyledMainGifContainer>
          <StyledGif src={gifUrl} />
          <StyledRemoveButton onClick={clearGif}>
            Remove
          </StyledRemoveButton>
        </StyledMainGifContainer>
      )}
    </>
  )
}

export {
  GifSection
}
