import React, { ReactElement } from 'react'
import uuid from 'uuid'
import { isEmpty } from 'lodash'
import {
  MainBox,
  Col,
  HighLightBox,
  HighLightCaption,
  HighlighImageBlock
} from './style'

export interface IHighlightSection {
  caption: string,
  imageUrl: string,
  title?: string
}

export interface IReportInfo {
  description: string
  highlights: IHighlightSection[]
  textColor: string
}

export const HighlightSection = (props: IHighlightSection) => {
  return (
    <HighLightBox>
      <h5> {props.title} </h5>
      <HighlighImageBlock>
        <img src={props.imageUrl} />
      </HighlighImageBlock>
      <HighLightCaption>
        {props.caption}
      </HighLightCaption>
    </HighLightBox>
  )
}

export class ReportInfo extends React.PureComponent <IReportInfo> {
  public static defaultProps: Partial<IReportInfo> = {
    textColor: 'hsl(210, 13.4%, 47.2%)'
  }

  get highlights () {
    const {
      highlights
    } = this.props

    if (isEmpty(highlights)) {
      return null
    }

    return highlights.map((h: IHighlightSection) => (
      <Col key={uuid.v4()}>
        <HighlightSection {...h} />
      </Col>
    ))
  }
  render () {
    const {
      description,
      textColor
    } = this.props
    return (
      <MainBox textColor={textColor} >
        <Col>
          {description}
        </Col>
        {this.highlights}
      </MainBox>
    )
  }
}
