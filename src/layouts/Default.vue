<script>
import NavBar from "@/components/NavBar";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default {
  components: {
    NavBar,
    ContactUs,
    Footer
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
    <ContactUS/>
  </div>
</template>
