<template>
  <mdb-navbar color="blue" position="top" dark>
    <mdb-navbar-brand href="https://mdbootstrap.com/" class="">
      <strong><em>Drop</em></strong>
    </mdb-navbar-brand>
  </mdb-navbar>
</template>

<script>
  import { mdbNavbar, mdbNavbarBrand } from 'mdbvue';
  export default {
    name: 'NavbarPage',
    components: {
      mdbNavbar,
      mdbNavbarBrand
    }
  }
</script>
