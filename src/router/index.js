import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Navbar from '@/components/Navbar';
import Grid from '@/components/Grid';
import Product from '@/components/Product';

Vue.use(Router);

export default new Router({

  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {

        default: HelloWorld,
        a: Navbar,
        b: Grid,
        c: Product

      }
    }
  ]

});
