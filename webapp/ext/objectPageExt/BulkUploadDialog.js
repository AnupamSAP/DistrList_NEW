sap.ui.define(["sap/ui/core/Fragment"], (Fragment) => {
    "use strict";
    return {
        openBulkUploadDialog(oControllerExtension) {
            this.oDialog ??= this._loadFragment(oControllerExtension)
                .then(oDialog => {
                    oControllerExtension.getView().addDependent(oDialog);
                    return oDialog;
                });
            this.oDialog.then(oDialog => {
                oDialog.open();
            });
        },
        closeDialog(oEvent) {
            oEvent.getSource().getParent().close();
        },
        _loadFragment(oControllerExtension) {
            return Fragment.load({
                name: "com.enb.manage.distrlist.ext.fragments.FileUploadDialog",
                id: "BulkUploadDialog",
                controller: oControllerExtension.getView().getInterface()
            });
        }
    };
}
);