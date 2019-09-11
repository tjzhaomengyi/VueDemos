<template>
  <div id="single-blog">
    <h1>{{this.blog.title}}</h1>
    <article>{{this.blog.content}}</article>
    <p>作者:{{this.blog.author}}</p>
    <p>分类:</p>
    <ul>
      <li v-for="category in this.blog.categories">
        {{category}}
      </li>
    </ul>
    <button @click="deleteSingleBlog()">删除</button>
<!--    <router-link v-bind:to="'/blog/' + blog.id">-->

    <router-link :to="'/edit/'+id">编辑</router-link>
  </div>
</template>

<script>
  export default {
    name:"single-blog",
    data(){
      return{
        id:this.$route.params.id, //拿到点击参数
        blog:{},//通过created请求获取
        query :Bmob.Query("articles")
      }
    },
    created() {
      // this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id)
      this.query.get(this.id)
        .then(function (data) {
          // console.log(data.blog)
          return data.blog //这里是如何从bmob的后台数据中传给本地Blog对象
        }).catch(error =>{ //这里处理promise的变量，必须加上catch，否则，在then中无法拿到this.blog对象，接不到
          console.log(error)
        }).then(data=>{
          this.blog = data
          console.log(this.blog)
        })
    },
    methods:{
      //删除Blog
      deleteSingleBlog(){
        alert("确认删除该Blog？")
        this.query.destroy(this.id).then(
          res=>{
            console.log(res)
            this.$router.push({path:'/'}) //删除完成后跳转到主页面
          }).catch(err=>{
            console.log(err)
        })
      }
    }
  }
</script>

<style>
  #single-blog{
    max-width: 960px;
    margin:0 auto;
    padding: 20px;
    background: #eee;
    border:1px dotted #aaa ;
  }
</style>
