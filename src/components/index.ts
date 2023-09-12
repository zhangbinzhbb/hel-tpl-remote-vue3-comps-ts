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

// import ElementPlus from '../../node_modules/element-plus/es'
// import ElementPlusCss from '../../node_modules/element-plus/dist/index.css'

// console.log('vueVersion2222====>', vueVersion)
// console.log('ElementPlus=222===>', ElementPlus)

export default {
  HelloWorld,
  vueVersion,
  Button,
  Transform,
  // ElementPlus,
  // ElementPlusCss
}

// export { default as Button } from './Button.vue'
// export { default as Vue2 } from '../../node_modules/vue'
