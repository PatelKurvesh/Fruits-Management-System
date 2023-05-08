sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"wl/wap/model/models"
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("wl.wap.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			// this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		},
		createContent: function(){
			var app = new sap.ui.view("app",{
				viewName:"wl.wap.view.App",
				type:"XML"
			});
			
			
			
			var view1 = new sap.ui.view("view1",{
				viewName:"wl.wap.view.View1",
				type:"XML"
			});
			var view2 = new sap.ui.view("view2",{
				viewName:"wl.wap.view.View2",
				type:"XML"
			});
			
			var main = new sap.ui.view("Main",{
				viewName:"wl.wap.view.Main",
				type:"XML"
			});
			
			
			
			var parent = app.byId("app");
			parent.addPage(main);
			parent.addPage(view1);
			parent.addPage(view2);
			
			var oModel = new sap.ui.model.json.JSONModel("model/data.json");
			app.setModel(oModel);
			return app;  
			
			
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	});
});