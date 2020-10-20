define(['jquery'],function ($){
    'use strict';
    return function (config,element){
        console.log("suraj's second js script",config);
        console.log("suraj's second js script",config.base_url);
        console.log(element);
        $.getJSON(config.base_url+"rest/V1/directory/currency",function (result){
           element.innerText = JSON.stringify(result,null,2);
        });
    }
});

