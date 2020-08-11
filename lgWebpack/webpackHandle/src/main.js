import createHeading from './heading.js';
import './main.css';
import about from './about.md';
// console.log111(about, 'about');
const heading = createHeading();
document.body.append(heading);


//  HMR-------------------------------
console.log(createHeading(), '更新前'); 
let lastHeading = heading
//一旦这个模块的更新被我们手动处理了，就不会触发自动刷新；反之，如果没有手动处理，热替换会自动 fallback（回退）到自动刷新。
if (module.hot) {
    module.hot.accept('./heading.js', ()=>{

        // 刻意造成运行异常,如果webpack配置的是hot:true ,则热替换代码错误会自动跳到自动刷新
        // 在这种情况下,我们可以使用 hotOnly:true 的方式来解决,就不会自动刷新，也可以看到错误信息
        undefined.foo()
    
        document.body.removeChild(lastHeading);// 移除之前创建的元素
        lastHeading = createHeading();// 用新模块创建新元素
        document.body.append(lastHeading);// 要是需要保存页面状态，可能还要进行进一步处理
        console.log('heading.js更新啦') // 只输入console，页面并没有刷新
        console.log(createHeading(), '更新后');
    })
}