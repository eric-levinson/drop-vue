<template>
    <mdb-row class="p-2">
      <mdb-col lg="2" class="d-none d-lg-block"></mdb-col>
      <mdb-col col="12" lg="8" class="text-center">
        <mdb-row>

          <Product
            v-for="(product, index) in even(products)"
              :title="product.title"
              :price="product.price"
              :description="product.description"
              :score="product.score"
              :voteType="product.voteType"
              :key="index"
            />

        </mdb-row>
      </mdb-col>
      <mdb-col lg="2" class="d-none d-lg-block"></mdb-col>
    </mdb-row>
</template>

<script>
  import {mdbContainer, mdbRow, mdbCol} from 'mdbvue';
  import Product from './Product';
  export default {
    components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      Product
    },
      data() {
        return {
          products: [
            {
              title: "title1",
              price: "$1",
              description: "scription1",
              score: 1,
              voteType: 0
            },
            {
              title: "title2",
              price: "$2",
              description: "scription2",
              score: 2,
              voteType: 0
            },
            {
              title: "title3",
              price: "$3",
              description: "scription3",
              score: 3,
              voteType: 0
            },
            {
              title: "title4",
              price: "$4",
              description: "scription4",
              score: 4,
              voteType: 0
            }
          ]
        }
      },
      computed: {
        orderedProducts: function (products) {
        //return _.sortBy(this.products, 'score')
        products.sort((a, b) => (a.score > b.score) ? 1 : -1)
        }
      },
      methods: {
        list: function(products) {
          //return _.orderBy(products, 'score');
          products.sort((a, b) => (a.score > b.score) ? 1 : -1)
        },
        even: function(arr) {
          // Set slice() to avoid to generate an infinite loop!
          return arr.slice().sort(function(a, b) {
            return b.score - a.score;
          });
        }
      }
  }
</script>
