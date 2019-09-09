<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.body}}</article>
  </div>
</template>

<script>
  export default {
    name:"single-blog",
    data(){
      return{
        id:this.$route.params.id, //拿到点击参数
        blog:{}//通过created请求获取
      }
    },
    created() {
      this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id)
        .then(function (data) {
          // console.log(data)
          this.blog = data.body
        })
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
