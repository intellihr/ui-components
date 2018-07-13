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

const descriptionForAction = (action: IAction) => {
  if (!action.description) {
    return null
  }

  return (
    <ActionDescriptionWrapper>
      {action.description}
    </ActionDescriptionWrapper>
  )
}

const actionLinksForAction = (action: IAction) => {
  if (!action.actionLinks) {
    return null
  }

  const actionLinks = map(action.actionLinks, (actionLink, index) =>
    <TextLink
      key={`linktext-${index}`}
      href={actionLink.linkUrl}
      className='action-link'
      useReactRouter={actionLink.useReactRouter || false}
    >
      {actionLink.linkText}
    </TextLink>
  )

  return (
    <ActionLinksWrapper>
      {actionLinks}
    </ActionLinksWrapper>
  )
}

class ActionList extends React.PureComponent<IActionList> {
  public static defaultProps: Partial<IActionList> = {
    headerMessage: 'Actions you can take',
    actions: []
  }

  get actions (): IAction[] {
    const { action } = this.props
    const { actions } = this.props

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
    const actionsList = map(this.actions, (action, index) =>
      <div key={`action-${index}`}>
        <ActionTitleWrapper>
          {action.title}
        </ActionTitleWrapper>

        {descriptionForAction(action)}
        {actionLinksForAction(action)}
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
