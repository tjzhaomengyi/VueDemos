<template>
  <div id="add-blog">
    <h2>添加博客</h2>
    <form>
      <label>博客标题</label>
      <input type="text" v-model="blog.title" required/>
      <label>博客内容</label>
      <textarea v-model="blog.content" ></textarea>
    </form>
  </div>
</template>

<script>
export default {
  name:'add-blog',
  data(){
    return {
      blog:{
        title:"",
        content:""
      }
    }
  }
}
</script>

<style>

</style>
