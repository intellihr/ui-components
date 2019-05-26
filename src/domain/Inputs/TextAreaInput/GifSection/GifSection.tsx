import React from 'react'

import { Button } from '../../../Buttons'
import { StyledGif, StyledMainGifContainer } from '../style'

interface GifSectionProps {
  showGifs: boolean
  gifUrl: string
  handleGifChange: (url: string) => void
  clearGif: () => void
}

const GifSection: React.FC<GifSectionProps> = ({
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
          <Button
            className='button remove'
            onClick={clearGif}
          >
            <span className='fa fa-times' />
          </Button>
        </StyledMainGifContainer>
      )}
    </>
  )
}

export {
  GifSection
}
