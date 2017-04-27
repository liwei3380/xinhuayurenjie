<template>
  <div class="time">
    <div class="time-bg-wrap">
      <img class="time-bg" src="../assets/TIME.png">
      <div class="time-text">不可思议！股民{{name}}如何从月入5000到资产过亿！</div>
      <img class="time-photo" :src=imgsrc>
    </div>
    <img @click="showRollinfo" class="btn-roll" src="../assets/btn-roll.png">
    <img @click="showlayer = !showlayer" class="btn-roll" src="../assets/share-btn.png">
    <rollinfo v-on:click="isrollinfo = !isrollinfo" v-if="isrollinfo" class="rollinfo"></rollinfo>
    <div class="layer" @click="showlayer = !showlayer" v-if=showlayer>
      <img class="share" src="../assets/share.png">
    </div>
  </div>
</template>

<script>
import Rollinfo from './Rollinfo'
export default {
  name: 'time',
  components: {
    Rollinfo
  },
  methods: {
    showRollinfo () {
      this.isrollinfo = true;
    }
  },
  data () {
    return {
      name: '',
      imgsrc: '',
      isrollinfo: false,
      showlayer: false,
    }
  },
  mounted () {
    this.name = sessionStorage.getItem('name')
    this.imgsrc = sessionStorage.getItem('imgsrc')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}
.time {
  font-size: 0.36rem;
  position: relative;
  height: 100%;
  padding-top: 0.5rem;
  box-sizing: border-box;
}
.time-bg-wrap{
  position: relative;
}
.time-bg{
  width: 90%;
  display: block;
  margin: 0 auto;
}
.time-text{
  width:4.75rem;
  line-height: 0.55rem;
  font-size: 18px;
  position: absolute;
  top: 2.8rem;
  left: 50%;
  transform: translateX(-50%);
  font-weight: bold;
  font-family: SimHei;
  text-align: center;
}
.time-photo{
  width: 3.5rem;
  height: 4.15rem;
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
}
.btn-roll{
  width: 45%;
  height: 1.33rem;
  display: block;
  float:left;
  margin:0.15rem 0.15rem;
}
.rollinfo{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
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
