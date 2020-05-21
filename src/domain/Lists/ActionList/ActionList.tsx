import cloneDeep from 'lodash/cloneDeep'
import isEmpty from 'lodash/isEmpty'
import map from 'lodash/map'
import React from 'react'

import { TextLink } from '../../Links'
import { List } from '../List'
import {
  ActionDescriptionWrapper,
  ActionLinksWrapper,
  ActionListBodyWrapper,
  ActionListHeaderWrapper,
  ActionTitleWrapper
} from './style'

interface IActionLink {
  linkUrl: string
  linkText: string
  anchorComponentProps?: {
    [i: string]: any
  }
}

interface IAction {
  title: string
  description?: string
  actionLinks?: IActionLink[]
}

interface IActionList {
  headerMessage?: string
  action?: IAction,
  actions?: IAction[]
}

class ActionList extends React.PureComponent<IActionList> {
  get actions (): IAction[] {
    const {
      action,
      actions
    } = this.props

    let actionsCopy: IAction[] = []

    if (actions) {
      actionsCopy = cloneDeep(actions)
    }

    if (action) {
      actionsCopy.push(action)
    }

    return actionsCopy
  }

  get actionsList (): JSX.Element {
    const actionsList = map(this.actions, (action, index) => (
      <div key={`action-${index}`}>
        <ActionTitleWrapper>
          {action.title}
        </ActionTitleWrapper>

        {this.descriptionForAction(action.description)}
        {this.actionLinksForAction(action.actionLinks)}
      </div>
    ))

    return (
      <List type='ordered'>
        {actionsList}
      </List>
    )
  }

  get headerMessage (): JSX.Element | null {
    const {
      headerMessage
    } = this.props

    if (!headerMessage) {
      return null
    }

    return (
      <ActionListHeaderWrapper>
        {headerMessage}
      </ActionListHeaderWrapper>
    )
  }
  public static defaultProps: Partial<IActionList> = {
    headerMessage: 'Actions you can take',
    actions: []
  }

  public render (): JSX.Element | null {
    if (isEmpty(this.actions)) {
      return null
    }

    return (
      <div className='action-list'>
        {this.headerMessage}

        <ActionListBodyWrapper>
          {this.actionsList}
        </ActionListBodyWrapper>
      </div>
    )
  }

  private descriptionForAction (description?: string) {
    if (!description) {
      return null
    }

    return (
      <ActionDescriptionWrapper>
        {description}
      </ActionDescriptionWrapper>
    )
  }

  private actionLinksForAction (actionLinks?: IActionLink[]) {
    if (!actionLinks) {
      return null
    }

    const textLinkComponents = map(actionLinks, (actionLink, index) => (
      <TextLink
        key={`action-link-${index}`}
        href={actionLink.linkUrl}
        className='action-link'
        anchorComponentProps={actionLink.anchorComponentProps}
      >
        {actionLink.linkText}
      </TextLink>
    ))

    return (
      <ActionLinksWrapper>
        {textLinkComponents}
      </ActionLinksWrapper>
    )
  }
}

export {
  ActionList,
  IActionList,
  IActionLink,
  IAction
}
