define(['ko'],function (ko){
    'use strict';

    return function (Minicart){
        const summary_count = "";
        return  Minicart.extend({

            update: function(updatedCart){
                ko.track({
                    tracks :{
                        summary_count :true
                    }
                });

                this.summary_count = updatedCart.summary_count;
                console.log('update mini cart successfully intercepted');
                console.log(updatedCart);

                console.log(this.summary_count);
                return this._super(updatedCart);
            }
        });
    }
});
