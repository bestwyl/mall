<template>
  <div ref="swiper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>

import BScroll from 'better-scroll'

export default {
  name: 'BScroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    isLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null,
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.swiper,{
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.isLoad
    })
    if(this.probeType ===2 || this.probeType ===3){
      this.scroll.on('scroll', (position) => {
        //console.log(position)
        this.$emit('position',position)
      })
    }
    if(this.isLoad){
      this.scroll.on('pullingUp', ()=>{
        //console.log(isLoad);
        this.$emit('pullingUp')
      })
    }
  },
  methods: {
    backTop(x,y,speed=500) {
      this.scroll && this.scroll.scrollTo(x,y,speed)
    },
    finishPullUpLoad() {
      this.scroll && this.scroll.finishPullUp()
    },
    refresh() {
      //console.log("---")
      this.scroll && this.scroll.refresh()
    },
    nowsaveY() {
      return this.scroll ? this.scroll.y : 0
    }
  }
}
</script>

<style scoped>

</style>