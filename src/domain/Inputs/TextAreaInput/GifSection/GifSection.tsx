import React from 'react'

import { useTranslateFunction } from '../../../Defaults/Defaults/Defaults'
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
  const t = useTranslateFunction()
  const hasGif = gifUrl !== ''

  return (
    <>
      {hasGif && (
        <StyledMainGifContainer>
          <StyledGif src={gifUrl} />
          <StyledRemoveButton onClick={clearGif}>
            {t('remove', {defaultValue: 'Remove'})}
          </StyledRemoveButton>
        </StyledMainGifContainer>
      )}
    </>
  )
}

export {
  GifSection
}
