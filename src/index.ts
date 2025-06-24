import LText from './components/LText'
import LImage from './components/LImage'
import type { App } from 'vue'

const components = [LText, LImage]

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name!, component)
  })
}

export { textDefaultProps, imageDefaultProps } from '@/types/defaultProps'
export type {
  TextComponentProps,
  ImageComponentProps,
  AllComponentProps,
} from '@/types/defaultProps'

export { install, LText, LImage }

export default {
  install,
}
