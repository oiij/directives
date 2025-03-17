import type { Directive, DirectiveBinding } from 'vue'

type BindingValue = Uint8Array
type TargetElement = HTMLImageElement & {

}
function loadSrc(target: TargetElement, data: BindingValue, type: string = 'image/jpeg') {
  const blob = new Blob([data], { type })
  const url = URL.createObjectURL(blob)
  target.src = url
  target.onload = () => {
    URL.revokeObjectURL(url)
  }
}
export const arrayBufferSrc: Directive = {
  mounted(target: TargetElement, binding: DirectiveBinding<BindingValue>) {
    if (!(binding.value instanceof Uint8Array)) {
      return console.warn('LazyLoad: value is not a Uint8Array')
    }
    loadSrc(target, binding.value, binding.arg)
  },
  updated(target: TargetElement, binding: DirectiveBinding<BindingValue>) {
    loadSrc(target, binding.value, binding.arg)
  },
}
