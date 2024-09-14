# kenaito-front

#### 前端模板

初始模板基于： [https://github.com/PanJiaChen/vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)

模板文档： [https://panjiachen.github.io/vue-element-admin-site/zh/guide/](https://panjiachen.github.io/vue-element-admin-site/zh/guide/)

#### 依赖组件

| 名称                    | 功能                                          | 官网地址                                                         |
|-----------------------|---------------------------------------------|--------------------------------------------------------------|
| sortable.js           | js拖拽库                                       | https://sortablejs.github.io/Vue.Draggable/#/simple          |
| vue-treeselect        | 下拉树组件                                       | https://vue-treeselect.js.org/                               |
| wangeditor/editor     | 富文本编辑工具                                     | https://www.wangeditor.com/                                  |
| mavon-editor          | 富文本编辑工具                                     | https://www.jianshu.com/p/fba836bf1499                       |
| clipboard             | 一键复制                                        | https://www.jianshu.com/p/0140e7b3f253                       |
| vue-codemirror        | 代码高亮编辑器                                     | https://codemirror.net/                                      |
| echarts               | 数据可视化图表                                     | https://echarts.apache.org/zh/index.html                     |
| file-saver            | 前端导出文件                                      | https://blog.csdn.net/xyphf/article/details/135146811        |
| fuse.js               | 模糊搜索库                                       | https://www.jb51.net/javascript/313000abq.htm                |
| jsencrypt             | RSA加密和解密                                    | https://blog.csdn.net/randy521520/article/details/134346184  |
| jszip                 | zip压缩库                                      | https://www.jb51.net/javascript/3184036rq.htm                |
| nprogress             | 页面加载用进度条                                    | https://blog.csdn.net/qq_31968791/article/details/106790179  |
| qs                    | 增加了一些安全性的查询字符串解析和序列化字符串的库。可以进行对象与字符串之间的一个转换 | https://www.cnblogs.com/xinlightchaser/p/17721983.html       |
| vue-count-to          | 数字滚动插件                                      | https://www.cnblogs.com/duhui/p/10509585.html                |
| vue-cropper           | 图片裁剪                                        | https://www.cnblogs.com/dihongjingyan/p/16401862.html        |
| vue-image-crop-upload | 头像裁剪上传                                      | https://www.cnblogs.com/luo1240465012/p/15398825.html        |
| vue-splitpane         | 可拖拽分割面板                                     | https://www.cnblogs.com/e0yu/p/10906900.html?ivk_sa=1024320u |
| vuedraggable          | 拖拽插件                                        | https://www.jianshu.com/p/2164378fba35                       |

#### Build Setup

**推荐 node 版本：12-16**

``` bash
# 安装依赖
npm install --registry https://registry.npmmirror.com

# 启动服务 localhost:28001
npm run dev

# (或) 启动服务 localhost:28001
IDEA -> Current File -> Edit Configurations... -> Add New Configuration -> npm -> Script选dev -> Apply -> Ok

# 构建生产环境
npm run build:prod
```

#### 默认密码

admin/123456

#### 常见问题

1、linux 系统在安装依赖的时候会出现 node-sass 无法安装的问题

解决方案：

```
1. 单独安装：npm install --unsafe-perm node-sass 
2. 直接使用：npm install --unsafe-perm
```

