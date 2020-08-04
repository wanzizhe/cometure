const input = document.getElementById('input')
const btn = document.getElementById('btn')
btn.onclick = function() {
  console.log(input)
  navigator.serviceWorker
  .register('./msgAppsw.js', { scope: './' })
  .then(req => {
    console.log(req)
  })
  .catch(e => {
    console.log(e)
  })
  if(navigator.serviceWorker.controller != null){
    navigator.serviceWorker.controller.postMessage(input.value)
  }
}
navigator.serviceWorker.addEventListener('message', function(e) {
  const ul = document.getElementsByTagName('ul')[0]
  const li = document.createElement('li')
  console.log(e.data, '回传的值');
  li.innerHTML = e.data.message
  ul.appendChild(li)
})