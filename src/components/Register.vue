<template>
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            
            <div class="modal-body d-flex">
                <form class="form-login" @submit.prevent="Register">
                    <div class="logo">
                        <img class="logo-img" src="../assets/logo-orange.png" alt="">
                    </div>
                    <div class="mb-3 mt-5 input-group">
                        <span class="input-group-text" id="username"><i class="ion-ios-contact"></i></span>
                        <input type="text" class="form-control" id="inputUsername" aria-describedby="username" placeholder="Username" v-model="form.username">
                    </div>
                    <div class="mb-3 input-group">
                        <span class="input-group-text" id="email"><i class="ion-ios-mail"></i></span>
                        <input type="email" class="form-control" id="inputEmail" aria-describedby="email" placeholder="Email" v-model="form.email">
                    </div>
                    <div class="input-group" :class="{ 'mb-3': !v$.form.password.$errors.length }">
                        <span class="input-group-text" id="pass"><i class="ion-ios-lock"></i></span>
                        <input type="password" class="form-control" id="inputPass" aria-describedby="pass" placeholder="Password" v-model="v$.form.password.$model">
                        <!-- Error Message -->
                    </div>
                    <div class="input-errors mb-3" v-for="(error, index) of v$.form.password.$errors" :key="index">
                        <div class="error-msg">{{ error.$message }}</div>
                    </div>
                    <div class="input-group" :class="{ 'mb-3': !v$.form.password2.$errors.length }">
                        <span class="input-group-text" id="repeatPass"><i class="ion-ios-lock"></i></span>
                        <input type="password" class="form-control" id="inputRepeatPass" aria-describedby="repeatPass" placeholder="Repeat Password" v-model="v$.form.password2.$model">
                    </div>
                    <div class="input-errors mb-3" v-if="v$.form.password2.$errors.length">
                        <div class="error-msg">Repeat password need same password</div>
                    </div>
                    <input type="submit" value="Register" :disabled="v$.form.$invalid" class="form-control btn mb-3">
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
import useVuelidate from '@vuelidate/core'
import axios from 'axios';
import { required, minLength, sameAs } from '@vuelidate/validators'

export default {
    setup () {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            form: {
                username: '',
                email: '',
                password: '',
                password2: '',
            }
        }
    },
    validations() {
        return {
            form: {
                password: {
                    required,
                    min: minLength(8)
                },
                password2:{
                    sameAsPassword: sameAs(this.form.password)
                }
            }
        }
    },
    methods: {
        async Register(){
            console.log(this.form);
            const response = await axios.post("https://vantien.tk/user/signup/", this.form);
            console.log(response)
        }
    },
}
</script>