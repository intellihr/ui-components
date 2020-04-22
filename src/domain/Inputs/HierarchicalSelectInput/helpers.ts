import {
  Option,
  OptionValues
} from 'react-select'

interface IHierarchicalOption extends Option {
  parentValue?: OptionValues | null
}

interface IFlattenedOption extends IHierarchicalOption {
  parentOption: IFlattenedOption | null
  depth: number
}

const MAX_SELECT_DEPTH = 8

const flattenHierarchicalOptionsToArray = (
  parentOption: IFlattenedOption | null,
  optionsList: readonly IHierarchicalOption[],
  optionValueChildrenMap: Map<OptionValues, IHierarchicalOption[]>,
  depth: number
) => {
  if (depth > MAX_SELECT_DEPTH) {
    return []
  }

  const flattenedOptions: IFlattenedOption[] = []

  for (const option of optionsList) {
    const flattenedOption = {
      ...option,
      parentOption,
      depth
    }

    flattenedOptions.push(flattenedOption)
    const children = optionValueChildrenMap.get(option.value!)
    if (children) {
      flattenedOptions.push(...flattenHierarchicalOptionsToArray(flattenedOption, children, optionValueChildrenMap, depth + 1))
    }
  }

  return flattenedOptions
}

const convertHierarchicalOptionsToFlattenedOptions = (hierarchicalOptions: readonly IHierarchicalOption[]) => {
  const topLevelOptions = []
  const optionValueChildrenMap = new Map<OptionValues, IHierarchicalOption[]>()

  for (const option of hierarchicalOptions) {
    if (option.value === undefined || option.value === null) {
      throw new Error('Options with undefined or null value are not supported in HierarchicalSelectInput')
    }

    if (option.parentValue === undefined || option.parentValue === null) {
      topLevelOptions.push(option)
    } else {
      const children = optionValueChildrenMap.get(option.parentValue) || []
      optionValueChildrenMap.set(option.parentValue, [...children, option])
    }
  }

  return flattenHierarchicalOptionsToArray(null, topLevelOptions, optionValueChildrenMap, 0)
}

export {
  convertHierarchicalOptionsToFlattenedOptions,
  IHierarchicalOption,
  IFlattenedOption
}
