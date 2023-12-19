---
title: "CSS 基础"
description: "CSS的基本知识"
pubDate: "Oct 22 2022"
tags: ["css"]
---

## 一、CSS 基础

### 1. CSS 选择器及其优先级(重要)

> 重要，回答完全

| **选择器**     | **格式**      | **优先级权重** |
| -------------- | ------------- | -------------- |
| id 选择器      | #id           | 100            |
| 类选择器       | .classname    | 10             |
| 属性选择器     | a[ref=“eee”]  | 10             |
| 伪类选择器     | li:last-child | 10             |
| 标签选择器     | div           | 1              |
| 伪元素选择器   | li:after      | 1              |
| 相邻兄弟选择器 | h1+p          | 0              |
| 子选择器       | ul>li         | 0              |
| 后代选择器     | li a          | 0              |
| 通配符选择器   | \*            | 0              |

对于选择器的**优先级**：

- 标签选择器、伪元素选择器：1；
- 类选择器、伪类选择器、属性选择器：10；
- id 选择器：100；
- 内联样式：1000；

**注意事项：**

- !important 声明的样式的优先级最高；
- 如果优先级相同，则最后出现的样式生效；
- 继承得到的样式的优先级最低；
- 通用选择器（\*）、子选择器（>）和相邻同胞选择器（+）并不在这四个等级中，所以它们的权值都为 0 ；
- 样式表的来源不同时，优先级顺序为：内联样式 > 内部样式 > 外部样式 > 浏览器用户自定义样式 > 浏览器默认样式。

### 2. **伪元素和伪类的区别和作用？（重要）**

重要，回答完全

**总结：\*\*\*\***伪类是通过在元素选择器上加入伪类改变元素状态，而伪元素通过对元素的操作进行对元素的改变\*\*。

**换句话说伪类和伪元素的区别就是伪类的操作对象是文档树中已有的元素，而伪元素则创建了一个文档树以外的元素。**

伪元素是行内非替换元素，设置宽和高的时候需要 display：inline-block

- 伪元素：在内容元素的前后插入额外的元素或样式，但是这些元素实际上并不在文档中生成。它们只在外部显示可见，但不会在文档的源代码中找到它们，因此，称为“伪”元素。例如：

```css
p::before {
  content: "第一章：";
}
p::after {
  content: "Hot!";
}
p::first-line {
  background: red;
}
p::first-letter {
  font-size: 30px;
}
```

- 伪类：伪类是选择器的一种，它用于选择处于特定状态的元素。将特殊的效果添加到特定选择器上。它是已有元素上添加类别的，不会产生新的元素。例如：

```css
a:hover {
  color: #ff00ff;
}
p:first-child {
  color: red;
}
```

### 3. display 的属性值及其作用（掌握）

| **属性值**   | **作用**                                                   |
| ------------ | ---------------------------------------------------------- |
| none         | **元素不显示，并且会从文档流中移除。**                     |
| block        | 块类型。默认宽度为父元素宽度，可设置宽高，换行显示。       |
| inline       | 行内元素类型。默认宽度为内容宽度，不可设置宽高，同行显示。 |
| inline-block | 默认宽度为内容宽度，可以设置宽高，同行显示。               |
| list-item    | 像块类型元素一样显示，并添加样式列表标记。                 |
| table        | 此元素会作为块级表格来显示。                               |
| inherit      | 规定应该从父元素继承 display 属性的值。                    |

### 4. 对盒模型的理解（重要）

CSS3 中的盒模型有以下两种：标准盒子模型、IE 盒子模型

![img](https://cdn.nlark.com/yuque/0/2020/png/1500604/1603600820746-e10daafa-451a-454e-9705-f8c358769d5b.png#align=left&display=inline&height=366&margin=%5Bobject%20Object%5D&originHeight=455&originWidth=746&size=0&status=done&style=none&width=600)

![img](https://cdn.nlark.com/yuque/0/2020/png/1500604/1603600820555-dc6ed390-d47e-412b-942a-857bbe5f280d.png#align=left&display=inline&height=368&margin=%5Bobject%20Object%5D&originHeight=462&originWidth=791&size=0&status=done&style=none&width=630)

盒模型都是由四个部分组成的，分别是 margin、border、padding 和 content。

标准盒模型和 IE 盒模型的区别在于设置 width 和 height 时，所对应的范围不同：

- 标准盒模型的 width 和 height 属性的范围只包含了 content，
- **IE 盒模型的 width 和 height 属性的范围包含了 border、padding 和 content。**

可以通过修改元素的 box-sizing 属性来改变元素的盒模型：

- `box-sizing: content-box`表示标准盒模型（默认值）

- `box-sizing: border-box`表示 IE 盒模型（怪异盒模型）

### 5. display 的 block、inline 和 inline-block 的区别（重要）

（1）**block：**会独占一行，多个元素会另起一行，可以设置 width、height、margin 和 padding 属性；

（2）**inline：**元素不会独占一行，**设置 width、height 属性无效**。但可以设置水平方向的 margin 和 padding 属性，**不能设置垂直方向的 padding 和 margin**；

（3）**inline-block：**将对象设置为 inline 对象，但对象的内容作为 block 对象呈现，之后的内联对象会被排列在同一行内。

对于行内元素和块级元素，其特点如下：

**（1）行内元素**

- 设置宽高无效；
- **可以设置水平方向的 margin 和 padding 属性，不能设置垂直方向的 padding 和 margin；**
- 不会自动换行；

**（2）块级元素**

- 可以设置宽高；
- 设置 margin 和 padding 都有效；
- 可以自动换行；
- 多个块状，默认排列从上到下。

### 6. display:none 与 visibility:hidden 的区别（重要）

这两个属性都是让元素隐藏，不可见。<font color="#dd0000">**两者**</font>**两者\*\***区别如下：\*\*

（1）**在渲染树中**

- `display:none`**会让元素完全从渲染树中消失，渲染时不会占据任何空间；移除文档流**
- `visibility:hidden`**不会让元素从渲染树中消失，渲染的元素还会占据相应的空间，只是内容不可见。**

（2）**是否是\*\***继承属性\*\*

- `display:none`是**非继承属性**，子孙节点会随着父节点从渲染树消失，通过修改子孙节点的属性也无法显示；
- `visibility:hidden`是**继承属性**，子孙节点消失是由于继承了`hidden`，通过设置`visibility:visible`可以让子孙节点显示；

（3）**修改常规文档流中元素的** `**display**` **通常会造成文档的重排，但是修改**`**visibility**`**属性只会造成本元素的重绘；**

（4）如果使用读屏器，设置为`display:none`的内容不会被读取，设置为`visibility:hidden`的内容会被读取。

### 7. **margin 和 padding 的使用场景（重要）**

**行内级元素设置上下的 padding、margin 无效**

- 需要在 border 外侧添加空白，且空白处不需要背景（色）时，使用 margin；（**兄弟之间**）
- 需要在 border 内测添加空白，且空白处需要背景（色）时，使用 padding。（**父子之间**）

### 8.浮动的理解（重要）

**1.元素一旦浮动后, 脱离标准流**

**2.朝着向左或向右方向移动，直到自己的边界紧贴着包含块（一般是父元素）或者其他浮动元素的边界为止**

**3.定位元素会层叠在浮动元素上面**

**4.浮动元素之间不能层叠**

**5.浮动元素不能与行内级内容层叠，行内级内容将会被浮动元素推出**

**6.行内级元素、inline-block 元素浮动后，其顶部将与所在行的顶部对齐**

如果元素是向左（右）浮动，浮动元素的左（右）边界不能超出包含块的左（右）边界

如果一个元素浮动，另一个浮动元素已经在那个位置了，后浮动的元素将紧贴着前一个浮动元素（左浮找左浮，右浮找右浮）

如果水平方向剩余的空间不够显示浮动元素，浮动元素将向下移动，直到有充足的空间为止

### 9.BFC 理解（重要）

**它决定了元素如何对其内容进行定位,以及与其他元素的关系和相互作用**

**此规则规定了页面必须自动包含突出的浮动元素（否则浮动元素中的内容可能会跑到可滚动区域以外），而且所有块级盒子的左边界默认与包含块的左边界对齐。这组规则就是 BFC**

◼ FC 的全称是 Formatting Context，元素在标准流里面都是属于一个 FC 的；

◼ 块级元素的布局属于 Block Formatting Context（BFC）

 也就是 block level box 都是在 BFC 中布局的；

◼ 行内级元素的布局属于 Inline Formatting Context（IFC）

 而 inline level box 都是在 IFC 中布局的；

---

◼ MDN 上有整理出在哪些具体的情况下会创建 BFC：

 根元素（<html>）

 浮动元素（元素的 float 不是 none）

 绝对定位元素（元素的 position 为 absolute 或 fixed）

 行内块元素（元素的 display 为 inline-block）

 表格单元格（元素的 display 为 table-cell，HTML 表格单元格默认为该值），表格标题（元素的 display 为 table-caption，HTML 表格标题默认为该值）

 匿名表格单元格元素（元素的 display 为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是 HTML table、

row、tbody、thead、tfoot 的默认属性）或 inline-table）

 overflow 计算值(Computed)不为 visible 的块元素

 弹性元素（display 为 flex 或 inline-flex 元素的直接子元素）

 网格元素（display 为 grid 或 inline-grid 元素的直接子元素）

 display 值为 flow-root 的元素

---

◼ 简单概况如下：

 在 BFC 中，box 会在垂直方向上一个挨着一个的排布；

 垂直方向的间距由 margin 属性决定；

 在同一个 BFC 中，相邻两个 box 之间的 margin 会折叠（collapse）；

 在 BFC 中，每个元素的左边缘是紧挨着包含块的左边缘的；

◼ 那么这个东西有什么用呢？

 解决 margin 的折叠问题；

 解决浮动高度塌陷问题；

---

◼ 在同一个 BFC 中，相邻两个 box 之间的 margin 会折叠（collapse）

 官方文档明确的有说

 The vertical distance between two sibling boxes is determined by the 'margin' properties. Vertical margins between adjacent block-level boxes in a block formatting context collapse.

两个同级框之间的垂直距离由“margin”属性确定。块格式上下文中相邻块级别框之间的垂直边距折叠。

 那么如果我们让两个 box 是不同的 BFC 呢？那么就可以解决折叠问题。

---

BFC 的作用二：解决浮动高度塌陷（权威）

◼ 网上有很多说法，BFC 可以解决浮动高度塌陷，可以实现清除浮动的效果。

 但是从来没有给出过 BFC 可以解决高度塌陷的原理或者权威的文档说明；

 他们也压根没有办法解释，为什么可以解决浮动高度的塌陷问题，但是不能解决绝对定位元素的高度塌陷问题呢？

◼ 事实上，BFC 解决高度塌陷需要满足两个条件：

 浮动元素的父元素触发 BFC，形成独立的块级格式化上下文（Block Formatting Context）；

 浮动元素的父元素的高度是 auto 的；

◼ BFC 的高度是 auto 的情况下，是如下方法计算高度的

 1.如果只有 inline-level，是行高的顶部和底部的距离；

 2.如果有 block-level，是由最顶层的块上边缘和最底层块盒子的下边缘之间的距离

 3.如果有绝对定位元素，将被忽略；

 4.如果有浮动元素，那么会增加高度以包括这些浮动元素的下边缘

### 10.CSS 有几种定位方式、子绝父相、绝对/固定元素特点、z-index（重要）

**static**: 正常文档流定位，此时 top, right, bottom, left 和 z-index 属性无效，块级元素从上往下纵向排布，⾏级元素从左向右排列。

**relative**：相对定位，此时的『相对』是相对于正常⽂档流的位置。

**absolute**：相对于最近的非 static 定位祖先元素的偏移，来确定元素位置，比如⼀个绝对定位元素它的父级、和祖父级元素都为 relative，它会相对他的父级而产生偏移。

**fixed**：指定元素相对于屏幕视口（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变，比如那种回到顶部的按钮⼀般都是⽤此定位⽅式。

**sticky**：粘性定位，特性近似于 relative 和 fixed 的合体，其在实际应用中的近似效果就是 IOS 通讯录滚动的时候的 『顶屁股』。

---

**相对定位不会脱离标准流，绝对定位、固定定位会脱离标准流**

---

◼ 在绝大数情况下，子元素的**绝对定位都是相对于父元素进行定位**

◼ 如果希望子元素相对于父元素进行定位，又不希望父元素脱标，常用解决方案是：

 父元素设置 position: relative（让父元素成为定位元素，而且父元素不脱离标准流）

 子元素设置 position: absolute

 简称为“子绝父相”

---

◼ 可以随意设置宽高

◼ 宽高默认由内容决定

◼ 不再受标准流的约束

 不再严格按照从上到下、从左到右排布

 不再严格区分块级(block)、行内级(inline)，行内块级(inline-block)的很多特性都会消失

◼ 不再给父元素汇报宽高数据

◼ 脱标元素内部默认还是按照标准流布局

---

**z-index 只对定位元素生效**

### 11. 为什么有时候用**translate**来改变位置而不是定位？ （重要）

translate 是 transform 属性的⼀个值。**改变 transform 或 opacity 不会触发浏览器重新布局（reflow）或重绘（repaint），只会触发复合（compositions）**。**而改变绝对定位会触发重新布局，进而触发重绘和复合。**

transform 使浏览器为元素创建⼀个 GPU 图层，但改变绝对定位会使⽤到 CPU。 因此 translate()更高效，可以缩短平滑动画的绘制时间。 而 translate 改变位置时，元素依然会占据其原始空间，绝对定位就不会发生这种情况。

### 12.absolute 与 fixed 共同点与不同点（重要）

**\*共同点\***：

改变行内元素的呈现方式，将 display 置为 inline-block

使元素脱离普通文档流，不再占据文档物理空间

覆盖非定位文档元素

**\*不同点\***：

abuselute 与 fixed 的根元素不同，**abuselute 的根元素可以设置，fixed 根元素是浏览器。**

在有滚动条的页面中，absolute 会跟着父元素进行移动，fixed 固定在页面的具体位置。

### 13. 对 sticky 定位的理解（重要）

sticky 英文字面意思是粘贴，所以可以把它称之为粘性定位。语法：**position: sticky;** **基于用户的滚动位置来定位。**

粘性定位的元素是依赖于用户的滚动，在 **position:relative** 与 **position:fixed** 定位之间切换。它的行为就像 **position:relative;** 而当页面滚动超出目标区域时，它的表现就像 **position:fixed;**，它会固定在目标位置。元素定位表现为在跨越特定阈值前为相对定位，之后为固定定位。这个特定阈值指的是 top, right, bottom 或 left 之一，换言之，指定 top, right, bottom 或 left 四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同。

### 14.flex 布局的理解（重要）

Flex 是 FlexibleBox 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。任何一个容器都可以指定为 Flex 布局。行内元素也可以使用 Flex 布局。

注意，设为 Flex 布局以后，**子元素的 float、clear 和 vertical-align 属性将失效**。采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。容器默认存在两根轴：**水平的主轴（main axis）和垂直的交叉轴（cross axis**），项目默认沿水平主轴排列。

**justify-content** 属性定义了浏览器之间，如何分配顺着弹性容器主轴 (或者网格行轴) 的元素之间及其周围的空间。

**align-items** 属性将所有直接子节点上的 align-self 值设置为一个组。align-self 属性设置项目在其包含块中在交叉轴方向上的对齐方式。

你在教程中常看到的 flex: 1 或者 flex: 2 等等。它相当于 flex: 1 1 0 或者 flex: 2 1 0。元素可以在 flex-basis 为 0 的基础上伸缩。

### 15.高度塌陷问题、清除浮动（重要）

◼ 由于浮动元素脱离了标准流，变成了脱标元素，所以不再向父元素汇报高度

 父元素计算总高度时，就不会计算浮动子元素的高度，导致了高度坍塌的问题

◼ 解决父元素高度坍塌问题的过程，一般叫做清浮动（清理浮动、清除浮动）

◼ 清浮动的目的是

 让父元素计算总高度的时候，把浮动子元素的高度算进去

---

◼ clear 属性是做什么的呢?

 clear 属性可以指定一个元素是否必须移动(清除浮动后)到在它之前的浮动元素下面;

◼ clear 的常用取值

 left：要求元素的顶部低于之前生成的所有左浮动元素的底部

 right：要求元素的顶部低于之前生成的所有右浮动元素的底部

 both：要求元素的顶部低于之前生成的所有浮动元素的底部

 none：默认值，无特殊要求

---

◼ 给父元素增加::after 伪元素

 纯 CSS 样式解决，结构与样式分离（推荐）

```css
.clear_fix::after {
  content: "";
  clear: both;
  display: block;
  /* 浏览器兼容 */
  visibility: hidden;
  height: 0;
}

.clear_fix {
  *zoom: 1;
  /* IE67兼容 */
}
```

### 16.块级元素快速居中（重要）

1.在父元素有宽高的情况下设置 flex，子元素设置 margin：auto 可以实现快速上下居中

### 17.上下 margin 传递、折叠问题（重要）

◼ margin-top 传递

 如果块级元素的顶部线和父元素的顶部线重叠，那么这个块级元素的 margin-top 值会传递给父元素

◼ margin-bottom 传递

 如果块级元素的底部线和父元素的底部线重写，并且父元素的高度是 auto，那么这个块级元素的 margin-bottom 值会传递给父元素

**◼ 如何防止出现传递问题？**

 给父元素设置 padding-top\padding-bottom

 给父元素设置 border

 **触发 BFC:** **设置 overflow 为 auto**

◼ 建议

 margin 一般是用来设置兄弟元素之间的间距

 padding 一般是用来设置父子元素之间的间距

---

◼ 垂直方向上相邻的 2 个 margin（margin-top、margin-bottom）有可能会合并为 1 个 margin，这种现象叫做 collapse（折叠）

◼ 水平方向上的 margin（margin-left、margin-right）永远不会 collapse

◼ 折叠后最终值的计算规则

 两个值进行比较，取较大的值

◼ 如何防止 margin collapse？

 只设置其中一个元素的 margin

---

◼ 两个兄弟块级元素之间上下 margin 的折叠

◼ 父子块级元素之间 margin 的折叠

![img](https://cdn.nlark.com/yuque/0/2023/png/33717531/1673235200098-19de0436-8f6d-4632-9ef9-a7b175e2e609.png)

### 18. transition 和 animation 的区别（重要）

- **transition 是过度属性**，强调过度，它的实现需要触发一个事件（比如鼠标移动上去，焦点，点击等）才执行动画。它类似于 flash 的补间动画，设置一个开始关键帧，一个结束关键帧。
- **animation 是动画属性**，它的实现不需要触发事件，设定好时间之后可以自己执行，且可以循环一个动画。它也类似于 flash 的补间动画，但是它可以设置多个关键帧（用@keyframe 定义）完成动画。
- animation: 3s ease-in 1s 2 reverse both paused slidein;

### 19.百分比和 VW 的区别（重要）

百分比是相对于父元素的，vw 是相对于视口宽度的

### 20.如何让浏览器支持小字体（重要）

transform：scale（），通过缩放来缩小

### 21.css3 有哪些新特性？

- 圆角（border-radius）
- [阴影（box-shadow）](https://link.juejin.cn?target=https%3A%2F%2Fwww.runoob.com%2Fcssref%2Fcss3-pr-box-shadow.html)
- [对文字加特效（text-shadow）](https://link.juejin.cn?target=https%3A%2F%2Fwww.runoob.com%2Fcssref%2Fcss3-pr-text-shadow.html)
- [线性渐变（gradient）](https://link.juejin.cn?target=https%3A%2F%2Fwww.runoob.com%2Fcssref%2Ffunc-linear-gradient.html)
- keyframes 定义动画
- 变换（transform）
- 更多的 CSS 选择器
- 多背景设置
- 色彩模式，如 rgba
- 伪元素 ::selection
- 媒体查询
- 多栏布局
- 图片边框（border-image）

### 22.水平居中

行内元素水平居中

```css
<p class="inLine">块级元素中的文字居中</p>

<div class="inLine">
<span>行内元素的水平居中需要将text-align加入到父级块元素上</span>
</div>

<style>
.inLine{
  text-align: center;
}
</style>
```

定宽块状元素水平居中

```css
<div class="blockHaveWidth">定宽块状元素水平居中</div>
<style>

.blockHaveWidth{
  border:solid 1px black;
  width:200px;
  text-align: center;

  margin: 0 auto;
}
</style>
```

### 23.居中

方法一：利用定位（常用方法,推荐）

```javascript
.parent{
	position:relative;
}
.child{
	position:absolute;
    top:50%;
    left:50%;
    margin-top:-50px;
    margin-left:-50px;
}
```

方法一的原理就是定位中心点是盒子的左上顶点，所以定位之后我们需要回退盒子一半的距离。

方法二：利用 margin:auto;

```javascript
.parent{
	position:relative;
}
.child{
    position:absolute;
    margin:auto;
    top:0;
    left:0;
    right:0;
    bottom:0;
}
```

方法三：利用 display:table-cell;

.parent{

display:table-cell;

vertical-align:middle;

text-align:center;

}

.child{

display:inline-block;

}

方法四：利用 display：flex;设置垂直水平都居中；

.parent{

display:flex;

justify-content:center;

align-items:center;

}

方法五：计算父盒子与子盒子的空间距离(这跟方法一是一个道理)；

计算方法：父盒子高度或者宽度的一半减去子盒子高度或者宽的的一半。

.child{

margin-top:200px;

margin-left:200px;

}

方法六：利用 transform

.parent{

position:relative;

}

.child{

position:absolute;

top:50%;

left:50%;

transform:translate(-50%,-50%);

}

方法七：利用 calc 计算

.parent{

position:relative;

}

.child{

position:absolute;

top:calc(200px);//（父元素高-子元素高）÷ 2=200px

let:calc(200px);//（父元素宽-子元素宽）÷ 2=200px

}

###

---

### 1.link 理解、 link 和@import 的区别、dns-prefetch（掌握）

◼ link 元素是外部资源链接元素，规范了文档与外部资源的关系

 link 元素通常是在 head 元素中

◼ 最常用的链接是样式表（CSS）；

 此外也可以被用来创建站点图标（比如 “favicon” 图标）；

◼ link 元素常见的属性：

 href：此属性指定被链接资源的 URL。 URL 可以是绝对的，也可以是相对的。

 rel：指定链接类型，常见的链接类型：https://developer.mozilla.org/zh-CN/docs/Web/HTML/Link_types

 icon：站点图标；

 stylesheet：CSS 样式；

---

两者都是外部引用 CSS 的方式，它们的区别如下：

- link 是 XHTML 标签，除了加载 CSS 外，还可以定义 RSS 等其他事务；**_@import 属于 CSS 范畴，只能加载 CSS。_**
- link 引用 CSS 时，在页面载入时同时加载；@import 需要页面网页完全载入以后加载。
- link 是 XHTML 标签，无兼容问题；@import 是在 CSS2.1 提出的，低版本的浏览器不支持。
- link 支持使用 Javascript 控制 DOM 去改变样式；而@import 不支持。

---

当浏览器从（第三方）服务器请求资源时，必须先将该[跨域](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS)域名解析为 IP 地址，然后浏览器才能发出请求。此过程称为 DNS 解析。DNS 缓存可以帮助减少此延迟，而 **DNS 解析可以导致请求增加明显的延迟**。对于打开了与许多第三方的连接的网站，此延迟可能会大大降低加载性能。 **增加性能**

```html
<link rel="dns-prefetch" href="https://fonts.googleapis.com/" />
```

### 2. 隐藏元素的方法有哪些（掌握）

- **display: none**：渲染树不会包含该渲染对象，因此该元素不会在页面中占据位置，也不会响应绑定的监听事件。
- **visibility: hidden**：元素在页面中仍占据空间，但是不会响应绑定的监听事件。
- **opacity: 0**：将元素的透明度设置为 0，以此来实现元素的隐藏。元素在页面中仍然占据空间，并且能够响应元素绑定的监听事件。
- **position: absolute**：通过使用绝对定位将元素移除可视区域内，以此来实现元素的隐藏。
- **z-index: 负值**：来使其他元素遮盖住该元素，以此来实现隐藏。
- **clip/clip-path** ：使用元素裁剪的方法来实现元素的隐藏，这种方法下，元素仍在页面中占据位置，但是不会响应绑定的监听事件。
- **transform: scale(0,0)**：将元素缩放为 0，来实现元素的隐藏。这种方法下，元素仍在页面中占据位置，但是不会响应绑定的监听事件。

  **· rgba 设置颜色, 将 a 的值设置为 0 ：**rgba 的 a 设置的是 alpha 值, 可以设置透明度, 不影响子元素

### 3.背景图片居中（掌握）

translate（-50%）

left:50%

### 4.z-index 属性在什么情况下会失效（掌握）

通常 z-index 的使用是在有两个重叠的标签，在一定的情况下控制其中一个在另一个的上方或者下方出现。z-index 值越大就越是在上层。z-index 元素的 position 属性需要是 relative，absolute 或是 fixed。

z-index 属性在下列情况下会失效：

- 父元素 position 为 relative 时，子元素的 z-index 失效。解决：父元素 position 改为 absolute 或 static；
- 元素没有设置 position 属性为非 static 属性。解决：设置该元素的 position 属性为 relative，absolute 或是 fixed 中的一种；
- 元素在设置 z-index 的同时还设置了 float 浮动。解决：float 去除，改为 display：inline-block；

### 5.如何实现三栏布局（掌握）

三栏布局一般指的是页面中一共有三栏，**左右两栏宽度固定，中间自适应的布局**，三栏布局的具体实现：

- 利用**绝对定位**，左右两栏设置为绝对定位，中间设置对应方向大小的 margin 的值。

```css
.outer {
  position: relative;
  height: 100px;
}

.left {
  position: absolute;
  width: 100px;
  height: 100px;
  background: tomato;
}

.right {
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  height: 100px;
  background: gold;
}

.center {
  margin-left: 100px;
  margin-right: 200px;
  height: 100px;
  background: lightgreen;
}
```

利用 flex 布局，左右两栏设置固定大小，中间一栏设置为 fle

```css
.outer {
  display: flex;
  height: 100px;
}

.left {
  width: 100px;
  background: tomato;
}

.right {
  width: 100px;
  background: gold;
}

.center {
  flex: 1;
  background: lightgreen;
}
```

### 6.怎么实现两栏布局（掌握）

一般两栏布局指的是**左边一栏宽度固定，右边一栏宽度自适应**，两栏布局的具体实现：

- 利用浮动，将左边元素宽度设置为 200px，并且设置向左浮动。将右边元素的 margin-left 设置为 200px，宽度设置为 auto（默认为 auto，撑满整个父元素）。

```css
.outer {
  height: 100px;
}
.left {
  float: left;
  width: 200px;
  background: tomato;
}
.right {
  margin-left: 200px;
  width: auto;
  background: gold;
}
```

- 利用 flex 布局，将左边元素设置为固定宽度 200px，将右边的元素设置为 flex:1。

```css
.outer {
  display: flex;
  height: 100px;
}
.left {
  width: 200px;
  background: tomato;
}
.right {
  flex: 1;
  background: gold;
}
```

### 7. :first-of-type 和 :first-child 的区别是什么?

：first-child 匹配的是父元素的第一个子元素，可以说是结构上的第一个子元素。

first-of-type 匹配的是该类型的第一个元素，类型就是指冒号前面匹配到的元素。并不限制是第一个子元素，只要是该类型元素的第一个即可，这些元素的范围都属于同一级，也就是同辈。

p:first-child 匹配到的 p 元素，因为 p 元素是 div 的第一个子元素

span：first-child 匹配不到 span 元素，因为 span 是 div 的第二个子元素

p:first-of-type 匹配到 p 元素，因为 p 是 div 所有为 p 的子元素中的第一个。

span：first-of-type 匹配到 span 元素，因为 span 是 div 多有 span 的子元素中的第一个。

###

---

### 1. 替换元素的概念及计算规则、行内替换元素（img）、可替换元素（理解）

通过修改某个属性值呈现的内容就可以被替换的元素就称为“替换元素”。

替换元素除了内容可替换这一特性以外，还有以下特性：

- **内容的外观不受页面上的 CSS 的影响**：用专业的话讲就是在样式表现在 CSS 作用域之外。如何更改替换元素本身的外观需要类似 appearance 属性，或者浏览器自身暴露的一些样式接口。
- **有自己的尺寸**：在 Web 中，很多替换元素在没有明确尺寸设定的情况下，其默认的尺寸（不包括边框）是 300 像素 ×150 像素，如
- **在很多 CSS 属性上有自己的一套表现规则**：比较具有代表性的就是 vertical-align 属性，对于替换元素和非替换元素，vertical-align 属性值的解释是不一样的。比方说 vertical-align 的默认值的 baseline，很简单的属性值，基线之意，被定义为字符 x 的下边缘，而替换元素的基线却被硬生生定义成了元素的下边缘。
- **所有的替换元素都是内联水平元素**：也就是替换元素和替换元素、替换元素和文字都是可以在一行显示的。但是，替换元素默认的 display 值却是不一样的，有的是 inline，有的是 inline-block。

替换元素的尺寸从内而外分为三类：

- **固有尺寸：** 指的是替换内容原本的尺寸。例如，图片、视频作为一个独立文件存在的时候，都是有着自己的宽度和高度的。
- **HTML 尺寸：** 只能通过 HTML 原生属性改变，这些 HTML 原生属性包括的 width 和 height 属性、的 size 属性。
- **CSS 尺寸：** 特指可以通过 CSS 的 width 和 height 或者 max-width/min-width 和 max-height/min-height 设置的尺寸，对应盒尺寸中的 content box。

这三层结构的计算规则具体如下：

（1）如果没有 CSS 尺寸和 HTML 尺寸，则使用固有尺寸作为最终的宽高。

（2）如果没有 CSS 尺寸，则使用 HTML 尺寸作为最终的宽高。

（3）如果有 CSS 尺寸，则最终尺寸由 CSS 属性决定。

（4）如果“固有尺寸”含有固有的宽高比例，同时仅设置了宽度或仅设置了高度，则元素依然按照固有的宽高比例显示。

（5）如果上面的条件都不符合，则最终宽度表现为 300 像素，高度为 150 像素。

（6）内联替换元素和块级替换元素使用上面同一套尺寸计算规则。

---

1.和其他行内级元素在同一行显示

2.可以设置宽度和高度

在 [CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS) 中，**可替换元素（replaced element）的展现效果不是由 CSS 来控制的**。这些元素是一种外部对象，它们外观的渲染，是独立于 CSS 的。

简单来说，它们的内容不受当前文档的样式的影响。CSS 可以影响可替换元素的位置，但不会影响到可替换元素自身的内（文本缺失，待补充）

### 2. 对 CSSSprites 的理解（理解）

CSSSprites（精灵图），将一个页面涉及到的所有图片都包含到一张大图中去，然后利用 CSS 的 background-image，background-repeat，background-position 属性的组合进行背景定位。

**优点：**

- 利用`CSS Sprites`能很好地**减少网页的 http 请求，从而大大提高了页面的性能**，这是`CSS Sprites`最大的优点；
- `CSS Sprites`能减少图片的字节，把 3 张图片合并成 1 张图片的字节总是小于这 3 张图片的字节总和。

**缺点：**

- 在图片合并时，要把多张图片有序的、合理的合并成一张图片，还要留好足够的空间，防止板块内出现不必要的背景。在宽屏及高分辨率下的自适应页面，如果背景不够宽，很容易出现背景断裂；
- `CSSSprites`在开发的时候相对来说有点麻烦，需要借助`photoshop`或其他工具来对每个背景单元测量其准确的位置。
- 维护方面：`CSS Sprites`在维护的时候比较麻烦，页面背景有少许改动时，就要改这张合并的图片，无需改的地方尽量不要动，这样避免改动更多的`CSS`，如果在原来的地方放不下，又只能（最好）往下加图片，这样图片的字节就增加了，还要改动`CSS`。

### 3. 什么是物理像素，逻辑像素和像素密度，为什么在移动端开发时需要用到@3x, @2x 这种图片？（理解）

以 iPhone XS 为例，当写 CSS 代码时，针对于单位 px，其宽度为 414px & 896px，也就是说当赋予一个 DIV 元素宽度为 414px，这个 DIV 就会填满手机的宽度；

而如果有一把尺子来实际测量这部手机的物理像素，实际为 1242\*2688 物理像素；经过计算可知，1242/414=3，也就是说，在单边上，一个逻辑像素=3 个物理像素，就说这个屏幕的像素密度为 3，也就是常说的 3 倍屏。

对于图片来说，为了保证其不失真，1 个图片像素至少要对应一个物理像素，假如原始图片是 500300 像素，那么在 3 倍屏上就要放一个 1500900 像素的图片才能保证 1 个物理像素至少对应一个图片像素，才能不失真。

![img](https://cdn.nlark.com/yuque/0/2020/jpeg/1500604/1605252903834-27a1d90a-7e04-49bc-822a-dadcf974c141.jpeg#align=left&display=inline&height=1478&margin=%5Bobject%20Object%5D&originHeight=1478&originWidth=1600&size=0&status=done&style=stroke&width=1600)

当然，也可以针对所有屏幕，都只提供最高清图片。虽然低密度屏幕用不到那么多图片像素，而且会因为下载多余的像素造成带宽浪费和下载延迟，但从结果上说能保证图片在所有屏幕上都不会失真。

还可以使用 CSS 媒体查询来判断不同的像素密度，从而选择不同的图片:

```javascript
my-image { background: (low.png); }
@media only screen and (min-device-pixel-ratio: 1.5) {
  #my-image { background: (high.png); }
}
```

### 4. 对**line-height 的理解及其赋值方式（理解）**

**（1）line-height 的概念：**

- line-height 指一行文本的高度，包含了字间距，实际上是下一行基线到上一行基线距离；
- 如果一个标签没有定义 height 属性，那么其最终表现的高度由 line-height 决定；
- 一个容器没有设置高度，那么撑开容器高度的是 line-height，而不是容器内的文本内容；
- 把 line-height 值设置为 height 一样大小的值可以实现单行文字的垂直居中；
- line-height 和 height 都能撑开一个高度；

**（2）line-height 的赋值方式：**

- 带单位：px 是固定值，而 em 会参考父元素 font-size 值计算自身的行高
- 纯数字：会把比例传递给后代。例如，父级行高为 1.5，子元素字体为 18px，则子元素行高为 1.5 \* 18 = 27px
- 百分比：将计算后的值传递给后代

### 5.lable 与 input 结合优点（理解）

将一个 <label> 和一个 [](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input) 元素相关联主要有这些优点：

1.标签文本不仅与其相应的文本输入元素在视觉上相关联，程序中也是如此。这意味着，当用户聚焦到这个表单输入元素时，屏幕阅读器可以读出标签，让使用辅助技术的用户更容易理解应输入什么数据。

2.你可以点击关联的标签来聚焦或者激活这个输入元素，就像直接点击输入元素一样。这扩大了元素的可点击区域，让包括使用触屏设备在内的用户更容易激活这个元素。

将一个 <label> 和一个 <input> 元素匹配在一起，你需要给 <input> 一个 id 属性。而 <label> 需要一个 for 属性，其值和 <input> 的 id 一样。

另外，你也可以将 <input> 直接放在 <label> 里，此时则不需要 for 和 id 属性，因为关联已隐含存在：

### 6.视口和画布（理解）

◼ 视口（Viewport）

 文档的可视区域

 如右图红框所示

◼ 画布（Canvas）

 用于渲染文档的区域

 文档内容超出视口范围，可以通过滚动查看

 如右图黑框所示

◼ 宽高对比

 画布 >= 视口

### 7.px、em、rem 的区别及使用场景（理解）

**em、rem 在移动端正在被 vw,vh 取代**

**三者的区别：**

- px 是固定的像素，一旦设置了就无法因为适应页面大小而改变。
- em 和 rem 相对于 px 更具有灵活性，他们是相对长度单位，其长度不是固定的，更适用于响应式布局。
- em 是相对于其父元素来设置字体大小，这样就会存在一个问题，进行任何元素设置，都有可能需要知道他父元素的大小。而 rem 是相对于根元素，这样就意味着，只需要在根元素确定一个参考值。

**使用场景：**

- 对于只需要适配少部分移动设备，且分辨率对页面影响不大的，使用 px 即可 。
- 对于需要适配各种移动设备，使用 rem，例如需要适配 iPhone 和 iPad 等分辨率差别比较挺大的设备。

###

---

### 1.相对定位、绝对定位 top 为百分比的问题（了解）

元素加了相对定位，则 top:50% 表示元素相对于初始位置，y 轴偏移的距离等于元素最近一级父盒子的高度的百分之 50%，且**最近一级父盒子必须显式设置高度**；没有高度，top：百分比这种形式就不生效；

元素加了绝对定位，则 top:50% ，表示元素相对于带定位的父元素的距离，这里的百分比，指的是元素的最近一级带定位（除 static 外）的父盒子的高度的百分之五十。同样，**最近一级带定位的父盒子必须显式设置高度**，没设置高度，top：百分比这种形式就不生效；

### 2.css 不生效的原因（了解）

◼ 为何有时候编写的 CSS 属性不好使，有可能是因为

 选择器的优先级太低

 选择器没选中对应的元素

 CSS 属性的使用形式不对

✓ 元素不支持此 CSS 属性，比如 span 默认是不支持 width 和 height 的

✓ 浏览器不支持此 CSS 属性，比如旧版本的浏览器不支持一些 css module3 的某些属性

✓ 被同类型的 CSS 属性覆盖，比如 font 覆盖 font-size

◼ 建议

 充分利用浏览器的开发者工具进行调试（增加、修改样式）、查错

### 3. CSS 优化和提高性能的方法有哪些？（了解）

**加载性能：**

（1）css 压缩：将写好的 css 进行打包压缩，可以减小文件体积。

（2）css 单一样式：当需要下边距和左边距的时候，很多时候会选择使用 margin:top 0 bottom 0；但 margin-bottom:bottom;margin-left:left;执行效率会更高。

（3）减少使用@import，建议使用 link，因为后者在页面加载时一起加载，前者是等待页面加载完成之后再进行加载。

**选择器性能：**

（1）关键选择器（key selector）。选择器的最后面的部分为关键选择器（即用来匹配目标元素的部分）。CSS 选择符是从右到左进行匹配的。当使用后代选择器的时候，浏览器会遍历所有子元素来确定是否是指定的元素等等；

（2）如果规则拥有 ID 选择器作为其关键选择器，则不要为规则增加标签。过滤掉无关的规则（这样样式系统就不会浪费时间去匹配它们了）。

（3）避免使用通配规则，如\*{}计算次数惊人，只对需要用到的元素进行选择。

（4）尽量少的去对标签进行选择，而是用 class。

（5）尽量少的去使用后代选择器，降低选择器的权重值。后代选择器的开销是最高的，尽量将选择器的深度降到最低，最高不要超过三层，更多的使用类来关联每一个标签元素。

（6）了解哪些属性是可以通过继承而来的，然后避免对这些属性重复指定规则。

**渲染性能：**

（1）慎重使用高性能属性：浮动、定位。

（2）尽量减少页面重排、重绘。

（3）去除空规则：｛｝。空规则的产生原因一般来说是为了预留样式。去除这些空规则无疑能减少 css 文档体积。

（4）属性值为 0 时，不加单位。

（5）属性值为浮动小数 0.\*\*，可以省略小数点之前的 0。

（6）标准化各种浏览器前缀：带浏览器前缀的在前。标准属性在后。

（7）不使用@import 前缀，它会影响 css 的加载速度。

（8）选择器优化嵌套，尽量避免层级过深。

（9）css 雪碧图，同一页面相近部分的小图标，方便使用，减少页面的请求次数，但是同时图片本身会变大，使用时，优劣考虑清楚，再使用。

（10）正确使用 display 的属性，由于 display 的作用，某些样式组合会无效，徒增样式体积的同时也影响解析性能。

（11）不滥用 web 字体。对于中文网站来说 WebFonts 可能很陌生，国外却很流行。web fonts 通常体积庞大，而且一些浏览器在下载 web fonts 时会阻塞页面渲染损伤性能。

**可维护性、健壮性：**

（1）将具有相同属性的样式抽离出来，整合并通过 class 在页面中进行使用，提高 css 的可维护性。

（2）样式与内容分离：将 css 代码定义到外部 css 中。

### 4 对 requestAnimationframe 的理解（了解）

实现动画效果的方法比较多，Javascript 中可以通过定时器 setTimeout 来实现，CSS3 中可以使用 transition 和 animation 来实现，HTML5 中的 canvas 也可以实现。除此之外，HTML5 提供一个专门用于请求动画的 API，那就是 requestAnimationFrame，顾名思义就是**请求动画帧**。

MDN 对该方法的描述：

window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。

**语法：** `window.requestAnimationFrame(callback);` 其中，callback 是**下一次重绘之前更新动画帧所调用的函数**(即上面所说的回调函数)。该回调函数会被传入 DOMHighResTimeStamp 参数，它表示 requestAnimationFrame() 开始去执行回调函数的时刻。该方法属于**宏任务**，所以会在执行完微任务之后再去执行。

**取消动画：**使用 cancelAnimationFrame()来取消执行动画，该方法接收一个参数——requestAnimationFrame 默认返回的 id，只需要传入这个 id 就可以取消动画了。

**优势：**

- **CPU 节能**：使用 SetTinterval 实现的动画，当页面被隐藏或最小化时，SetTinterval 仍然在后台执行动画任务，由于此时页面处于不可见或不可用状态，刷新动画是没有意义的，完全是浪费 CPU 资源。而 RequestAnimationFrame 则完全不同，当页面处理未激活的状态下，该页面的屏幕刷新任务也会被系统暂停，因此跟着系统走的 RequestAnimationFrame 也会停止渲染，当页面被激活时，动画就从上次停留的地方继续执行，有效节省了 CPU 开销。
- **函数节流**：在高频率事件( resize, scroll 等)中，为了防止在一个刷新间隔内发生多次函数执行，RequestAnimationFrame 可保证每个刷新间隔内，函数只被执行一次，这样既能保证流畅性，也能更好的节省函数执行的开销，一个刷新间隔内函数执行多次时没有意义的，因为多数显示器每 16.7ms 刷新一次，多次绘制并不会在屏幕上体现出来。
- **减少 DOM 操作**：requestAnimationFrame 会把每一帧中的所有 DOM 操作集中起来，在一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率，一般来说，这个频率为每秒 60 帧。

**setTimeout 执行动画的缺点**：它通过设定间隔时间来不断改变图像位置，达到动画效果。但是容易出现卡顿、抖动的现象；原因是：

- settimeout 任务被放入异步队列，只有当主线程任务执行完后才会执行队列中的任务，因此实际执行时间总是比设定时间要晚；
- settimeout 的固定时间间隔不一定与屏幕刷新间隔时间相同，会引起丢帧。

### 5. CSS3 中有哪些新特性（了解）

- 新增各种 CSS 选择器 （: not(.input)：所有 class 不是“input”的节点）
- 圆角 （border-radius:8px）
- 多列布局 （multi-column layout）
- 阴影和反射 （Shadoweflect）
- 文字特效 （text-shadow）
- 文字渲染 （Text-decoration）
- 线性渐变 （gradient）
- 旋转 （transform）
- 增加了旋转,缩放,定位,倾斜,动画,多背景

### 6. 常见的图片格式及使用场景（了解）

（1）**BMP**，是无损的、既支持索引色也支持直接色的点阵图。这种图片格式几乎没有对数据进行压缩，所以 BMP 格式的图片通常是较大的文件。

（2）**GIF**是无损的、采用索引色的点阵图。采用 LZW 压缩算法进行编码。文件小，是 GIF 格式的优点，同时，GIF 格式还具有支持动画以及透明的优点。但是 GIF 格式仅支持 8bit 的索引色，所以 GIF 格式适用于对色彩要求不高同时需要文件体积较小的场景。

（3）**JPEG**是有损的、采用直接色的点阵图。JPEG 的图片的优点是采用了直接色，得益于更丰富的色彩，JPEG 非常适合用来存储照片，与 GIF 相比，JPEG 不适合用来存储企业 Logo、线框类的图。因为有损压缩会导致图片模糊，而直接色的选用，又会导致图片文件较 GIF 更大。

（4）**PNG-8**是无损的、使用索引色的点阵图。PNG 是一种比较新的图片格式，PNG-8 是非常好的 GIF 格式替代者，在可能的情况下，应该尽可能的使用 PNG-8 而不是 GIF，因为在相同的图片效果下，PNG-8 具有更小的文件体积。除此之外，PNG-8 还支持透明度的调节，而 GIF 并不支持。除非需要动画的支持，否则没有理由使用 GIF 而不是 PNG-8。

（5）**PNG-24**是无损的、使用直接色的点阵图。PNG-24 的优点在于它压缩了图片的数据，使得同样效果的图片，PNG-24 格式的文件大小要比 BMP 小得多。当然，PNG24 的图片还是要比 JPEG、GIF、PNG-8 大得多。

（6）**SVG**是无损的矢量图。SVG 是矢量图意味着 SVG 图片由直线和曲线以及绘制它们的方法组成。当放大 SVG 图片时，看到的还是线和曲线，而不会出现像素点。SVG 图片在放大时，不会失真，所以它适合用来绘制 Logo、Icon 等。

（7）**WebP**是谷歌开发的一种新图片格式，WebP 是同时支持有损和无损压缩的、使用直接色的点阵图。从名字就可以看出来它是为 Web 而生的，什么叫为 Web 而生呢？就是说相同质量的图片，WebP 具有更小的文件体积。现在网站上充满了大量的图片，如果能够降低每一个图片的文件大小，那么将大大减少浏览器和服务器之间的数据传输量，进而降低访问延迟，提升访问体验。目前只有 Chrome 浏览器和 Opera 浏览器支持 WebP 格式，兼容性不太好。

- 在无损压缩的情况下，相同质量的 WebP 图片，文件大小要比 PNG 小 26%；
- 在有损压缩的情况下，具有相同图片精度的 WebP 图片，文件大小要比 JPEG 小 25%~34%；
- WebP 图片格式支持图片透明度，一个无损压缩的 WebP 图片，如果要支持透明度只需要 22%的格外文件大小。

### 7.精灵图优点（了解）

 减少网页的 http 请求数量，加快网页响应速度，减轻服务器压力

 减小图片总大小

 解决了图片命名的困扰，只需要针对一张集合的图片命名

### 8. CSS 中可继承与不可继承属性有哪些（简单记忆）

**一、无继承性的属性**

1. **display**：规定元素应该生成的框的类型
2. **文本属性**：

- vertical-align：垂直文本对齐
- text-decoration：规定添加到文本的装饰
- text-shadow：文本阴影效果
- white-space：空白符的处理
- unicode-bidi：设置文本的方向

1. **盒子模型的属性**：width、height、margin、border、padding
2. **背景属性**：background、background-color、background-image、background-repeat、background-position、background-attachment
3. **定位属性**：float、clear、position、top、right、bottom、left、min-width、min-height、max-width、max-height、overflow、clip、z-index
4. **生成内容属性**：content、counter-reset、counter-increment
5. **轮廓样式属性**：outline-style、outline-width、outline-color、outline
6. **页面样式属性**：size、page-break-before、page-break-after
7. **声音样式属性**：pause-before、pause-after、pause、cue-before、cue-after、cue、play-during

**二、有继承性的属性**

1. **字体系列属性**

- font-family：字体系列
- font-weight：字体的粗细
- font-size：字体的大小
- font-style：字体的风格

1. **文本系列属性**

- text-indent：文本缩进
- text-align：文本水平对齐
- line-height：行高
- word-spacing：单词之间的间距
- letter-spacing：中文或者字母之间的间距
- text-transform：控制文本大小写（就是 uppercase、lowercase、capitalize 这三个）
- color：文本颜色

1. **元素可见性**

- visibility：控制元素显示隐藏

1. **列表布局属性**

- list-style：列表风格，包括 list-style-type、list-style-image 等

1. **光标属性**

- cursor：光标显示为何种形态

###

## 二.移动端（重要）

### 1.媒体查询的三种方式（**响应式适配**）

媒体查询的使用方式主要有三种：

 方式一：通过@media 和@import 使用不同的 CSS 规则（常用）；

![img](https://cdn.nlark.com/yuque/0/2023/png/33717531/1673855606326-f42c3b00-0d85-4b23-b4eb-dc3f59da6414.png)

 方式二：使用 media 属性为<style>, <link>, <source>和其他 HTML 元素指定特定的媒体类型；

![img](https://cdn.nlark.com/yuque/0/2023/png/33717531/1673855616228-dde2ac23-8946-46e5-a667-f7e150520a32.png)

 方式三：使用 Window.matchMedia() 和 MediaQueryList.addListener() 方法来测试和监控媒体状态；

### 2.vw/vh

vw

视窗宽度的 1%

vh

视窗高度的 1%

### 3.布局视口和视觉视口、理想视口

◼ 我们相对于 980px 布局的这个视口，称之为布局视口（layout

viewport）；

 布局视口的默认宽度是 980px；

◼ 视觉视口（visual viewport）

 如果默认情况下，我们按照 980px 显示内容，那么右侧有一部分区域

就会无法显示，所以手机端浏览器会默认对页面进行缩放以显示到用

户的可见区域中；

 那么显示在可见区域的这个视口，就是视觉视口（visual viewport）

◼ 理想视口（ideal viewport）：

 默认情况下的 layout viewport 并不适合我们进行布局；

 我们可以对 layout viewport 进行宽度和缩放的设置，以满足正常在一个移动端窗口的布局；

 这个时候可以设置 meta 中的 viewport；

### 4.vw 相比于 rem 的优势：

 优势一：不需要去计算 html 的 font-size 大小，也不需要给 html 设置这样一个 font-size；

 优势二：不会因为设置 html 的 font-size 大小，而必须给 body 再设置一个 font-size，防止继承；

 优势三：因为不依赖 font-size 的尺寸，所以不用担心某些原因 html 的 font-size 尺寸被篡改，页面尺寸混乱；

 优势四：vw 相比于 rem 更加语义化，1vw 刚才是 1/100 的 viewport 的大小;

 优势五：可以具备 rem 之前所有的优点；

### 5.meta 设置

```html
<meta
  name="viewport"
  content="width=device-width, 
  user-scalable=no,initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
/>
```

##

## 三.解决问题

### 1. li 与 li 之间有看不见的空白间隔是什么原因引起的？如何解决？

浏览器会把 inline 内联元素间的空白字符（空格、换行、Tab 等）渲染成一个空格。为了美观，通常是一个`<li>`放在一行，这导致`<li>`换行后产生换行字符，它变成一个空格，占用了一个字符的宽度。

**解决办法：**

（1）为`<li>`设置 float:left。不足：有些容器是不能设置浮动，如左右切换的焦点图等。

（2）将所有`<li>`写在同一行。不足：代码不美观。

（3）将`<ul>`内的字符尺寸直接设为 0，即 font-size:0。不足：`<ul>`中的其他字符尺寸也被设为 0，需要额外重新设定其他字符尺寸，且在 Safari 浏览器依然会出现空白间隔。

（4）消除`<ul>`的字符间隔 letter-spacing:-8px，不足：这也设置了`<li>`内的字符间隔，因此需要将`<li>`内的字符间隔设为默认 letter-spacing:normal。

### 2.如何使用单元格合并呢?边框合并

◼ 单元格合并分成两种情况:

 跨列合并: 使用 colspan

✓ 在最左边的单元格写上 colspan 属性, 并且省略掉合并的 td;

 跨行合并: 使用 rowspan

✓ 在最上面的单元格协商 rowspan 属性, 并且省略掉后面 tr 中的 td;

---

◼ 这里我们需要用到一个非常重要的属性:

 border-collapse CSS 属性是用来决定表格的边框是分开的还是合并的。

 table { border-collapse: collapse; }

 合并单元格的边框

### 3.设置单选框、多选框

 name 值相同的 radio 才具备单选功能

![img](https://cdn.nlark.com/yuque/0/2023/png/33717531/1673336788668-ddb23460-23f0-4f78-acc4-c9a7722d48f6.png)

 属于同一种类型的 checkbox，name 值要保持一致

![img](https://cdn.nlark.com/yuque/0/2023/png/33717531/1673336798456-841ada90-a2e6-464b-8cbd-255d8aa24dbf.png)

### 4.多个行内级元素中间空格去除

1.浮动可以解决

2.flex 布局

### 5.往 content 放入内容因 margin-right 原因最后一个盒子下移的问题

content 设置 1190，将五个 w230 的盒子放入 div，设置 margin-right：10px;

给 div 设置 margin-left：-10px；父元素 w=子元素 w+ml+mr；所以 div 会自动变成 1200px

### 6.边框重叠问题

.item{margin-left:-1px}

### 7.flex 布局最后一行混乱问题

添加 span ;span 设置同样宽度，个数为列数-2

### 8.单行、多行文本溢出隐藏

```css
overflow: hidden; // 溢出隐藏
text-overflow: ellipsis; // 溢出用省略号显示
white-space: nowrap; // 规定段落中的文本不进行换行
overflow: hidden; // 溢出隐藏
text-overflow: ellipsis; // 溢出用省略号显示
display: -webkit-box; // 作为弹性伸缩盒子模型显示。
-webkit-box-orient: vertical; // 设置伸缩盒子的子元素排列方式：从上到下垂直排列
-webkit-line-clamp: 3; // 显示的行数
```

### 9.解决图片下边缘空隙问题

方法一：vertical-align

方法二：图片设置成 block

### 10.为了 SEO 设置的文字不可以见

text-indent：-9999px

### 11.flex 中文字超出问题

设置 overflow：hidden

### 12.hover 添加底部边框导致文字上跳问题

给盒子本身添加 boder-bottom，设置 transparent

### 13.下拉菜单文本隐藏问题

![img](https://cdn.nlark.com/yuque/0/2023/png/33717531/1673777886783-eda3ff09-3c06-469a-9202-f238dacd24eb.png)

给父元素添加 overflow：hidden

### 14.边框渐变设计

![img](https://cdn.nlark.com/yuque/0/2023/png/33717531/1673942438924-e312f89b-a70b-41fe-9ed2-e488b5a26a52.png)

```css
.box1 {
  margin-top: 20px;
  width: 200px;
  height: 200px;
  border: 4px solid;
  border-image: linear-gradient(to right, #8f41e9, #578aef) 4;
}
```

###

## 三.常用补充

### 1.text-decoration

◼ text-decoration 用于设置文字的装饰线

 decoration 是装饰/装饰品的意思;

◼ text-decoration 有如下常见取值:

 none：无任何装饰线

✓ 可以去除 a 元素默认的下划线

 underline：下划线

 overline：上划线

 line-through：中划线（删除线）

◼ a 元素有下划线的本质是被添加了 text-decoration 属性

### 2.text-transform

◼ text-transform 用于设置文字的大小写转换

 Transform 单词是使变形/变换(形变);

◼ text-transform 有几个常见的值:

 capitalize：(使…首字母大写, 资本化的意思)将每个单词的首字符变为大写

 uppercase：(大写字母)将每个单词的所有字符变为大写

 lowercase：(小写字母)将每个单词的所有字符变为小写

 none：没有任何影响

◼ 实际开发中用 JavaScript 代码转化的更多.

### 3.text-indent

◼ text-indent 用于设置第一行内容的缩进

◼ text-indent: 2em; 刚好是缩进 2 个文字

### 4.text-align（重要）

◼ text-align: 直接翻译过来设置文本的对齐方式;

◼ MDN: 定义行内内容（例如文字）如何相对它的块父元素对齐;

◼ 常用的值

 left：左对齐

 right：右对齐

 center：正中间显示

 justify：两端对齐

只对行内级元素起作用，对块级元素没有作用（div）,想要实现，将内部元素改为 display：inline-block、或者设置 margin：0 auto

### 5.letter-spacing、word-spacing(一般)

◼ letter-spacing、word-spacing 分别用于设置字母、单词之间的间距

 默认是 0，可以设置为负数

### 6.font-size(重要)

◼ font-size 决定文字的大小

◼ 常用的设置

 具体数值+单位

✓ 比如 100px

✓ 也可以使用 em 单位(不推荐)：1em 代表 100%，2em 代表 200%，0.5em 代表 50%

 百分比

✓ 基于父元素的 font-size 计算，比如 50%表示等于父元素 font-size 的一半

### 7.font-family (重要, 不过一般仅设置一次)

◼ font-family 用于设置文字的字体名称

 可以设置 1 个或者多个字体名称;

 浏览器会选择列表中第一个该计算机上有安装的字体;

 或者是通过 @font-face 指定的可以直接下载的字体。

### 8.font-weight(重要)

◼ font-weight 用于设置文字的粗细（重量）

◼ 常见的取值:

◼ 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 ：每一个数字表示一个重量

◼ normal：等于 400

◼ bold：等于 700

◼ strong、b、h1~h6 等标签的 font-weight 默认就是 bold

### 9.font-style(一般)

◼ font-style 用于设置文字的常规、斜体显示

◼ normal：常规显示

◼ italic(斜体)：用字体的斜体显示(通常会有专门的字体)

◼ oblique(倾斜)：文本倾斜显示(仅仅是让文字倾斜)

◼ em、i、cite、address、var、dfn 等元素的 font-style 默认就是 italic

### 10.font-variant(了解)

◼ font-variant 可以影响小写字母的显示形式

 variant 是变形的意思;

◼ 可以设置的值如下

 normal：常规显示

 small-caps：将小写字母替换为缩小过的大写字母

### 11.line-height(常用)

◼ line-height 用于设置文本的行高

◼ 行高可以先简单理解为一行文字所占据的高度

◼ 行高的严格定义是：两行文字基线（baseline）之间的间距

◼ 基线（baseline）：与小写字母 x 最底部对齐的线

![img](https://cdn.nlark.com/yuque/0/2023/png/33717531/1673165103606-4c71f5b8-41c3-4ac3-8965-9efae3e9baf4.png)

◼ 注意区分 height 和 line-height 的区别

 height：元素的整体高度

 line-height：元素中每一行文字所占据的高度

◼ 应用实例：假设 div 中只有一行文字，如何让这行文字在 div 内部垂直居中

 让 line-height 等同于 height

### 12.font

◼ font 是一个缩写属性

 font 属性可以用来作为 font-style, font-variant, font-weight, font-size, line-height 和 font-family 属性的简写;

 font-style font-variant font-weight font-size/line-height font-family

◼ 规则:

 font-style、font-variant、font-weight 可以随意调换顺序，也可以省略

 /line-height 可以省略，如果不省略，必须跟在 font-size 后面

 font-size、font-family 不可以调换顺序，不可以省略

### 13.属性选择器(attribute selectors)

◼ 拥有某一个属性 [att]

◼ 属性等于某个值 [att=val]

◼ 其他了解的(不用记)

 [attr*=val]: 属性值包含某一个值 val;

 [attr^=val]: 属性值以 val 开头;

 [attr$=val]: 属性值以 val 结尾;

 [attr|=val]: 属性值等于 val 或者以 val 开头后面紧跟连接符-;

 [attr~=val]: 属性值包含 val, 如果有其他值必须以空格和 val 分割;

### 14.后代选择器（descendant combinator）兄弟选择器(sibling combinator)

◼ 后代选择器一: 所有的后代(直接/间接的后代)

 选择器之间以空格分割

◼ 后代选择器二: 直接子代选择器(必须是直接自带)

 选择器之间以 > 分割;

◼ 兄弟选择器一:相邻兄弟选择器

 使用符号 + 连接

◼ 兄弟选择器二: 普遍兄弟选择器 ~

 使用符号 ~ 连接

### 15.伪类理解

◼ 什么是伪类呢?

 Pseudo-classes: 翻译过来是伪类;

 伪类是选择器的一种，它用于选择处于特定状态的元素;

◼ 比如我们经常会实现的: 当手指放在一个元素上时, 显示另外一个颜色;

◼ 常见的伪类有

◼ 1.动态伪类（dynamic pseudo-classes）

 :link、:visited、:hover、:active、:focus

◼ 2.目标伪类（target pseudo-classes）

 :target

◼ 3.语言伪类（language pseudo-classes）

 :lang( )

◼ 4.元素状态伪类（UI element states pseudo-classes）

 :enabled、:disabled、:checked

◼ 5.结构伪类（structural pseudo-classes）(后续学习)

 :nth-child( )、:nth-last-child( )、:nth-of-type( )、:nth-last

of-type( )

 :first-child、:last-child、:first-of-type、:last-of-type

 :root、:only-child、:only-of-type、:empty

◼ 6.否定伪类（negation pseudo-classes）(后续学习)

 :not()

◼ 所有的伪类: https://developer.mozilla.org/zh

CN/docs/Web/CSS/Pseudo-classes

### 16.动态伪类

◼ 使用举例

 a:link 未访问的链接

 a:visited 已访问的链接

 a:hover 鼠标挪动到链接上(重要)

 a:active 激活的链接（鼠标在链接上长按住未松开）

◼ 使用注意

 :hover 必须放在:link 和:visited 后面才能完全生效

 :active 必须放在:hover 后面才能完全生效

 所以建议的编写顺序是 :link、:visited、:hover、:active

◼ 除了 a 元素，:hover、:active 也能用在其他元素上

◼ :focus 指当前拥有输入焦点的元素（能接收键盘输入）

 文本输入框一聚焦后，背景就会变红色

◼ 因为链接 a 元素可以被键盘的 Tab 键选中聚焦，所以:focus 也适用于 a 元素

◼ 动态伪类编写顺序建议为

 :link、:visited、:focus、:hover、:active

◼ 直接给 a 元素设置样式，相当于给 a 元素的所有动态伪类都设置了

 相当于 a:link、a:visited、a:hover、a:active、a:focus 的 color 都是 red

### 17.伪元素

◼ 常用的伪元素有

 :first-line、::first-line

 :first-letter、::first-letter

 :before、::before

 :after、::after

◼ 为了区分伪元素和伪类，建议伪元素使用 2 个冒号，比如::first-line

◼ ::first-line 可以针对首行文本设置属性

◼ ::first-letter 可以针对首字母设置属性

◼ ::before 和::after 用来在一个元素的内容之前或之后插入其他内容（可以是文字、图片)

 常通过 content 属性来为一个元素添加修饰性的内容

### 18.overflow

◼ overflow 用于控制内容溢出时的行为

 visible：溢出的内容照样可见

 hidden：溢出的内容直接裁剪

 scroll：溢出的内容被裁剪，但可以通过滚动机制查看

 会一直显示滚动条区域，滚动条区域占用的空间属于 width、height

 auto：自动根据内容是否溢出来决定是否提供滚动机制

### 19.盒子阴影 – box-shadow

◼ box-shadow 属性可以设置一个或者多个阴影

 每个阴影用<shadow>表示

 多个阴影之间用逗号,隔开，从前到后叠加

◼ <shadow>的常见格式如下

 第 1 个<length>：offset-x, 水平方向的偏移，正数往右偏移

 第 2 个<length>：offset-y, 垂直方向的偏移，正数往下偏移

 第 3 个<length>：blur-radius, 模糊半径

 第 4 个<length>：spread-radius, 延伸半径

 <color>：阴影的颜色，如果没有设置，就跟随 color 属性的颜色

 inset：外框阴影变成内框阴影

### 20.文字阴影 - text-shadow

◼ text-shadow 用法类似于 box-shadow，用于给文字添加阴影效果

◼ <shadow>的常见格式如下

![img](https://cdn.nlark.com/yuque/0/2023/png/33717531/1673248152030-9de4b479-1e1e-4951-9425-f6d2c47022c3.png)

 相当于 box-shadow, 它没有 spread-radius 的值;

◼ 我们可以通过一个网站测试文字的阴影:

 https://html-css-js.com/css/generator/box-shadow/

### 21.background-image、background-repeat、background-size、background-position

### 22.form 常见的属性

◼ form 通常作为表单元素的父元素:

 form 可以将整个表单作为一个整体来进行操作;

 比如对整个表单进行重置;

 比如对整个表单的数据进行提交;

◼ form 常见的属性如下:

◼ action

 用于提交表单数据的请求 URL

◼ method

 请求方法（get 和 post），默认是 get

◼ target

 在什么地方打开 URL（参考 a 元素的 target）

### 23.引用字体

 1.将字体放到对应的目录中

 2.通过@font-face 来引入字体, 并且设置格式

 3.使用字体

### 24.pointer-events

**pointer-events** CSS 属性指定在什么情况下 (如果有) 某个特定的图形元素可以成为鼠标事件的 [target(en-US)](https://developer.mozilla.org/en-US/docs/Web/API/Event/target)。

#
