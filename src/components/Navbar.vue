
<template>
<div>
    <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
    <b-navbar-brand href="#" style="font-weight:bold; font-size:27px;" to="/" @click.native="open = false">
      Albedo Academy</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">  
          <a href="#" class = "call"><b-img :src="require('../assets/icons/call.svg')" style="padding : 14px;"></b-img><h8 style="padding : 14px; padding-left:0px;">+91-xxxxxxxxxx</h8></a>
          <b-button variant="outline-dark" class="scholar">Scholarship</b-button>
          

   

    <b-modal hide-footer
      id="modal-prevent-closing"
      ref="modal"
      title="Login/Sign Up"
      size="xl"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
      
    >
    <form ref="form" @submit.stop.prevent="handleSubmit">
    <div id="login">
    <div class="sign-up">
      <h1> Welcome to Albedo </h1>
      <form v-on:submit="signUpData">
      <input type="text" placeholder="Full Name" v-model="signUp.name" required/>
      <input type="email" placeholder="Email" v-model="signUp.email" required/>
      <input type="tele" pattern="[0-9]{10}" placeholder="Contact Number" v-model="signUp.contact" required/>
      <select placeholder="Category" v-model="signUp.category" required>
        <option  disabled value="" selected data-default>Category</option>
        <option value = "Unreserved">Unreserved</option>
        <option value = "OBC">OBC</option>
        <option value = "SC">SC</option>
        <option value = "ST">ST</option>
        <option value = "Unreserved-PH">Unreserved-PH</option>
        <option value = "OBC-PH">OBC-PH</option>
        <option value = "SC-PH">SC-PH</option>
        <option value = "ST-PH">ST-PH</option>
      </select>
      <img class="select-arrow" src = "../assets/icons/down_arrow.svg">
      <input type="text" pattern="[0-9]{6}" maxlength="6" placeholder="Pin Code" v-model="signUp.pin" required/>
      <input type="text" placeholder="City" v-model="signUp.city" required/>
      <input type="password" placeholder="Type-Password" v-model="signUp.password" required/>
      <input type="submit" value="SIGN ME UP">
      </form>
    </div>
    
    <div class="sign-in">
      <h2>Sign In</h2>
      <form v-on:submit="signInData" style="position:relative; top: 80px;">
        <div class="error" v-if="error">{{error}}{{remember}}</div>
        <input class="sign-in-email" type="email" placeholder="Email" v-model="signIn.email" required/>
        <input style="position:relative; top: 15px;" class="sign-in-password" type="password" v-model="signIn.password" placeholder="Password" required/>
        <label class="container"> Remember me
          <input type="checkbox" value="marked" v-model='remember'>
          <span class="checkmark"></span>
        </label>
        <input style="position:relative; top: 50px;" type="submit" value="SIGN IN">
        <div style="text-align:center; position:relative; top: 50px;" class="psw">Forgot Password?</div>
      </form>
    </div>
    <div class="or">OR</div>
  </div>
  </form>
  </b-modal>
          <b-nav-item href="#" style="padding:5px;" active :to="{name: 'about'}" @click.native="open = false" >About Us</b-nav-item>
          <b-nav-item href="#" style="padding:5px;" active :to="{name: 'login'}" @click.native="open = false">Doubts & Solution</b-nav-item>
          <b-nav-item-dropdown text="All Program" right type="dark" style="padding:5px;">
            <b-dropdown-item href="#">Class 8-9</b-dropdown-item>
            <b-dropdown-item href="#">Class 9-10</b-dropdown-item>
            <b-dropdown-item href="#">Class 11-12</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-button variant="transparent" v-b-modal.modal-prevent-closing><b-img :src="require('../assets/icons/man-user.svg')" style="padding : 8px;" ></b-img></b-button>
          <b-img :src="require('../assets/icons/map-pin-marked.svg')" style="padding : 8px;"></b-img>
          
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>  
</div>
</template>

<script>

export default {
    name: "Navbar",
    data() {
      return {
        name: '',
        nameState: null,
        submittedNames: []
      }
    },
    methods: {
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid ? 'valid' : 'invalid'
        return valid
      },
      resetModal() {
        this.name = ''
        this.nameState = null
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        // Push the name to submitted names
        this.submittedNames.push(this.name)
        // Hide the modal manually
        this.$nextTick(() => {
          this.$refs.modal.hide()
        })
      }
    }
  }

</script>

<style scoped>
.navbar {
    background-color : #e16119 !important;
}

.scholar{
  background : none;
  color :white;
  border-radius : 15px;
  border-color: white;
  
}

.call{
  color : white;
  text-decoration: none;
}

.call:hover{
  color:white;
}
</style>
<script>
export default {
  name: 'login',
  
  data(){
    return{
      error:'',
      remember: '',
      signUp:{
        name:null,
        email:null,
        contact:null,
        category:'',
        pin:null,
        city:null,
        password:null
      },
      signIn:{
        email:null,
        password:null
      }
    }
  },
  methods:{
    signUpData: function(){
      console.log(JSON.stringify(this.signUp));
    },
    signInData: function(){
      console.log(JSON.stringify(this.signIn));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#login{
  position: relative;
  margin:1% auto;
  width: 100%;
  height: 550px;
  background: #fff;

}
#login .sign-up{
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 40px;
  width: 50%;
  height: 500px;
}
#login h1 {
  margin: 0 0 20px 0;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
}
#login h2 {
  text-align: center;
  margin: 0 0 20px 0;
  font-weight: bold;
  font-size: 16px;
  color: whitesmoke;
  font-family:'Lucida Sans','Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',  Arial, sans-serif; 
}
#login .psw{
  color:white;
  font-size: 12px;
  cursor: pointer;
}
#login input[type="text"],
#login input[type="tele"],
#login input[type="email"],
#login input[type="password"]
{
  display: block;
  box-sizing: border-box;
  margin-bottom: 20px;
  padding: 4px;
  padding-left: 16px;
  width: 100%;
  height: 33px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 12px;
  border: 3px solid #e4e4e4;
  border-radius: 17px;
  transition: 0.2s ease;
}
#login select{
  display: block;
  box-sizing: border-box;
  margin-bottom: 20px;
  padding: 4px;
  padding-left: 16px;
  width: 100%;
  height: 33px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 12px;
  border: 3px solid #e4e4e4;
  border-radius: 17px;
  transition: 0.2s ease;
  color: gray;
  background: transparent;
  -moz-appearance: none;
  -webkit-appearance: none;
}	
#login .select-arrow{
  height: 30px;
  width: 30px;
  position: absolute;
  top: 240px;
  left: calc(100% - 80px);
}
#login select option {
  color: black;
}
#login select option[data-default] {
  color: #888;
}


#login input[type="submit"]{
  display: block;
  box-sizing: border-box;
  margin-bottom: 20px;
  padding: 4px;
  width: 100%;
  height: 35px;
  background: #e67300;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-family: sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s ease;
}
#login input[type="submit"]:hover,
#login input[type="submit"]:focus
{
  background: #ffa64d;
  transition: 0.2s ease;
}
#login .sign-in{
  position: absolute;
  top: 0;
  right: 0;
  box-sizing: border-box;
  padding: 40px;
  width: 50%;
  height: 550px;
  background: linear-gradient(rgba(20,20,20,0.5), rgba(20,20,20,0.5)), 
    url("../assets/images/dirt-gardening-grow-1214405.jpg");
  background-size: cover;
  background-position: center;
  
}
#login .or{
  position: absolute;
  top: 50%;
  left: calc(50% - 20px);;
  width: 40px;
  height: 40px;
  background: #ffcc9a;
  border-radius: 50%;
  line-height: 40px;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  font-family: sans-serif;
}
#login .container {
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 12px;
  cursor: pointer;
  color: white;
  font-size: 14px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-align: center;
}

/* Hide the browser's default checkbox */
#login .container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
#login .checkmark {
  position: absolute;
  border: #fff;
  left: calc(50% - 60px);
  height: 14px;
  width: 14px;
  background-color: transparent;
  border: 3px solid white;
  border-radius: 2px;
}
#login .container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* On mouse-over, add a grey background color */
#login .container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* Create the checkmark/indicator (hidden when not checked) */
#login .checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
#login .container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
#login .container .checkmark:after {
  left: 2px;
  top: 0px;
  width: 3px;
  height: 6px;
  border: solid white;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
#login input:focus, #login textarea:focus,#login  select:focus{
        outline: none;
        
}
#login div .error{
  margin-bottom: 10px;
  padding: 4px;
  display: block;
  box-sizing: border-box;
  border:solid 1px #f44336;
  background: #ffe6e6;
  font-family: sans-serif;
  font-size: 10px;
  border-radius: 3px;
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  #login{
    width : 100%;
    height : auto;
  }
  #login .sign-up{
  background:  white;
  width: 100%;
  height: 600px;
}
  #login .sign-in{
  position: absolute;
  top: 600px;
  right: none;
  left: 0px;
  width: 100%;
  
}
#login select,
#login input[type="text"],
#login input[type="tele"],
#login input[type="email"],
#login input[type="password"]
{
  
  width: 100%;
} 
#login input[type="submit"]{
  width: 100%;
}
#login .or{
  position: absolute;
  top: 580px;
  left: calc(50% - 20px);
}
#login .select-arrow{
  position: absolute;
  top: 240px;
}

}

</style>
