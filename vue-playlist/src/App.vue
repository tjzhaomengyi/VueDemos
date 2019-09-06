<template>
  <div id="app">
<!--    <h1>{{title}}</h1>-->
<!--    <app-header v-on:titleChanged="updateTitle($event)" v-bind:title="title"></app-header>-->
<!--    <users v-bind:users="users"></users>-->
<!--    <users v-bind:users="users"></users>-->

<!--    <app-footer v-bind:title="title"></app-footer>-->
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/helloworld">Hello</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>


// import Header from './components/Header'
// import Footer from './components/Footer'
// import Users from './components/Users'

export default {
  name: 'App',
  data(){
    return{
      // title:"这是一个Vue脚手架项目"
      // users:[
      //   {name:"henry",position:"web开发",show:false},
      //   {name:"henry",position:"web开发",show:false},
      //   {name:"henry",position:"web开发",show:false},
      //   {name:"henry",position:"web开发",show:false},
      //   {name:"henry",position:"web开发",show:false},
      //   {name:"henry",position:"web开发",show:false}],
      // title:"传递的是一个值,(number string boolean)"
    }
  },
  components: {
    // HelloWorld
    // "users":Users,
    // "app-header":Header,
    // "app-footer":Footer
  },
  methods:{
    // updateTitle(title){
    //   this.title = title;
    // }
  }
}
</script>

<style scoped>
  h1{
    color:purple;
  }
</style>
