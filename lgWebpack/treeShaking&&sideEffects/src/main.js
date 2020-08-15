// import { Button, Link } from './components'
// document.body.appendChild(Button())
// document.body.appendChild(Link())

import { Button } from './components'

document.body.appendChild(Button())
//因为模块中有了副作用的代码，所以tree-shaking并不会将这些模块移除，模块中的副作用代码都是用来服务整个模块的
//所以，在整个模块都没有引入的情况下，副作用代码就没有留下的必要所以说，Tree-shaking 只能移除没有用到的代码成员，而想要完整移除没有用到的模块，那就需要开启 sideEffects 特性了。