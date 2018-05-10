<template>
  <div>login</div>
</template>

<script>
  import {wxAuth } from '@/api/api'
  import Vue from 'vue';
  import VueResource from 'vue-resource'


export default {
  name: 'login',
  data() {
    return {

    }
  },
  mounted(){

  },
  created(){
//      let appId = 'wxb9ead0dd1f3ce7ae'//sxp
      let appId = 'wx1487c8302e486501'//dxj
    let redirect_url = "http://dongxiaojieqipai.com/getOnlineUser"
    redirect_url = encodeURIComponent(redirect_url)
    console.log(redirect_url)
    let url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxb9ead0dd1f3ce7ae&redirect_uri='+redirect_url+'&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect'
//    url = "http:localhost:8085/getOnlineUser"
//      this.$http.jsonp(url)

    window.top.location.href = url
//    this.$http.jsonp(url).then(function(data){
//      console.log(data)
//    })
    console.log("授权")
//    wxAuth().then(resp=>{
//        console.log(resp)
//    })

  },
  methods: {

  }
}
</script>
