import React from 'react'
import { ITextProps } from 'src/domain/Typographies/Text/Text'

import { Text } from '../../Typographies/Text'

const textMatch = (mainText: string, searchText?: string) => {
  if (searchText) {
    const matches = []
    let usedStringLength = 0
    const matcher = mainText.matchAll(new RegExp(
      searchText
        .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        .replace(/ /g, '|'),
      'ig'
    ))

    for (const match of matcher) {
      const left = mainText.substring(usedStringLength, (match.index ?? 0))
      usedStringLength = (match.index ?? 0) + match[0].length

      if (left !== '') {
        matches.push({ text: left, isMatch: false })
      }
      matches.push({ text: match[0], isMatch: true })
    }
    if (usedStringLength !== mainText.length) {
      matches.push({ text: mainText.substring(usedStringLength), isMatch: false })
    }

    return matches
  }

  return [{ text: mainText, isMatch: false }]
}

const TextMatch: React.FC<{
  mainText?: string | null
  searchText?: string
  matchTextProps: ITextProps
  otherTextProps: ITextProps
}> = ({ mainText, searchText, matchTextProps, otherTextProps }) => {
  const matchedText = mainText ? textMatch(mainText, searchText) : []
  return (
    <>
      {matchedText.map((match, index) => {
        if (match.isMatch) {
          return (
            <Text isInline {...matchTextProps} key={index}>{match.text}</Text>
          )
        }

        return (
          <Text isInline {...otherTextProps} key={index}>{match.text}</Text>
        )
      })}
    </>
  )
}

export {
  TextMatch
}
