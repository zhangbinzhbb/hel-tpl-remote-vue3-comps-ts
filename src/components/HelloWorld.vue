<template>
  <div>
    <h3>Vue3 App</h3>
    <Content :count="count" />

    <div id="vue2Button"></div>
    <!-- <vue2-button @btnClick="inc"/> -->
    <vue2-button @btnClick="inc"/>
    <RemoteCompAsyncBetter />

    <el-tag class="ml-2" type="danger">Tag 5</el-tag>
  </div>
</template>

<script>
import { preFetchLib, bindVueRuntime } from 'hel-micro';
import * as Vue from 'vue'
import { ref } from 'vue';

import { vue2ToVue3 } from '../utils/transform';
bindVueRuntime({ Vue })
// import Button from 'vue2App/Button';
// import Button  from "./Button.vue"

console.log('hel-tpl-remote-vue3-comps-ts子应用');

export default {
  components: {
    vue2Button: vue2ToVue3('Button', 'vue2Button'),
    // RemoteCompAsyncOld: async () => {
    //   const name = 'ib-zhangbb-component';
    //   const mod = await preFetchLib(name, fetchOptions);
    //   console.log("mod===>",mod)
    //   // const mod = await preFetchLib("remote-selection-point", "0.0.1-alpha.3");
    //   // const mod = await preFetchLib("hel-tpl-remote-vue-comps");
    //   return mod.Vue2Test;
    // },
    // RemoteCompAsyncBetter: () => ({
    //   component: new Promise(async (r, j) => {
    //     try {
    //       const mod = await preFetchLib('lib-zhangbb-component', fetchOptions);
    //       console.log('mod===>', mod)
    //       const Vue2 =  mod.Vue2
    //       const components = vue2ToVue3(mod.Vue2Test,vue2Button,Vue2)
    //       r(components);
    //       // r(mod.Vue2Test);
    //     } catch (err) {
    //       j(err);
    //     }
    //   }),
    // }),
  },
  setup () {
    const count = ref(0);
    const inc = () => {
      count.value++;
    };

    return {
      count,
      inc,
    };
  },
};
</script>

<style scoped>
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
