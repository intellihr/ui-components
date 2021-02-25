import isArray from 'lodash/isArray'
import isNumber from 'lodash/isNumber'
import isString from 'lodash/isString'
import React, { useContext } from 'react'

interface IDefaults {
  /** Anchor component used for clickable links */
  AnchorComponent?: React.ComponentType<any>
  tenorApiKey?: string
  i18nTranslationFunction?: TranslateFunction
  i18nLocale?: string
}

type TranslateFunction = (key: string | string[], options?: {[k: string]: any}) => string

interface IDefaultsProviders {
  value?: Partial<IDefaults>
  children?: React.ReactNode
}

const defaults: IDefaults = {
  i18nLocale: 'en'
}

const DefaultsContext: React.Context<IDefaults> = React.createContext(defaults)

const DefaultsConsumer = DefaultsContext.Consumer

class DefaultsProvider extends React.PureComponent<IDefaultsProviders> {
  public render (): JSX.Element {
    const {
      value,
      children
    } = this.props

    return (
      <DefaultsContext.Provider
        value={{
          ...defaults,
          ...value
        }}
      >
        {children}
      </DefaultsContext.Provider>
    )
  }
}

const useTranslateFunction = () => {
  const { i18nTranslationFunction } = useContext(DefaultsContext)

  if (i18nTranslationFunction) {
    return i18nTranslationFunction
  }

  return (i18nKey: string | string[], translationFunctionOptions: {defaultValue: string, [k: string]: any}) => {
    let translation = translationFunctionOptions.defaultValue
    for (const optionKey of Object.keys(translationFunctionOptions)) {
      if (isString(translationFunctionOptions[optionKey]) || isNumber(translationFunctionOptions[optionKey])) {
        translation = translation.replace(`{{${optionKey}}}`, translationFunctionOptions[optionKey])
      }
    }
    return translation
  }
}

export {
  IDefaults,
  IDefaultsProviders,
  DefaultsConsumer,
  DefaultsProvider,
  DefaultsContext,
  defaults,
  useTranslateFunction,
  TranslateFunction
}
