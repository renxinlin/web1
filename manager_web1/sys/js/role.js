function addRole() {
	layui.use('layer', function() {
		var layer = layui.layer;
		layer.open({
			type: 2,
			area: ['80%', '80%'],
			fixed: false,
			maxmin: true,
			content: 'role/add.html',
		});
	});
}