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
      components: 'src/common/sass/style.tsx'
    },
    {
      name: 'UI Components',
      sections: [
        {
          name: 'Anchors',
          components: [
            'src/domain/Anchors/Anchor/Anchor.tsx'
          ]
        },
        {
          name: 'Avatars',
          components: [
            'src/domain/Avatars/Avatar/Avatar.tsx',
            'src/domain/Avatars/AvatarEntity/AvatarEntity.tsx'
          ]
        },
        {
          name: 'Badges',
          components: [
            'src/domain/Badges/Badge/Badge.tsx'
          ]
        },
        {
          name: 'Buttons',
          components: [
            'src/domain/Buttons/Button/Button.tsx',
            'src/domain/Buttons/LinkButton/LinkButton.tsx'
          ]
        },
        {
          name: 'Callouts',
          components: [
            'src/domain/Callouts/Callout/Callout.tsx'
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
          name: 'Colors',
          components: [
            'src/domain/Colors/Color/Color.tsx',
            'src/domain/Colors/ColorsGrid/ColorsGrid.tsx'
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
            'src/domain/Formats/IndentedElement/IndentedElement'
          ]
        },
        {
          name: 'Forms',
          components: [
            'src/domain/Forms/Form/Form.tsx'
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
          commponents: [
            'src/domain/Indicators/StatusIndicator/StatusIndicator.tsx'
          ]
        },
        {
          name: 'Inputs',
          commponents: [
            'src/domain/Inputs/InputLabel/InputLabel.tsx',
            'src/domain/Inputs/Input/Input.tsx',
            'src/domain/Inputs/SelectInput/SelectInput.tsx'
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
            'src/domain/Links/TextLink/TextLink.tsx'
          ]
        },
        {
          name: 'Lists',
          components: [
            'src/domain/Lists/List/List.tsx',
            'src/domain/Lists/ActionList/ActionList.tsx',
            'src/domain/Lists/SmartList/SmartList.tsx'
          ]
        },
        {
          name: 'Menus',
          components: [
            'src/domain/Menus/DropdownMenu/DropdownMenu.tsx',
            'src/domain/Menus/Menu/Menu.tsx',
            'src/domain/Menus/Navigation/Navigation.tsx'
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
          name: 'Pills',
          components: [
            'src/domain/Pills/Pill/Pill.tsx'
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
            'src/domain/Skeletons/Skeleton/Skeleton.tsx'
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
            'src/domain/Tables/DataTable/DataTable.tsx'
          ]
        },
        {
          name: 'Tabs',
          components: [
            'src/domain/Tabs/HorizontalTabs/HorizontalTabs.tsx'
          ]
        },
        {
          name: 'Timelines',
          components: [
            'src/domain/Timelines/VerticalTimeline/VerticalTimeline/VerticalTimeline.tsx',
            'src/domain/Timelines/VerticalTimeline/VerticalTimelineEvent/VerticalTimelineEvent.tsx'
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
            'src/domain/Typographies/FormattedText/FormattedText.tsx',
            'src/domain/Typographies/Heading/Heading.tsx',
            'src/domain/Typographies/Text/Text.tsx'
          ]
        }
      ]
    },
    {
      name: 'Higher Order Components',
      components: [
        'src/domain/Anchors/Anchor/withAnchor.tsx',
        'src/domain/Styles/hoc/withStyledBreakpoints.tsx',
        'src/domain/Defaults/withDefaults/withDefaults.tsx',
        'src/domain/Grids/Grid/withGrid.tsx',
        'src/domain/Skeletons/withSkeleton/withSkeleton.tsx'
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
