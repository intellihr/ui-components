const path = require('path')
const _ = require('lodash')
const docGenTypescript = require('react-docgen-typescript')

module.exports = {
  title: 'IntelliHR Design System',
  require: [
    require.resolve('babel-polyfill'),
    path.resolve(__dirname, 'src/common/sass/style.ts'),
    path.resolve(__dirname, 'src/index.ts')
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
  sections: [
    {
      name: 'Introduction',
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
        },
        {
          name: 'Automation',
          content: 'docs/automation.md'
        }
      ]
    },
    {
      name: 'UI Components',
      sectionDepth: 2,
      sections: [
        {
          name: 'Avatars',
          components: [
            'src/domain/Avatars/Avatar/Avatar.tsx',
            'src/domain/Avatars/AvatarEntity/AvatarEntity.tsx',
            'src/domain/Avatars/AvatarGroup/AvatarGroup.tsx'
          ]
        },
        {
          name: 'Badges',
          components: [
            'src/domain/Badges/Badge/Badge.tsx'
          ]
        },
        {
          name: 'Boards',
          components: [
            'src/domain/Boards/Board/Board.tsx'
          ]
        },
        {
          name: 'Buttons',
          components: [
            'src/domain/Buttons/Button/Button.tsx',
            'src/domain/Buttons/LinkButton/LinkButton.tsx',
            'src/domain/Buttons/ButtonGroup/ButtonGroup.tsx'
          ]
        },
        {
          name: 'Callouts',
          components: [
            'src/domain/Callouts/Callout/Callout.tsx',
            'src/domain/Callouts/EmptyState/EmptyState.tsx',
          ]
        },
        {
          name: 'Charts',
          components: [
            'src/domain/Charts/RadarChart/RadarChart.tsx',
            'src/domain/Charts/TimeBasedLineChart/TimeBasedLineChart.tsx'
          ]
        },
        {
          name: 'Comments',
          components: [
            'src/domain/Comments/Comment/Comment.tsx'
          ]
        },
        {
          name: 'Formats',
          components: [
            'src/domain/Formats/Record/Record.tsx',
            'src/domain/Formats/IndentedElement/IndentedElement.tsx',
            'src/domain/Formats/HintWrapper/HintWrapper.tsx',
          ]
        },
        {
          name: 'Forms',
          components: [
            'src/domain/Forms/VerticalForm/VerticalForm.tsx'
          ]
        },
        {
          name: 'Icons',
          components: [
            'src/domain/Icons/Icon/Icon.tsx'
          ]
        },
        {
          name: 'Indicators',
          components: [
            'src/domain/Indicators/StatusIndicator/StatusIndicator.tsx'
          ]
        },
        {
          name: 'Inputs',
          components: [
            'src/domain/Inputs/ToggleSwitch/ToggleSwitch.tsx',
            'src/domain/Inputs/CheckboxInput/CheckboxInput.tsx',
            'src/domain/Inputs/CheckboxSet/CheckboxSet.tsx',
            'src/domain/Inputs/IconPickerInput/IconPickerInput.tsx',
            'src/domain/Inputs/Input/Input.tsx',
            'src/domain/Inputs/InputGroup/InputGroup.tsx',
            'src/domain/Inputs/RadioInput/RadioInput.tsx',
            'src/domain/Inputs/RadioSet/RadioSet.tsx',
            'src/domain/Inputs/SelectInput/SelectInput.tsx',
            'src/domain/Inputs/SingleDateInput/SingleDateInput.tsx',
            'src/domain/Inputs/TextAreaInput/TextAreaInput.tsx'
          ]
        },
        {
          name: 'Layouts',
          components: [
            'src/domain/Layouts/LayoutSpacer/LayoutSpacer.tsx',
            'src/domain/Layouts/GridLayout/GridLayout.tsx',
            'src/domain/Layouts/PageLayout/PageLayout.tsx',
            'src/domain/Layouts/SectionList/SectionList.tsx'
          ]
        },
        {
          name: 'Legends',
          components: [
            'src/domain/Legends/Legend/Legend.tsx'
          ]
        },
        {
          name: 'Links',
          components: [
            'src/domain/Links/ActionLink/ActionLink.tsx',
            'src/domain/Links/TextLink/TextLink.tsx',
            'src/domain/Links/UnstyledLink/UnstyledLink.tsx'
          ]
        },
        {
          name: 'Lists',
          components: [
            'src/domain/Lists/ActionList/ActionList.tsx',
            'src/domain/Lists/FilteredList/FilteredList.tsx',
            'src/domain/Lists/List/List.tsx',
            'src/domain/Lists/OptionList/OptionList.tsx',
            'src/domain/Lists/SmartList/SmartList.tsx'
          ]
        },
        {
          name: 'Menus',
          components: [
            'src/domain/Menus/Menu/Menu.tsx'
          ]
        },
        {
          name: 'Modals',
          components: [
            'src/domain/Modals/Modal/Modal.tsx',
            'src/domain/Modals/ToggleModal/ToggleModal.tsx'
          ]
        },
        {
          name: 'Navigation',
          components: [
            'src/domain/Navigation/BreadcrumbGroup/BreadcrumbGroup.tsx'
          ]
        },
        {
          name: 'Pills',
          components: [
            'src/domain/Pills/Pill/Pill.tsx'
          ]
        },
        {
          name: 'Popovers',
          components: [
            'src/domain/Popovers/DropdownMenu/DropdownMenu.tsx',
            'src/domain/Popovers/Popover/Popover.tsx',
            'src/domain/Popovers/TooltipPopover/TooltipPopover.tsx'
          ]
        },
        {
          name: 'Reports',
          components: [
            'src/domain/Reports/ReportHeader/ReportHeader.tsx',
            'src/domain/Reports/ReportInfo/ReportInfo.tsx'
          ]
        },
        {
          name: 'Skeletons',
          components: [
            'src/domain/Skeletons/BlockSkeleton/BlockSkeleton.tsx',
            'src/domain/Skeletons/CircleSkeleton/CircleSkeleton.tsx',
            'src/domain/Skeletons/ParagraphSkeleton/ParagraphSkeleton.tsx',
            'src/domain/Skeletons/TextSkeleton/TextSkeleton.tsx'
          ]
        },
        {
          name: 'Spacers',
          components: [
            'src/domain/Spacers/HorizontalRule/HorizontalRule.tsx'
          ],
          sections: [
            {
              name: 'Margins',
              content: 'src/domain/Spacers/services/margins.examples.md'
            }
          ]
        },
        {
          name: 'Spinners',
          components: [
            'src/domain/Spinners/Spinner/Spinner.tsx'
          ]
        },
        {
          name: 'Tables',
          components: [
            'src/domain/Tables/DataTable/DataTable/DataTable.tsx',

          ]
        },
        {
          name: 'Tabs',
          components: [
            'src/domain/Tabs/BlockTabGroup/BlockTabGroup.tsx',
            'src/domain/Tabs/ScrollingTabGroup/ScrollingTabGroup.tsx'
          ]
        },
        {
          name: 'Timelines',
          components: [
            'src/domain/Timelines/ModularTimeline/ModularTimeline.tsx',
            'src/domain/Timelines/VerticalTimeline/VerticalTimeline/VerticalTimeline.tsx'
          ]
        },
        {
          name: 'Toasts',
          components: [
            'src/domain/Toasts/Toast/Toast.tsx'
          ]
        },
        {
          name: 'Tooltips',
          components: [
            'src/domain/Tooltips/Tooltip/Tooltip.tsx'
          ]
        },
        {
          name: 'Typographies',
          components: [
            'src/domain/Typographies/Brick/Brick.tsx',
            'src/domain/Typographies/CurrencyText/CurrencyText.tsx',
            'src/domain/Typographies/Emoji/Emoji.tsx',
            'src/domain/Typographies/FormattedText/FormattedText.tsx',
            'src/domain/Typographies/TelephoneText/TelephoneText.tsx',
            'src/domain/Typographies/Text/Text.tsx'
          ]
        }
      ]
    },
    {
      name: 'Internal Components',
      components: [
        'src/domain/Internals/Anchor/Anchor.tsx',
        'src/domain/Defaults/withDefaults/withDefaults.tsx'
      ]
    },
    {
      name: 'Deprecated Components',
      components: [
        'src/domain/Grids/Grid/GridProvider.tsx',
        'src/domain/Layouts/XYGrid/XYGrid.tsx'
      ]
    }
  ],
  usageMode: 'collapse',
  exampleMode: 'collapse',
  updateExample: function (props, exampleFilePath) {
    // magically require components
    /**
     * support "requireMap" fenced code block
     *
     * e.g.
     * ```jsx { "requireMap" : { "./": [ "Accordian", "AccordianItem" ] } }
     * ```
     * will get translated to
     * ```jsx
     * const { Accordian, AccordianItem } = require('./');
     * ```
     */
    const { settings, lang, content } = props
    if (lang === 'jsx') {
      const ext = path.extname(exampleFilePath) // .md
      const componentName = path
        .basename(exampleFilePath, ext) // Accordian.examples.md
        .replace('.examples', '') // remove .examples

      let requireMap = {
        [`./${componentName}`]: componentName
      } // { './Accordian': 'Accordian' }
      if (settings.requireMap && typeof settings.requireMap === 'object') {
        requireMap = _.merge(requireMap, settings.requireMap)
      }

      let requireStatements = _.entries(requireMap)
        .map((v) => {
          const p = v[0] // path
          const c = v[1] // object name(s)

          if (_.isArray(c)) {
            return `import { ${c.join(', ')} } from '${p}';`
          } else {
            return `import { ${c} } from '${p}';`
          }
        })

      delete settings.requireMap

      return {
        content: `${requireStatements.join('\n')}\n\n${content}`,
        lang,
        settings
      }
    }

    return props
  }
}
