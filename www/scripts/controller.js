var app = function(app){

	app.makeController = function(stage, p, pages, frame){

		p.page1.tabs.on("change", function(){
			
			pages.go(p.page2, "right", "slide", 500);
			p.page1.tabs.selectIndex = 0;
		});

		p.page2.tabs2.on("change", function(){
			
			pages.go(p.page3, "right", "slide", 500);
			p.page2.tabs.selectIndex = 1;
		});
		
		p.page3.tabs3.on("change", function(){
			
			pages.go(p.page4, "right", "slide", 500);
			p.page3.tabs.selectIndex = 2;
		});

		p.page4.tabs4.on("change", function(){
			
			pages.go(p.page1, "right", "slide", 500);
			p.page4.tabs.selectIndex = 3;
		});
	}; //end makeController

	return app;

}(app || {});