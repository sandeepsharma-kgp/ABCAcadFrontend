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

    <div class="container section">
      <div class="columns">
        <div class="column is-8">
          <slot />
        </div>

        <div class="column is-4">
          <side-bar />
        </div>
      </div>
    </div>

    <footer-bar />
    <ContactUs></ContactUs>
  </div>
</template>
