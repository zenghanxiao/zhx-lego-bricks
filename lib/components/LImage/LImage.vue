<script setup lang="ts">
import { handleClick } from '../../utils'
import { useRestProps } from '../../hooks/useRestProps'
import { imageDefaultProps, type ImageComponentProps } from '../../types/defaultProps'
import type { CSSProperties } from 'vue'

defineOptions({
  name: 'LImage',
})

interface IProps {
  isEditing?: boolean
}
type LProps = Partial<IProps & ImageComponentProps>
const props = withDefaults(defineProps<LProps>(), {
  isEditing: false,
  ...imageDefaultProps,
})

const { restProps: styleProps } = useRestProps(props, [
  'isEditing',
  'src',
  'url',
  'text',
  'actionType',
])
</script>

<template>
  <img
    :style="styleProps as CSSProperties"
    class="l-image-component"
    @click.prevent="handleClick(props)"
    :src="src"
  />
</template>

<style scoped>
.l-image-component {
  max-width: 100%;
  position: relative !important;
}
</style>
