<template>
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            
            <div class="modal-body d-flex">
                <form class="form-login" @submit.prevent="ResetPassword">
                    <div class="logo">
                        <img class="logo-img" src="../assets/logo-orange.png" alt="">
                    </div>
                    <div class="mb-3 input-group">
                        <span class="input-group-text" id="email"><i class="ion-ios-mail"></i></span>
                        <input type="email" class="form-control" id="inputEmail" aria-describedby="email" placeholder="Email" v-model="form.email">
                    </div>
                    <input type="submit" value="Register" class="form-control btn mb-3">
                    <div class="form-check-label text-center">Is member? Sign in now</div>
                </form>
                <div class="image">
                    <img class="img-login" src="../assets/login.jpg" alt="">  
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.image{
    width: 50%;
}
.img-login,
.logo-img{ 
    width: 100%;
    height: 100%;
}
.modal-body{
    padding: 0;
}
.form-login{
    width: 50%;
    padding: 2rem;
}
.logo{
    height: 25%;
}
input[type="email"],
input[type="password"],
input[type="text"],
input[type="email"]:focus,
input[type="password"]:focus,
input[type="text"]:focus{
    background-color: #E6E6E6;
    border:none;
}
input[type="checkbox"]{
    background-color: #E6E6E6;
    border: none;
}
input[type="checkbox"]:focus{
    outline: none;
    border: none;
}
input[type="checkbox"]:checked{
    background-color: #FA721D;
    border: none;
    outline: none;
}
.input-group-text{
    background-color: #E6E6E6;
    border: none;
    border-radius: 0;
}
.btn{
    background-color: #FA721D;
    color: white;
}
.font-icon{
    margin-right: 10px;
    font-size: 20px;
}
.btn-social{
    font-weight: 600;
    font-size: 15px;
    padding: 0 20px 0 20px;
    background-color: white;
    justify-content: center;
    align-items: center;
    border: 1px solid #E6E6E6;
    width: 45%;
}
.btn-facebook{
    color: #3B5998;
}
.btn-google{
    color: #E83E30;
}
.error-msg{
    color: red;
}
</style>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            form: {
                email: ''
            }
        }
    },
    methods: {
        async ResetPassword(){
            console.log(this.form);
            const response = await axios.post("http://154.16.112.81/user/reset_password/", this.form);
            console.log(response);
        }
    },
}
</script>