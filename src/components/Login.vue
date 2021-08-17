<template>
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            
            <div class="modal-body d-flex">
                <form class="form-login" @submit.prevent="Login">
                    <div class="logo">
                        <img class="logo-img" src="../assets/logo-orange.png" alt="">
                    </div>
                    <div class="mb-3 mt-5 input-group">
                        <span class="input-group-text" id="email"><i class="ion-ios-mail"></i></span>
                        <input type="email" class="form-control" id="inputEmail" aria-describedby="email" placeholder="Email" v-model="form.email">
                    </div>
                    <div class="mb-3 input-group">
                        <span class="input-group-text" id="pass"><i class="ion-ios-lock"></i></span>
                        <input type="password" class="form-control" id="inputPass" aria-describedby="pass" placeholder="Password" v-model="form.password">
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Remember me</label>
                    </div>
                    <input type="submit" value="Login" class="form-control btn mb-3">
                    <div class="form-check-label text-center mb-3">Or login with</div>
                    <div class="d-flex justify-content-between mb-3">
                        <button class="btn-social btn-facebook d-flex" @click.prevent="loginWithFacebook"><i class="ion-logo-facebook font-icon"></i>Facebook</button>
                        <button class="btn-social btn-google d-flex" @click.prevent="loginWithGoogle"><i class="ion-logo-google font-icon"></i>Google</button>
                    </div>
                    <a class="href" data-bs-toggle="modal" data-bs-target="#resetModal">Quên mật khẩu</a>
                    <div class="form-check-label text-center">Not a member? Sign up now </div>
                </form>
                <div class="image">
                    <img class="img-login" src="../assets/login.jpg" alt="">  
                </div>
                <div class="modal fade" id="resetModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <reset-password />
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios'
import ResetPassword from './ResetPassword.vue'
import { initFbsdk } from '@/config/facebook.js'
export default {
    data() {
        return {
            form: {
                email: '',
                password: ''
            },
        }
    },
    mounted() {
        initFbsdk()
    },
    methods: {
        async Login() {
            const response = await axios.post('http://154.16.112.81/user/login/', this.form);
            console.log(response);
        },
        async loginWithGoogle () {
            try {
                const GoogleUser = await this.$gAuth.signIn()
                // console.log('GoogleUser', GoogleUser)
                // console.log('getId', GoogleUser.getId())
                // console.log('basicprofile', GoogleUser.getBasicProfile().getName())
                // console.log('getBasicProfile', GoogleUser.getBasicProfile())
                // console.log('getAuthResponse', GoogleUser.getAuthResponse())
                // var userInfo = {
                //     loginType: 'google',
                //     google: {
                //         auth: await GoogleUser.getAuthResponse(),
                //         user: {
                //             name: await GoogleUser.getBasicProfile().getName(),
                //             email: await GoogleUser.getBasicProfile().getEmail(),
                //             profileImage: await GoogleUser.getBasicProfile().getImageUrl()
                //         }
                //     }
                // }
                const auth = await GoogleUser.getAuthResponse();
                console.log(auth.id_token);
                const response = await axios.post('http://154.16.112.81/social_auth/google/',{
                    "auth_token": auth.id_token
                })
                console.log(response);
            }
            catch(error) {
                console.log('error', error)
            }
        },
        loginWithFacebook () {
            window.FB.login(response => {
                if (response && response.authResponse) {
                    console.log('response', response)
                    // var userInfo = {
                    //     loginType: 'fb',
                    //     fb: {
                    //         auth: response.authResponse
                    //     }
                    // }
                    console.log(response.authResponse.accessToken);
                    axios.post('http://154.16.112.81/social_auth/facebook/',{
                        "auth_token": response.authResponse.accessToken
                    }).then(response => {
                        console.log(response);
                    })
                    // console.log(userInfo)
                    // window.FB.api(`/${response.authResponse.userID}`, userResponse => {
                    //     if (userResponse) {
                    //         console.log(userResponse);
                    //         var userInfo = {
                    //             loginType: 'fb',
                    //             fb: {
                    //                 auth: response.authResponse,
                    //                 user: userResponse
                    //             }
                    //         }
                    //         console.log(userInfo);
                    //     }
                    // }, this.params);
                }
            }, this.params)
        }
    },
    components: {
        ResetPassword
    }
}
</script>


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
input[type="email"]:focus,
input[type="password"]:focus{
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
.href{
    cursor: pointer;
}
</style>
