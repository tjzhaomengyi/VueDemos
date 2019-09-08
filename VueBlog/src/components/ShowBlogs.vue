<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索">
<!--    展示filter匹配的结果-->
    <div v-for="blog in filteredBlogs" class="single-blog">
<!--      自定义指令 和过滤器-->
      <h2 v-rainbow>{{blog.title | toUppercase}}</h2>
<!--      <h2>{{blog.title}}</h2>-->
      <article>{{blog.body | snippet}}</article>
    </div>
  </div>
</template>

<script>

    export default {
        name: 'show-blogs',
        data(){
            return{
                blogs:[],
                search:""
            }
        },
        created() {
            // this.$http.get("https://jsonplaceholder.typicode.com/posts")
                this.$http.get('static/posts.json')//获取本地json数据，json必须放在static目录下面
                .then(function (data) {
                    this.blogs = data.body.slice(0,10);
                    console.log(this.blogs);

                })

        },
        computed:{
            //实现搜索
            filteredBlogs:function () {
                return this.blogs.filter((blog)=>{
                    return blog.title.match(this.search)
                })
            },
        },
        //全局改局部，把main.js的自定义东西改到局部里面
        filters:{
            toUppercase(value) {
                return value.toUpperCase()
            }
        },
        directives:{
            'rainbow':{
                bind(el,binding,vnode){
                        el.style.color = "#" + Math.random().toString(16).slice(2,8)
                }
            }
        }

    }
</script>

<style>
#show-blogs{
  max-width:800px;
  margin:0 auto;
}
  .single-blog{
    pading:20px;
    margin:20px 0;
    box-sizing:border-box;
    background: #eee;
  }
</style>
