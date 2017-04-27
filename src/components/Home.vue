<template>
  <div class="home">
    <img class="title" src="../assets/title1.png">
    <div class="btn-wrap clearfix">
      <div class="btn-wrap-position">
        <img class="btn toutiao" @click="toPage(1)" src="../assets/btn-toutiao.png">
      </div>
      <div class="btn-wrap-position">
        <img class="btn redbag" @click="toPage(2)" src="../assets/btn-toucai.png">
      </div>
    </div>
  </div>
</template>

<script>
import router from '../js/router.js'
export default {
  name: 'home',
  methods: {
    toPage (index) {
      if (index === 1) {
        sessionStorage.setItem('toutiao','1')
        router.push('toutiao/1')
      } else if (index === 2) {
        sessionStorage.setItem('toutiao','0')
        router.push('toutiao/0')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  font-size: 0.36rem;
  position: relative;
  height: 100%;
}
.title{
  width:7.45rem;
  position: absolute;
  left: 50%;
  top: 0.2rem;
  transform: translateX(-48%);
}
.btn-wrap{
    text-align: center;
    position: absolute;
    bottom: 0.05rem;
    width: 100%;
}
.btn-wrap-position{
  margin-top:0.05rem;
}
.btn{
  width:3.25rem;
  height:1.33rem;
  margin:0 auto;
}
.clearfix{
  overflow: hidden;
}
</style>
