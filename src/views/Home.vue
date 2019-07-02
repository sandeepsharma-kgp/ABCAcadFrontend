<template>
  <div>
    <Cards />
    <Centers/>
    <Students/>
    <Videos/>  
    <Carousel />
    <Courses />
    <Advertisements />
    <Blogs />
  </div>
</template>

<script>

import Advertisements from '@/pages/Advertisements'
import Blogs from '@/pages/Blogs'
import Carousel from '@/pages/Carousel'
import Courses from '@/pages/Courses'
import Cards from '@/pages/Cards'
import Centers from '@/pages/Centers'
import Students from '@/pages/Students'
import Videos from '@/pages/Videos'

export default {
  name: 'home',
  components: {
    Advertisements,
    Blogs,
    Carousel,
    Courses
  }
}
</script>
