<template>
  <div class="redbagcontent">
    <img v-if=!open src="../assets/redbag.png" class="redbag">
    <img v-if=!open src="../assets/btn-open.png" class="btn-open" @click="open = !open">
    <div v-if=open class="openredbag-wrap">
      <img src="../assets/redbag-bg-down.png" class="down">
      <img :src=imgsrc class="photo-img">
      <img src="../assets/dolar.png" class="dolar">
      <img src="../assets/redbag-bg-up.png" class="up">
      <img src="../assets/btn-roll.png" class="btn-roll" @click="isrollinfo=!isrollinfo">
      <img @click="showlayer = !showlayer" class="btn-share" src="../assets/share-btn.png">
      <div class="layer" @click="showlayer = !showlayer" v-if=showlayer>
        <img class="share" src="../assets/share.png">
      </div>
    </div>
    <rollinfo v-on:click="isrollinfo = !isrollinfo" v-if="isrollinfo" class="rollinfo"></rollinfo>
  </div>
</template>

<script>
import Rollinfo from './Rollinfo'
export default {
  name: 'redbag',
  data () {
    return {
      imgsrc: '',
      open: false,
      isrollinfo: false,
      showlayer: false,
    }
  },
  components: {
    Rollinfo
  },
  methods:{
    
  },
  mounted () {
    this.imgsrc = sessionStorage.getItem('imgsrc')
    console.log(this.imgsrc)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.redbagcontent {
  font-size: 0.36rem;
  position: relative;
  height: 100%;
  padding-top: 0.5rem;
  box-sizing: border-box;
}
.redbag{
  width: 6.14rem;
  display: block;
  margin: 0 auto;
}
.btn-open{
  width: 1.97rem;
  position: absolute;
  top: 6rem;
  left: 50%;
  transform: translateX(-50%);
}
.openredbag-wrap{
  width:100%;
  position: fixed;
  bottom: -1.5rem;
}
.dolar{
  position: absolute;
  bottom: 0;
  width: 5.25rem;
  left: 50%;
  transform: translateX(-50%);
}
.photo-img{
  width: 4.25rem;
  height: 5.25rem;
  position: absolute;
  bottom: 4.5rem;
  left: 50%;
  transform: translateX(-50%) rotate(90deg);
}
.up,.down{
  width: 90%;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.down{
  bottom:3.5rem;
}
.btn-roll{
  width: 3.25rem;
  height: 1.33rem;
  position: absolute;
  bottom: 1.7rem;
  left: 0.15rem;
}
.btn-share{
  width: 3.25rem;
  height: 1.33rem;
  position: absolute;
  bottom: 1.7rem;
  right: 0.15rem;
}
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
</style>
