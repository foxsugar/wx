<template>
  <div>Test</div>
</template>

<script>
  import {wxAuth, auth, jsapiparam} from '@/api/api'
  import {getCookie} from '@/utils/util'

  import Vue from 'vue';
  import VueResource from 'vue-resource'

  import wx from 'weixin-js-sdk'

  export default {
    name: 'test',
    data() {
      return {}
    },

    mounted(){
      let url = window.location.href.split('#')[0]
      jsapiparam(url).then(response => {
        console.log(response)
        wx.config({
          debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: response.data.appId, // 必填，公众号的唯一标识
          timestamp: response.data.timestamp, // 必填，生成签名的时间戳
          nonceStr: response.data.nonceStr, // 必填，生成签名的随机串
          signature: response.data.signature,// 必填，签名，见附录1
          jsApiList: [
            'checkJsApi',
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
          ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });


        wx.ready(function () {
          //分享到朋友圈"
          wx.onMenuShareTimeline({
            title: obj.title,
            link: obj.link, // 分享链接
            imgUrl: obj.imgUrl, // 分享图标
            success: function () {
              // console.log('分享到朋友圈成功')
            },
            cancel: function () {
              // console.log('分享到朋友圈失败')
            }
          });
          //分享给朋友
          wx.onMenuShareAppMessage({
            title: obj.title, // 分享标题
            desc: obj.desc, // 分享描述
            link: obj.link, // 分享链接
            imgUrl: obj.imgUrl, // 分享图标
            success: function () {
              // console.log('分享到朋友成功')
            },
            cancel: function () {
              // console.log('分享到朋友失败')
            }
          });

        })

      })
    },
    created(){
      let sid = this.$route.query.sid;
      let id = this.$route.query.id;
      let infoKey = 'info' + sid
      let qrKey = sid + '|qr'
      let info = getCookie(infoKey)

      //去授权
//      if (!info) {
//        console.log("授权----------------")
//        let state = id
//        let url = 'http://tfdg38.natappfree.cc/game/wechat/authorize_base?returnUrl=' + id
//        //跳转
//        window.top.location.href = url
//      } else {
//        //加载
//        info = decodeURIComponent(info)
//        console.log(info)
//      }
    },
    methods: {}
  }
</script>
