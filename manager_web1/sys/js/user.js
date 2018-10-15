function addUser() {
	layui.use('layer', function() {
		var layer = layui.layer;
		layer.open({
			type: 2,
			area: ['85%', '85%'],
			fixed: false,
			maxmin: true,
			content: 'user/add.html',
		});
	});
}