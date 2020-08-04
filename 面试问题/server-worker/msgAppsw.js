self.addEventListener('message', function(e) {
    debugger
    console.log(e,'inputValue')
    console.log('11111111111111111111111111')
    const promise = self.clients.matchAll().then(function(clients) {
      let senderId = e.source ? e.source.id : 'unknow'
      clients.forEach(client => {
        // if (senderId === client.id) {
        //   return
        // } else {
          client.postMessage({
            client: senderId,
            message: e.data
          })
        // }
      })
    })
    console.log(promise, 'promise');
    e.waitUntil(promise)
  })