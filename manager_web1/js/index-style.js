/**
 * 获取页面
 * @param {Object} path
 */
function news_path(path) {
	
	//data = AjaxUtil.ajaxGetDefault(path, null, false);
	$("#index-content").html("");
	$("<iframe id='index-content-son'  width='100%' height='100%' frameborder='0' src='" +path + "'></iframe>").appendTo("#index-content");
//	$("#index-content").append(data);
}

/**
 * 折叠左侧菜单
 * @param {Object} element
 */
function toggleClassOperation(element){
	
	if($("#"+element).hasClass("layui-nav-itemed")){
		$("#"+element).removeClass("layui-nav-itemed");
	}else{
		$("#"+element).addClass("layui-nav-itemed");
	}
}
