//路由页面配置
import ShowBlogs from "./components/ShowBlogs";
import AddBlog from "./components/AddBlog";

export default[
  {
    path:"/",
    component:ShowBlogs
  },
  {
    path:"/add",
    component: AddBlog
  },
//  路由参数
  {
    path:"/blog/:id",
    component:SingleBlog
  }


]
