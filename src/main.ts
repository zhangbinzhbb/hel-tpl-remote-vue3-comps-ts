import { isMasterApp } from 'hel-iso'
import { libReady } from 'hel-lib-proxy'
import { LIB_NAME } from './configs/subApp'
import { preFetchLib } from 'hel-micro';
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

(async function () {
  const libProperties = await import('./entrance/libProperties')
  // 注意此处传递的是 default
  libReady(LIB_NAME, libProperties.default)

  // 非子应用时（即不是被别的模块触发载入的情况），自己挂载渲染节点，方便本地调试
  // 可根据项目实际情况控制是否载入 loadApp 文件
  if (isMasterApp()) {
    const libs = await preFetchLib('lib-zhangbb-component', fetchOptions)
    // console.log('libs====>', libs)

    await import('./loadApp')
  }
}()).catch(console.error)
