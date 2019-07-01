<template>
  <div id="app">
    <Navbar />
    <HelloWord/>
    <Cards />
    <Centers/>
    <Students/>
    <Videos/>
   
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
import HelloWord from './components/HelloWorld'
import Cards from './components/Cards'
import Centers from './components/Centers.vue'
import Students from './components/Students.vue'
import Videos from './components/Videos.vue'
import Advertisements from './components/Advertisements'
import Blogs from './components/Blogs'
import Footer from './components/Footer'
import ContactUs from './components/ContactUs'
import Carousel from './components/Carousel'
import Courses from './components/Courses'

export default {
  name: 'app',
  components: {
    Navbar,
    HelloWord,
    Cards,
    Centers,
    Students,
    Videos,
    
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
