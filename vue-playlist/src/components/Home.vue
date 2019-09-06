<template>
  <div id="home">
    <!--    <h1>{{title}}</h1>-->
    <app-header v-on:titleChanged="updateTitle($event)" v-bind:title="title"></app-header>
    <users v-bind:users="users"></users>
    <users v-bind:users="users"></users>

    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>


  import Header from './Header'
  import Footer from './Footer'
  import Users from './Users'

  export default {
    name: 'home',
    data(){
      return{
        // title:"这是一个Vue脚手架项目"
        users:[
          // {name:"henry",position:"web开发",show:false},
          // {name:"henry",position:"web开发",show:false},
          // {name:"henry",position:"web开发",show:false},
          // {name:"henry",position:"web开发",show:false},
          // {name:"henry",position:"web开发",show:false},
          // {name:"henry",position:"web开发",show:false}

          ],
        title:"传递的是一个值,(number string boolean)"
      }
    },
    components: {
      // HelloWorld
      "users":Users,
      "app-header":Header,
      "app-footer":Footer
    },
    methods:{
      updateTitle(title){
        this.title = title;
      }
    },
    created() {
      this.$http.get("http://jsonplaceholder.typicode.com/users")
        .then((data) => {
          // console.log(data)
          this.users = data.body
        })
    }
  }
</script>

<style scoped>
  h1{
    color:purple;
  }
</style>
