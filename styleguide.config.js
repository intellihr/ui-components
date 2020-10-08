const path = require('path')
const _ = require('lodash')
const docGenTypescript = require('react-docgen-typescript')
const webpackConfig = require('./webpack.config');

module.exports = {
  webpackConfig,
  assetsDir: './assets',
  title: 'Wonka Component Factory',
  require: [
    require.resolve('core-js/stable'),
    require.resolve('regenerator-runtime/runtime'),
    path.resolve(__dirname, 'src/common/sass/app.scss')
  ],
  propsParser: docGenTypescript.withCustomConfig('./tsconfig.json').parse,
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.tsx')
    return `import { ${name} } from '@intellihr/ui-components';`
  },
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.tsx?$/, '.examples.md')
  },
  pagePerSection: true,
  template: {
    head: {
      links: [
        {
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap',
          rel: 'stylesheet'
        }
      ]
    }
  },
  theme: {
    fontFamily: {
      base: '"Inter", sans-serif',
      monospace: ['Consolas', '"Liberation Mono"', 'Menlo', 'monospace']
    }
  },
  sections: [
    {
      name: 'Wonka Component Factory',
      sectionDepth: 2,
      sections: [
        {
          name: 'About',
          content: 'docs/about.md'
        },
        {
          name: 'Setting Defaults',
          content: 'src/domain/Defaults/Defaults/Defaults.examples.md'
        },
        {
          name: 'Automation',
          content: 'docs/automation.md'
        }
      ]
    },
    {
      name: 'Design Pattern',
      sectionDepth: 2,
      sections: [
        {
          name: 'Content Page',
          content: 'docs/ContentPage.md'
        },
        {
          name: 'Form Page',
          content: 'docs/FormPage.md'
        }
      ]
    },
    {
      name: 'Tokens',
      sectionDepth: 2,
      sections: [
        {
          name: 'Spacing',
          content: 'src/domain/Internals/ExampleSpacingVariables/ExampleSpacingVariables.examples.md'
        },
        {
          name: 'Layout',
          content: 'src/domain/Internals/ExampleLayoutVariables/ExampleLayoutVariables.examples.md'
        },
        {
          name: 'Colors',
          content: 'src/domain/Internals/ExampleColorGrid/ExampleColorGrid.examples.md'
        }
      ]
    },
    {
      name: 'Composition',
      sectionDepth: 2,
      components: [
        'src/domain/Boards/Board/Board.tsx',
        'src/domain/Layouts/Inline/Inline.tsx',
        'src/domain/Layouts/GridLayout/GridLayout.tsx',
        'src/domain/Layouts/PageLayout/PageLayout.tsx',
        'src/domain/Spacers/HorizontalRule/HorizontalRule.tsx',
      ],
      sections: [
        {
          name: 'Margins',
          content: 'src/domain/Spacers/Margin/Margin.examples.md'
        }
      ]
    },
    {
      name: 'Interaction',
      sectionDepth: 2,
      components: [
        'src/domain/Menus/Menu/Menu.tsx',
        'src/domain/Links/UnstyledLink/UnstyledLink.tsx',
        'src/domain/Navigation/BreadcrumbGroup/BreadcrumbGroup.tsx',
        'src/domain/Links/BackLink/BackLink.tsx',
        'src/domain/Progress/ProgressTracker/ProgressTracker.tsx'
      ],
      sections: [
        {
          name: 'Buttons',
          sectionDepth: 2,
          components: [
            'src/domain/Buttons/Button/Button.tsx',
            'src/domain/Buttons/FontAwesomeIconButton/FontAwesomeIconButton.tsx',
            'src/domain/Buttons/LinkButton/LinkButton.tsx'
          ]
        },
        {
          name: 'Filters',
          sectionDepth: 2,
          components: [
            'src/domain/Filters/AddFilterDropdownMenu/AddFilterDropdownMenu.tsx',
            'src/domain/Filters/FilterController/FilterController.tsx',
            'src/domain/Filters/FilterTag/FilterTag.tsx'
          ]
        },
        {
          name: 'Pagination',
          content: 'src/domain/Paginators/Pagination/pagination.examples.md'
        },
        {
          name: 'Tabs',
          sectionDepth: 2,
          components: [
            'src/domain/Tabs/BlockTabGroup/BlockTabGroup.tsx',
            'src/domain/Tabs/ScrollingTabGroup/ScrollingTabGroup.tsx'
          ]
        }
      ]
    },
    {
      name: 'Form Elements',
      sectionDepth: 2,
      components: [
        'src/domain/Forms/VerticalForm/VerticalForm.tsx',
        'src/domain/Inputs/CheckboxInput/CheckboxInput.tsx',
        'src/domain/Inputs/CheckboxSet/CheckboxSet.tsx',
        'src/domain/Inputs/DateRangeInput/DateRangeInput.tsx',
        'src/domain/Inputs/HierarchicalSelectInput/HierarchicalSelectInput.tsx',
        'src/domain/Inputs/IconPickerInput/IconPickerInput.tsx',
        'src/domain/Inputs/InputGroup/InputGroup.tsx',
        'src/domain/Inputs/NumberInput/NumberInput.tsx',
        'src/domain/Inputs/RadioSet/RadioSet.tsx',
        'src/domain/Inputs/SelectInput/SelectInput.tsx',
        'src/domain/Inputs/SingleDateInput/SingleDateInput.tsx',
        'src/domain/Inputs/TextAreaInput/TextAreaInput.tsx',
        'src/domain/Inputs/TextInput/TextInput.tsx'
      ]
    },
    {
      name: 'Loading',
      sectionDepth: 2,
      components: [
        'src/domain/Spinners/Spinner/Spinner.tsx'
      ],
      sections: [
        {
          name: 'Skeletons',
          sectionDepth: 2,
          components: [
            'src/domain/Skeletons/BlockSkeleton/BlockSkeleton.tsx',
            'src/domain/Skeletons/CircleSkeleton/CircleSkeleton.tsx',
            'src/domain/Skeletons/FormSkeleton/FormSkeleton.tsx',
            'src/domain/Skeletons/ParagraphSkeleton/ParagraphSkeleton.tsx',
            'src/domain/Skeletons/TextSkeleton/TextSkeleton.tsx'
          ]
        }
      ]
    },
    {
      name: 'Typography',
      sectionDepth: 2,
      components: [
        'src/domain/Typographies/Brick/Brick.tsx',
        'src/domain/Typographies/CurrencyText/CurrencyText.tsx',
        'src/domain/Typographies/Emoji/Emoji.tsx',
        'src/domain/Typographies/FormattedText/FormattedText.tsx',
        'src/domain/Typographies/TelephoneText/TelephoneText.tsx',
        'src/domain/Typographies/Text/Text.tsx',
        'src/domain/Icons/Icon/Icon.tsx',
        'src/domain/Pills/Pill/Pill.tsx'
      ]
    },
    {
      name: 'Overlay',
      sectionDepth: 2,
      components: [
        'src/domain/Popovers/DropdownMenu/DropdownMenu.tsx',
        'src/domain/Modals/Modal/Modal.tsx',
        'src/domain/Modals/Dialog/Dialog.tsx',
        'src/domain/Toasts/Toast/Toast.tsx',
        'src/domain/Popovers/TooltipPopover/TooltipPopover.tsx'
      ]
    },
    {
      name: 'Content',
      sectionDepth: 2,
      components: [
        'src/domain/Lists/ActionList/ActionList.tsx',
        'src/domain/Callouts/Callout/Callout.tsx',
        'src/domain/Layouts/Carousel/Carousel.tsx',
        'src/domain/Comments/Comment/Comment.tsx',
        'src/domain/Lists/DraggableList/DraggableList.tsx',
        'src/domain/Callouts/EmptyState/EmptyState.tsx',
        'src/domain/Lists/FilteredList/FilteredList.tsx',
        'src/domain/Containers/HighlightArea/HighlightArea.tsx',
        'src/domain/Tables/LegacyDataTable/LegacyDataTable/LegacyDataTable.tsx',
        'src/domain/Lists/List/List.tsx',
        'src/domain/Timelines/ModularTimeline/ModularTimeline.tsx',
        'src/domain/Lists/OptionList/OptionList.tsx',
        'src/domain/Formats/Record/Record.tsx',
        'src/domain/Layouts/SectionList/SectionList.tsx',
        'src/domain/Formats/Statistic/Statistic.tsx',
        'src/domain/Tables/Table/Table.tsx',
      ],
      sections: [
        {
          name: 'Avatars',
          sectionDepth: 2,
          components: [
            'src/domain/Avatars/Avatar/Avatar.tsx',
            'src/domain/Avatars/AvatarEntity/AvatarEntity.tsx',
            'src/domain/Avatars/AvatarGroup/AvatarGroup.tsx'
          ]
        },
        {
          name: 'Cards',
          sectionDepth: 2,
          components: [
            'src/domain/Cards/Card/Card.tsx',
            'src/domain/Cards/GroupCard/GroupCard.tsx'
          ]
        }
      ]
    },
    {
      name: 'Internal',
      sectionDepth: 2,
      components: [
        'src/domain/Internals/Anchor/Anchor.tsx',
        'src/domain/Defaults/withDefaults/withDefaults.tsx',
        'src/domain/Popovers/Popover/Popover.tsx',
      ]
    },
    {
      name: 'Deprecated',
      sectionDepth: 2,
      components: [
        'src/domain/Lists/SmartList/SmartList.tsx',
        'src/domain/Boards/AvatarBoard/AvatarBoard.tsx',
        'src/domain/Badges/Badge/Badge.tsx',
        'src/domain/Buttons/ButtonGroup/ButtonGroup.tsx',
        'src/domain/Formats/HintWrapper/HintWrapper.tsx',
        'src/domain/Formats/IndentedElement/IndentedElement.tsx',
        'src/domain/Indicators/StatusIndicator/StatusIndicator.tsx',
        'src/domain/Tooltips/Tooltip/Tooltip.tsx',
        'src/domain/Inputs/ToggleSwitch/ToggleSwitch.tsx',
        'src/domain/Layouts/ShowForSizes/ShowForSizes.tsx',
        'src/domain/Layouts/Comparison/Comparison.tsx',
        'src/domain/Layouts/LayoutSpacer/LayoutSpacer.tsx',
        'src/domain/Timelines/VerticalTimeline/VerticalTimeline/VerticalTimeline.tsx',
        'src/domain/Tables/LegacyDataTable/LegacyAsyncDataTable/LegacyAsyncDataTable.tsx',
        'src/domain/Reports/ReportHeader/ReportHeader.tsx',
        'src/domain/Reports/ReportInfo/ReportInfo.tsx',
        'src/domain/Modals/ToggleModal/ToggleModal.tsx',
        'src/domain/Links/ActionLink/ActionLink.tsx',
        'src/domain/Links/TextLink/TextLink.tsx',
        'src/domain/Grids/Grid/GridProvider.tsx',
        'src/domain/Layouts/XYGrid/XYGrid.tsx',
        'src/domain/Charts/RadarChart/RadarChart.tsx',
        'src/domain/Charts/TimeBasedLineChart/TimeBasedLineChart.tsx',
        'src/domain/Legends/Legend/Legend.tsx'
      ]
    }
  ],
  usageMode: 'collapse',
  exampleMode: 'collapse'
}
