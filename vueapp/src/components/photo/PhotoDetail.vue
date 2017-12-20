<template>
  <v-touch class="detail" :style="styleObj" @swipeleft="swipeleft" @swiperight="swiperight" @tap="tap">

  </v-touch>
</template>

<script>
export default {
  data() {
    return {
      styleObj: {
        background: `#000 url(${this.$store.state.photoList[
          this.$route.params.index
        ].src}) no-repeat center/contain`
      }
    };
  },
  mounted() {
    console.log();
  },
  methods: {
    swipeleft() {
      console.log("left");
    },
    swiperight() {
      console.log('right');
    },
    tap(){

    }
  }
};
</script>

<style scoped>
.datail {
  margin: 1rem 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>

