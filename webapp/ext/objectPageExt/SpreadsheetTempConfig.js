sap.ui.define([], () => {
	"use strict";
	return {
		createColumnConfig() {
			var aCols = [];

			aCols.push({
				label: 'Contact ID',
				property: '',
				type: String,

			});

			aCols.push({
				label: 'Contact Name',
				type: String,
				property: '',

			});

			aCols.push({
				label: 'Added/Origin',
				property: '',
				type: String
			});

			aCols.push({
				label: 'Company Name',
				property: '',
				type: String
			});

			aCols.push({
				label: 'Phone',
				property: '',
				type: String
			});

			aCols.push({
				label: 'Mobile',
				property: '',
				type: String,

			});
			aCols.push({
				label: 'Email',
				property: '',
				type: String,

			});
			aCols.push({
				label: 'Valid From',
				property: '',
				type: String,

			});
			aCols.push({
				label: 'Valid To',
				property: '',
				type: String,

			});



			return aCols;


		},
		TemplateDataSource() {
			 return [{
				"ContacID" : "",
				"ContactName" :"",
				"Origin" : "",
				"CompanyName" : "",
				"Mobile" : "",
				"Phone" : "",
				"Email" : "",
				"ValidFrom" : "",
				"ValidTo" : ""
			}]
		}



	};
}
);