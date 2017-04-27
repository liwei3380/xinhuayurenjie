<template>
  <div class="toutiao">
    <img v-if="titleShow" class="title" src="../assets/title1.png">
    <div v-if="proShow" class="pro-img-wrap">
      <img class="pro-img" :src = "imgsrc">
      <img class="pro-photo-bg" src="../assets/pro-photo-bg.png">
    </div>
    <div class="btn-wrap">
      <div class="btn-position clearfix">
        <div class="btn-position-box">
          <img class="btn" src="../assets/btn.png">
          <input type="file" class="photo-input" id="photo" capture="camera" accept="image/*">
        </div>
        <!-- <div class="btn-position-box">
          <img @click="showRollinfo" class="btn-roll" src="../assets/btn-roll.png">
        </div> -->
      </div>
      <div class="btn">
        <img class="btn" @click="upload" src="../assets/btn-upload.png">
      </div>
      
    </div>
    <div class="layer" v-show="loading">
      照片上传中...
    </div>
    <!-- <rollinfo v-if="isrollinfo" class="rollinfo"></rollinfo>
    <div class="layer" @click="showlayer = !showlayer" v-if=showlayer>
      <img class="share" src="../assets/share.png">
    </div> -->
    
  </div>
</template>

<script>
import Rollinfo from './Rollinfo'
import resizeimg from '../js/resize.min.js'
import router from '../js/router.js'
import axios from 'axios'
import wxshare from '../js/wxshare.js'
import myconfig from '../js/config.js'
export default {
  name: 'home',
  data () {
    return {
      imgsrc: '',
      type: 1,
      selectedimg: false,
      titleShow: true,
      proShow: false,
      imgname:'',
      showlayer: false,
      isrollinfo: false,
      loading: false,
    }
  },
  components: {
    Rollinfo
  },
  methods: {
    photo () {
      alert('photo')
    },
    showRollinfo () {
      this.isrollinfo = true;
    },
    wxselect () {
      console.log('wxs',wx)
      wx.chooseImage({
        success: function (res) {
          console.log(res)
          var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
        },
        fail: function (err) {
          console.log(err)
        }
      })
    },
    upload () {
    sessionStorage.setItem('imgsrc',this.imgsrc)
      var _this = this
      if (this.selectedimg) {
        if (this.type == 0) {
          var link = 'http://168i60480h.imwork.net:13429/wxpm/xinhuaroll/dist/index.html?type=0&imgsrc='+this.imgsrc;
          wxshare.init({
          signatureurl:myconfig.hosturl+'/getsignature',
          appId:'wx3d5547d122fc289c',
          jsApiList:['onMenuShareTimeline','onMenuShareAppMessage'],
          title:'你有一个红包',
          desc:'',
          link:link,
          imgurl:'http://www.linki2u.com/wxjstxt/xinhuayurenjie/dist/static/img/shareredbag.png',
          callback:function(data){
            console.log('cb',data);
            router.push('/redbag') ;
          },
        });
        } else if (this.type == 1) {
          router.push('/inputuserinfo/'+this.imgname)
        }
      } else {
        alert('没有图片')
      }
    }
  },
  mounted:function(){
    this.type = this.$route.params.id
    var input = document.getElementById('photo')
    //var select = document.getElementById('select')
    var _this = this
    /*select.addEventListener('change', function (e) {
       _this.imgname = this.files[0].name
      if(this.files[0].name.indexOf('.')<0){
        canvasResize(this.files[0], {
          crop: true,
          quality: 0.9,
          rotate: 0,
          callback (baseStr) {
            axios.post(myconfig.hosturl+'/upxinhua',{
              basestr: baseStr
            }).then(function(data){
              _this.titleShow = false
              _this.proShow = true
              _this.imgsrc = myconfig.hosturl+'/files/' + data.data.message
              _this.selectedimg = true
            }).catch(function(err){
              console.log(err)
            });
            
          }
        })
      }else {
        uploadFile(this.files[0],_this)
      }
      
    })*/
    input.addEventListener('change', function (e) {
      _this.loading = true;
      _this.imgname = this.files[0].name
      if(this.files[0].name.indexOf('.')<0){
        canvasResize(this.files[0], {
          crop: true,
          quality: 0.9,
          rotate: 0,
          callback (baseStr) {
            
            axios.post('http://47.93.38.198:8080/Linki2uCenterTest/upxinhua',{
              basestr: baseStr
            }).then(function(data){
              _this.titleShow = false
              _this.proShow = true
              _this.imgsrc = myconfig.hosturl+'/files/' + data.data.message
              _this.selectedimg = true
              _this.imgname = data.data.message
              _this.loading = false;
            }).catch(function(err){
              console.log(err)
              _this.loading = false;
            });
            
          }
        })
      }else {
        _this.loading = true;
        uploadFile(this.files[0],_this)
      }


      
      /*canvasResize(this.files[0], {
        crop: true,
        quality: 0.9,
        rotate: 0,
        callback (baseStr) {
          _this.titleShow = false
          _this.proShow = true
          _this.imgsrc = baseStr
          _this.selectedimg = true
        }
      })*/
    })
  }
}
function uploadFile(file,_this) {
    var fd = new FormData();
    fd.append('file', file);
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function completed(evt) {
      
      var data = JSON.parse(evt.target.responseText);
      _this.titleShow = false
      _this.proShow = true
      _this.imgsrc = decodeURI(encodeURI(myconfig.hosturl+'/files/' + _this.imgname))
      _this.selectedimg = true
      _this.loading = false;
    }, false);
    xhr.addEventListener("error", function(err){
      console.log(err)
    }, false);
    xhr.open("POST", myconfig.hosturl+'/upload');
    xhr.send(fd);
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layer{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0,0,0,0.7);
  z-index: 9;
  text-align:center;
  color: white;
  font-family: SimHei;
  padding-top: 1rem;
  box-sizing: border-box;
}
.share{
  width: 2.63rem;
  height: 3.42rem;
}
.toutiao{
  font-size: 0.36rem;
  position: relative;
  height: 100%;
  padding-top: 0.5rem;
  box-sizing: border-box;
}
.title{
  width:7.45rem;
  position: absolute;
  left: 50%;
  top: 0.2rem;
  transform: translateX(-48%);
}
.pro-img-wrap{
  width: 5.7rem;
  margin: 0 auto;
  text-align: center;
  position: relative;
}
.pro-photo-bg{
  position: absolute;
  top: 0;
  left: 0;
  width: 5.7rem;
  height: 7.4rem;
}
.pro-img{
  width: 5.7rem;
  height: 7.4rem;
  padding: 0.1rem 0.13rem 0.35rem 0.13rem;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
}
.btn-wrap{
    text-align: center;
    position: absolute;
    bottom: 0.5rem;
    width: 100%;
}
.btn{
  width:3.25rem;
  height:1.33rem;
  position: relative;
  margin:0 auto;
}
.btn-position-box{
  width: 100%;
  text-align: center;
  float: left;
  position: relative;
}
.photo-input{
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
}
.btn-roll{
  width: 3.25rem;
  height: 1.33rem;
  display: block;
}
.rollinfo{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.clearfix{
  overflow: hidden;
}
</style>
