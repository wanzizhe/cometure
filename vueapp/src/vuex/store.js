import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)//use全局应用Vuex

const state = {  //状态的，改变的东西存在这里
  photoList: []
};

const mutations = {  //mutations的作用是改变state里面的值
  setPhotoList(state, status) {
    state.photoList = status;
  }
};

const getters = { //相当于computed

};

const actions = {  //异步的，固定写法
  setPhotoList({commit}, status){
        commit('setPhotoList',status);
  }
};

export default new Vuex.Store({ //对象剪辑表示法
  state,
  mutations,
  getters,
  actions
});
