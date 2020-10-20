define(['ko'],function (ko){
    'use strict';

    return function (){
        const viewModel = ko.track({
            label: 'a ViewModel With regular knockoutJs Observable with ES5',
            additiona_charges: 2,
            items: [
                {name: 'Suprise Box', qty: 15, price: 20},
                {name: 'Suprise Box 2', qty: 10, price: 40},
            ],
            tracks:{
                additiona_charges:true,
                items:true
            },
            rowTotal: item => item.qty * item.price,
            total: function () {
                const sum = this.items.map(this.rowTotal).reduce((acc, curr) => acc + curr);
                return sum + this.additiona_charges;
            }
        });
        /*ko.getObservable(viewModel,'additiona_charges').subscribe(function (newValue){
            console.log('Additional Charge to',newValue);
        })*/
        return viewModel;

    }

});
