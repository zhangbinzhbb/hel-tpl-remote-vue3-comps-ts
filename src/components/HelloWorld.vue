<template>
  <div>
    <h3>Vue3 App</h3>
    <Content :count="count" />

    <div id="vue2Button"></div>
    <!-- <vue2-button @btnClick="inc"/> -->
    <vue2-button @btnClick="inc"/>
    <RemoteCompAsyncBetter />
  </div>
</template>

<script>
import * as Vue from 'vue'
import { ref } from 'vue';
import { preFetchLib, bindVueRuntime } from 'hel-micro';
import { vue2ToVue3 } from '../utils/transform';
// import Button from 'vue2App/Button';
import Button  from "./Button.vue"
bindVueRuntime({ Vue })
// 本地联调
const enableCustom = !!window.location.port;
const fetchOptions = {
  custom: {
    host: 'http://localhost:7001',
    enable: enableCustom,
    /**
     * defaut: false
     * 是否跳过获取 hel-meta.json 的获取步骤，true：跳过，false：不跳过
     * 当用户设定 custom.host 配置时，hel-micro 采取总是相信该 host 存在一个 hel-meta.json 文件并尝试去获取
     * 如获取失败时再去解析该 host 对应的首页并现场解析出 hel-meta.json 数据
     * 因此获取动作可能会报一个 404 not found 符合预期的行为，用户可设定 skipFetchHelMeta 为 true 跳过此步骤
     * 但建议加载线上模块时（非本地联调时），保持 skipFetchHelMeta 为 false 比较好，有利于提高模块加载速度（ 无html解析hel-meta.json过程 ）
     */
    skipFetchHelMeta: true,
  },
};
console.log('hel-tpl-remote-vue3-comps-ts子应用');

export default {
  components: {
    vue2Button: vue2ToVue3(Button, 'vue2Button'),
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
