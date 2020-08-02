// //service worker安装成功后开始缓存所需的资源
// var CACHE_PREFIX = 'cms-sw-cache';
// var CACHE_VERSION = '0.0.20';
// var CACHE_NAME = CACHE_PREFIX+'-'+CACHE_VERSION;
// var allAssets = [
//     './a.html'
// ];
// self.addEventListener('install', function(event) {

//     //调试时跳过等待过程
//     self.skipWaiting();


//     // Perform install steps
//     //首先 event.waitUntil 你可以理解为 new Promise，
//     //它接受的实际参数只能是一个 promise，因为,caches 和 cache.addAll 返回的都是 Promise，
//     //这里就是一个串行的异步加载，当所有加载都成功时，那么 SW 就可以下一步。
//     //另外，event.waitUntil 还有另外一个重要好处，它可以用来延长一个事件作用的时间，
//     //这里特别针对于我们 SW 来说，比如我们使用 caches.open 是用来打开指定的缓存，但开启的时候，
//     //并不是一下就能调用成功，也有可能有一定延迟，由于系统会随时睡眠 SW，所以，为了防止执行中断，
//     //就需要使用 event.waitUntil 进行捕获。另外，event.waitUntil 会监听所有的异步 promise
//     //如果其中一个 promise 是 reject 状态，那么该次 event 是失败的。这就导致，我们的 SW 开启失败。
//     event.waitUntil(
//         caches.open(CACHE_NAME)
//             .then(function(cache) {
//                 console.log('[SW]: Opened cache');
//                 return cache.addAll(allAssets);
//             })
//     );

// });

const CHECK_CRASH_INTERVAL = 10 * 1000; // 每 10s 检查一次
const CRASH_THRESHOLD = 15 * 1000; // 15s 超过15s没有心跳则认为已经 crash
const pages = {}
let timer

function checkCrash() {
  const now = Date.now()
  for (var id in pages) {
    let page = pages[id]
    if ((now - page.t) > CRASH_THRESHOLD) {
      // 上报 crash
      console.log("页面发生崩溃")
      delete pages[id]
    }
  }
  if (Object.keys(pages).length == 0) {
    clearInterval(timer)
    timer = null
  }
}

this.addEventListener('message', (e) => {
  console.log("service worker 接收", e.data.type)
  const data = e.data;
  if (data.type === 'running') { // 正常心跳
    pages[data.id] = {
      t: Date.now()
    }
    if (!timer) {
      timer = setInterval(function () {
        checkCrash()
      }, CHECK_CRASH_INTERVAL)
    }
  } else if (data.type === 'clear') {
    delete pages[data.id]
  }
})