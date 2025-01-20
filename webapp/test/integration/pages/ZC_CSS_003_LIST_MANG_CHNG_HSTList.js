sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.enb.manage.distrlist',
            componentId: 'ZC_CSS_003_LIST_MANG_CHNG_HSTList',
            contextPath: '/ZC_CSS_003_LIST_MANG_CHNG_HST'
        },
        CustomPageDefinitions
    );
});