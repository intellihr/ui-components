import isArray from 'lodash/isArray'
import isNumber from 'lodash/isNumber'
import isString from 'lodash/isString'
import React, { useContext } from 'react'

interface IDefaults {
  /** Anchor component used for clickable links */
  AnchorComponent?: React.ComponentType<any>
  tenorApiKey?: string
  i18nTranslationFunction?: TranslateFunction
}

type TranslateFunction = (key: string | string[], options?: {[k: string]: any}) => string

const i18nDefaults = {
  'delete': 'Delete',
  'noResults': 'No Results',
  'notProvided': 'Not Provided',
  'filter': 'Filter',
  'searchPlaceholder': 'Search',
  'selectPlaceholder': 'Please Select',
  'requiredSuffix': 'required',
  'addFilterDropdownMenu.selectAFilter': 'Select A Filter',
  'addFilterDropdownMenu.selectAValue': 'Select A Value',
  'addFilterDropdownMenu.addFilter': 'Add Filter',
  'addFilterDropdownMenu.filterMessage': 'Show all items where:',
  'filterTag.from': 'from',
  'filterTag.to': 'to',
  'filterTag.is': 'is',
  'filterTag.or': 'or',
  'emptyState.primaryMessage': `Oops... We couldn't find anything for this section.`,
  'emptyState.secondaryMessage': `Please speak to your system admin or add information.`,
  'optionList.noOptionsMessage': `Sorry, We couldn't find any options`,
  'optionList.noResultsMessage': `Unfortunately, we couldn't find anything from your search`,
  'smartList.collapse': 'Collapse',
  'smartList.showAllRows': 'Show All ({{visibleRowsCount}} in Total)',
  'progressTracker.stepCount': 'Step {{currentStep}} of {{totalSteps}}',
  'pagination.details': 'Showing {{firstItemOnPage}} to {{lastItemOnPage}} of {{totalItems}} entries',
  'pagination.entriesPerPage': 'entries per page',
  'legacyDataTable.search': 'Search:'
}

interface IDefaultsProviders {
  value?: Partial<IDefaults>
  children?: React.ReactNode
}

const defaults: IDefaults = {}

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

  return (i18nKey: keyof typeof i18nDefaults | Array<keyof typeof i18nDefaults>, translationFunctionOptions: {[k: string]: any} = {}) => {
    const key = isArray(i18nKey) ? i18nKey[0] : i18nKey
    let translation = i18nDefaults[key]
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
