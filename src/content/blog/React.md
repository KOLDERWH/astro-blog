---
title: "React"
description: "React syntax and and tip"
pubDate: "Jul 08 2022"
tags: ["react"]
---

## this 綁定

```javascript
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: "kong ni qi wa",
      movieList: [1, 2, 3, 4],
      counter: 0,
    };
    this.increaseCounter = this.increaseCounter.bind(this);
  }

  clickFn() {
    console.log(this);
    this.setState({
      msg: "hello",
    });
  }

  increaseCounter() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  increaseCounter1 = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  render() {
    // const counter = this.state.counter
    const { counter } = this.state;
    return (
      <>
        <h2 title="this is h2">{this.state.msg}</h2>
        <h2>{counter}</h2>
        {/*显式绑定*/}
        <button onClick={this.clickFn.bind(this)}>click me </button>
        <br />
        <button onClick={this.increaseCounter}>+1</button>
        {/*隐式绑定*/}
        <button onClick={() => this.increaseCounter()}>+1</button>
        {/*箭头函数绑定*/}
        <button onClick={() => this.increaseCounter1()}>+1</button>
      </>
    );
  }
}
```

react 项目不能有大写

## 组件（类组件/函数组件）

必须实现 render()方法

render 可以返回 react 元素(jsx),子组件，数组，fragments，Portals，字符串或者数值

## 生命周期

mounting(constructor)=>updating(render)=>unmounting

![image-20231121171117326](src/assets/img/image-20231121171117326.png)

## 通信

父子

通过 props 传值

通过 props.childen 传入组件

content

## setStatus

设置成异步调用

- 提升性能，批量更新（避免频繁 render）
- 如果更新了 state，但是没有执行 render 函数，state 和 props 将不能同步

## SCU

shouldComponentUpdate 用于进行性能优化

PureComponent，memo

## 获取 DOM

通过元素内设置 ref，也可以通过 ref 拿到类组件的实例

## 受控组件

```javascript
<input/>
 input的value不能直接赋值，需要通过useState来指定值
改变value值需要指定input的onchange事件
定义：在HTML的表单元素中，它们通常自己维护一套state，并随着用户的输入自己进行UI上的更新，这种行为是不被我们程序所管控的。而如果将React里的state属性和表单元素的值建立依赖关系，再通过onChange事件与setState()结合更新state属性，就能达到控制用户输入过程中表单发生的操作。被React以这种方式控制取值的表单输入元素就叫做受控组件
```

## 非受控组件

## 高阶组件

返回一个组件的函数

## fragment

```javascript

<fragment>
	code
</fragment>

//语法糖
<>
  code
</>
```

## StrickMode

- 识别不安全的生命周期
- 使用过时的 ref
- 检查意外的副作用 constructor，render 执行两次
- 使用废弃的 findDOMNode 方法
- 检测过时的 centext API

## 过渡动画

库: react-transition-group

install : npm i react-transition-group --save

```javascript
//显示和隐藏使用
<CSSTransition classNames="msg"
	unmountOnExit={true}
	in={isShowinfo}
	timeout={500}>
	<h2>msg</h2>
</CSSTransition>

//两个元素切换
<SwitchTransition mode="out-in/in-out">
   <CSSTransition key={isLoved ? "loved" : "love"} classNames="animaLove" timeout={200}>
      {isLoved ? <IconLoved /> : <IconLove />}
    </CSSTransition>
</SwitchTransition>
```

## CSS in JS

库:emotion, style-components

## Redux

store, reducer, action , constants

### react-redux

```javascript
//安装
npm i react-redux
//用PRovider包裹要使用store的组件
<Provier></Provider>

//在组件导出的时候添加connect
mapStateToProps = (state)=>{
	counter:state.counter,
}
mapDispatchToProps = (dispatch)=>{
    addNum()=>{
        dispatch(addNumberAction（num),
    },
}
export connect(mapStateToProps,mapDispatchToProps)(Home)


//实现connect
import { PureComponent } from "react";
import store from "./store"
import { PureComponent } from "react";
import store from "./store"

export default function connect(mapStateToprops, mapDistapchToprops) {
    return function (Wrapper) {
        class NewComponet extends PureComponent {
            constructor(props) {
                super(props)
                this.state = mapStateToprops(store.getState())
            }
            // 订阅加更新数据
            componentDidMount() {
                this.unscribe = store.subscribe(() => {
                    this.setState(mapStateToprops(store.getState()))
                })
            }
            // 取消订阅
            componentWillUnmount() {
                this.unscribe()
            }
            render() {
                const stateObj = mapStateToprops(store.getState())
                const dispatchObj = mapDistapchToprops(store.dispatch)
                return (<Wrapper {...this.props} {...stateObj} {...dispatchObj}>
                </Wrapper >)
            }
        }
        return NewComponet
    }
}
```

### redux-thunk

让 rexudx 的 dispatch 可以派发函数，解决异步问题（从服务器拿数据）

```javascript
//store/index.js
import thunk from "redux-thunk"
const store = createStore(reducer,applyMiddleware(thunk))
export default store

//use  actions.js
export const fetchdataAction = ()=>{
    return （dispatch,getState) => {
        axios.get("xxx").then(res =>{
			//code
            dispatch(decreaseNumAction())
        })

    }
}


//chunk重写
function thunk(store) {
    const next = store.dispatch;
    function dispatchChunk(action) {
        if (typeof action === "function") {
            action(store.dispatch, store.getState)
        } else {
            next(action)
        }
    }
    store.dispatch = dispatchChunk
}
```

### Redux Toolkit

```javascript
//安装
npm i @reduxjs/toolkit- react-redux
//src/ index.js
import {Provider} from "react-redux"


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

//异步操作
export const fetchDataAction = createAsyncThunk("fetch/state", async () => {
    const res = await axios.get("xxx")
    return res.data
})

const countSlice = createSlice({
    name: "counter",
    initialState: {
        counter: 1,
    },
    reducers: {
        addNumber(state, action) {
            const payload = action.payload;
            state.counter = state.counter += payload
        }
    },
    extraReducers: {
        //正在发送
        [fetchDataAction.pending](state, action) {

        },
        //返回成功
        [fetchDataAction.fulfilled](state, action) {
            //传数据到store
            state.banner = action.payload.banner
        },
        // 返回异常
        [fetchDataAction.rejected](state, action) {

        }
    }
})
export const { addNumber } = countSlice.actions
export default countSlice.reducer
```

Monkey Patching

## React-Router

```javascript
安装 npm i react-router-dom

import {HashRouter} from "react-router-dom"
<HashRouter>
	<App/>
</HashRouter>


<Routes>
    <Route path = "/home" element{<Home/>}/>
	<Route path = "/about" element{<About/>}/>
</Routes>

//路由嵌套
 {
        path: "/search",
        element: <Search />,
        children: [
            {
                //要包含父路由的信息
                path: "/search/recent",
                element: <SearchRecent />,
            },
        ]
    },
在jsx里面使用Outlet占位
<Outlet />
```

NavLink-Link

### Navigate

路由重定向

```javascript
<Routes>
     <Route path = "/home" element{<Navigate to="/home" />}/>
    <Route path = "/home" element{<Home/>}/>
	<Route path = "/about" element{<About/>}/>
	<Route path = "*" element{<NotFOUND/>}/>
</Routes>
```

## 获取 url 参数

```javascript
uselocation;
const [searchParams] = useSearchParams();
const quert = Object.fromentries(searchParams);
```

## 懒加载

```javascript
const Home = React.lazy(() => import("./Home"));
```

## hook

hook 用于钩住函数组件的状态

hook 函数使用 use 开头

hook 只能在函数组件的顶部使用

```javascript
const [count, setCount] = useState(0);
```

### 函数组件使用生命周期

useEffect 告诉 React 在渲染完成狗执行的操作

```javascript
useEffect(() => {
  //code
});
```

useCallback 同于给子组件做性能优化时使用

### redux hook

useSelector,useDispatch

```javascript
import { useSelect, useDispatch } from "react-redux";
const { count } = useSelect(
  (state) => ({
    count: state.counter.count,
    //shallowEqual用于检查是否要更新
  }),
  shallowEqual
);
```

## craco

配置项目别名@

npm i @craco/craco

```javascript
//修改package.json
 "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "react-scripts eject"
  },

//craco.config.js
const path = require("path")
module.exports = {
    webpack: {
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    }
}
```

## React 全家桶包括

- React（本体）
- React-Redux（数据管理）

```javascript
//管理工具
npm i @reduxjs/toolkit react-redux
```

- React-router-dom（路由切换）

```javascript
npm i react-router-dom
```

- craco（配置路径）

```javascript

```

- styled-components

```javascript
npm i styled-components
```

- names(配置 class)

```javascript
npm install classnames
```

- react-transition-group(动画)

```javascript
npm install react-transition-group --save
```
