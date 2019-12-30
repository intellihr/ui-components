import React from 'react'

import { XYGrid } from '../../XYGrid'
import {
  StyledAnnotatedSection,
  StyledAnnotatedSectionBody,
  StyledAnnotatedSectionDescription
} from '../style'
import { ILink, ILinkProps } from './SectionDescription'

export interface IAnnotatedSectionProps {
  /** The title for what is displayed */
  header?: string,
  /** The title for what is displayed as a JSX Element (overwritten by header) */
  headerElement?: JSX.Element,
  /** The description for what is displayed */
  description?: string,
  /** (Deprecated - please use `links`) The text for the call to action */
  linkText?: string,
  /** (Deprecated - please use `links`) Any extra link props */
  linkProps?: ILinkProps,
  /** The settings for the list of links */
  links?: ILink[]
}

class AnnotatedSection extends React.PureComponent<IAnnotatedSectionProps> {
  public static defaultProps: Pick<IAnnotatedSectionProps, 'links'> = {
    links: []
  }

  public render (): JSX.Element {
    const {
      children,
      header,
      headerElement,
      description,
      linkText,
      linkProps,
      links
    } = this.props

    return (
      <StyledAnnotatedSection>
        <XYGrid>
          <XYGrid.Cell size={{ desktop: 4, tablet: 4, min: 12 }}>
            <StyledAnnotatedSectionDescription
              header={header}
              headerElement={headerElement}
              description={description}
              linkText={linkText}
              linkProps={linkProps}
              links={links!}
            />
          </XYGrid.Cell>
          {children &&
            <XYGrid.Cell size={{ desktop: 8, tablet: 8, min: 12 }}>
              <StyledAnnotatedSectionBody>
                {children}
              </StyledAnnotatedSectionBody>
            </XYGrid.Cell>
          }
        </XYGrid>
      </StyledAnnotatedSection>
    )
  }
}

export {
  AnnotatedSection
}
