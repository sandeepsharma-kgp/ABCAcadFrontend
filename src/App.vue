<template>
  <div id="app">
    <Navbar />
    <Carousel />
    <Courses />
    <Advertisements />
    <Blogs />
    <Footer />
    <ContactUs />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Advertisements from './pages/Advertisements'
import Blogs from './pages/Blogs'
import Footer from './components/Footer'
import ContactUs from './components/ContactUs'
import Carousel from './pages/Carousel'
import Courses from './pages/Courses'

export default {
  name: 'app',
  components: {
    Navbar,
    Advertisements,
    Blogs,
    Footer,
    ContactUs,
    Carousel,
    Courses
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  padding : 0px;
}
</style>
