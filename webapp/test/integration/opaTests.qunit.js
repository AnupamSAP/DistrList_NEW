sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/enb/manage/distrlist/test/integration/FirstJourney',
		'com/enb/manage/distrlist/test/integration/pages/ZC_CSS_003_LIST_MANG_CHNG_HSTList',
		'com/enb/manage/distrlist/test/integration/pages/ZC_CSS_003_LIST_MANG_CHNG_HSTObjectPage'
    ],
    function(JourneyRunner, opaJourney, ZC_CSS_003_LIST_MANG_CHNG_HSTList, ZC_CSS_003_LIST_MANG_CHNG_HSTObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/enb/manage/distrlist') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheZC_CSS_003_LIST_MANG_CHNG_HSTList: ZC_CSS_003_LIST_MANG_CHNG_HSTList,
					onTheZC_CSS_003_LIST_MANG_CHNG_HSTObjectPage: ZC_CSS_003_LIST_MANG_CHNG_HSTObjectPage
                }
            },
            opaJourney.run
        );
    }
);