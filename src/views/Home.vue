<template>
  <div>
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
