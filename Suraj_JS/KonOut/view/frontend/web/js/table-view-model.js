define(['ko'],function (ko){
    'use strict';

    return function () {
        const viewModel = {
            'exchange_rates': ko.observableArray([
                {
                    'currency_to': 'USD',
                    'rate': 1
                },
                {
                    'currency_to': 'USD',
                    'rate': 1
                },
                {
                    'currency_to': 'USD',
                    'rate': 1
                }
            ])
        };
        return viewModel;
    };
});
