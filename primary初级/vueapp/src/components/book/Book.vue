<template>
  <div class="book">
    <common-header bg="rgb(121,85,72)">
      <span slot="title">Book</span>
    </common-header>
    <swipe class="my-swipe">
        <swipe-item class="slide1"></swipe-item>
        <swipe-item class="slide2"></swipe-item>
        <swipe-item class="slide3"></swipe-item>
    </swipe>
    <common-footer bg="rgb(121,85,72)">

    </common-footer>
  </div>
</template>

<script>
import CommonHeader from "../common/Header";
import CommonFooter from "../common/Footer";
import "vue-swipe/dist/vue-swipe.css"; //1
import { Swipe, SwipeItem } from "vue-swipe"; //2
export default {
  components: {
    CommonHeader,
    CommonFooter,
    swipe: Swipe, //3和2里面的第一次对应
    "swipe-item": SwipeItem //4和2里面第二个对应
  }
};
</script>

<style scoped>
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background-image: url('https://img3.doubanio.com/lpic/s24468373.jpg');
  color: #fff;
}

.slide2 {
  background-image:  url('https://img3.doubanio.com/lpic/s6989253.jpg');
  color: #000;
}

.slide3 {
  background-image: url('https://img3.doubanio.com/lpic/s27102925.jpg');
  color: #fff;
}
</style>

