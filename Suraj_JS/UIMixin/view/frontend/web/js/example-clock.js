define(['uiComponent'],function (uiComponent){
        'use strict';
        return  uiComponent.extend({
            getTitle: function(){
                const remaining = 60 - new Date().getSeconds();
                return remaining;
            }
        });
});
