# wangEditorExt
wangEditorExt,为wangEditor增加全屏编辑,查看源码功能

```
/**
 * wangEditor扩展,增加全屏 查看源码功能
 * 传入均为 editor实例,非css选择器
 * 依赖jquery 如果是layui之类的需要在layui.use方法中使用
 * 全屏功能需要引入 wangEditor-fullscreen.css
 * @author mrzhou@miw.cn
 * @date 2018.8.30 am 10:00
 *       2018.9.18 pm 16:00 增加同页多编辑器支持
 * 使用方法:
 * E.fullscreen.init(editor);
 * E.viewSource.init(editor);
 */
```
### 附上一个测试样例
```
<!DOCTYPE html>
<html lang="zh-CN">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script src="https://cdn.bootcss.com/jquery/2.2.1/jquery.min.js"></script>
</head>
<body>
	<div id="editor"></div>
</body>
</html>
<script>
var E = window.wangEditor;
var editor = new E('#editor');
editor.create();
E.fullscreen.init(editor);
E.viewSource.init(editor);
</script>
```

[wangEditor项目](https://github.com/wangfupeng1988/wangEditor)
[超级简单的JAVA mvc框架,全免配置](https://github.com/askmiw/simpleweb)
