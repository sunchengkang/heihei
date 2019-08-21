<template>
  <div id="app">
    <button @click="jiajia">+1</button>
    <button @click="jianjian">-1</button>
    <button @click="sbjia">+5</button>
    <div>app中的{{$store.state.mycount}}</div>
    <div>cont的平方{{$store.getters.countpf}}</div>
    <div>年龄大于20{{$store.getters.dayu20}}</div> 
    <div>年龄大于20的人数{{$store.getters.dayu20length}}</div> 
    <div>
      年龄大于多少的人数{{$store.getters.dayuage(20)}}
    </div>
    <hehe></hehe>
  </div>
</template>

<script>
import hehe from "./components/hehe";
import store from "../src/store";
export default {
  components:{
    hehe
  },
  methods:{
    jiajia(){
      this.$store.commit("jia");
    },
    jianjian(){
      this.$store.commit("jian");
    },
    sbjia(){
      this.$store.commit("sbjia",5);
    }
  }
};
</script>

<style>

</style>
