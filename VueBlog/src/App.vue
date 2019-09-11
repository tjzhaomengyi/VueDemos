<template>
  <div id="app">
<!--    <add-blog></add-blog>-->
<!--    <show-blogs></show-blogs>-->
    <blog-header></blog-header>
  <router-view></router-view>
  </div>
</template>

<script>
  import AddBlog from './components/AddBlog'
  import ShowBlogs from './components/ShowBlogs'
  import BlogHeader from "./components/BlogHeader";
  import SingleBlog from "./components/SingleBlog";
  import EditBlog from "./components/EditBlog"

export default {
  name: 'App',
  components:{
    AddBlog,ShowBlogs,BlogHeader,SingleBlog,EditBlog
  }
}
</script>

<style>

</style>
