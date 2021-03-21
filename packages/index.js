import DemoComponent from './demo/index'
import Toast from './toast/index'

const version = "1.0.0"

// 存储组件列表
const components = [DemoComponent, Toast]

// 定义 install 方法, 接收 Vue 作为参数。如果使用 use 注册插件，则所有组件都会被注册
const install = (Vue) => {
    // 遍历注册全局组件
    components.forEach(component => {
        if (component.install) {
            Vue.use(component)
        } else if(component.name) {
            Vue.component(component.name, component)
        }
    })
}

// 判断是否全局引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export { install, DemoComponent, Toast }  // 按需引入
export default {
    // 导出对象必须有 install，才能被 Vue.use() 方法注册
    install,
    version
}