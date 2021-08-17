<template>
    <div>
        <form @submit.prevent="ConfirmResetPassword">
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
            <input type="submit" value="Reset Password" :disabled="v$.form.$invalid" class="form-control btn mb-3">
        </form>
        <div>{{message}}</div>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { required, minLength, sameAs } from '@vuelidate/validators';
import axios from 'axios';
export default {
    setup () {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            form:{
                password: '',
                password2: '',
            },
            message: ''
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
        async ConfirmResetPassword() {
            var url_string = location.href
            var url = new URL(url_string);
            var url_reset = url.search.slice(11);
            console.log(url_reset);
            const response = await axios.post(`http://154.16.112.81/${url_reset}`, this.form);
            this.message = response.data;
            setTimeout(() => {
                this.$router.push('/');
            }, 5000)
        }
    },
}
</script>

<style scoped>
input[type="password"],
input[type="password"]:focus{
    background-color: #E6E6E6;
    border:none;
}
.btn{
    background-color: #FA721D;
    color: white;
}
.error-msg{
    color: red;
}
</style>