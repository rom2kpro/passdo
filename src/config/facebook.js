export const initFbsdk = () => {
    return new Promise(() => {
      window.fbAsyncInit = function() {
        window.FB.init({
            appId: '3045200155711704',
            cookie: true, // enable cookies to allow the server to access the session
            xfbml: true, // parse social plugins on this page
            version: 'v2.8' // use graph api version 2.8
        })
      }(function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0]
        if (d.getElementById(id)) return
        js = d.createElement(s); js.id = id
        js.src = '//connect.facebook.net/en_US/all.js'
        fjs.parentNode.insertBefore(js, fjs)
      }(document, 'script', 'facebook-jssdk'))
    }) 
  }