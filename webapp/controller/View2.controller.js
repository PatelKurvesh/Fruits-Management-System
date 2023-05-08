sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/ndc/BarcodeScanner",
	'sap/ui/export/library',
	'sap/ui/export/Spreadsheet'
	
], function (Controller,MessageBox,BarcodeScanner,exportLibrary,Spreadsheet) {
	"use strict";

		var EdmType = exportLibrary.EdmType;

	return Controller.extend("wl.wap.controller.View2", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf wl.wap.view.View2
		 */
		onInit: function () {

		},
		
		onPage2: function(){
			var page1 = this.getView().getParent();
			page1.to("view1","flip");
		},
		onPress: function (oEvent) {
			sap.ndc.BarcodeScanner.scan(
				function (mResult) {
				
					MessageBox.information(
						"Result: " + mResult.text + "\n" +
						"Format: " + mResult.format + "\n" 
						// "Cancelled: " + mResult.cancelled
						);
				},
				function (Error) {
					MessageBox.alert("Scanning failed: " + Error);
				}
			);
		},
		createColumnConfig: function() {
			var aCols = [];

			aCols.push({
				label: 'Product',
				property: 'name',
				type: EdmType.String
			
			});

			aCols.push({
				label: 'company',
				type: EdmType.String,
				property: 'company'
				
			});

			aCols.push({
				label: 'Id',
				property: 'productId',
				type: EdmType.Number
			});

			aCols.push({
				label: 'manager',
				property: 'manager',
				type: EdmType.String
			});

			aCols.push({
				label: 'Income',
				property: 'annualIncome',
				type: EdmType.String
			});
			aCols.push({
				label: 'supplier',
				property: 'supplier',
				type: EdmType.String
			});

		



			return aCols;
		},

		onDownload: function() {
			var aCols, oRowBinding, oSettings, oSheet, oTable;

			if (!this._oTable) {
				this._oTable = this.byId('idTbl');
			}

			oTable = this._oTable;
			oRowBinding = oTable.getBinding("items");
			aCols = this.createColumnConfig();

			oSettings = {
				workbook: {
					columns: aCols,
					hierarchyLevel: 'Level'
				},
				dataSource: oRowBinding,
				fileName: 'Table export sample.xlsx',
				worker: false // We need to disable worker because we are using a MockServer as OData Service
			};

			oSheet = new Spreadsheet(oSettings);
			oSheet.build().finally(function() {
				oSheet.destroy();
			});
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf wl.wap.view.View2
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf wl.wap.view.View2
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf wl.wap.view.View2
		 */
		//	onExit: function() {
		//
		//	}

	});

});