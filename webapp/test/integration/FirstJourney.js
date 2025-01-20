sap.ui.define([
    "sap/ui/test/opaQunit"
], function (opaTest) {
    "use strict";

    var Journey = {
        run: function() {
            QUnit.module("First journey");

            opaTest("Start application", function (Given, When, Then) {
                Given.iStartMyApp();

                Then.onTheZC_CSS_003_LIST_MANG_CHNG_HSTList.iSeeThisPage();

            });


            opaTest("Navigate to ObjectPage", function (Given, When, Then) {
                // Note: this test will fail if the ListReport page doesn't show any data
                
                When.onTheZC_CSS_003_LIST_MANG_CHNG_HSTList.onFilterBar().iExecuteSearch();
                
                Then.onTheZC_CSS_003_LIST_MANG_CHNG_HSTList.onTable().iCheckRows();

                When.onTheZC_CSS_003_LIST_MANG_CHNG_HSTList.onTable().iPressRow(0);
                Then.onTheZC_CSS_003_LIST_MANG_CHNG_HSTObjectPage.iSeeThisPage();

            });

            opaTest("Teardown", function (Given, When, Then) { 
                // Cleanup
                Given.iTearDownMyApp();
            });
        }
    }

    return Journey;
});