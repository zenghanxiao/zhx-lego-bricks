<script setup lang="ts">
import { textDefaultProps, type TextComponentProps } from '../../types/defaultProps'
import { handleClick } from '../../utils'
import { useRestProps } from '../../hooks/useRestProps'

defineOptions({
  name: 'LText',
})

interface IProps {
  tag?: string
  isEditing?: boolean
}
type LProps = Partial<IProps & TextComponentProps>
const props = withDefaults(defineProps<LProps>(), {
  tag: 'div',
  isEditing: false,
  ...textDefaultProps,
})

const { restProps: styleProps } = useRestProps(props, [
  'isEditing',
  'tag',
  'url',
  'text',
  'actionType',
])
</script>

<template>
  <component :is="tag" class="l-text-component" :style="styleProps" @click="handleClick(props)">
    {{ text }}
  </component>
</template>

<style scoped>
h2.l-text-component,
p.l-text-component {
  margin-bottom: 0;
}
button.l-text-component {
  padding: 5px 10px;
  cursor: pointer;
}
.l-text-component {
  box-sizing: border-box;
  white-space: pre-wrap;
  position: relative !important;
}
</style>
