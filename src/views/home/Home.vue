<template>
  <div id="home">

    <nav-bar class="navbar"><div slot="center">购物街</div></nav-bar>
    <tab-control class="tab-control"
      :controlitem='["流行","新款","精品"]'
      @tabClick='tabClick'
      ref="tabC1" v-show="TabControlIsShow"></tab-control>

    <b-scroll class="count" ref="scroll"
     :probe-type='3' @position='IsShowClick'
     :is-load="true" @pullingUp='loadMore'>
      <home-swiper :banners="banners" @swiperImgLoad='swiperFunish'></home-swiper>
      <home-recommend-views :recommends='recommends'></home-recommend-views>
      <home-fauter-view></home-fauter-view>
      <tab-control :controlitem='["流行","新款","精品"]'
      @tabClick='tabClick' class="tab-control2"
      ref="tabC2"></tab-control>
      <goods-list :goodslist="goods[typeIndex].list"></goods-list>
    </b-scroll>

    <back-top @click.native="backTopClick" v-show='isShowBackTop'></back-top>

  </div>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabcontrol/TabControl'
import GoodsList from 'components/content/goods/GoodsList'

import HomeSwiper from 'views/home/homeChild/HomeSwiper'
import HomeRecommendViews from 'views/home/homeChild/HomeRecommendViews'
import HomeFauterView from 'views/home/homeChild/HomeFauterView'

import {getHomeMultidata,getHomeGoods} from 'network/home'
import {itemImgListerMixin , backTop} from "common/mixins"

import BScroll from 'components/common/bscroll/BScroll'



export default {
  name: 'Home',
  mixins: [itemImgListerMixin , backTop],
  components: {
    NavBar,
    TabControl,
    GoodsList,

    HomeSwiper,
    HomeRecommendViews,
    HomeFauterView,

    BScroll    
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page:0, list: []},
        'new': {page:0, list: []},
        'sell': {page:0, list: []}
      },
      typeIndex: 'pop',
      isShowBackTop: false,
      TabControlofsetTop: 0,
      TabControlIsShow: false,
      saveY: 0,
      itemImgLinter: null
    }
  },
  created (){
    this.getHomeMultidata();
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
    //console.log("创建了");
  },
  destroyed() {//给<router-view></router-view>包装一层keep-alive就不会调用此方法
    console.log("dddd");
  },
  activated() {
    //console.log("dddd1");
    this.$refs.scroll.backTop(0,this.saveY,0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    //console.log("dddd2");
    this.saveY = this.$refs.scroll.nowsaveY()
    //console.log(this.saveY);
    this.$bus.$off('itemImgLoad',this.itemImgLinter)
  },
  methods: {
    tabClick(index) {
      switch(index) {
        case 0: this.typeIndex = 'pop';break
        case 1: this.typeIndex = 'new';break
        case 2: this.typeIndex = 'sell';
      }
      this.$refs.tabC1.nowIndex = index;
      this.$refs.tabC2.nowIndex = index;
    },
    IsShowClick(position) {
      this.isShowBackTop = -(position.y) > 1200
      this.TabControlIsShow = -(position.y) > this.TabControlofsetTop
    },
    loadMore() {
      this.getHomeGoods(this.typeIndex)
      this.$refs.scroll.finishPullUpLoad()
    },
    swiperFunish() {
      this.TabControlofsetTop = this.$refs.tabC2.$el.offsetTop
      //console.log(this.TabControlofsetTop)
    },
    //
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        //console.log(res);
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page +1;//这个怕个是请求数据用的
      getHomeGoods(type,page).then(res => {
        //console.log(res);
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
      })
    },
  }
}
</script>

<style scoped>
  #home{
    position: relative;
    height: 100vh;
  }
  .navbar{
    background-color: var(--color-high-text);
    color: white;
    position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 9;
  }
  .count{
  	overflow: hidden;
		position: absolute;
		left: 0;
		right: 0;
		top: 44px;
		bottom: 49px;
  }
  .tab-control{
    position: relative;
    top: 44px;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .tab-control2{
    margin-bottom: 44px;
  }
</style>