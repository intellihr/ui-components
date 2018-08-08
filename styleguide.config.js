const path = require('path')
const _ = require('lodash')
const docGenTypescript = require('react-docgen-typescript')

module.exports = {
  title: 'IntelliHR Design System',
  require: [
    require.resolve('babel-polyfill'),
    path.resolve(__dirname, 'src/index.ts')
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
        }
      ],
      components: 'src/common/sass/style.ts'
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
            'src/domain/Callouts/Callout/Callout'
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
            'src/domain/Formats/IndentedElement/IndentedElement',
            'src/domain/Formats/Field/Field'
          ]
        },
        {
          name: 'Forms',
          components: [
            'src/domain/Forms/Form/Form'
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
            'src/domain/Inputs/InputLabel/InputLabel',
            'src/domain/Inputs/Input/Input',
            'src/domain/Inputs/SelectInput/SelectInput',
            'src/domain/Inputs/TextAreaInput/TextAreaInput'
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
            'src/domain/Lists/List/List',
            'src/domain/Lists/ActionList/ActionList',
            'src/domain/Lists/SmartList/SmartList'
          ]
        },
        {
          name: 'Menus',
          components: [
            'src/domain/Menus/DropdownMenu/DropdownMenu',
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
          name: 'Reports',
          components: [
            'src/domain/Reports/ReportHeader/ReportHeader',
            'src/domain/Reports/ReportInfo/ReportInfo'
          ]
        },
        {
          name: 'Skeletons',
          components: [
            'src/domain/Skeletons/Skeleton/Skeleton'
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
            'src/domain/Tabs/HorizontalTabs/HorizontalTabs'
          ]
        },
        {
          name: 'Timelines',
          components: [
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
            'src/domain/Typographies/FormattedText/FormattedText',
            'src/domain/Typographies/Heading/Heading',
            'src/domain/Typographies/Text/Text'
          ]
        }
      ]
    },
    {
      name: 'Internal/Higher Order Components',
      components: [
        'src/domain/Styles/hoc/withStyledBreakpoints',
        'src/domain/Defaults/withDefaults/withDefaults',
        'src/domain/Grids/Grid/withGrid',
        'src/domain/Skeletons/withSkeleton/withSkeleton',
        'src/domain/Internals/Anchor/Anchor'
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
