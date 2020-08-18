import React from 'react'

interface IList {
  type?: 'unordered' | 'ordered'
}

class List extends React.PureComponent<IList> {
  public static defaultProps: Partial<IList> = {
    type: 'unordered'
  }

  get items (): Array<JSX.Element | null> | null | undefined {
    const {
      children
    } = this.props

    return React.Children.map(
      children,
      (child) => child ? <li>{child}</li> : null
    )
  }

  public render (): JSX.Element {
    const {
      type
    } = this.props

    if (type === 'ordered') {
      return (
        <ol>
          {this.items}
        </ol>
      )
    }

    return (
      <ul>
        {this.items}
      </ul>
    )
  }
}

export {
  List
}
