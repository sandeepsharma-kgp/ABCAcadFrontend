<template>
  <div>
     <br><br>
    <Carousel />
    <Courses />
    <Advertisements /><br>
    <Blogs /><br>
    
    <Students/>
    <Videos/> 
<br><br><br>
  </div>
</template>

<script>

import Advertisements from '@/components/homePage/Advertisements'
import Blogs from '@/components/homePage/Blogs'

import Carousel from '@/components/homePage/Carousel'
import Courses from '@/components/homePage/Courses'

import Students from '@/components/homePage/Students'
import Videos from '@/components/homePage/Videos'

export default {
  name: 'home',
  components: {
    Advertisements,
    Blogs,
   
    Carousel,
    Courses,
    Students,
    Videos
  }
    }
</script>

<style scoped>

</style>