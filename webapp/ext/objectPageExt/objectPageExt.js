sap.ui.define([
	"sap/m/MessageToast", "./SpreadsheetTempConfig",
	"sap/ui/export/Spreadsheet", "./Constants", "./BulkUploadDialog"
], (MessageToast, SpreadsheetTempConfig, Spreadsheet, Constants, BulkUploadDialog) => {
	'use strict';

	return {
		// onPressBulkUpload() {
		// 	if (!this.oMPDialog) {
		// 		this.oMPDialog = this.loadFragment({
		// 			name: "com.enb.manage.distrlist.ext.fragments.FileUploadDialog"
		// 		});
		// 	}
		// 	this.oMPDialog.then(function (oDialog) {
		// 		this.oDialog = oDialog;
		// 		this.oDialog.open();
		// 	}.bind(this));
		// },
		// closeDialog(){
		// 	this.oDialog.close();
		// },

		onPressBulkUpload() {
			BulkUploadDialog.openBulkUploadDialog(this.getIntentBasedNavigation())
		},
		closeDialog(oEvent) {
			
			BulkUploadDialog.closeDialog(oEvent);
		},
		// On File Change
		onFileChange(oEvent){
			// Read file
			var file = oEvent.getParameter("files")[0];
			


			if (file === undefined) {
				return;
			}
			Constants.FILETYPE = file.type;
            Constants.FILENAME = file.name;
			
			
			//Instantiate JavaScript FileReader API
			var fileReader = new FileReader();
			//Read file content using JavaScript FileReader API
			var readFile = function onReadFile(file) {
				return new Promise( (resolve) => {
					fileReader.onload = (loadEvent) => {
						resolve(loadEvent.target.result.match(/,(.*)$/)[1]);
					};
					fileReader.readAsDataURL(file);
				});
			};

			readFile(file).then( (result) => {
				Constants.FILECONTENT = result;
			})
		},
		//perform upload
		onUploadPress(){
			
			// var oResourceBundle = this.base.getView().getModel("i18n").getResourceBundle();
			//check file has been entered
			if (Constants.FILECONTENT === undefined || Constants.FILECONTENT === "") {
				// MessageToast.show(oResourceBundle.getText("uploadFileErrMsg"));
				return;
			}
		
			const oModel = this.getModel();
			
			const oBindinContxt = this.getBindingContext();
			let oOperation = oModel.bindContext(Constants.NAMESPACECONSTANT, oBindinContxt);

		
			oOperation.setParameter("mimeType", Constants.FILETYPE);
			oOperation.setParameter("fileName",  Constants.FILENAME);
			oOperation.setParameter("fileContent", Constants.FILECONTENT);
			
				oOperation.execute().then( 
					(success) => {
						debugger;
					}, 
					(oError) => {
						debugger;
					});
			
			
		},

		onPressDownloadTemplate(){
			debugger;
			
			 const oContactTable = this.byId(Constants.CONTACTTABLEID),
			oContactTableBinding = oContactTable.getRowBinding(),
			aCols = SpreadsheetTempConfig.createColumnConfig(),

			oSettings = {
				workbook: { columns: aCols },
				dataSource: SpreadsheetTempConfig.TemplateDataSource(),
				// dataSource : oContactTableBinding
				fileName: "Contacts Template.xlsx"
			},
			oSheet = new Spreadsheet(oSettings);

			oSheet.build()
				.then( () => {
					MessageToast.show("Spreadsheet export has finished");
				}).finally( () => {
					oSheet.destroy();
				});
		}
	};
});
