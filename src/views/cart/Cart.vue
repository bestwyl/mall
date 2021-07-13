<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车{{carLength}}</div>
    </nav-bar>
    <b-scroll class="scroll" ref="scroll">
      <car-list class="car-list"></car-list>
    </b-scroll>
    <car-bottom-bar class="bar"></car-bottom-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import CarList from './childCar/CarList.vue'
import CarBottomBar from './childCar/CarBottomBar.vue'

import {mapGetters} from 'vuex'

import BScroll from 'components/common/bscroll/BScroll.vue'

  export default {
    name: 'Cart',
    components: {
      NavBar,
      BScroll,
      CarList,
      CarBottomBar
    },
    computed: {
      //1.this.$store.state.carList.length
      //2.this.$store.getters.carLength
      //3:
      ...mapGetters([
        'carLength'
      ])
    },
    activated() {
      //console.log('--------')
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  .cart{
    position: relative;
    height: 100vh;
  }
  .nav-bar{
    background-color: pink;
    color: #fff;
  }
  .scroll{
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 89px;
    overflow: hidden;
    /* height: calc(100% - 44px); */
    margin-top: 15px;
  }
  .car-list{
    height: 100%;
  }
  .bar{
    position: absolute;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>