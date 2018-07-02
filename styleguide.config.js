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
      content: './docs/introduction.md',
      components: 'src/style.tsx'
    },
    {
      name: 'UI Components',
      components: [
        'src/Avatar/Avatar.tsx',
        'src/Callout/Callout.tsx',
        'src/Comment/Comment.tsx',
        'src/DropdownMenu/DropdownMenu.tsx',
        'src/Grid/Grid.tsx',
        'src/HorizontalTabs/HorizontalTabs.tsx',
        'src/Icon/Icon.tsx',
        'src/IndentedElement/IndentedElement',
        'src/InputLabel/InputLabel.tsx',
        'src/Legend/Legend.tsx',
        'src/Menu/Menu.tsx',
        'src/Navigation/Navigation.tsx',
        'src/Pill/Pill.tsx',
        'src/Skeleton/Skeleton.tsx',
        'src/Spinner/Spinner.tsx',
        'src/StatusIndicator/StatusIndicator.tsx',
        'src/Toast/Toast.tsx',
        'src/Tooltip/Tooltip.tsx'
      ],
      sections: [
        {
          name: 'Buttons',
          components: [
            'src/Button/Button.tsx',
            'src/Button/LinkButton.tsx'
          ]
        },
        {
          name: 'Colors',
          components: [
            'src/Color/Color.tsx',
            'src/Color/ColorsGrid.tsx'
          ]
        },
        {
          name: 'Links',
          components: [
            'src/Anchor/Anchor.tsx',
            'src/Link/ActionLink.tsx',
            'src/Link/TextLink.tsx'
          ]
        },
        {
          name: 'Report',
          components: [
            'src/ReportHeader/ReportHeader.tsx',
            'src/ReportInfo/ReportInfo.tsx'
          ]
        },
        {
          name: 'Tables',
          components: [
            'src/DataTable/DataTable.tsx',
            'src/SmartList/SmartList.tsx'
          ]
        },
        {
          name: 'Typography',
          components: [
            'src/FormattedText/FormattedText.tsx',
            'src/Heading/Heading.tsx',
            'src/Text/Text.tsx'
          ]
        },
        {
          name: 'Vertical Timeline',
          components: [
            'src/VerticalTimeline/VerticalTimeline.tsx',
            'src/VerticalTimelineEvent/VerticalTimelineEvent.tsx'
          ]
        }
      ]
    },
    {
      name: 'Forms',
      components: [
        'src/Form/Form.tsx',
        'src/Input/Input.tsx',
        'src/SelectInput/SelectInput.tsx'
      ]
    },
    {
      name: 'Charts',
      components: [
        'src/RadarChart/RadarChart.tsx',
        'src/TimeBasedLineChart/TimeBasedLineChart.tsx'
      ]
    },
    {
      name: 'Higher Order Components',
      components: [
        'src/Anchor/withAnchor.tsx',
        'src/Grid/withGrid.tsx',
        'src/Skeleton/withSkeleton.tsx'
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
