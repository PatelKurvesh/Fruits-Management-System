sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/m/MessageBox",
	"sap/m/MessageToast"
], function (Controller, Filter, FilterOperator, MessageBox, MessageToast) {
	"use strict";

	return Controller.extend("wl.wap.controller.View1", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf wl.wap.view.View1
		 */
		onInit: function () {
		
		},
		
		
		onPage1: function(oEvent){
			// debugger;
			var page2 = this.getView().getParent();
			page2.to("view2","slide");
		},
		
		onSelectItem: function(oEvent){
			debugger;
			var item = oEvent.getParameter("listItem").getBindingContextPath();
			this.getView().getParent().getPages()[2].bindElement(item);
			this.onPage1();
		},
		
		onLiveSearch: function(oEvent){
			// debugger;
			var aFilter = [];
			var query = oEvent.getParameter("newValue");
			aFilter.push(new Filter("name",FilterOperator.Contains,query));
			
			var binding = this.getView().byId("list").getBinding("items");
			// var listBind
			binding.filter(aFilter);
		},
		
		onSave: function(oEvent){
			// debugger;
			// var searchField = this.byId("search");
			// 	searchField.setValueState("Error");
			// for(var i=0 ;i < 2; i++){
			// 	if(searchField.getValue() === ""){
			// 		$("#view1--search").fadeOut(100);
			// 		$("#view1--search").fadeIn(100);
			// 	}
			// }
			var msgSave =  this.getView().getModel("i18n").getResourceBundle().getText("msgSave");
			var okMsg =  this.getView().getModel("i18n").getResourceBundle().getText("okMsg");
			var error =  this.getView().getModel("i18n").getResourceBundle().getText("error");
			MessageBox.confirm(msgSave,{
				onClose: function(choice){
					if(choice === "OK"){
						MessageToast.show(okMsg);
					}else{
						MessageBox.error(error);
					}
				}
			});
		},
		onEdit : function(){
				var searchField = this.byId("search");
				searchField.setValueState("Error");
			for(var i=0 ;i < 2; i++){
				if(searchField.getValue() === ""){
					$("#view1--search").fadeOut(100);
					$("#view1--search").fadeIn(100);
				}
			}
			
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf wl.wap.view.View1
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf wl.wap.view.View1
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf wl.wap.view.View1
		 */
		//	onExit: function() {
		//
		//	}

	});

});