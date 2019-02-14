import { isEmpty } from 'lodash'
import React from 'react'

import { Variables } from '../../../common'
import {
  Col,
  Description,
  HighLightBox,
  HighLightCaption,
  HighlighImageBlock,
  MainBox
} from './style'

export interface IHighlightSection {
  caption: string,
  imageUrl?: string,
  title?: string
}

export interface IReportInfo {
  description: string
  highlights?: IHighlightSection[]
  textColor?: Variables.Color
}

const HighlightSection = (props: IHighlightSection) => {
  return (
    <HighLightBox>
      <h5> {props.title} </h5>
      {props.imageUrl && <HighlighImageBlock>
        <img src={props.imageUrl} />
      </HighlighImageBlock>}

      <HighLightCaption>
        {props.caption}
      </HighLightCaption>
    </HighLightBox>
  )
}

export class ReportInfo extends React.PureComponent <IReportInfo> {
  public static defaultProps = {
    textColor: Variables.Color.n800
  }

  get highlights (): JSX.Element[] | null {
    const {
      highlights
    } = this.props

    if (!highlights || isEmpty(highlights)) {
      return null
    }

    return highlights.map((h: IHighlightSection, idx: number) => (
      <Col key={idx}>
        <HighlightSection {...h} />
      </Col>
    ))
  }

  get descriptionSection (): JSX.Element {
    const {
      description
    } = this.props

    return (
      <Description>
        {description}
      </Description>
    )
  }

  public render (): JSX.Element {
    const {
      textColor
    } = this.props

    return (
      <MainBox textColor={textColor} >
        <Col>
          {this.descriptionSection}
        </Col>
        {this.highlights}
      </MainBox>
    )
  }
}
