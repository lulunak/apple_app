var app = function(app){

	app.makePages = function(stage, stageW, stageH, layoutManager){

		var p = {};

		// PAGE 1

		var page1 = p.page1 = new zim.Container( stageW, stageH )
			.addTo(stage);

		var logo = frame.asset("logo.png")
		    .addTo(page1);
		
		var content = new zim.Container(400,400)
			.addTo(page1);
			
	    var pic1 = frame.asset("1.png")
	        .center(content);


		var footer = new zim.Container(500, 100)
			.addTo(page1);
			
		var tabs = page1.tabs = new zim.Tabs({
				width: 500, 
				color:"#81D4FA",
				tabs: ["ONE", "TWO","THREE","FOUR"]
			}).addTo(footer);

		// LAYOUT

		layoutManager.add(
			new zim.Layout({
				holder: page1,
				regions: [
					{object: logo, marginTop: 5, maxWidth: 80, minHeight: 20, align: "center", valign: "top"},
					{object:content, marginTop:5, maxWidth:80, align: "center"},
					{object:footer, marginTop:5, maxWidth:80, height:15}
				],
				lastMargin: 3,
				// regionShape: new zim.Shape(),
				scalingObject: stage
			})
		);


		// PAGE 2

		var page2 = p.page2 = new zim.Container( stageW, stageH )
			.addTo(stage);
			

        var logo2 = page2.logo = frame.asset("logo.png").clone().addTo(page2);

		var content2 = new zim.Container(400,400)
			.addTo(page2);
			
		var pic2 = frame.asset("2.png")
		    .center(content2);
		

		var footer2 = new zim.Container(500, 100)
			.addTo(page2);
			// .pos(null, stageH-50);
		var tabs2 = page2.tabs2 = new zim.Tabs({
				width: 500, 
				color:"#81D4FA",
				tabs: ["ONE", "TWO","THREE","FOUR"]
			}).addTo(footer2);
		tabs2.selectedIndex = 1;

		// LAYOUT 2

		layoutManager.add(
			new zim.Layout({
				holder: page2,
				regions: [
					{object: logo2, marginTop: 5, maxWidth: 80, minHeight: 20, align: "center", valign: "top"},
					{object:content2, marginTop:5, maxWidth:80, align: "center"},
					{object:footer2, marginTop:5, maxWidth:80, height:15}
				],
//				lastMargin: 3,
//				regionShape: new zim.Shape(),
				scalingObject: stage
			})
		);
		
		
		// PAGE 3
		
				var page3 = p.page3 = new zim.Container( stageW, stageH )
					.addTo(stage);
					
				var logo3 = frame.asset("logo.png").clone().addTo(page3); 
		
				var content3 = new zim.Container(400,400)
					.addTo(page3);
					
				var pic3 = frame.asset("3.png")
				    .center(content3);
				
		
				var footer3 = new zim.Container(500, 100)
					.addTo(page3);
					// .pos(null, stageH-50);
				var tabs3 = page3.tabs3 = new zim.Tabs({
						width: 500, 
						color:"#81D4FA",
						tabs: ["ONE", "TWO","THREE","FOUR"]
					}).addTo(footer3);
				tabs3.selectedIndex = 2;
		
				// LAYOUT 3
		
				layoutManager.add(
					new zim.Layout({
						holder: page3,
						regions: [
							{object: logo3, marginTop: 5, maxWidth: 80, minHeight: 20, align: "center", valign: "top"},
							{object:content3, marginTop:5, maxWidth:80, align: "center"},
							{object:footer3, marginTop:5, maxWidth:80, height:15}
						],
		//				lastMargin: 3,
		//				regionShape: new zim.Shape(),
						scalingObject: stage
					})
				);

			// PAGE 4
		
				var page4 = p.page4 = new zim.Container( stageW, stageH )
					.addTo(stage);
					
				var logo4 = frame.asset("logo.png").clone().addTo(page4); 
		
				var content4 = new zim.Container(400,400)
					.addTo(page4);
					
				var pic4 = frame.asset("4.png")
				    .center(content4);
				
		
				var footer4 = new zim.Container(500, 100)
					.addTo(page4);
					// .pos(null, stageH-50);
				var tabs4 = page4.tabs4 = new zim.Tabs({
						width: 500, 
						color:"#81D4FA",
						tabs: ["ONE", "TWO","THREE","FOUR"]
					}).addTo(footer4);
				tabs4.selectedIndex = 3;
		
				// LAYOUT 4
		
				layoutManager.add(
					new zim.Layout({
						holder: page4,
						regions: [
							{object: logo4, marginTop: 5, maxWidth: 80, minHeight: 20, align: "center", valign: "top"},
							{object:content4, marginTop:5, maxWidth:80, align: "center"},
							{object:footer4, marginTop:5, maxWidth:80, height:15}
						],
		//				lastMargin: 3,
		//				regionShape: new zim.Shape(),
						scalingObject: stage
					})
				);



		
		return p;
	}; //end makePages

	return app;

}(app || {}); //use modual pattern to avoid overwriting variables 