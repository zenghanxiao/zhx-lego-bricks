import type { CommonComponentProps } from '../types/defaultProps'

export const handleClick = (
  props: Readonly<Partial<CommonComponentProps & { isEditing: boolean }>>
) => {
  if (props.actionType === 'url' && props.url && !props.isEditing) {
    window.location.href = props.url
  }
}
