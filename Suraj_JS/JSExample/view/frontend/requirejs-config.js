var config={
  map:{
      '*':{
          coffee:'Suraj_JSExample/js/script-example-2'
      }
  },
  config:{
      mixins:{
        'Magento_Checkout/js/checkout-data':{
            'Suraj_JSExample/js/checkout-data-mixin':true
        }
      },
        mixins:{
          'Magento_Catalog/js/catalog-add-to-cart':{
            'Suraj_JSExample/js/add-to-cart-mixin':true
          }
      }
  },
    deps:['Suraj_JSExample/js/log-when-loades'],
    shim:{
      'Magento_Catalog/js/view/compare-products':{
          deps: ['Suraj_JSExample/js/before-compare-product-example']
      }
    }
};
