/*
|--------------------------------------------------------------------------
|
| 这些组件暴露给使用方
|
|--------------------------------------------------------------------------
*/
import HelloWorld from './HelloWorld.vue'
import vueVersion from '../../node_modules/vue'
import Button from './Button.vue'
import Transform from '../utils/transform.js'

export default {
  HelloWorld,
  vueVersion,
  Button,
  Transform
}

// export { default as Button } from './Button.vue'
// export { default as Vue2 } from '../../node_modules/vue'
