<template>
  <mdb-col sm="4" col="12" class="p-1">
    <mdb-card >
      <mdb-card-image src="https://via.placeholder.com/300" alt="Card image cap"></mdb-card-image>
      <mdb-card-body class="text-center pb-0" cascade>
        <mdb-card-title>{{title}}</mdb-card-title>
        <mdb-card-text>{{description}}<br>
          {{price}}
        </mdb-card-text>
        <mdb-btn color="blue" @click="vote(1)" :class="{ active: voteType === 1}" icon="arrow-up" size="sm"></mdb-btn>
        <mdb-btn color="danger" @click="vote(-1)" :class="{ active: voteType === -1}" icon="arrow-down" size="sm"></mdb-btn>
        <mdb-card-footer class="text-muted mt-4">{{ score + voteType }}</mdb-card-footer>
      </mdb-card-body>
    </mdb-card>
  </mdb-col>
</template>

<script>
  import {mdbContainer, mdbRow, mdbCol, mdbCard, mdbView, mdbMask, mdbBtn, mdbCardImage, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardBody} from 'mdbvue';
  export default {
    name: "Product",
      props: {
        index: {
          type: Number
        },
        title: {
          type: String
        },
        imglink: {
          type: String
        },
        price: {
          type: String
        },
        description: {
          type: String
        },
        score: {
          type: Number
        },
        voteType: {
          type: Number
        }
      },
    methods: {
      vote(type) {
        this.voteType = this.voteType === type ? 0 : type
      },

    },
    components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbCard,
			mdbView,
			mdbMask,
      mdbBtn,
			mdbCardImage,
			mdbCardTitle,
			mdbCardText,
			mdbCardFooter,
			mdbCardBody
    }
  }
</script>
