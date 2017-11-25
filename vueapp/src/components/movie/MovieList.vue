<template>
<div  class="movie-list">
  <ul>
    <li v-for="movie in movieList" :key="movie.id" class="movie">
      <div class="movie-img">
        <img :src="movie.img" alt="">
      </div>
      <div class="movie-info">
        <p class="movie-name">{{movie.nm}}</p>
        <p>{{movie.ver}}</p>
        <p>主演：{{movie.star}}</p>
        <p>{{movie.showInfo}}</p>
      </div>
    </li>
  </ul>
  <div class="loading" v-show="loadingShow">
    <img src="../../assets/img/loading.gif" alt="">
  </div>
</div>
</template>

<script>
import Axios from "axios";//引入package.json里面的axios （npm install axios --save）
export default {
  data(){   //这里的data一定是函数
    return {
      movieList:[],
      loadingShow:true
    }
  },
  mounted(){//钩子函数写在这，请求数据
      let url1=API_PROXY + "http://m.maoyan.com/movie/list.json?type=hot&limit=10&offset="+this.movieList.length
    // url1表示猫眼电影的远程服务接口
    //从服务端获取信息所以用get()，向服务端发送信息用post()
    //Axios返回一个promise对象，成功执行then(),失败执行catch()
    let url2="/static/moviedata.json"//绝对地址，本地的电影数据json文件
    Axios.get(url2)
    .then(res=>{
      // console.log(res);
      this.loadingShow=false;
      let list=res.data.data.movies;
      let data=list.slice(
        this.movieList.length,this.movieList.length+10
      )
    })
    .catch(()=>{})
  }
}
</script>

<style scoped>
.movie{
  display:flex;
  padding:0.2rem 0.2rem;
  border:1px solid#ccc;
}
.movie-img{
 flex-grow:1;
 margin-right:0.2rem;
 width: 0;
}
.movie-info{
 flex-grow:2;
 width: 0;
}
.movie-list{
 margin:1rem 0;
}
.movie-name{
  font-weight:bolder;
}
</style>
