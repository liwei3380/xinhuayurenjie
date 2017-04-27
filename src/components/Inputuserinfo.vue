<template>
  <div class="inputuserinfo">
    <img class="title" src="../assets/title1.png">
    <div class="input-wrap">
      <!-- <div class="input-wrap-position"> -->
        <img class="sexy-text" src="../assets/sexy-text.png">
        <div class="sex-wrap clearfix">
          <div class="sex-wrap-position">
            <div :class="checkedmale ? 'checkbox-on' : 'checkbox-off'" @click="checkedmale = ! checkedmale"></div>
            <img class="nan" @click="checkedmale = ! checkedmale" src="../assets/nan.png">
          </div>
          <div class="sex-wrap-position">
            <div :class="checkedmale ? 'checkbox-off' : 'checkbox-on'" @click="checkedmale = ! checkedmale"></div>
            <img class="nv" @click="checkedmale = ! checkedmale" src="../assets/nv.png">
          </div>
        </div>
        <img class="input-text" src="../assets/input-text.png">
        <div class="input-box-wrap">
          <img class="input-box" src="../assets/input-box.png">
          <input v-model=uname class="input-name" maxlength="11" type="text">
        </div>
        <img @click="share" class="btn-create" src="../assets/btn-create.png">
      <!-- </div> -->
        
    </div>
    <div class="layer" @click="showlayer = !showlayer" v-if=showlayer>
    <img class="share" src="../assets/share.png">
    </div>
  </div>
</template>

<script>
import router from '../js/router.js'
import wxshare from '../js/wxshare.js'
import myconfig from '../js/config.js'
export default {
  name: 'inputuserinfo',
  methods: {
   share () {
    if(this.uname==''){
      alert('请完善信息')
      return
    }
    var _name = this.uname + (this.checkedmale ? '先生' : '女士');
    var _this = this;
    var link = 'http://168i60480h.imwork.net:13429/wxpm/xinhuaroll/dist/index.html?type=1&uname='+_name+'&imgsrc='+myconfig.hosturl+'/files/'+this.$route.params.imgsrc;
    sessionStorage.setItem('name',_name)
    sessionStorage.setItem('imgsrc',myconfig.hosturl+'/files/'+this.$route.params.imgsrc)
    wxshare.init({
        signatureurl:myconfig.hosturl+'/getsignature',
        appId:'wx3d5547d122fc289c',
        jsApiList:['onMenuShareTimeline','onMenuShareAppMessage'],
        title:'不可思议！股民'+_name+'如何从月入5000到资产过亿！',
        desc:'',
        link:link,
        imgurl:'http://www.linki2u.com/wxjstxt/xinhuayurenjie/dist/static/img/sharetime2.png',
        callback:function(data){
          console.log('cb',data);
          router.push('/mtime') ;
        },
      });
   }
  },
  data () {
    return {
      checkedmale: true,
      showlayer: false,
      uname: ''
    }
  }
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
  z-index: 2;
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
.inputuserinfo{
  font-size: 0.36rem;
  position: relative;
  height: 100%;
}
.title{
  width:5.75rem;
  position: absolute;
  left: 50%;
  top: 0.2rem;
  transform: translateX(-48%);
  z-index: 1;
}
.input-wrap{
  box-sizing: border-box;
  padding-top:0.5rem;
  position: absolute;
  bottom: -1.5rem;
  width: 6.77rem;
  height: 6.68rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  background: url('../assets/input-bg.png');
  background-size: cover;
}
.input-wrap-position{
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.sexy-text{
  width: 1.03rem;
  height:0.53rem;
}
.sex-wrap{
  width: 100%;
}
.sex-wrap-position{
  width: 50%;
  float: left;
}
.checkbox-off,.checkbox-on{
  display: inline-block;
}
.checkbox-off{
  width: 0.42rem;
  height: 0.43rem;
  background: url('../assets/checkbox-off.png');
  background-size: cover;
}
.checkbox-on{
  width: 0.5rem;
  height: 0.44rem;
  background: url('../assets/checkbox-on.png');
  background-size: cover;
}
.nan{
  width: 0.46rem;
  height: 0.49rem;
}
.nv{
  width: 0.47rem;
  height: 0.46rem;
}
.input-text{
  width: 2.51rem;
  height: 0.54rem;
}
.input-box-wrap{
  width: 4.62rem;
  height: 0.79rem;
  position: relative;
  margin: 0 auto;
}
.input-box,.input-name{
  width: 4.62rem;
  height: 0.79rem;
  position: absolute;
  top: 0;
  left: 0;
}
.input-name{
  text-align: center;
  height: 0.65rem;
  background:rgba(0,0,0,0);
  border: 0;
  padding: 0.05rem;
  line-height: 0.65rem;
}
.btn-create{
  margin-top:0.2rem;
  width:4.08rem;
  height: 1.37rem;
}
.clearfix{
  overflow: hidden;
}
</style>
