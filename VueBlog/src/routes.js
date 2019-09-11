//路由页面配置
import ShowBlogs from "./components/ShowBlogs";
import AddBlog from "./components/AddBlog";
import SingleBlog from "./components/SingleBlog";
import EditBlog from "./components/EditBlog";

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
  },
  //
  {
    path:"/edit/:id",
    component:EditBlog
  }


]
