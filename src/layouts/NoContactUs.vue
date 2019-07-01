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
    <nav-bar />
    <div >
      <slot />
    </div>
    <footer-bar />
  </div>
</template>
