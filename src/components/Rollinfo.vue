<template>
  <div v-if="show" class="rollinfo">
    <div class="layer"></div>
    <div class="inputinfo-wrap">
      <img class="sub-bg" src="../assets/sub-bg.png">
      <img class="btn-close sub-close" @click="closeroll" src="../assets/btn-close.png">
      <div class="inputinfo-content">
        <img class="name-text" src="../assets/name-text.png">
        <div class="input-name-wrap">
          <img class="input-box" src="../assets/input-box.png">
          <input v-model=uname class="input-name" type="text" maxlength="11" name="name" placeholder="请输入姓名">
        </div>
        <img class="phone-text" src="../assets/phone-text.png">
        <div class="input-phone-wrap">
          <img class="input-box" src="../assets/input-box.png">
          <input v-model=phone class="input-phone"type="tel" maxlength="11" name="phone" placeholder="请输入手机号">
        </div>
        <img @click="showRule" class="btn-rule" src="../assets/btn-rule.png">
        <img @click="submit" class="btn-submit" src="../assets/btn-submit.png">
      </div>
    </div>
    <div v-if="isrule" class="rule-wrap">
      <div class="layer"></div>
      <img class="rule" src="../assets/rule.png">
      <img src="../assets/btn-close.png" class="btn-close" @click="isrule = false">
    </div>
  </div>
  
</template>

<script>
import router from '../js/router.js'
import axios from 'axios'
import myconfig from '../js/config'
export default {
  name: 'rollinfo',
  data () {
    return {
      phone: '',
      uname: '',
      isrule: true,
      show:true
    }
  },
  methods: {
    submit () {
      var _this=this;
      if (this.name !=='' && this.phone != '') {
        axios.post(myconfig.hosturl+'/xinhuayurenjie',{
          name:this.uname,
          phone:this.phone
        }).then(function(res){
          if (res.data.message=="0") {
            alert("提交成功")
            if (sessionStorage.getItem('toutiao')=='1') {
              _this.show= false
              router.push('/mtime')
            }else{
              _this.show= false
              router.push('/redbag')
            }
            
          } else if(res.data.message == "1"){
            alert("重复的电话号")
          }
        }).catch(function(err){
          console.log(err)
        })
      } else {
        alert("不能提交空信息");
      }
    },
    showRule () {
      this.isrule = true;
    },
    closeroll () {
      this.$emit('click');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layer{
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.7);
}
.inputinfo-wrap{
  width: 100%;
  position: absolute;
  top: 1.5rem;
  left: 0;
}
.sub-bg{
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 95%;
}
.inputinfo-content{
  width: 100%;
  position: absolute;
  top: 2rem;
  left: 0;
  text-align: center;
}
.name-text{
  width:1.02rem;
  height: 0.53rem;
}
.input-phone-wrap,.input-name-wrap{
  position: relative;
  width: 4.62rem;
  height: 0.79rem;
  margin: 0 auto;
}
.input-name,.input-phone{
  text-align: center;
  position: absolute;
  width: 4.62rem;
  height: 0.7rem;
  padding:0.05rem;
  box-sizing: border-box;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0);
  border: 0;
}
.input-box{
  width: 4.62rem;
  height: 0.79rem;
}
.phone-text{
  width: 1.53rem;
  height: 0.54rem;
}
.btn-rule{
  display: block;
  margin: 0.2rem auto;
  width: 2.23rem;
  height: 0.8rem;
}
.btn-submit{
  width:4.06rem;
  height: 1.33rem;
}
.rule-wrap{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.rule{
  position: absolute;
  top: 1.8rem;
  left: 50%;
  transform: translateX(-50%);
  width: 95%;
}
.btn-close{
  width: 0.7rem;
  height:0.7rem;
  position: absolute;
  top: 2rem;
  right: 0.1rem;
}
.sub-close{
  position: absolute;
  top: 0.5rem;
  right: 0.2rem;
}
</style>
