<template>
    <div class="container confirm">
        <div class="logo">
            <img src="../assets/logo-orange.png" alt="">
        </div>
        <router-view></router-view>
        <input v-if="password" type="button" @click="$router.push('/')" value="Home" class="form-control btn mb-3 col-3">
        <!-- <Toast/> -->
        <button id="toastbtn">live</button>
        <div class="toast align-items-center text-white bg-primary border-0" id="toastNotice" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body">
                    Hello, world! This is a toast message.
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    </div>
</template>

<script>
// import Toast from '../components/Toast.vue'
export default {
    components: {
        // Toast
    },
    data() {
        return {
            password: true
        }
    },
    mounted() {
        document.getElementById("toastbtn").onclick = function() {
            var myAlert = document.getElementById('toastNotice');//select id of toast
            var bsAlert = new window.bootstrap.Toast(myAlert);//inizialize it
            bsAlert.show();//show it
        };
        var url_string = location.href
        var url = new URL(url_string);
        if(url.pathname.includes('password') && !url.pathname.includes('successfully')){
            this.password = false
        }
    },
}
</script>

<style scoped>
.confirm{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-direction: column;
}
.btn{
    background-color: #FA721D;
    color: white;
}
</style>