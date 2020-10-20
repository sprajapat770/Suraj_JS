define(['ko'],function (ko){
    'use strict';

    return function (){
        return {
            label: ko.observable('a ViewModel With regular knockoutJs Observable'),
            additiona_charges: ko.observable(2),
            items: ko.observableArray([
                {name: 'Suprise Box', qty: 15, price: 20},
                {name: 'Suprise Box 2', qty: 10, price: 40},
            ]),

            rowTotal: item => item.qty * item.price,
            total: function () {
                const sum = this.items().map(this.rowTotal).reduce((acc, curr) => acc + curr);
                return sum + this.additiona_charges();
            }
        };
    }
});
