<template>
  <div class="detail">
    <div class="detail-content">
        <div>
          <img :src="detail.img" alt="">
        </div>
        <div class="detail-info">
            <h3 v-text="detail.nm"></h3>
            <p>{{detail.sc}}分</p>
            <p>{{detail.cat}}</p>
            <p>{{detail.src}}/{{detail.dur}}分钟</p>
            <p>{{detail.rt}}</p>
        </div>
    </div>
    <hr>
    <div>
      <h3>主演</h3>
      <p>{{detail.star}}</p>
    </div>
    <div>
      <hr>
      <h3>简介</h3>
      <p>{{detail.dra}}</p>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      detail: {}
    };
  },
  mounted() {
    let url1 =
      API_PROXY +
      "http://m.maoyan.com/movie/" +
      this.$route.params.movieId +
      ".json";
    let url2 = "/static/data/moviedetail.json";
    Axios.get(url2).then(res => {
      // console.log(res);
      this.detail = res.data.data.MovieDetailModel;
    });
  }
};
</script>

<style scoped>
.detail {
  margin: 1.1rem 0;
  padding:0 .2rem;
}
.detail-content{
  display: flex;
  margin:0 0 .5rem 0;
}
.detail-img{
flex-grow:1;
width: 0;
}
.detail-info{
  float:left;
  flex-grow:2;
  width: 0;
}
h3{
font-weight:bolder;
}
</style>
