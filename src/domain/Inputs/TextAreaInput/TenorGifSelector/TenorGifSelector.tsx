import React, { useContext, useEffect, useRef, useState } from 'react'

import { Props } from '../../../../common'
import { useClickOutside } from '../../../../common/hooks'
import { Icon } from '../../../Icons'
import { StyledGifButton, StyledGifContainer, StyledGifList, StyledScrollArea } from '../../../Inputs/TextAreaInput/style'
import { Popover } from '../../../Popovers'
import { TextInput } from '../../TextInput'
import { IParameters, parameterize } from './services'
import { PoweredByTenor } from './PoweredByTenorLogo'

interface ITenorGifSelectorProps {
  /** A tenor api key to access the endpoint */
  apiKey: string
  /** Gives parent access to the gif url when it is selected */
  handleGifChange: (gifURL: string) => void
}

type FormatTypes = 'gif' | 'tinygif'

interface IMediaObject {
  /** The url to the GIF */
  url: string
  /** The dimensions of the image [width, height] */
  dims: [number, number]
  /** A url to a preview image of the GIF */
  preview: string
  /** Size of the file in bytes */
  size: number
}

type Media = {
  [K in FormatTypes]: IMediaObject
}

interface IGifObject {
  /** Tenor result identifier */
  id: string
  /**  Array of Media objects containig the url to the GIFs */
  media: Media[]
}

interface IQueryResults {
  results: IGifObject[]
  next: string | number
}

function transformResults (gifs: IGifObject[]): IGifObject[] {
  return gifs.map((gif) => {
    const { id, media } = gif
    return {
      id,
      media
    } as IGifObject
  })
}

const TenorGifSelector: React.FC<ITenorGifSelectorProps> = ({ apiKey, handleGifChange }) => {
  const api = 'https://api.tenor.com/v1/'

  const [searchTerm, setSearchTerm] = useState('')
  const [gifs, setGifs] = useState<IGifObject[]>([])
  const [nextID, setNextID] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  const [trending, setTrending] = useState<IGifObject[]>([])

  const anchorRef = useRef<HTMLDivElement>(null)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const markerGifRef = useRef<HTMLDivElement>(null)
  const [markerIndex, setMarkerIndex] = useState(-1)

  const { ref: gifListRef, opened, toggleOpened, close } = useClickOutside<HTMLDivElement>(false, anchorRef)

  const searchEndpoint = `${api}search`
  const commonParameters = {
    limit: 15,
    locale: 'en_AU',
    contentfilter: 'high',
    media_filter: 'minimal',
    key: apiKey
  }
  const searchParameters: IParameters = {
    q: searchTerm,
    ...commonParameters
  }

  if (nextID !== null) {
    searchParameters.pos = nextID
  }

  const searchURL = parameterize(searchEndpoint, searchParameters)

  // Set trending
  useEffect(() => {
    const trendingEndpoint = `${api}trending`
    const trendingURL = parameterize(trendingEndpoint, commonParameters)

    fetch(trendingURL)
      .then((response) => response.json())
      .then(
        ({ results }: IQueryResults) => {
          results = transformResults(results)
          setTrending(results)
          setGifs(results)
          setLoading(false)
        }
      )
  }, [])

  // Fetch GIFs
  useEffect(() => {
    let isLatestResult = true
    if (searchTerm === '') {
      setGifs(trending)
      setMarkerIndex(-1)
      setLoading(false)
    } else {
      setLoading(true)
      fetch(searchURL)
        .then((response) => response.json())
        .then(
          ({ results, next }: IQueryResults) => {
            // Don't set the results if it's stale
            if (isLatestResult) {
              const halfwayPoint = Math.floor(results.length / 2)
              update(next, results, halfwayPoint)
            }
          })
    }
    return () => {
      // Let fetch know the results will be stale
      isLatestResult = false
    }
  }, [searchTerm, trending])

  // Infinite scroll
  useEffect(() => {
    // Don't initiate another fetch if the previous one has not completed
    if (!loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.intersectionRatio > 0 && entry.intersectionRatio < 1) {
              const { top } = entry.boundingClientRect
              const parentHeight = scrollAreaRef.current!.clientHeight
              if (top > parentHeight) {
                setLoading(true)
                fetch(searchURL)
                  .then((response) => response.json())
                  .then(({ results, next }: IQueryResults) => {
                    const nextMarker = gifs.length + Math.floor(results.length / 2)
                    update(next, results, nextMarker, true)
                  })
              }
            }
          })
        },
        {
          root: scrollAreaRef.current
        }
      )

      if (markerGifRef.current) {
        observer.observe(markerGifRef.current)
      }

      return () => {
        observer.disconnect()
      }
    }
  }, [loading, markerGifRef.current, scrollAreaRef.current])

  function update (next: string | number, gifResults: IGifObject[], marker: number, more: boolean = false): void {
    gifResults = transformResults(gifResults)
    if (more) { gifResults = [...gifs, ...gifResults] }

    setMarkerIndex(marker)
    setGifs(gifResults)
    setNextID(next.toString())
    setLoading(false)
  }

  const handleGifClick = (url: string) => () => {
    handleGifChange(url)
    close()
    setSearchTerm('')
  }

  const handleSearchTermChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setNextID(null)
    setSearchTerm(event.target.value)
  }

  const renderGifs = () => gifs.map((gif: IGifObject, index) => {
    const { gif: actualGif, tinygif } = gif.media[0]
    const { url: previewURL, dims: previewDims } = tinygif
    const [width, height] = previewDims

    return (
      <StyledGifContainer
        key={previewURL + index}
        innerRef={index + 1 === markerIndex ? markerGifRef : undefined}
        onClick={handleGifClick(actualGif.url)}
      >
        <img src={previewURL} width={width} height={height} />
      </StyledGifContainer >
    )
  })

  return (
    <div data-component-type={Props.ComponentType.TenorGifSelector}>
      <StyledGifButton
        innerRef={anchorRef}
        opened={opened}
        onClick={toggleOpened}
        data-component-type={Props.ComponentType.Button}
      >
        GIF
      </StyledGifButton>

      <Popover isOpen={opened} parentRef={anchorRef}>
        <StyledGifList innerRef={gifListRef}>
          <TextInput
            icon={<Icon type='fa-search' />}
            name='searchTerm'
            value={searchTerm}
            handleChange={handleSearchTermChange}
            width='220px'
            placeholder='Search GIFs'
            autoFocus
          />
          <PoweredByTenor />
          <StyledScrollArea innerRef={scrollAreaRef}>
            {renderGifs()}
          </StyledScrollArea>
        </StyledGifList>
      </Popover>
    </div>
  )
}

export {
  TenorGifSelector
}
