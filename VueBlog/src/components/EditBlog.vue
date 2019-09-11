<template>
  <div id="edit-blog">
    <h2>修改博客</h2>
    <form v-if="!submmitted">
      <label>博客标题</label>
      <input type="text" v-model="blog.title" required/>
      <label>博客内容</label>
      <textarea v-model="blog.content"></textarea>

      <div id="checkboxes">
        <label>Vue.js</label>
        <input type="checkbox" value="Vue.js" v-model="blog.categories"/>
        <label>Node.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.categories"/>
        <label>React.js</label>
        <input type="checkbox" value="React.js" v-model="blog.categories">
        <label>Angular4</label>
        <input type="checkbox" value="Angular4" v-model="blog.categories">
      </div>
      <label>作者:</label>
      <select v-model="blog.author">
        <option v-for="author in authors">{{author}}</option>
      </select>

      <button v-on:click.prevent="post">修改博客</button>
    </form>

    <div v-if="submmitted">
      <h3>您的博客发布成功！</h3>
    </div>

    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题:{{blog.title}}</p>
      <p>博客内容：</p>
      <p>{{blog.content}}</p>
      <p>博客分类:</p>
      <ul>
        <li v-for="category in blog.categories">{{category}}</li>
      </ul>
      <p>作者:{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'edit-blog',
    data() {
      return {
        id:this.$route.params.id,
        blog: {
          // title: "",
          // content: "",
          // categories: [],
          // author: ""
        },
        authors: ["aaa", "bbb", "cccc"],
        submmitted: false,
        query :Bmob.Query("articles")
      }
    },

    created(){

      this.fetchData()

    },
    //todo:
    methods: {
      post: function () {

        const query = Bmob.Query('articles')
        // 修改边间的blog
        query.get(this.id).then(res =>{
        // query.save().then(res => {
          res.set("blog",this.blog)
          res.save()
          console.log(res)
          alert("成功向Bmob Baas平台中添加数据")
        }).catch(err => {
          alert("向Bmob Baas平台中添加数据失败！！")
          console.log(err)
        })
      },

      fetchData:function(){
        // console.log(this.id)
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
      }
    }

  }
</script>

<style scoped>
  #add-blog * {
    box-sizing: border-box;
  }

  #add-blog {
    margin: 20px auto;
    max-width: 600px;
    padding: 20px
  }

  label {
    display: block;
    margin: 20px 0 10px;
  }

  input[type="text"], textarea, select {
    display: block;
    width: 100%;
    padding: 8px;
  }

  #checkboxes label {
    display: inline-block;
    margin-top: 0;
  }

  #checkboxes input {
    display: inline-block;
    margin-right: 10px;
  }

  button {
    display: block;
    margin: 20px 0;
    background: crimson;
    color: #fff;
    padding: 14px;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
  }

  #preview {
    padding:10px 20px;
    border:1px dotted #ccc;
    margin:30px 0;
  }

  h3{
    margin-top:10px;
  }

  textarea{
    height: 200px;
  }

</style>
