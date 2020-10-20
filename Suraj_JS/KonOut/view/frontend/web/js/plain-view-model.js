define(['ko'],function (ko){
    'use strict';

    return function (config){
            const title = ko.observable('this is konout js title simple but goog view model');
            title.subscribe(function (newValue){
                console.log('changed to', newValue);
            });

            title.subscribe(function (oldValue){
                console.log('will be changed to',oldValue);
                }, this,'beforeChange');
        return {
                title:title,
            getTitle:function (){
                    return this.title;
            },
            config:config
        }
    }
});
