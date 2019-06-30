<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default {
  components: {
    NavBar,
    Footer
  }
};
</script>

<template>
  <div>
    <nav-bar />

    <div class="container">
      <slot />
    </div>

    <footer-bar />
  </div>
</template>
