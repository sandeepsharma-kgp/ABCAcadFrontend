<template>
  <div style="padding:0px 1px">
    <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#FCF6F6"
      img-width="1024"
      img-height="280"
      
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide caption="" img-blank img-alt="" style="background-color:" >
        <div class="container">
        <div>
            <h4 class="text-dark" style="font-weight: bold;font-size: 30px;padding:25px 0px">Centers</h4>
        </div>
      <b-card-group  style="padding:0px;">
       <b-card title="" style="background-color:#FFFFFF;padding: 0px 0px;">
            <h5 class="text-primary" style="font-weight: bold">Vishal Nagar</h5>
                <b-card-text style="text:bold; " >
                    <div>    
                    <p class="text-dark" style="padding:10px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt a tincidunt eget</p>              
                          </div>
                    <div class="container">
                        <a href="#" class = "call"><b-img :src="require('../assets/Icons/telephone.svg')" style="padding : 0px 2px;"></b-img><h8 style="padding : 10px 2px; ">+91xxxxxxxxxx</h8></a>

                    </div>
                    <div class="container">
                    <a href="#" class = "call"><b-img :src="require('../assets/Icons/gmail.svg')" style="padding : 10px 2px;"></b-img><h8 style="padding : 10px 2px; ">xyz@gmail.com</h8></a>
                    </div>
                    </b-card-text> 
            </b-card>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <b-card title="" style="background-color:#FFFFFF;padding: 0px 0px;">
            <h5 class="text-primary" style="font-weight: bold">Kalyan Nagar</h5>
                <b-card-text style="text:bold; " >
                    <div>    
                    <p class="text-dark" style="padding:10px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt a tincidunt eget</p>              
                          </div>
                    <div class="container">
                        <a href="#" class = "call"><b-img :src="require('../assets/Icons/telephone.svg')" style="padding : 0px 2px;"></b-img><h8 style="padding : 10px 2px; ">+91xxxxxxxxxx</h8></a>

                    </div>
                    <div class="container">
                    <a href="#" class = "call"><b-img :src="require('../assets/Icons/gmail.svg')" style="padding : 10px 2px;"></b-img><h8 style="padding : 10px 2px; ">xyz@gmail.com</h8></a>
                    </div>
                    
                </b-card-text> 
            </b-card>
      </b-card-group>
      </div>
      </b-carousel-slide>

       <b-carousel-slide caption="" img-blank img-alt="" style="background-color:" >
        <div class="container">
        <div>
            <h4 class="text-dark" style="font-weight: bold;font-size: 30px;padding:25px 0px">Centers</h4>
        </div>
      <b-card-group  style="padding:0px;">
       <b-card title="" style="background-color:#FFFFFF;padding: 0px 0px;">
            <h5 class="text-primary" style="font-weight: bold">Vishal Nagar</h5>
                <b-card-text style="text:bold; " >
                    <div>    
                    <p class="text-dark" style="padding:10px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt a tincidunt eget</p>              
                          </div>
                    <div class="container">
                        <a href="#" class = "call"><b-img :src="require('../assets/Icons/telephone.svg')" style="padding : 0px 2px;"></b-img><h8 style="padding : 10px 2px; ">+91xxxxxxxxxx</h8></a>

                    </div>
                    <div class="container">
                    <a href="#" class = "call"><b-img :src="require('../assets/Icons/gmail.svg')" style="padding : 10px 2px;"></b-img><h8 style="padding : 10px 2px; ">xyz@gmail.com</h8></a>
                    </div>
                    
                </b-card-text> 
            </b-card>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <b-card title="" style="background-color:#FFFFFF;padding: 0px 0px;">
            <h5 class="text-primary" style="font-weight: bold">Kalyan Nagar</h5>
                <b-card-text style="text:bold; " >
                    <div>    
                    <p class="text-dark" style="padding:10px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt a tincidunt eget</p>              
                          </div>
                    <div class="container">
                        <a href="#" class = "call"><b-img :src="require('../assets/Icons/telephone.svg')" style="padding : 0px 2px;"></b-img><h8 style="padding : 10px 2px; ">+91xxxxxxxxxx</h8></a>

                    </div>
                    <div class="container">
                    <a href="#" class = "call"><b-img :src="require('../assets/Icons/gmail.svg')" style="padding : 10px 2px;"></b-img><h8 style="padding : 10px 2px; ">xyz@gmail.com</h8></a>
                    </div>
                    
                </b-card-text> 
            </b-card>
      </b-card-group>
      </div>
      </b-carousel-slide>
     
    <b-carousel-slide caption="" img-blank img-alt="" style="background-color:" >
        <div class="container">
        <div>
            <h4 class="text-dark" style="font-weight: bold;font-size: 30px;padding:25px 0px">Centers</h4>
        </div>
      <b-card-group  style="padding:0px;">
       <b-card title="" style="background-color:#FFFFFF;padding: 0px 0px;">
            <h5 class="text-primary" style="font-weight: bold">Vishal Nagar</h5>
                <b-card-text style="text:bold; " >
                    <div>    
                    <p class="text-dark" style="padding:10px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt a tincidunt eget</p>              
                          </div>
                  <div class="container">
                        <a href="#" class = "call"><b-img :src="require('../assets/Icons/telephone.svg')" style="padding : 0px 2px;"></b-img><h8 style="padding : 10px 2px; ">+91xxxxxxxxxx</h8></a>

                    </div>
                    <div class="container">
                    <a href="#" class = "call"><b-img :src="require('../assets/Icons/gmail.svg')" style="padding : 10px 2px;"></b-img><h8 style="padding : 10px 2px; ">xyz@gmail.com</h8></a>
                    </div>
                    
                </b-card-text> 
            </b-card>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <b-card title="" style="background-color:#FFFFFF;padding: 0px 0px;">
            <h5 class="text-primary" style="font-weight: bold">Kalyan Nagar</h5>
                <b-card-text style="text:bold; " >
                    <div>    
                    <p class="text-dark" style="padding:10px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt a tincidunt eget</p>              
                          </div>
                    <div class="container">
                        <a href="#" class = "call"><b-img :src="require('../assets/Icons/telephone.svg')" style="padding : 0px 2px;"></b-img><h8 style="padding : 10px 2px; ">+91xxxxxxxxxx</h8></a>

                    </div>
                    <div class="container">
                    <a href="#" class = "call"><b-img :src="require('../assets/Icons/gmail.svg')" style="padding : 10px 2px;"></b-img><h8 style="padding : 10px 2px; ">xyz@gmail.com</h8></a>
                    </div>
                    
                </b-card-text> 
            </b-card>
      </b-card-group>
      </div>
      </b-carousel-slide>

       <b-carousel-slide caption="" img-blank img-alt="" style="background-color:" >
        <div class="container">
        <div>
            <h4 class="text-dark" style="font-weight: bold;font-size: 30px;padding:25px 0px">Centers</h4>
        </div>
      <b-card-group  style="padding:0px;">
       <b-card title="" style="background-color:#FFFFFF;padding: 0px 0px;">
            <h5 class="text-primary" style="font-weight: bold">Vishal Nagar</h5>
                <b-card-text style="text:bold; " >
                    <div>    
                    <p class="text-dark" style="padding:10px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt a tincidunt eget</p>              
                          </div>
                    <div class="container">
                        <a href="#" class = "call"><b-img :src="require('../assets/Icons/telephone.svg')" style="padding : 0px 2px;"></b-img><h8 style="padding : 10px 2px; ">+91xxxxxxxxxx</h8></a>

                    </div>
                    <div class="container">
                    <a href="#" class = "call"><b-img :src="require('../assets/Icons/gmail.svg')" style="padding : 10px 5px;"></b-img><h8 style="padding : 10px 2px; ">xyz@gmail.com</h8></a>
                    </div>
                    
                </b-card-text> 
            </b-card>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <b-card title="" style="background-color:#FFFFFF;padding: 0px 0px;">
            <h5 class="text-primary" style="font-weight: bold">Kalyan Nagar</h5>
                <b-card-text style="text:bold; " >
                    <div>    
                    <p class="text-dark" style="padding:10px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt a tincidunt eget</p>              
                          </div>
                    <div class="container">
                        <a href="#" class = "call"><b-img :src="require('../assets/Icons/telephone.svg')" style="padding : 0px 2px;"></b-img><h8 style="padding : 10px 2px; ">+91xxxxxxxxxx</h8></a>

                    </div>
                    <div class="container">
                    <a href="#" class = "call"><b-img :src="require('../assets/Icons/gmail.svg')" style="padding : 10px 2px;"></b-img><h8 style="padding : 10px 2px; ">xyz@gmail.com</h8></a>
                    </div>
                    
                </b-card-text> 
            </b-card>
      </b-card-group>
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
        sliding: null
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