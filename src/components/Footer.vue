<template>
<div>
    <div class="social">
        Connect with Us<br>
        <b-img :src="require('../assets/icons/facebook.svg')" style="padding: 14px;"></b-img>
        <b-img :src="require('../assets/icons/twitter.svg')" style="padding: 14px;"></b-img>
        <b-img :src="require('../assets/icons/gmail.svg')" style="padding: 14px;"></b-img>
        <b-img :src="require('../assets/icons/youtube.svg')" style="padding: 14px;"></b-img>
        <b-img :src="require('../assets/icons/instagram.svg')" style="padding: 14px;"></b-img>
    </div>
    <div class="copright" style="height:50px;">
        Copyright Notice: @ 2018 Greycells18 Media Limited and its Licensors. All rights reserved.
    </div>    
</div>
</template>

<script>
export default {
    name: "footer"
}
</script>

<style>
    .social{
        background-color:black;
        color: white;
        font-weight: bold;
        font-size:20px;
    }

    .copyright{
        background-color: white;
        color: black;
    }
</style>