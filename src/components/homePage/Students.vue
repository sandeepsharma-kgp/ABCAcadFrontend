<template>
  <div style="padding:0px 0px">
    <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="40000"
      controls
      indicators
      background="#E0E0E0"
      img-width="1024"
      img-height="280"
      
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
    

      <!-- Slides with custom text -->
    <b-carousel-slide caption="" img-blank img-alt="" style="background-color:" >
      <div class="container">
        <div>
            <h5 class="text-dark" style="font-weight: bold;font-size: 30px;padding:20px 0px">Words from our Students</h5>
        </div>
        <div class="container">
        <img src="@/assets/images/black-and-white-boy-casual-555790.jpg" class="rounded-circle" alt="Sample image" width="150" height="125">
        <p class="text-dark" style="padding:30px">Lorem ipsum dolar sit amet consectuer adipiscing elite sed do eiusmod tempor incididunt ut labor at dolar manga aliqua</p> 
        </div>
      </div>
    </b-carousel-slide>
      
      


      <!-- Slides with image only -->
       <b-carousel-slide caption="" img-blank img-alt="" style="background-color:" >
           <div class="container">
        <div>
            <h5 class="text-dark" style="font-weight: bold;font-size: 30px;padding:20px 0px">Words from our Students</h5>
        </div>
        <div class="container">
        <img src="@/assets/images/black-and-white-boy-casual-555790.jpg" class="rounded-circle" alt="Sample image" width="150" height="125">
        <p class="text-dark" style="padding:30px">Lorem ipsum dolar sit amet consectuer adipiscing elite sed do eiusmod tempor incididunt ut labor at dolar manga aliqua</p> 
        </div>
      </div>
      </b-carousel-slide>
     
       <b-carousel-slide caption="" img-blank img-alt="" style="background-color:" >
           <div class="container">
        <div>
            <h5 class="text-dark" style="font-weight: bold;font-size: 30px;padding:20px 0px">Words from our Students</h5>
        </div>
        <div class="container">
        <img src="@/assets/images/black-and-white-boy-casual-555790.jpg" class="rounded-circle" alt="Sample image" width="150" height="125">
        <p class="text-dark" style="padding:30px">Lorem ipsum dolar sit amet consectuer adipiscing elite sed do eiusmod tempor incididunt ut labor at dolar manga aliqua</p> 
        </div>
      </div>
      </b-carousel-slide>

      
       <b-carousel-slide caption="" img-blank img-alt="" style="background-color:" >
           <div class="container">
        <div>
            <h5 class="text-dark" style="font-weight: bold;font-size: 30px;padding:20px 0px">Words from our Students</h5>
        </div>
        <div class="container">
        <img src="@/assets/images/black-and-white-boy-casual-555790.jpg" class="rounded-circle" alt="Sample image" width="150" height="125">
        <p class="text-dark" style="padding:30px">Lorem ipsum dolar sit amet consectuer adipiscing elite sed do eiusmod tempor incididunt ut labor at dolar manga aliqua</p> 
        </div>
      </div>
      </b-carousel-slide>
    </b-carousel>
    <p class="mt-4">
        
    
    </p>
    </div>
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
         mainProps: { blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1' }
      }
    },
    methods: {
      
      }
    }
  
</script>
<style>
.carousel-caption h4 a {
    color: #000;
}
</style>