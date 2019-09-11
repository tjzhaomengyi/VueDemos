<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索">
    <!--    展示filter匹配的结果-->
    <div v-for="blog in filteredBlogs" class="single-blog">
      <!--      自定义指令 和过滤器-->
      <!--      绑定跳转属性-->
      <router-link v-bind:to="'/blog/' + blog.id">
        <h2 v-rainbow>{{blog.title | toUppercase}}</h2>
      </router-link>
      <!--      <h2>{{blog.title}}</h2>-->
      <article>{{blog.content | snippet}}</article>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'show-blogs',
    data() {
      return {
        blogs: [],
        search: ""
      }
    },
    created() {
      //todo:
      // this.$http.get("https://jsonplaceholder.typicode.com/posts")
      //使用bmob baas查询
      var query = Bmob.Query("articles")
      // query.select("title")
      // console.log(query.statTo("title"))
      query.find().then(res=>{//通过Bmob中articles表中的id查询出每个blog，每个blog有对应的ObjectID
        // console.log(res.blog.title)
        return res
      }).catch(error=>{
        console.log(error)
      }).then(data=>{
        var blogsArray=[];
        for(let key in data){
          console.log(data[key].objectId)
          data[key].blog.id = data[key].objectId
          blogsArray.push(data[key].blog)//把bmob中拿到的blogs放到本地的blogsArray中,这里一定要放blog对象
        }
        console.log(blogsArray)
        this.blogs = blogsArray
      })


      // this.$http.get('static/posts.json')//获取本地json数据，json必须放在static目录下面
      //   .then(function (data) {
      //
      //     // this.blogs = data.body.slice(0,10);
      //     return data.json()
      //   }).then(function (data) {
      //   var blogsArray = [];
      //   for (let key in data) {
      //     data[key].id = key;
      //     blogsArray.push(data[key])
      //   }
      //   // console.log(blogsArray)
      //   this.blogs = blogsArray
      //   // console.log(this.blogs)
      // })

    },
    computed: {
      //实现搜索
      filteredBlogs: function () {
        return this.blogs.filter((blog) => {
          return blog.title.match(this.search)
        })
      },
    },
    //全局改局部，把main.js的自定义东西改到局部里面
    filters: {
      toUppercase(value) {
        return value.toUpperCase()
      }
    },
    directives: {
      'rainbow': {
        bind(el, binding, vnode) {
          el.style.color = "#" + Math.random().toString(16).slice(2, 8)
        }
      }
    }

  }
</script>

<style>
  #show-blogs {
    max-width: 800px;
    margin: 0 auto;
  }

  .single-blog {
    pading: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
    border: 1px dotted #aaa
  }

  #show-blogs a {
    color: #444;
    text-decoration: none;

  }

  input[type="text"] {
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
  }

</style>
