# Hello VuePress
## 新建的文档
```
1. 文档的制作方案
```

### 3级标题
#### 四级标题
##### 这是我新编辑的文档标题

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

<!-- [[toc]]  -->
<!-- :tada: :100: -->
<!-- ![An image](./assets/a.jpg) -->
![An image](~@s/a.jpg) 
<!-- <img :src="$withBase('/a.jpg')" alt="foo"> -->

::: tip
这是我新修改的一个tips
:::

``` js{4}
export default {
    data() {
        return {
            msg: '高亮显示'
        }
    }
}
```

##### 新增了一个测试

``` md
md行
```

#### 引入js文件

<!-- <<< ~@s/a.js{2} -->
{{ 1 + 1 }}

<span v-for="i in 3">{{ i }} </span>

<!-- {{ $page }} -->

<!-- ::: v-pre
`{{ This will be displayed as-is }}`
::: -->


#### 引入组件啦

<my-demo/>

<Foo-Bar/>

<script> console.log('执行了') </script>

<Badge text="beta" type="warn"/>
<Badge text="1.0.0"/>

- **master分支**