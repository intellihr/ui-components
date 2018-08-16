import React from 'react'

export interface IFormProps {
  /** Function passed to `onSubmit` attribute */
  handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
  /** Function passed to `onChange` attribute */
  handleChange?: (event: React.FormEvent<HTMLFormElement>) => void
}

export class Form extends React.PureComponent<IFormProps> {
  public render (): JSX.Element {
    const {
      handleSubmit,
      handleChange,
      children
    } = this.props

    return (
      <form
        onSubmit={handleSubmit}
        onChange={handleChange}
      >
        {children}
      </form>
    )
  }
}
