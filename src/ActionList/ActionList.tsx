import React from 'react'
import { isEmpty, map, cloneDeep } from 'lodash'
import {
  ActionDescriptionWrapper,
  ActionLinksWrapper,
  ActionListBodyWrapper,
  ActionListHeaderWrapper,
  ActionTitleWrapper
} from './style'
import { List } from '../List'
import { TextLink } from '../Link'

interface IActionLink {
  linkUrl: string
  linkText: string
  useReactRouter?: boolean
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
  public static defaultProps: Partial<IActionList> = {
    headerMessage: 'Actions you can take',
    actions: []
  }

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

    const textLinkComponents = map(actionLinks, (actionLink, index) =>
      <TextLink
        key={`action-link-${index}`}
        href={actionLink.linkUrl}
        className='action-link'
        useReactRouter={actionLink.useReactRouter || false}
      >
        {actionLink.linkText}
      </TextLink>
    )

    return (
      <ActionLinksWrapper>
        {textLinkComponents}
      </ActionLinksWrapper>
    )
  }

  get actionsList (): JSX.Element {
    const actionsList = map(this.actions, (action, index) =>
      <div key={`action-${index}`}>
        <ActionTitleWrapper>
          {action.title}
        </ActionTitleWrapper>

        {this.descriptionForAction(action.description)}
        {this.actionLinksForAction(action.actionLinks)}
      </div>
    )

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
}

export {
  ActionList
}
