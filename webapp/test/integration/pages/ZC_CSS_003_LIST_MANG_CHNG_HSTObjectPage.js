sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.enb.manage.distrlist',
            componentId: 'ZC_CSS_003_LIST_MANG_CHNG_HSTObjectPage',
            contextPath: '/ZC_CSS_003_LIST_MANG_CHNG_HST'
        },
        CustomPageDefinitions
    );
});