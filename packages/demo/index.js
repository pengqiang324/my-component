// 导入组件 组件必须声明 name
import demoComponent from './src/demo.vue'

// 为组件提供 install 安装方法 供按需引入
demoComponent.install = (Vue) => {
    Vue.component(demoComponent.name, demoComponent)
}

export default demoComponent