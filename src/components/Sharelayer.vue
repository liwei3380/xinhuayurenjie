<template>
  <div class="toutiao">
    <div class="pro-img-wrap">
      <img class="pro-img" :src = "imgsrc">
    </div>
    <div class="btn-wrap">
      <div class="btn">
        现在拍摄
        <input type="file" class="photo-input" id="photo" accept="image/*">
      </div>
      <div class="btn" @click="select">从相册选择</div>
      <div class="btn" @click="upload">上传照片</div>
    </div>
  </div>
</template>

<script>
import resizeimg from '../js/resize.min.js'
export default {
  name: 'home',
  data () {
    return {
      imgsrc: '',
      type: 1,
      selectedimg: false
    }
  },
  methods: {
    photo () {
      alert('photo')
    },
    select () {
      alert('select')
    },
    upload () {
      if (this.selectedimg) {
        var html = this.type == 0 ? '发红包' : '上头条'
        alert(html)
      } else {
        alert('没有图片')
      }
    }
  },
  mounted:function(){
    this.type = this.$route.params.id
    var _this = this;
    var input = document.getElementById('photo')
    input.addEventListener('change', function (e) {
      canvasResize(this.files[0], {
        crop: false,
        quality: 0.9,
        rotate: 0,
        callback (baseStr) {
          _this.imgsrc = baseStr
          _this.selectedimg = true
        }
      })
    })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.toutiao{
  font-size: 0.36rem;
  position: relative;
  height: 100%;
  padding-top: 1rem;
  box-sizing: border-box;
}

.clearfix{
  overflow: hidden;
}
</style>
