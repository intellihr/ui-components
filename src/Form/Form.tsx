import React from 'react'

export interface FormProps {
  /** Function passed to `onSubmit` attribute */
  handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
  /** Function passed to `onChange` attribute */
  handleChange?: (event: React.FormEvent<HTMLFormElement>) => void
  /** Child form inputs */
  children: JSX.Element
}

export class Form extends React.PureComponent<FormProps> {
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
