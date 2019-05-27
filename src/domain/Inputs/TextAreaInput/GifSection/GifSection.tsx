import React from 'react'

import { StyledGif, StyledMainGifContainer, StyledRemoveButton } from '../style'

interface IGifSectionProps {
  /** If gifs related stuff should be shown */
  showGifs: boolean
  /** url of the gif */
  gifUrl: string
  /** Callback to change the gif */
  handleGifChange: (url: string) => void
  /** Callback to remove the gif */
  clearGif: () => void
}

const GifSection: React.FC<IGifSectionProps> = ({
  showGifs,
  gifUrl,
  clearGif
}) => {
  const hasGif = gifUrl !== ''

  return (
    <>
      {showGifs && hasGif && (
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
