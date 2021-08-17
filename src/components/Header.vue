<template>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #FF7600">
    <div class="container">
      <a class="navbar-brand" href="#"><img class="logo" src="../assets/logo.png" alt=""></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarScroll">
        <ul class="navbar-nav my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
          <li class="nav-item me-2">
            <a class="nav-link active font-item" aria-current="page" href="#">Shop</a>
          </li>
          <li class="nav-item me-2">
            <a class="nav-link font-item" href="#">Blog</a>
          </li>
          <li class="nav-item me-2">
            <a class="nav-link font-item" href="#">Contact</a>
          </li>
        </ul>
        <form class="input-group search">
          <span class="input-group-text" id="basic-addon1"><i class="ion-ios-search font-item"></i></span>
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1">
        </form>
        <div class="login">
          <a class="login-item" data-bs-toggle="modal" data-bs-target="#loginModal">Đăng nhập</a>
          /
          <a class="login-item" data-bs-toggle="modal" data-bs-target="#registerModal">Đăng ký</a>
        </div>
      </div>
    </div>
    <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <Login />
    </div>
    <div class="modal fade" id="registerModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <Register />
    </div>
  </nav>
</template>

<script>
import Login from "./Login.vue";
import Register from './Register.vue';
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components:{
    Login,
    Register
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
  .logo{
    width: 120px;
  }
  .font-item{
    font-size: 1.5rem;
    font-weight: 600;
  }
  .search{
    width: 30%;
  }
  .login{
    color: white;
  }
  .login-item{
    color: white;
    text-decoration: none;
    cursor: pointer;
  }
</style>