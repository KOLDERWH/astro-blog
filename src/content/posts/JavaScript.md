---
title: "JavaScript"
description: "Javascript学习笔记"
author: "Kolderwh"
pubDate: 2023-10-01
cover: "joan-gamell-ZS67i1HLllo-unsplash.jpeg"
tags: ["js"]
---

> 垃圾回收（Garbage collection）
>
> 和生活一样，生活时间长了以后会产生生活垃圾
> 程序运行一段时间后也会产生垃圾
>
> 在程序的世界中，什么是垃圾？如果一个对象没有任何的变量对其进行引用，那么这个对象就是一个垃圾

- 垃圾对象的存在，会严重的影响程序的性能
- 在 JS 中有自动的垃圾回收机制，这些垃圾对象会被解释器自动回收，我们无需手动处理
- 对于垃圾回收来说，我们唯一能做的事情就是将不再使用的变量设置为 null

#### 正则表达式

> 正则表达式 - 正则表达式用来定义一个规则 - 通过这个规则计算机可以检查一个字符串是否符合规则
> 或者将字符串中符合规则的内容提取出来 - 正则表达式也是 JS 中的一个对象，
> 所以要使用正则表达式，需要先创建正则表达式的对象
>
> // new RegExp() 可以接收两个参数（字符串） 1.正则表达式 2.匹配模式
> let reg = new RegExp("a", "i") // 通过构造函数来创建一个正则表达式的对象

> 1.在正则表达式中大部分字符都可以直接写
> 2.| 在正则表达式中表示或
> 3.[] 表示或（字符集）
> [a-z] 任意的小写字母
> [A-Z] 任意的大写字母
> [a-zA-Z] 任意的字母
> [0-9]任意数字
> 4.[^] 表示除了
> [^x] 除了 x 5. . 表示除了换行外的任意字符 6. 在正则表达式中使用\作为转义字符 7. 其他的字符集
> \w 任意的单词字符 [A-Za-z0-9_]
> \W 除了单词字符 [^A-Za-z0-9_]
> \d 任意数字 [0-9]
> \D 除了数字 [^0-9]
> \s 空格
> \S 除了空格
> \b 单词边界
> \B 除了单词边界 8. 开头和结尾
> ^ 表示字符串的开头
> $ 表示字符串的结尾
>
> let re = /abc|bcd/
>
> ```javascript
> re = /[a-z]/;
> re = /[A-Z]/;
> re = /[A-Za-z]/;
> re = /[a-z]/i; // 匹配模式i表示忽略大小写
> re = /[^a-z]/; // 匹配包含小写字母以外内容的字符串
> re = /./;
> re = /\./;
> re = /\w/;
> re = /^a/; // 匹配开始位置的a
> re = /a$/; // 匹配结束位置的a
> re = /^a$/; // 只匹配字母a，完全匹配，要求字符串必须和正则完全一致
> re = /^abc$/;
> ```

> 量词
> {m} 正好 m 个
> {m,} 至少 m 个
> {m,n} m-n 个
>
>                     + 一个以上，相当于{1,}
>
> - 任意数量的 a

> re.exec() - 获取字符串中符合正则表达式的内容
> let str = "abcaecafcacc"
>
> ```javascript
> // 提取出str中符合axc格式的内容
> // g表示全局匹配
> let re = /a(([a-z])c)/gi;
> let result = re.exec(str);
> //    console.log(result)
> ```
>
> ```javascript
> while (result) {
>   console.log(result[0], result[1], result[2]);
>   result = re.exec(str);
> }
> ```
>
> /\*
> dajsdh13715678903jasdlakdkjg13457890657djashdjka13811678908sdadadasd
>
> ```javascript
>             用自己的语言来把描述出来
>                 1    3         501789087
>                 1    3到9之间   任意数字 x 9
>
>         */
>         let re = /1[3-9]\d{9}/g
>         re = /(1[3-9]\d)\d{4}(\d{4})/g
>         let str =
>             "dajsdh13715678903jasdlakdkjg13457890657djashdjka13811678908sdadadasd"
>         let result
>         while (result = re.exec(str)) {
>             // console.log(result[0], result[1], result[2])
>             console.log(result[1]+"****"+result[2])
>         }
> ```
>
> ```javascript
> re = /^1[3-9]\d{9}$/;
> console.log(re.test("13456789042"));
> ```

#### 字符串的方法

> ```javascrpit
> 字符串：
>                     - 字符串其本质就是一个字符数组
>                     - "hello" --> ["h", "e", "l", "l", "o"]
>                     - 字符串的很多方法都和数组是非常类似的
>                     - 属性和方法：
>                         length 获取字符串的长度
>                         字符串[索引] 获取指定位置的字符
>                         str.at() （实验方法）
>                             - 根据索引获取字符，可以接受负索引
>                         str.charAt()
>                             - 根据索引获取字符
>                         str.concat()
>                             - 用来连接两个或多个字符串
>                         str.includes()
>                             - 用来检查字符串中是否包含某个内容
>                                 有返回true
>                                 没有返回false
>                         str.indexOf()
>                         str.lastIndexOf()
>                             - 查询字符串中是否包含某个内容
>                         str.startsWith()
>                             - 检查一个字符串是否以指定内容开头
>                         str.endsWith()
>                             - 检查一个字符串是否以指定内容结尾
>                         str.padStart()
>                         str.padEnd()
>                             - 通过添加指定的内容，使字符串保持某个长度
>                         str.replace()
>                             - 使用一个新字符串替换一个指定内容
>                         str.replaceAll()
>                             - 使用一个新字符串替换所有指定内容
>                         str.slice()
>                             - 对字符串进行切片
>                         str.substring()
>                             - 截取字符串
>                         str.split()
>                             - 用来将一个字符串拆分为一个数组
>                         str.toLowerCase()
>                             - 将字符串转换为小写
>                         str.toUpperCase()
>                             - 将字符串转换为大写
>                         str.trim()
>                             - 去除前后空格
>                         str.trimStart()
>                             - 去除开始空格
>                         str.trimEnd()
>                             - 去除结束空格
> ```

> ```javascript
> split()
>                     - 可以根据正则表达式来对一个字符串进行拆分
>                 search()
>                     - 可以去搜索符合正则表达式的内容第一次在字符串中出现的位置
>                 replace()
>                     - 根据正则表达式替换字符串中的指定内容
>                 match()
>                     - 根据正则表达式去匹配字符串中符合要求的内容
>                 matchAll()
>                     - 根据正则表达式去匹配字符串中符合要求的内容(必须设置g 全局匹配)
>                     - 它返回的是一个迭代器
> ```

#### 包装类

> ```javascript
> 在JS中，除了直接创建原始值外，也可以创建原始值的对象
>
>                     通过 new String() 可以创建String类型的对象
>                     通过 new Number() 可以创建Number类型的对象
>                     通过 new Boolean() 可以创建Boolean类型的对象
>                         - 但是千万不要这么做
>
>                 包装类：
>                     JS中一共有5个包装类
>                         String --> 字符串包装为String对象
>                         Number --> 数值包装为Number对象
>                         Boolean --> 布尔值包装为Boolean对象
>                         BigInt --> 大整数包装为BigInt对象
>                         Symbol --> 符号包装为Symbol对象
>                         - 通过包装类可以将一个原始值包装为一个对象，
>                             当我们对一个原始值调用方法或属性时，JS解释器会临时将原始值包装为对应的对象
>                                 然后调用这个对象的属性或方法
>
>                     - 由于原始值会被临时转换为对应的对象，这就意味着对象中的方法都可以直接通过原始值来调用
> ```

#### DATA、日期的格式化

> ```javascript
> Date
>                     - 在JS中所有的和时间相关的数据都由Date对象来表示
>                     - 对象的方法：
>                         getFullYear() 获取4位年份
>                         getMonth() 返当前日期的月份（0-11）
>                         getDate() 返回当前是几日
>                         getDay() 返回当前日期是周几（0-6） 0表示周日
>                         ......
>
>                         getTime() 返回当前日期对象的时间戳
>                             时间戳：自1970年1月1日0时0分0秒到当前时间所经历的毫秒数
>                             计算机底层存储时间时，使用都是时间戳
>                         Date.now() 获取当前的时间戳
>
>
> let d = new Date() // 直接通过new Date()创建时间对象时，它创建的是当前的时间的对象
>             // 可以在Date()的构造函数中，传递一个表示时间的字符串
>             // 字符串的格式：月/日/年 时:分:秒
>             // 年-月-日T时:分:秒
> d = new Date("2019-12-23T23:34:35")
>
>
>             // new Date(年份, 月, 日, 时, 分, 秒, 毫秒)
> d = new Date(2016, 0, 1, 13, 45, 33)
>
> ```

> ```javascript
> toLocaleString()
>                 - 可以将一个日期转换为本地时间格式的字符串
>                 - 参数：
>                     1. 描述语言和国家信息的字符串
>                         zh-CN 中文中国
>                         zh-HK 中文香港
>                         en-US 英文美国
>                     2. 需要一个对象作为参数，在对象中可以通过对象的属性来对日期的格式进行配置
>                             dateStyle 日期的风格
>                             timeStyle 时间的风格
>                                 full
>                                 long
>                                 medium
>                                 short
>                             hour12 是否采用12小时值
>                                 true
>                                 false
>                             weekday 星期的显示方式
>                                 long
>                                 short
>                                 narrow
> par
>                             year
>                                 numeric
>                                 2-digit
>
> const d = new Date()
>
>             let result = d.toLocaleDateString() // 将日期转换为本地的字符串
>             result = d.toLocaleTimeString() // 将时间转换为本地的字符串
>
> result = d.toLocaleString("zh-CN", {
>                 year: "numeric",
>                 month: "long",
>                 day: "2-digit",
>                 weekday: "short",
>             })
> ```

#### this

>                - 函数在执行时，JS解析器每次都会传递进一个隐含的参数
>                               - 这个参数就叫做 this
>
>                              - this会指向一个对象
>                 - this所指向的对象会根据函数调用方式的不同而不同
>                    1.以函数形式调用时，this指向的是window
>                   2.以方法的形式调用时，this指向的是调用方法的对象
>                    ...
>                         通过this可以在方法中引用调用方法的对象

#### 对象结构

> 对象中存储属性的区域实际有两个：
>
>                     1. 对象自身
>                         - 直接通过对象所添加的属性，位于对象自身中
>                         - 在类中通过 x = y 的形式添加的属性，位于对象自身中
>
>                 2. 原型对象（prototype）
>                     - 对象中还有一些内容，会存储到其他的对象里（原型对象）
>                     - 在对象中会有一个属性用来存储原型对象，这个属性叫做__proto__
>                     - 原型对象也负责为对象存储属性，
>                         当我们访问对象中的属性时，会优先访问对象自身的属性，
>                         对象自身不包含该属性时，才会去原型对象中寻找
>                     - 会添加到原型对象中的情况：
>                         1. 在类中通过xxx(){}方式添加的方法，位于原型中
>                         2. 主动向原型中添加的属性或方法

# JS

常见的保证类型 String , Number, Boolean, Symbol, BigInt

基本数据类型：Null, Undefine, String, Boolean, Symbol, BigInt.

引用数据类型: Objet, Arraylist, function

## 高阶函数

参数或者是返回的是一个函数的函数即是一个高阶函数

**数组**

- map
- filter
- foreach
- reduce

字符串 数组 元素列表都可迭代（可以用 for..of 方法）
