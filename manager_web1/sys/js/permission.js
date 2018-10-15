function addPermission() {
	layui.use('layer', function() {
		var layer = layui.layer;
		layer.open({
			type: 2,
			area: ['700px', '600px'],
			fixed: false,
			maxmin: true,
			content: 'permission/add.html',
		});
	});
}