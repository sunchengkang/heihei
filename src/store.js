import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mycount: 0,
    students: [
      { name: "xh", age: 15 },
      { name: "ll", age: 25 },
      { name: "zs", age: 40 },
      { name: "ls", age: 60 }
    ]
  },
  mutations: {
    jia(state) {
      state.mycount++;
    },
    jian(state) {
      state.mycount--;
    },
    sbjia(state, num) {
      state.mycount += num;
    }
  },
  getters: {
    countpf(state) {
      return state.mycount * state.mycount;
    },
    dayu20(state) {
      return state.students.filter(stu=>stu.age>20)
    },
    dayu20length(state,getters){
      return getters.dayu20.length;
    },
    dayuage(state,getters){
      return function(age){
        return state.students.filter(stu=>stu.age>30)
      }
    }
  },
  actions: {

  }
});

