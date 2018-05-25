import React from 'react'
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
  description: string,
  highlights: IHighlightSection[]
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
  get highlights() {
    const {
      highlights
    } = this.props

    console.log('the highlights is ', highlights)

    if (!highlights) {
      return null
    }

    return highlights.map((h: any) => (
      <Col>
        <HighlightSection {...h.props} />
      </Col>
    ))
  }
  render() {
    const {
      description
    } = this.props
    return (
      <MainBox>
        <Col>
          {description}
        </Col>
        {this.highlights}
      </MainBox>
    )
  }
}
