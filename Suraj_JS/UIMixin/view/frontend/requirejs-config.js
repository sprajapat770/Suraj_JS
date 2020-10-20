var config = {
    config:{
        mixins:{
            'Magento_Checkout/js/view/minicart':{
                'Suraj_UIMixin/js/minicart-mixin':true
            }
        }
    },
    map:{
        '*':{
            clock:'Suraj_UIMixin/js/example-clock'
        }
    }
};
