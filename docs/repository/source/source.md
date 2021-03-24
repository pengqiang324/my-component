# nrm源切换手册
## nrm介绍&使用方法图鉴
nrm是一个npm包，用npm换源每次都要写一堆非常麻烦，nrm可以轻松解决这个问题，在这里做一下nrm的使用方法笔记。

![](~@s/nrm.png)

## nrm安装与配置
### nrm介绍
nrm(npm registry manager )是npm的镜像源管理工具，有时候国外资源太慢，使用这个就可以快速地在 npm 源间切换

### 安装nrm
在命令行执行命令，npm install -g nrm，全局安装nrm。

### 查看所有源
执行命令nrm ls查看可选的源。

```cmd
> nrm ls

*npm ---- https://registry.npmjs.org/

cnpm --- http://r.cnpmjs.org/

taobao - http://registry.npm.taobao.org/

eu ----- http://registry.npmjs.eu/

au ----- http://registry.npmjs.org.au/

sl ----- http://npm.strongloop.com/

nj ----- https://registry.nodejitsu.com/
```

### 查看当前源
```
> nrm current
```

### 切换
如果要切换到taobao源，执行命令nrm use taobao。
```
> nrm use taobao
```

### 新增源
你可以增加定制的源，特别适用于添加企业内部的私有源，执行命令 nrm add `<registry>` `<url>`，其中reigstry为源名，url为源的径。
```
> nrm add registry http://registry.npm.frp.trmap.cn/
```

### 删除源
执行命令nrm del `<registry>`删除对应的源。

### 测试速度
可以通过 nrm test 测试相应源的响应时间。
```
> nrm test npm
```


## 安装过程异常情况
执行nrm报错 **internal/validators.js:124 throw new ERR_INVALID_ARG_TYPE(name, ‘string’, value)**;

``` cmd
PS D:\node8> nrm
internal/validators.js:124
    throw new ERR_INVALID_ARG_TYPE(name, 'string', value);
    ^

[TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string. Received undefined
  at validateString (internal/validators.js:124:11)
  at Object.join (path.js:375:7)
  at Object.<anonymous> (C:\Users\woqi\AppData\Roaming\npm\node_modules\nrm\cli.js:17:20)
  at Module._compile (internal/modules/cjs/loader.js:1063:30)
  at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
  at Module.load (internal/modules/cjs/loader.js:928:32)
  at Function.Module._load (internal/modules/cjs/loader.js:769:14)
  at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
  at internal/main/run_main_module.js:17:47
] {
  code: 'ERR_INVALID_ARG_TYPE'
}
```

#### 解决方案
```
//const NRMRC = path.join(process.env.HOME, '.nrmrc'); (删除)
const NRMRC = path.join(process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'], '.nrmrc');
```


![](~@s/nrm2.jpg)


![](~@s/nrm3.jpg)
