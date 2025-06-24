import { name } from '../package.json'

const file = (type) => `dist/${name}.${type}.js`

export { name, file }

export default {
  input: 'src/index.ts',
  output: {
    name,
    file: file('esm'),
    format: 'es',
  },
}
