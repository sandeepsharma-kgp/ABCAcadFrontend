<template>
<div style="background-color:#F9EEEE;">
    <div style="padding:30px 0px; background-color:#FDFCFC; align:center">
        <div>
        <p style="font-weight: bold; padding:0px; color:	#000000; font-size: 30px;">Classroom Programs</p>
        </div>
      <div class="container" style="padding:10px 0px 0px;background-color:#FDFCFC">
        <b-card-group style="padding:20px">
            <b-card>
             
               <b-img :src="require('@/assets/icons/study1.svg')" style="padding : 1px 85px; "></b-img>
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
             <b-img :src="require('@/assets/icons/study1.svg')" style="padding : 1px 85px; "></b-img>
                 
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
               <b-img :src="require('@/assets/icons/study1.svg')" style="padding : 1px 85px; "></b-img>
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
            <b-img :src="require('@/assets/icons/study1.svg')" style="padding : 1px 90px; "></b-img>
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
               <b-img :src="require('@/assets/icons/study1.svg')" style="padding : 1px 90px; "></b-img>
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
</template>

<script>
export default {
}
</script>

<style scoped>
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
</style>