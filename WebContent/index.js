layui.use('element', function() {
	var element = layui.element;
	//一些事件监听
	element.on('nav(main-nav)', function(data) {
		console.log(data);
	});
});