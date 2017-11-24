<template>
<div>
  <h1>MovieList</h1>
  <ul>
    <li v-for=""></li>
  </ul>
</div>


</template>

<script>
import Axios from "axios";//引入package.json里面的axios （npm install axios --save）
export default {
  data(){   //这里的data一定是函数
    return {
      movieList:[]
    }
  },
  mounted(){//钩子函数写在这，请求数据
    Axios.get(API_PROXY + "http://m.maoyan.com/movie/list.json?type=hot&limit=10&offset=0")
    //从服务端获取信息所以用get()，向服务端发送信息用post()
    //Axios返回一个promise对象，成功执行then(),失败执行catch()
    .then(res=>{
      console.log(res);
    })
    .catch(()=>{})

  }

}
</script>

<style scoped>

</style>
