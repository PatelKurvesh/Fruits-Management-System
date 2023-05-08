sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("wl.wap.controller.Main", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf wl.wap.view.Main
		 */
		//	onInit: function() {
		//
		//	},
		onLogin : function(){
			var user = this.getView().byId("user").getValue();
			var pwd = this.getView().byId("pwd").getValue();
			if(user === "admin" && pwd === "admin"){
				// sap.m.MessageToast.show("Login Successfully");
				// this.oRouter.to("view1");
				var main = this.getView().getParent();
				main.to("view1","slide");
				
			}else{
				sap.m.MessageToast.show("Error");
			}
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf wl.wap.view.Main
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf wl.wap.view.Main
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf wl.wap.view.Main
		 */
		//	onExit: function() {
		//
		//	}

	});

});