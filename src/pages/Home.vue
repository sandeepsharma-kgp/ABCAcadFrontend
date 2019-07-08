<template>
  <div>
     
    <!--<Carousel />
    <Courses />
    <Advertisements />
    <Blogs />
    <Cards />
    <Centers/>
    <Students/>
    <Videos/> -->

    <!---------Carousel Start-----><br><br><br>
    <div style="padding:50px;">
        <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="480"
      img-height="120"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        img-src="https://picsum.photos/480/120/?image=52"
      ><h3>The Best</h3><h4>We pride ourselves in being the very best in Teaching</h4></b-carousel-slide>
      <!-- Text slides with image -->
      <b-carousel-slide        
        img-src="https://picsum.photos/480/120/?image=59"
      ><h3>The Best</h3><h4>We pride ourselves in being the very best in Teaching</h4></b-carousel-slide>
      <!-- Text slides with image -->
      <b-carousel-slide
        img-src="https://picsum.photos/480/120/?image=42"
      ><h3>The Best</h3><h4>We pride ourselves in being the very best in Teaching</h4></b-carousel-slide>

    </b-carousel>   
    <div class="notif">
      <h4 style="color: rgb(240, 222, 61);"><b style="color:white;">Notification : </b>CLAT 2019 to be conducted online.</h4>
    </div>
    
    </div> 
<!--------------Carousel End----------------->

<!----------Courses Start-------------------------->
<div class="programs" style="padding-bottom :150px;">
        <h1 style="padding:15px 15px 0px; color:white; text-decoration : underline;">Programs</h1>
        <b-container class="bv-example-row">
            <b-row>
                <b-col>

                    <h2 style="padding:15px 15px 0px; color:white;">Class 8-9</h2><br>

                    <b-button href="#" variant="warning" class="btn">I am a Link</b-button>
                    <b-button href="#" variant="warning" class="btn">I am a Link</b-button><br>

                    <b-button href="#" variant="warning" class="btn">I am a Link</b-button>
                    <b-button href="#" variant="warning" class="btn">I am a Link</b-button><br>

                    <b-button href="#" variant="warning" class="btn">I am a Link</b-button>
                    <b-button href="#" variant="warning" class="btn">I am a Link</b-button><br>

                    <b-button href="#" variant="warning" class="btn">I am a Link</b-button>
                    <b-button href="#" variant="warning" class="btn">I am a Link</b-button><br>

                </b-col>
                <b-col>
                    <h2 style="padding:15px 15px 0px; color:white;">Class 9-10</h2><br>

                    <b-button href="#" variant="warning" class="btn">I am a Link</b-button>
                    <b-button href="#" variant="warning" class="btn">I am a Link</b-button><br>

                    <b-button href="#" variant="warning" class="btn">I am a Link</b-button>
                    <b-button href="#" variant="warning" class="btn">I am a Link</b-button><br>

                    <b-button href="#" variant="warning" class="btn">I am a Link</b-button>
                    <b-button href="#" variant="warning" class="btn">I am a Link</b-button><br>

                    <b-button href="#" variant="warning" class="btn">I am a Link</b-button>
                    <b-button href="#" variant="warning" class="btn">I am a Link</b-button><br>
                </b-col>
                <b-col>
                    <h2 style="padding:15px 15px 0px; color:white;">Class 10-11</h2><br>

                    <b-button href="#" variant="warning" class="btn">I am a Link</b-button>
                    <b-button href="#" variant="warning" class="btn">I am a Link</b-button><br>

                    <b-button href="#" variant="warning" class="btn">I am a Link</b-button>
                    <b-button href="#" variant="warning" class="btn">I am a Link</b-button><br>

                    <b-button href="#" variant="warning" class="btn">I am a Link</b-button>
                    <b-button href="#" variant="warning" class="btn">I am a Link</b-button><br>

                    <b-button href="#" variant="warning" class="btn">I am a Link</b-button>
                    <b-button href="#" variant="warning" class="btn">I am a Link</b-button><br>
                </b-col>
            </b-row>
        </b-container>
    </div>
<!------------------Courses End------------------->

<!--------------Adveretisements start---------------->
<div><br><br><br>
    <div>
        <p style="font-weight: bold; padding:10px; color:#585252; font-size: 30px;">---Advertisement---</p>
    </div>

    <div style="background-color:#62959a;">
        <p style="font-weight: bold; padding:10px; color:white; font-size: 20px;">Take Tests</p>
    <div class="container" style="padding:0px 100px 25px;">
        <b-card-group deck>
            <b-card title="Competitive Exams" style="color:#060505;">
                <b-card-text style="padding:25px 0px;">
                    <div class="container">    
                        <b-button type="submit" style="background-color:#0f536d; border-color:#0f536d; width:100%;">JEE</b-button>
                    </div>
                    <div class="container">
                        <b-button type="submit" style="background-color:#0f536d; border-color:#0f536d; width:100%;">NEET</b-button>
                    </div>
                </b-card-text> 
            </b-card>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <b-card title="Class 8-12" style="color:#060505">
                <b-card-text>
                    <div class="container"><b-form-select v-model="selectBoard" :options="Board" style="background-color:#62959a; color:white;"></b-form-select></div>
                    <div class="container"><b-form-select v-model="selectClass" :options="Class" style="background-color:#62959a; color:white;"></b-form-select></div>
                    <div class="container"><b-button style=" background-color:#e16119; border-color:#e16119; width:100%;"><h4>Submit</h4></b-button></div>
                </b-card-text>
            </b-card>
        </b-card-group>
    </div>
    </div>
</div>   
<!-------------------------------advertisement ends----------------->

<!----------------------Blogs start--------------------->
<div class="container" style="padding:30px 100px 25px;">
        <b-container class="bv-example-row">
        <b-row>
            <b-col class="border-right"><strong style="font-size:20px; font-weight:bold; color:#141313;">Blogs</strong>
            <div style="padding: 40px 14px 0px 0px;">
                <b-card no-body class="overflow-hidden" >
                    <b-row no-gutters>
                    <b-col md="4">
                        <b-card-img :src="require('../assets/images/blogging-blur-communication-261662.jpg')" style="padding:25px 20px 0px 20px; width:150px;"></b-card-img>
                    </b-col>
                    <b-col md="8">
                        <b-card-body>
                        <b-card-text style="text-align:left;">
                            <a href="">This is a wider card with supporting text as a natural lead.</a><br>
                            <p style="font-size:15px; color:grey;">By:abc</p>
                        </b-card-text>
                        </b-card-body>
                    </b-col>
                    </b-row>
            </b-card>
            <b-card no-body class="overflow-hidden">
                <b-row no-gutters>
                <b-col md="4">
                    <b-card-img :src="require('../assets/images/blogging-blur-communication-261662.jpg')" style="padding:25px 20px 0px 20px; width:150px;"></b-card-img>
                </b-col>
                <b-col md="8">
                    <b-card-body>
                    <b-card-text style="text-align:left;">
                        <a href="">This is a wider card with supporting text as a natural lead.</a><br>
                        <p style="font-size:15px; color:grey;">By:abc</p>
                    </b-card-text>
                    </b-card-body>
                </b-col>
                </b-row>
            </b-card>
            <b-card no-body class="overflow-hidden">
                <b-row no-gutters>
                <b-col md="4">
                    <b-card-img :src="require('../assets/images/blog-businesswoman-create-267569.jpg')" style="padding:25px 20px 0px 20px; width:150px;"></b-card-img>
                </b-col>
                <b-col md="8">
                    <b-card-body>
                    <b-card-text style="text-align:left;">
                        <a href="">This is a wider card with supporting text as a natural lead.</a><br>
                        <p style="font-size:15px; color:grey;">By:abc</p>
                    </b-card-text>
                    </b-card-body>
                </b-col>
                </b-row>
            </b-card>
            </div><br>
            <b-button style="background-color:#e16119; border-color:#e16119; width:150px;">View More</b-button>
            </b-col>

            <b-col><strong style="font-size:20px; font-weight:bold; color:#141313;">Questions & Answers</strong>
                <div style="padding: 60px 0px 0px 14px;">
                    
                    <b-row>    
                        <b-col sm="8">
                        <b-form-input v-model="text" placeholder="Type your question here..."></b-form-input>
                        </b-col>
                        <b-col sm="4">
                        <b-button style="background-color:#e16119; border-color:#e16119; height :50%; width:150px;">Ask Question</b-button>
                        </b-col>
                    </b-row>
                    
                    <b-card no-body class="overflow-hidden" style="height:150px;">
                    <b-row no-gutters>
                    <b-col md="2">
                        <b-card-img :src="require('@/assets/icons/question.svg')" style="padding:50px 10px; width:80px;"></b-card-img>
                    </b-col>
                    <b-col md="10">
                        <b-card-body style="text-align:left;">
                        <b-card-text>
                            <p style="color:grey; font-size:15px;">Class-Board-Subject</p>
                            <a href="">This is a wider card with supporting text as a natural lead.</a><br>
                            <p style="font-size:15px; color:grey;">By:abc</p>
                        </b-card-text>
                        </b-card-body>
                    </b-col>
                    </b-row>
                </b-card>
                <b-card no-body class="overflow-hidden" style="height:150px;">
                    <b-row no-gutters>
                    <b-col md="2">
                        <b-card-img :src="require('@/assets/icons/question.svg')" style="padding:50px 10px; width:80px;"></b-card-img>
                    </b-col>
                    <b-col md="10">
                        <b-card-body style="text-align:left;">
                        <b-card-text>
                            <p style="color:grey; font-size:15px;">Class-Board-Subject</p>
                            <a href="">This is a wider card with supporting text as a natural lead.</a><br>
                            <p style="font-size:15px; color:grey;">By:abc</p>
                        </b-card-text>
                        </b-card-body>
                    </b-col>
                    </b-row>
                </b-card>
                </div><br>
                <b-button style="background-color:#e34a00; border-color:#e34a00; width:150px;">View More</b-button>
            </b-col>
        </b-row>
        </b-container>
    </div>
<!--------------------blogs ends----------------------->

<!-----------the best starts------------------>
        <div class="best">
        <img src="../assets/images/ClassroomProgramCorousel.jpg" style="width:95%;">
        <div class="centered"><h3>The Best</h3><h4>We pride ourselves in being the best in teaching</h4></div>
        </div>
<!---------------the best ends---------------->

    <!-----------------cards start---------------->
    <div style="background-color:#F9EEEE;">
    

    <div style="padding:30px 0px; background-color:#FDFCFC; align:center">
        <div>
        <p style="font-weight: bold; padding:0px; color:	#000000; font-size: 30px;">Classroom Programs</p>
        </div>
      <div class="container" style="padding:10px 0px 0px;background-color:#FDFCFC">
        <b-card-group style="padding:20px">
            <b-card>
             
               <b-img :src="require('../assets/icons/study1.svg')" style="padding : 1px 85px; "></b-img>
                 <h3 class="text-primary" style="font-weight: bold; padding:10px width:124.25 height:48;">Lorem ipsum</h3>
                <b-card-text style="padding:2px 0px;">
                    <div class="container">    
                        <p class="text-dark" style="padding: 1px">Use card groups to render cards as a single, attached element with equal width and height columns. Card groups use display: flex; to achieve their uniform sizing.</p>
                    </div>
                    <div class="container">
                        <b-button type="submit" style="background-color:#e34a00; border-color:#e34a00; width:181 height:44;" width=181 height=81>View Details</b-button>
                    </div>
                </b-card-text> 
            </b-card>


            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
            <b-card title="">
             <b-img :src="require('../assets/icons/study1.svg')" style="padding : 1px 85px; "></b-img>
                 
                 <h3 class="text-primary" style="font-weight: bold; padding:10px width:124.25 height:48;">Lorem ipsum</h3>
                <b-card-text >
                    <div class="container">    
                        <p class="text-dark">Use card groups to render cards as a single, attached element with equal width and height columns. Card groups use display: flex; to achieve their uniform sizing.</p>
                    </div>
                    <div class="container">
                        <b-button type="submit" style="background-color:#e34a00; border-color:#e34a00; width:181 height:44;">View Details</b-button>
                    </div>
                </b-card-text> 
            </b-card>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
            <b-card title="">
               <b-img :src="require('../assets/icons/study1.svg')" style="padding : 1px 85px; "></b-img>
                 <h3 class="text-primary" style="font-weight: bold; padding:10px width:124.25 height:48;">Lorem ipsum</h3>
                <b-card-text style="padding:0px 0px;">
                    <div class="container">    
                        <p class="text-dark">Use card groups to render cards as a single, attached element with equal width and height columns. Card groups use display: flex; to achieve their uniform sizing.</p>
                    </div>
                    <div class="container">
                        <b-button type="submit" style="background-color:#e34a00; border-color:#e34a00; width:181 height:44;">View Details</b-button>
                    </div>
                </b-card-text> 
            </b-card>

        </b-card-group>
    </div>
    </div>
      
    <div class="container" style="padding:30px 150px;background-color:#F9EEEE;">
      <div>
        <p style="font-weight: bold; padding:0px; color:	#000000; font-size: 30px;">Exams</p>
      </div>
      <b-card-group style="padding:20px">
        
        <b-card title="">
            <b-img :src="require('../assets/icons/study1.svg')" style="padding : 1px 90px; "></b-img>
                 <h3 class="text-primary" style="font-weight: bold; padding:10px width:124.25 height:48;">Practice Exams</h3>
                <b-card-text style="">
                    <div class="container">    
                        <p class="text-dark">Use card groups to render cards as a single, attached element with equal width and height columns. Card groups use display: flex; to achieve their uniform sizing.</p>
                    </div>
                    <div class="container">
                        <b-button type="submit" style="background-color:#e34a00; border-color:#e34a00; width:181 height:44;">View Details</b-button>
                    </div>
                </b-card-text> 
            </b-card>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
            <b-card >
               <b-img :src="require('../assets/icons/study1.svg')" style="padding : 1px 90px; "></b-img>
                    <h3 class="text-primary" style="font-weight: bold; padding:10px width:124.25 height:48;">Scholarship Exams</h3>
                <b-card-text style="padding:0px 0px;">
                    <div class="container">    
                        <p class="text-dark">Use card groups to render cards as a single, attached element with equal width and height columns. Card groups use display: flex; to achieve their uniform sizing.</p>
                    </div>
                    <div class="container">
                        <b-button type="submit" style="background-color:#e34a00; border-color:#e34a00; width:181 height:44;">View Details</b-button>
                    </div>
                </b-card-text> 
            </b-card>
      </b-card-group>
    </div>
</div>   
<!--------------cards end-------------->
<!---------------centers start---------->
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
                        <a href="#" class = "call"><b-img :src="require('../assets/icons/telephone.svg')" style="padding : 0px 2px;"></b-img><h8 style="padding : 10px 2px; ">+91xxxxxxxxxx</h8></a>

                    </div>
                    <div class="container">
                    <a href="#" class = "call"><b-img :src="require('../assets/icons/gmail.svg')" style="padding : 10px 2px;"></b-img><h8 style="padding : 10px 2px; ">xyz@gmail.com</h8></a>
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
                        <a href="#" class = "call"><b-img :src="require('../assets/icons/telephone.svg')" style="padding : 0px 2px;"></b-img><h8 style="padding : 10px 2px; ">+91xxxxxxxxxx</h8></a>

                    </div>
                    <div class="container">
                    <a href="#" class = "call"><b-img :src="require('../assets/icons/gmail.svg')" style="padding : 10px 2px;"></b-img><h8 style="padding : 10px 2px; ">xyz@gmail.com</h8></a>
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
                        <a href="#" class = "call"><b-img :src="require('../assets/icons/telephone.svg')" style="padding : 0px 2px;"></b-img><h8 style="padding : 10px 2px; ">+91xxxxxxxxxx</h8></a>

                    </div>
                    <div class="container">
                    <a href="#" class = "call"><b-img :src="require('../assets/icons/gmail.svg')" style="padding : 10px 2px;"></b-img><h8 style="padding : 10px 2px; ">xyz@gmail.com</h8></a>
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
                        <a href="#" class = "call"><b-img :src="require('../assets/icons/telephone.svg')" style="padding : 0px 2px;"></b-img><h8 style="padding : 10px 2px; ">+91xxxxxxxxxx</h8></a>

                    </div>
                    <div class="container">
                    <a href="#" class = "call"><b-img :src="require('../assets/icons/gmail.svg')" style="padding : 10px 2px;"></b-img><h8 style="padding : 10px 2px; ">xyz@gmail.com</h8></a>
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
                        <a href="#" class = "call"><b-img :src="require('../assets/icons/telephone.svg')" style="padding : 0px 2px;"></b-img><h8 style="padding : 10px 2px; ">+91xxxxxxxxxx</h8></a>

                    </div>
                    <div class="container">
                    <a href="#" class = "call"><b-img :src="require('../assets/icons/gmail.svg')" style="padding : 10px 2px;"></b-img><h8 style="padding : 10px 2px; ">xyz@gmail.com</h8></a>
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
                        <a href="#" class = "call"><b-img :src="require('../assets/icons/telephone.svg')" style="padding : 0px 2px;"></b-img><h8 style="padding : 10px 2px; ">+91xxxxxxxxxx</h8></a>

                    </div>
                    <div class="container">
                    <a href="#" class = "call"><b-img :src="require('../assets/icons/gmail.svg')" style="padding : 10px 2px;"></b-img><h8 style="padding : 10px 2px; ">xyz@gmail.com</h8></a>
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
                        <a href="#" class = "call"><b-img :src="require('../assets/icons/telephone.svg')" style="padding : 0px 2px;"></b-img><h8 style="padding : 10px 2px; ">+91xxxxxxxxxx</h8></a>

                    </div>
                    <div class="container">
                    <a href="#" class = "call"><b-img :src="require('../assets/icons/gmail.svg')" style="padding : 10px 5px;"></b-img><h8 style="padding : 10px 2px; ">xyz@gmail.com</h8></a>
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
                        <a href="#" class = "call"><b-img :src="require('../assets/icons/telephone.svg')" style="padding : 0px 2px;"></b-img><h8 style="padding : 10px 2px; ">+91xxxxxxxxxx</h8></a>

                    </div>
                    <div class="container">
                    <a href="#" class = "call"><b-img :src="require('../assets/icons/gmail.svg')" style="padding : 10px 2px;"></b-img><h8 style="padding : 10px 2px; ">xyz@gmail.com</h8></a>
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
  <!-------------------centers ends------------->

<!-------------Students start------------>
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
        <img src="../assets/images/black-and-white-boy-casual-555790.jpg" class="rounded-circle" alt="Sample image" width="150" height="125">
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
        <img src="../assets/images/black-and-white-boy-casual-555790.jpg" class="rounded-circle" alt="Sample image" width="150" height="125">
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
        <img src="../assets/images/black-and-white-boy-casual-555790.jpg" class="rounded-circle" alt="Sample image" width="150" height="125">
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
        <img src="../assets/images/black-and-white-boy-casual-555790.jpg" class="rounded-circle" alt="Sample image" width="150" height="125">
        <p class="text-dark" style="padding:30px">Lorem ipsum dolar sit amet consectuer adipiscing elite sed do eiusmod tempor incididunt ut labor at dolar manga aliqua</p> 
        </div>
      </div>
      </b-carousel-slide>
    </b-carousel>
    <p class="mt-4">
        
    
    </p>
    </div>
    
  </div>
  <!----------------students ends-------------->

<!--------------video starts-------------->
<div>
       <div style="">
           <h5 class="text-dark" style="font-weight: bold;font-size: 35px;padding:px 0px">Videos</h5>
       </div>
    <div class="row">

            <div class="col-md-4">
                <div class="thumbnail">
                
                    <img src="../assets/images/abacus-addition-arithmetic-1019470.jpg" alt="Lights" style="width:420" height="240">
                
                </div>
        </div>
        <div class="col-md-4">
                <div class="thumbnail">
                
                    <img src="../assets/images/black-and-white-blur-capture-240163 (1).jpg" alt="Nature" style="width:420" height="240">

                </div>
        </div>
        
        <div class="col-md-4">
                <div class="thumbnail">
                
                    <img src="../assets/images/biology-blur-blurred-background-954585.jpg" alt="Fjords" style="width:420" height="240">
                
                </div>
        </div>
    </div>
    </div>
    <br><br><br><br>
    <!--------------video ends-------------->



  </div>
</template>

<script>

/*import Advertisements from '@/pages/Advertisements'
import Blogs from '@/pages/Blogs'
import Carousel from '@/pages/Carousel'
import Courses from '@/pages/Courses'
import Cards from '@/pages/Cards'
import Centers from '@/pages/Centers'
import Students from '@/pages/Students'
import Videos from '@/pages/Videos'*/

export default {
  /*name: 'home',
  components: {
    Advertisements,
    Blogs,
    Carousel,
    Courses,
    Cards,
    Centers,
    Students,
    Videos
  }*/

  data() {
      return {
        selectBoard: null,
        Board: [
          { value: null, text: 'Select your Board' },
          { value: 'State', text: 'State Board' },
          { value: 'CBSE', text: 'CBSE Board' },
          { value: 'ICSE', text: 'ICSE Board' }
        ],

        selectClass: null,
        Class: [
          { value: null, text: 'Select your Class' },
          { value: '08', text: '8' },
          { value: '09', text: '9' },
          { value: '10', text: '10' },
          { value: '11', text: '11' },
          { value: '12', text: '12' }
        ],

        slide: 0,
        sliding: null,

         mainProps: { blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1' }

      }
    }
    }
</script>

<style scoped>
.notif{
   background-color : rgb(240, 109, 61) !important;
   padding:0px;
   height : 15%;
   text-align: center;
}

.programs{
    background-image : url("https://picsum.photos/1024/400/?image=41");
    background-repeat: no-repeat;
    background-size: cover;
}
.btn{
    color :white;
    margin : 10px;
    background-color : rgb(240, 109, 61) !important;
}

.container{
    padding: 20px;
}

.b-card-group{
    text-align: center;
}

.b-card{
    color: black;
    height:350px; 
    width:350px;
}

.border-right{
    border-right: 1px solid black;
}

.container{
    padding: 5px;
}
.b-card-group{
    padding: 150px;
    text-align: center;
    background: cornsilk;
}
.b-card{
    color: black;
    height:300px; 
    width:300px;
}

.carousel-caption h4 a {
    color: #000;
}

.container {
  position: relative;
  text-align: center;
  color: white;
}
.centered {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
}

.best {
  position: relative;
  text-align: center;
  color: white;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>