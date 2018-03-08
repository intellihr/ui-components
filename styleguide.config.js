const path = require('path')

module.exports = {
  components: 'src/**/*.tsx',
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.tsx');
    const dir = path.dirname(componentPath);
    return `import { ${name} } from 'ui-components/es/${name}';`
  },
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.tsx?$/, '.examples.md')
  },
};
