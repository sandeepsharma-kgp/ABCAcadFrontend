<script>
import NavBar from "../components/Navbar.vue";
import ContactUs from "@/components/ContactUs.vue";
import FooterBar from "@/components/Footer.vue";

export default {
  components: {
    NavBar,
    ContactUs,
    FooterBar
  }
};
</script>

<template>
  <div>
    <nav-bar/>
    <div>
      <div class="container">
        <slot />
      </div>
    </div>
    <footer-bar />
    <ContactUs></ContactUs>    
  </div>
</template>

<style>
.container{
  margin-top: 100px
}
</style>