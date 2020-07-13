<template>
  <div class="albums">
    <a-player v-if="isShow" :autoplay="true" :music="songs" :showlrc="3"></a-player>
  </div>

</template>

<script>
import Axios from "axios";
import VueAplayer from "vue-aplayer";
export default {
  data() {
    return {
      songs: [],
      isShow: false
    };
  },
  components: {
    "a-player": VueAplayer //重新起名字，标签叫a-player
  },
  mounted() {
    Axios.get("/static/data/musicdata.json")
    .then(res => {
      let list = res.data.musicData;
      list.forEach(element => {
        this.songs.push({
          title: element.title,
          author: element.author,
          url: element.src,
          pic: element.musicImgSrc,
          lrc: "/static/" + element.lrc
        });
      });
      this.isShow = true;
    });
  }
};
</script>

<style scoped>
.albums {
  margin: 1rem 0;
}
</style>

