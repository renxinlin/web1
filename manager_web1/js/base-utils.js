/**
 * ajax请求工具类
 * @author renxl
 * @date 20180813
 * 非对象类型
 */

$.ajaxSetup({
	crossDomain: true,
	xhrFields: {
		withCredentials: true
	},
	complete: function(xhr) {
		if("REDIRECT" == xhr.getResponseHeader("REDIRECT")) {
			window.location.href = xhr.getResponseHeader("CONTENTPATH");
		}
	}
});

// 解决layui导致的JsessionId不一致问题
layui.use(
	'jquery',
	function() {
		layui.$.ajaxSetup({
			// sessionID相同
			crossDomain: true,
			xhrFields: {
				withCredentials: true
			}
		})
	});

var AjaxUtil = {
	/** ajax post 请求后台，获取数据(不作处理，直接返回结果)
	 * @param url(请求地址)
	 * @param data(请ajaxPostDefault求参数-json对象)
	 */
	ajaxPostForm: function(url, data, isLoading) {
		var json = null;
		$.ajax({

			url: url,
			type: 'post',
			contentType: 'application/x-www-form-urlencoded',
			async: false,
			data: data,
			beforeSend: function(request) {
				if(!isLoading) {
					plus.nativeUI.showWaiting('正在加载...');
				}
			},
			success: function(result) {
				if(!isLoading) {
					setTimeout(function() {
						plus.nativeUI.closeWaiting();
					}, 500);
				}
				json = result;
			},
			error: function(e) {
				if(!isLoading) {
					setTimeout(function() {
						plus.nativeUI.closeWaiting();
					}, 500);
				}
			}
		});
		return json;
	},
	/**
	 * 对象类型ajax post 请求后台，获取数据(不作处理，直接返回结果)
	 * @param url(请求地址)
	 * @param data(请求参数-json对象)
	 */
	ajaxPostDefault: function(url, data, isLoading) {
		var json = null;
		$.ajax({
			// sessionID相同

			url: url,

			dataType: 'json',
			type: 'post',
			contentType: 'application/json;charse=UTF-8',
			async: false,
			data: JSON.stringify(data), // 必须是json字符串
			beforeSend: function(request) {
				if(!isLoading) {
					plus.nativeUI.showWaiting('正在加载...');
				}
			},
			success: function(result) {
				if(!isLoading) {
					setTimeout(function() {
						plus.nativeUI.closeWaiting();
					}, 500);
				}
				json = result;
			},
			error: function(e) {
				if(!isLoading) {
					setTimeout(function() {
						plus.nativeUI.closeWaiting();
					}, 500);
				}
			}
		});
		return json;
	},
	// ajax get 请求后台，获取数据(不作处理，直接返回结果)
	ajaxGetDefault: function(url, data, isLoading) {

		var json = null;
		$.ajax({

			async: false,
			url: url,
			type: 'get',
			data: data,
			headers: {
				'X-Requested-With': 'XMLHttpRequest'
			},
			beforeSend: function(request) {
				if(isLoading == true) {
					$('#dvLoading').modal('show');
				}
			},
			success: function(result) {
				if(isLoading == true) {
					setTimeout(function() {
						$('#dvLoading').modal('hide');
					}, 500);
				}

				json = result;
			},
			error: function(e) {
				if(isLoading == true) {
					setTimeout(function() {
						$('#dvLoading').modal('hide');
					}, 500);
				}
			}
		});
		return json;
	},
	/**
	 * 上传图片、文件
	 * @param url （请求地址）
	 * @param data （请求参数 formData对象）
	 * @returns {*}
	 */
	ajaxFormData: function(url, data, isLoading) {
		var json = null;
		$.ajax({

			url: url,
			type: 'POST',
			data: data,
			async: false,
			cache: false,
			contentType: false,
			processData: false,
			beforeSend: function(request) {

			},
			success: function(result) {
				setTimeout(function() {

				}, 500);
				json = result;
			},
			error: function(e) {
				setTimeout(function() {
					alert('网络异常')
				}, 500);
			}
		});
		return json;
	}
};