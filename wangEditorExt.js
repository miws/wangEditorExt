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

window.wangEditor.fullscreen = {
    init: function(editor) {
    	id = editor.id;
    	if(!this.pluginsEditors){
    		this.pluginsEditors = {}
    	}
    	if(this.pluginsEditors[id]){
    		editor = this.pluginsEditors[id];
    	} else {
    		this.pluginsEditors[id]=editor;
    	}
    	editor.isFullScreen = false;
    	toolbar = editor.$toolbarElem[0];
        $(toolbar).append('<div class="w-e-menu btn_fullscreen" onclick="window.wangEditor.fullscreen.run(\''+id+'\')">全屏</div>');
    },
    run: function(id) {
    	editor = this.pluginsEditors[id];
    	editor.isFullScreen = editor.isFullScreen;
    	container = $(editor.toolbarSelector);
        container.toggleClass('fullscreen-editor');
        container.find('.btn_fullscreen').text(this.isFullScreen ? '退出全屏': '全屏');
    }
};
window.wangEditor.viewSource = {
    init: function(editor) {
    	id = editor.id;
    	if(!this.pluginsEditors){
    		this.pluginsEditors = {}
    	}
    	if(this.pluginsEditors[id]){
    		editor = this.pluginsEditors[id];
    	} else {
    		this.pluginsEditors[id]=editor;
    	}
    	editor.isHTML = false;
        toolbar = editor.$toolbarElem[0];
        $(toolbar).append("<div class='w-e-menu btn_viewSource' title='查看源码' onclick='window.wangEditor.viewSource.run(\""+id+"\")'>源</div>");
    },
    run: function(id) {
    	editor = this.pluginsEditors[id];
        editor.isHTML = !editor.isHTML;
        _source = editor.txt.html();
        toolbar = editor.$toolbarElem[0];
        if (editor.isHTML) {
            _source = _source.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/ /g, "&nbsp;");
            $(toolbar).find('.w-e-menu').css({ "display": "none" });
            $(toolbar).find('.btn_viewSource').css({ "display": "" });
        } else {
            _source = editor.txt.text().replace(/&lt;/ig, "<").replace(/&gt;/ig, ">").replace(/&nbsp;/ig, " ");
            $(toolbar).find('.w-e-menu').css({ "display": "" });
            editor.change && editor.change();
        }
        editor.txt.html(_source);
    }
};