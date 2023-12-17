---
title: "Vue学习笔记"
description: "vue学习记录"
pubDate: "Oct 08 2023"
heroImage: "/vue3.png"
---

# 模板语法

## 1.v-on

### 各种参数方式

### 修饰符（stop）

.prevent 会打断默认的 html 标签的行为

语法糖 v-on:click=@click

## 2.v-for 便利数组

### key&id

# 3.v-if

v-if 决定元素是否加载

## 4.v-show

控制元素的 visiable 属性

## 5.v-bind

v-bind:[arrtibute]=url **arrtibute**为表达式

语法 v-bind:value="name"

语法糖 :value="name"

## 6.v-model

双向绑定（一般用于表单，选框，输入框）

如果绑定的值为数组，则会将 value 值填入数组中

用 v-model 绑定复选框(checkbox)，单选框(radio)，下拉框（select）要加上 value 值

语法：v-model=“message"

:value="message" @input="message = $event.target.value"

## 7.v-slot

插槽专用，当有多个插槽时，用于指定插槽位置

### 语法

v-slot:name

语法糖：#name

作用域插槽可以将子组件的数据通过 slot 传给父元素

# Option API

## 1.computed 计算属性

## 2.methods

## 3.watch 监听

## 4.data 数据

## 5.props

接收父组件传过来的信息

- **数组写法**

缺点：不能控制对象

没有默认值

- **对象写法**（type,required,default）

  对象类型设为 Object 时，两种写法

  - eventname:()=>( {"name":Lee}),

  - eventname(){

  ​ return{

  ​ "name":"Lee"}

  }

  ### 语法

  父组件： :name=参数

  子组件： props:[name]

## 6.emits

与父组件通信

### 语法

子组件: $emit("name","参数")

父组件： @name=函数 函数（参数）

## 7.provide

用于组件间通信发送

## 8.inject

用于组件间通信接收

### 语法

provide:{

name:"data"

}

provide(){

return{

​ name:"data"

}

}

### 语法

inject:[name,name]

## 9. name

用于在 keepalive 里面绑定存活的组件名称

## 10. mixin

用户减少组件之间的重复代码

## 11.derectives

用于自定义指令

```javascript
//optional API
derectives{
	focus:{
        created(){
        }
        unmounted(){
        }
    }
}

//composition API
const VFocus={
    //参数
     mounted(el,bindings){
         //el为绑定自定义指令的元素
         //bindings为传入的参数，此处为aa
	}
}

//global
app.derective("focus",{
    mounted(){

	}
  })


//use

<h2 v-focus="aa"><h2>
```

# 组件

默认的 vue 版本，vue-loader 完成 template 的编译

vue.esm-bundler:runtime+compile，对 template 进行编译

style 里面的 scoped 用于分割样式

# slots 插槽

# 生命周期

## 1. beforeCraete

## 2.created

发送网络请求

事件/数据监听

## 3.beforeMount

## 4.mounted

获取 dom

## 5.beforeUpdate

## 6.updated

## 7.beforeUnmount

## 8.unmounted

取消事件监听（回收操作）

动态组件使用 component 组件，通过 is 属性实现

## 9.activated

组件 keeplive 时使用

## 10.deactivated

组件退出 keeplive 时使用

# Composition API

定义响应式数据

## reactive

用于定义复杂数据

本地数据

组合的数据（组合起来会有特殊作用的数据）

## ref

用于定义简单数据,也可以用于定义复制数据

## readonly

只读数据

## isProxy

判断是否由 reactive 和 readonly 创建的

## isReactive

判断是否由 reactive 创建的

## isReadonly

## toRaw

## shallowReactive

不进行对象深层响应式转换

## shallowReadonly

不 进行对象深层只读转换

## toRef/toRefs

## unref

相当于 name.value

可以把不是响应式的数值变成响应式

## shallowRef

## triggerRef

## watchEffect

自动监听用到的数据，可以设定停止监听条件

## defineExpose

暴露组件的方法，让其可以被父组件调用

## setup 语法糖

不用写 return

components 不用写了

用 defineProps 函数父子传数据

用 defineEmits 函数父子传数据

# 异步组件

```js
const asyncPage = () => import("./NextPage.vue");
```

# 路由

加上 replace 浏览器不记录跳转地址

```javascript
<router-link to="/home" replace>
  Home
</router-link>
```

激活的路由身上会有一个 active 的 class

## 路由懒加载 分包

写法一

```javascript
const About = () => import("../component/About.vue");
```

写法二

```javascript
{
    path: "/about",
    component: () => import("../component/About.vue")
},
```

## 动态路由

```javascript
    { path: "/user/:id", component: User },
```

url 为/user/123 或者类似的 url 才匹配

组件可以通过{{$route.params}}拿到 url 传来的参数

拿到 url 参数的另外一个方法

```javascript
import { useRoute, onBeforeRouteUpdate } from "vue-router";
onBeforeRouteUpdate((to, from) => {
  // const route= useRoute();
  // console.log(route.params);
  console.log(to.params);
  console.log(from.params);
});
```

## 404 网页设置路由

```javascript
 { path: "/:pathmatch(.*)", component: NotFound },
```

## 方法跳转路由

```javascript
import { useRoute } from 'vue-router';
const route= useRoute();
function home(){
  route.push({
    path:"/home"
    //传入参数
    query:{
      name:"ada"
  }
  })
  //route.replace("/home")
}
```

## 路由返回

```java
const route= useRoute();
function back(){
  route.back();
  route.go(-1);
}
```

## 动态添加路由

通过 用户权限添加组件

```javascript
if (isadmin) {
  //一级路由
  router.addRoute({
    path: "/home",
    component: NotFound,
  });
  //二级路由
  router.addRoute("home", {
    path: "vip",
    component: NotFound,
  });
}
```

## 删除路由方法

## 方法一

添加 name 相同的路由

## 方法二

通过 removeRoute 方法,传入路由名称

```javasc
router.remoreRoute(name)
```

## 方法三

通过 addRoute 方法的返回值回调

```javascript
const removeRoute = router.addRoute(routrRecord);
removeRoute();
```

## 获取所有路由

router.getRoutes()

## 路由导航守卫

```javascript
router.beforeEach(() => {
  console.log("每次切换路由都会调用");
});
```

不返回或者 undefine 则会跳转

返回 false 取消导航

## 导航流程

- 导航触发
- 失活组件 beforeRouteLeave
- 全局 beforeEach（重要）
- befreRouteUpdare
- beforeEnter
- 解析异步组件
- beforeRouteEnter
- 全局 beforeResolve
- 导航
- afterEach
- DOM 更新
- 调用 beforeRouteEnter 中的 next 回调函数

# vuex

template 里面使用

```javascript
<h1>{{$store.state.name}}</h1>
```

计算属性获取

```javascript
import {mapState} from "vuex"
//Options API
computed:{
    //方法1
    ...mapState(["name","name1"]),
    //方法二，带昵称
     ...mapState({
        sName:state => state.name1
        a Name:state => state.name2
    })
}

//Compostion API
import {mapState,useStore} from "vuex"
import {computed} from "vuex"

const {name1,name2} = mapState(["name","name1"]),
const store = useStore()
const sName = computed(name1.bind($store:store))
const aName = computed(name2.bind($store:store))


//Compostion API2
import {useStore,toRefs} from "vuex"

const store = useStore()
const {name1,name2} = toRefs(store.state)
```

## getters 传参数

```javascript
//index.js
getters: {
        getFriend(state) {
            return function (id) {
                return state.friends.find(item => item.id == id)
            }
        },
    },
//template
<h2>find Friends {{ $store.getters.getFriend(2)}}</h2>
```

## Mutation

更改数据的方法,不要在 mutation 里面执行异步操作，例如网路请求

在 index.js 里面统一定义 mutation 方法，然后再 options API 里面通过 commit 提交修改请求

```javascript
//index.js
mutations: {
        increase(state) {
            state.count++
        }
 }

//options API
methods{
  change(){
      this.$store.commit("increase")
  }
}

//Composition API
import {useStore} from "vuex"
const store = useStore
changeValue(){
    store.commit("increase")
}
```

## mutations 接收参数

```javascript
//index.js
mutations: {
        increase(state,payload) {
            state.count+=payload
        }
   	    increase_two(state,payload) {
            state.count+=payload.number
        }
 }
//options API
methods{
  change(){
      this.$store.commit("increase",10)
  }.
   change1(){
      this.$store.commit("increase_two",{number:10})
  }
}
```

## Actions

解决获取网络数据的问题（异步数据）

语法

```javascript
//index.js
mutations: {
        increase(state,payload) {
            state.count+=payload
        }
 },
actions: {
        increaseAction(context) {
            context.commit("increase",2)
        },
        increaseAction_1(context,payload) {
            context.commit("increase",psyload)
        }
 }

//options API
methods{
  change(){
      this.$store.dispatch("increaseAction")
  },
  change(3){
      this.$store.dispatch("increaseAction_1")
  }
}

//Composition API
import {useStore} from "vuex"
const store = useStore
changeValue(){
    store.commit("increaseAction")
}
```

## modules

将 vuex 的部分数据抽离到单独的文件，在 index.js 文件里面导入使用，这样更易于管理

```javascript
//index.js
import homemodule from ".homemodule.j"
moudeles:{home:homemodule}

//template
<h1>{{$store.state.home.name}}</h1>
```

getter，mutaion 和 action 的取法和默认一样，不用加模块名称

# Pinia

可以调用 store.$reset()将值重置会初始值

```javascript
//一次性修改多个值
const userStore = useUSer();
function changeData() {
  userStore.$patch({
    name: "sam",
  });
}

//替换对象
userStore.$state({
  name: "sam",
});
```

在 getters/actions 里，通过 this.访问同为 getters 里的方法或者是 state 里面的数据

## 自定义指令

```javascript
//optional API
derectives{
	focus:{
        created(){
        }
        unmounted(){
        }
    }
}

//composition API
const VFocus={
    //参数
     mounted(el,bindings){
         //el为绑定自定义指令的元素
         //bindings为传入的参数，此处为aa
	}
}

//global
app.derective("focus",{
    mounted(){
	}
  })


//use

<h2 v-focus="aa"><h2>
```

## Teleport

可以自定义组件的挂载位置

```javascript
<template>
  <div class="app">
    <HelloWorld />
    <div class="item"></div>
  </div>
</template>
//将helloworld组件挂载到body上而不是app下面
```

## Render 函数

```javascript
//optional API
import { h } from 'vue';
import HomeVue from './HomeCopnt.vue';
export default {

  render(){
     return h("vid",{className:"hello"}, [
      h("h2",{className:"h2"},this.counter),
      h("button",{onClick:this.increase},"clickMe"),
      h(HomeVue,{className:"home1"}),
     ])
  },
  data(){
    return {
      counter:0
    }
  },
  methods:{
    increase(){
      this.counter++
    }
  }
}
//composition APi
<template>
  <render/>
</template>
<script setup>
import { h, ref } from 'vue';
import HomeVue from './HomeCopnt.vue';
const counter = ref(0)
const  increase=()=>{
      counter.value++
}

const render=()=>h("vid",{className:"hello"}, [
      h("h2",{className:"h2"},counter.value),
      h("button",{onClick:increase},"clickMe"),
      h(HomeVue),
])

</script>
```

## JSX

```javascript
//vue-cli
npm i @vue/babel-plugin-jsx -D

//babel.config.js
plugins: [
    "@vue/babel-plugin-jsx"
],

//optional API
<script lang="jsx">
export default{
    data(){
        return{
            count:3
        }
    },
    methods:{
        increase(){
            this.count++
        }
    },
    render(){
        return (
            <div class="home">
                <h1>JSX</h1>
                <h2>home{this.count}</h2>
                <button onClick={this.increase}>+1</button>
            </div>
        )
    },
}
</script>

//composition API
<template>
    <jsx></jsx>
</template>
<script lang="jsx" setup>
import { ref } from 'vue';

const counter = ref(3)
const increase=()=>{
    counter.value++
}
const jsx = ()=>(
      <div class="home">
          <h1>JSX</h1>
          <h2>home{counter.value}</h2>
          <button onClick= {increase}>+1</button>
      </div>)
</script>
```

## 动画

```javascript
    <transition>
        <h2 v-if="isShow">Iam the animation</h2>
		<h2 v-else>two animation</h2>
    </transition>

type属性用于绑定那个动画为主 animation/transition
mode可以设定显示的模式(in-out/out-in),指定动画切换的模式
:duration用于设置动画持续时间（不常用）

```

# 响应式原理

```javascript
//Object.defineProperty()
const reactive = (obj) => {
  Object.keys(obj).forEach((key) => {
    let value = obj[key];
    Object.defineProperty(obj, key, {
      set: function (newvalue) {
        value = newvalue;
        dep.notify();
      },
      get: function () {
        return value;
      },
    });
  });
};

new Proxy();
```

# Tip

vue 里面获取 dom 用 ref

单一数据流/纯函数

不要对 reactive 解构

当使用 reactive 定义响应式数据时，如果直接把 reactive 定义的数据赋值，则会丢失响应式

```javascript
const data = reactive({
 name:”sam"，
 age : 18
})

//这样会丢失响应式
const data1 ={name :"tom" ,age: 23}
data = data1
```

用 ref 定义复炸数据类型时，记得使用 value 赋值

```javascript
const data = ref({
 name:”sam"，
 age : 18
})

//这样是ok的，不会丢失响应式
const data1 ={name :"tom" ,age: 23}
data.vaue = data1
//拿数据时，使用data.value.*拿取数据
conlole.log(data.value.name)
```

app.use 本质是安装插件
