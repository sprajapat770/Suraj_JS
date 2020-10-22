define([
	'mage/utils/wrapper',
	'jquery',
	'underscore'
	],
	function(wrapper, $, _){
	'use strict';

		const resetLabels = function(attributes){
			$('select.super-attribute-select option').each(function(){
				const selectOptions = $(this),
					optionId = selectOptions.attr('value');

				console.log("options 1",selectOptions);
				console.log("options 2",optionId);

				_.each(attributes,function({options}){
					options.forEach(({id, initialLabel})=>{
						if (id === optionId) {
								selectOptions.text(initialLabel);
						}
					});
				})
			});

		};

		return function(configurable){

			return wrapper.wrap(configurable,function(configurable,config,element){
					configurable(config,element);
					console.log("attributes",config.spConfig.attributes);
					resetLabels(config.spConfig.attributes);

			});
		}

});