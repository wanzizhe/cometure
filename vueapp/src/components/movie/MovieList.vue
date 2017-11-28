<template>
<div class="movie-list">
  <ul>
    <li @click="goDetail(movie.id)" v-for="movie in moveList" :key="movie.id" class="movie">
    <!-- <router-link to="/movie/movieDetail/"> -->
      <div class="movie-img">
        <img :src="movie.img" alt="">
      </div>
      <div class="movie-info">
        <p class="movie-name">{{movie.nm}}</p>
        <p>{{movie.ver}}</p>
        <p>主演：{{movie.star}}</p>
        <p>{{movie.showInfo}}</p>
      </div>
    <!-- </router-link> -->
    </li>
  </ul>
  <div class="loading" v-show="loadingShow">
    <img src="../../assets/img/loading.gif" alt="">
  </div>
  <div class="tip" v-show="tip">
    <h4>数据已经到底了</h4>
  </div>
</div>

</template>
<script>
/*
npm install jquery --save
import $ from 'jquery'
$(window).on('scroll', function(){

});
*/
import Axios from "axios";//引入package.json里面的axios （npm install axios --save）
export default {
  data() {//这里的data一定是函数
    return {
      moveList: [],
      loadingShow: true,
      tip: false
    };
  },
  mounted() {//钩子函数写在这vue自动调用，请求数据，数据加载完成才会执行这个函数
    this.loadData();//封装完函数最开始应该先调用一次
    // 监听滚动条事件
    window.onscroll = () => {
      let clientHeight = document.documentElement.clientHeight;//可视区域高度（比内容要矮）
      let scrollTop = document.documentElement.scrollTop||document.body.scrollTop;//滚动条高度
      let scrollHeight = document.documentElement.scrollHeight;//整个高度，可视区域+滚动条高度=整个高度 可证明滚动条到底了
      if (clientHeight + scrollTop <= scrollHeight) {
        console.log('到底了');
        this.loadingShow = true;//因为前面用的是箭头函数，所以能取到vue对象下的loadingShow
        if (!this.tip) {
         console.log('加载了loadData()');
          this.loadData();//加载成功10条之后继续加载数据
        } else {
          this.loadingShow = false;
        }
      }
    };
  },
  methods: {
    loadData() {//每次滚动条到底都要再请求10条，于是把请求封装成函数loadDate
      // url1表示猫眼电影的远程服务接口
      let url1 =
        API_PROXY +
        "http://m.maoyan.com/movie/list.json?type=hot&limit=10&offset=" +
        this.moveList.length;
    //从服务端获取信息所以用get()，向服务端发送信息用post()
    //Axios返回一个promise对象，成功执行then(),失败执行catch()
    // url2表示本地的电影数据json文件
      let url2 = "/static/moviedata.json";//static静态资源文件，webpack打包时不会被压缩，直接拷贝，绝对地址，本地的电影数据json文件
      Axios.get(url2)
        .then(res => {
          // console.log(res);
          this.loadingShow = false;
          // 由于猫眼接口用不了了，所以我们无奈采用假分页实现异步分页，但其实每次是返回所有数据，通过slice函数从所有数据中截取所需数据
          let list = res.data.data.movies;
          let data = list.slice(
            this.moveList.length,
            this.moveList.length + 10
          );
          console.log(data);
          if (data.length < 10) {
            this.tip = true;
          }
          this.moveList = this.moveList.concat(data);
             //concat()把再次请求的数据加到之前的基础上，而不是用新的十条数据去覆盖之前的十条
          console.log(this.moveList);
        })
        .catch(() => {
          alert("获取数据失败");
        });
    },
    goDetail(movieId) {
      // console.log(movieId);
      this.$router.push('/movie/movieDetail/'+ movieId);
    }
  }
};
</script>
<style scoped>
.movie-list {
  margin: 1rem 0;
}
.movie {
  display: flex;
  padding: 0.2rem;
  border-bottom: 1px solid #ccc;
}
.movie-img {
  flex-grow: 1;
  width: 0;
  margin-right: 0.2rem;
}
.movie-img img {
  width: 100%;
}
.movie-info {
  flex-grow: 2;
  width: 0;
}
.movie-name {
  font-weight: bolder;
}
.loading {
  text-align: center;
}
.tip {
  text-align: center;
}
</style>




