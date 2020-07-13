<template>
   <div class="header" :style="{background:bg}"> <!--:相对于对象来说的，所以要加大括号-->
    <button class="home" @click="goHome">首页</button>
    <h2 class="title">
        <slot name="title">默认值</slot>
    </h2>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
       this.$router.push('/');
    }
  },
  props:['bg']
};
</script>

<style scoped>
.header {
  width: 100%;
  background-color: rgb(33, 150, 243);
  height: 1.1rem;
  position: fixed;
  top: 0;
  line-height: 1rem;
}
.home {
  background-color: transparent;
  border: 0;
  color: #fff;
  float: left;
  margin-top: 0.25rem;
}
.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
}
</style>
