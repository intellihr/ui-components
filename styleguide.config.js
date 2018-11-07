const path = require('path')
const _ = require('lodash')
const docGenTypescript = require('react-docgen-typescript')

module.exports = {
  title: 'IntelliHR Design System',
  require: [
    require.resolve('babel-polyfill'),
    path.resolve(__dirname, 'src/index.ts'),
    path.resolve(__dirname, 'src/common/sass/style.ts')
  ],
  propsParser: docGenTypescript.withCustomConfig('./tsconfig.json').parse,
  getComponentPathLine (componentPath) {
    const name = path.basename(componentPath, '.tsx')
    return `import { ${name} } from '@intellihr/ui-components';`
  },
  getExampleFilename (componentPath) {
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
      sections: [
        {
          name: 'Avatars',
          components: [
            'src/domain/Avatars/Avatar/Avatar',
            'src/domain/Avatars/AvatarEntity/AvatarEntity'
          ]
        },
        {
          name: 'Badges',
          components: [
            'src/domain/Badges/Badge/Badge'
          ]
        },
        {
          name: 'Buttons',
          components: [
            'src/domain/Buttons/Button/Button',
            'src/domain/Buttons/LinkButton/LinkButton'
          ]
        },
        {
          name: 'Callouts',
          components: [
            'src/domain/Callouts/Callout/Callout',
            'src/domain/Callouts/EmptyState/EmptyState',
          ]
        },
        {
          name: 'Charts',
          components: [
            'src/domain/Charts/RadarChart/RadarChart',
            'src/domain/Charts/TimeBasedLineChart/TimeBasedLineChart'
          ]
        },
        {
          name: 'Comments',
          components: [
            'src/domain/Comments/Comment/Comment'
          ]
        },
        {
          name: 'Formats',
          components: [
            'src/domain/Formats/Field/Field',
            'src/domain/Formats/IndentedElement/IndentedElement'
          ]
        },
        {
          name: 'Forms',
          components: [
            'src/domain/Forms/VerticalForm/VerticalForm'
          ]
        },
        {
          name: 'Icons',
          components: [
            'src/domain/Icons/Icon/Icon'
          ]
        },
        {
          name: 'Indicators',
          components: [
            'src/domain/Indicators/StatusIndicator/StatusIndicator'
          ]
        },
        {
          name: 'Inputs',
          components: [
            'src/domain/Inputs/Input/Input',
            'src/domain/Inputs/InputGroup/InputGroup',
            'src/domain/Inputs/RadioInput/RadioInput',
            'src/domain/Inputs/SelectInput/SelectInput',
            'src/domain/Inputs/TextAreaInput/TextAreaInput',
            'src/domain/Inputs/SingleDateInput/SingleDateInput'
          ]
        },
        {
          name: 'Layouts',
          components: [
            'src/domain/Layouts/PageLayout/PageLayout',
            'src/domain/Layouts/SectionList/SectionList',
            'src/domain/Layouts/XYGrid/XYGrid'
          ]
        },
        {
          name: 'Legends',
          components: [
            'src/domain/Legends/Legend/Legend'
          ]
        },
        {
          name: 'Links',
          components: [
            'src/domain/Links/ActionLink/ActionLink',
            'src/domain/Links/TextLink/TextLink',
            'src/domain/Links/UnstyledLink/UnstyledLink'
          ]
        },
        {
          name: 'Lists',
          components: [
            'src/domain/Lists/ActionList/ActionList',
            'src/domain/Lists/FilteredList/FilteredList',
            'src/domain/Lists/List/List',
            'src/domain/Lists/OptionList/OptionList',
            'src/domain/Lists/SmartList/SmartList'
          ]
        },
        {
          name: 'Menus',
          components: [
            'src/domain/Menus/Menu/Menu'
          ]
        },
        {
          name: 'Modals',
          components: [
            'src/domain/Modals/Modal/Modal',
            'src/domain/Modals/ToggleModal/ToggleModal'
          ]
        },
        {
          name: 'Pills',
          components: [
            'src/domain/Pills/Pill/Pill'
          ]
        },
        {
          name: 'Popovers',
          components: [
            'src/domain/Popovers/DropdownMenu/DropdownMenu',
            'src/domain/Popovers/Popover/Popover',
            'src/domain/Popovers/TooltipPopover/TooltipPopover'
          ]
        },
        {
          name: 'Reports',
          components: [
            'src/domain/Reports/ReportHeader/ReportHeader',
            'src/domain/Reports/ReportInfo/ReportInfo'
          ]
        },
        {
          name: 'Skeletons',
          components: [
            'src/domain/Skeletons/BlockSkeleton/BlockSkeleton',
            'src/domain/Skeletons/CircleSkeleton/CircleSkeleton',
            'src/domain/Skeletons/ParagraphSkeleton/ParagraphSkeleton',
            'src/domain/Skeletons/TextSkeleton/TextSkeleton'
          ]
        },
        {
          name: 'Spinners',
          components: [
            'src/domain/Spinners/Spinner/Spinner'
          ]
        },
        {
          name: 'Tables',
          components: [
            'src/domain/Tables/DataTable/DataTable'
          ]
        },
        {
          name: 'Tabs',
          components: [
            'src/domain/Tabs/ScrollingTabGroup/ScrollingTabGroup',
            'src/domain/Tabs/BlockTabGroup/BlockTabGroup'
          ]
        },
        {
          name: 'Timelines',
          components: [
            'src/domain/Timelines/ModularTimeline/ModularTimeline',
            'src/domain/Timelines/VerticalTimeline/VerticalTimeline/VerticalTimeline',
            'src/domain/Timelines/VerticalTimeline/VerticalTimelineEvent/VerticalTimelineEvent'
          ]
        },
        {
          name: 'Toasts',
          components: [
            'src/domain/Toasts/Toast/Toast'
          ]
        },
        {
          name: 'Tooltips',
          components: [
            'src/domain/Tooltips/Tooltip/Tooltip'
          ]
        },
        {
          name: 'Typographies',
          components: [
            'src/domain/Typographies/Brick/Brick',
            'src/domain/Typographies/CurrencyText/CurrencyText',
            'src/domain/Typographies/Emoji/Emoji',
            'src/domain/Typographies/FormattedText/FormattedText',
            'src/domain/Typographies/TelephoneText/TelephoneText',
            'src/domain/Typographies/Text/Text'
          ]
        }
      ]
    },
    {
      name: 'Internal/Higher Order Components',
      components: [
        'src/domain/Internals/Anchor/Anchor',
        'src/domain/Styles/hoc/withStyledBreakpoints',
        'src/domain/Defaults/withDefaults/withDefaults'
      ]
    },
    {
      name: 'Deprecated Components',
      components: [
        'src/domain/Grids/Grid/GridProvider'
      ]
    }
  ],
  showUsage: false,
  showCode: false,
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
            return `const { ${c.join(', ')} } = require("${p}");`
          } else {
            return `const { ${c} } = require("${p}");`
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
