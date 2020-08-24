# webpack学习总结

## webpack背景

### webpack究竟解决了什么问题？

#### 1.模块化的演变过程
- 第一阶段： 基于`功能文件`进行划分，一个文件就是一个模块，通过`<script>`标签进行引入
    
    缺点：大量模块污染全局作用域，没有私有空间，命名冲突，无法管理模块和模块的关系，难维护

- 第二阶段：`命名空间方式`，每个模块挂载到一个全局对象下面进行引用，解决了命名冲突问题，其他问题还在

- 第三阶段：`立即执行函数表达式`方式，每个模块放在一个立即执行函数中，提供私有空间，解决全局污染，命名冲突，通过参数配置解决模块和模块之间的管理

#### 2.模块化规范
- `CommonJS`（node.js规范）一个文件就是一个模块，每个模块是单独的作用域，通过modules.exports导出，通过require函数导入，CommonJS是同步加载模块，大流量请求，应用效率低下

- `AMD (Asynchronous Module Definition) 异步模块定义规范`   require.js  弊端：同一个js文件请求很多文件，运行效率低
   
   函数为模块提供私有空间，加载和定义模块：define(['jquery','./module2.js'模块依赖路径], function($, module2){return {start: function(){模块}}})  
   
   加载模块：require(['./modules/module1.js'], function(module1){module1.start()})自动创建 `<script>`标签去请求资源

- `CMD`  sea.js   淘宝出品

- `ES Modules` 是ES6中制定的标准  兼容性问题   HTML CSS等资源文件都需要被模块化

  export {foo}

  import {foo} from './module.js'
  
## webpack核心特性


## webpack高阶内容


## 同款优秀案例比较