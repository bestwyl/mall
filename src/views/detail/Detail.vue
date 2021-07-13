<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav" @titleClick='titleClick' ref="nav"></detail-nav-bar>
    <b-scroll class="scroll" ref="scroll" @position='position' :probe-type=3>
    <!-- <ul>
      <li v-for="(item , index) in $store.state.carList" :key="index">{{item.count}}</li>
    </ul> -->
      <detail-swiper :detail-top-images='topImages'></detail-swiper>
      <detail-info :goods="infoGoods"></detail-info>
      <detail-shop :shop-info="infoShops"></detail-shop>
      <detail-goods-info :detail-info="detailGoodsInfo" @imgLoad="imgLoadf"></detail-goods-info>
      <detail-params :item-params="itemParams" ref="params"></detail-params>
      <detail-comment :comment-info="commentInfo" ref="comment"></detail-comment>
      <goods-list :goodslist="recommends" ref="goods"></goods-list>
    </b-scroll>
    <detail-bottom-bar @addToCarClick="addToCarClick"></detail-bottom-bar>
    <back-top @click.native='backTopClick' v-show="isShowBackTop"></back-top>
    <toast></toast>
  </div>
</template>

<script>

import BScroll from 'components/common/bscroll/BScroll.vue'
import{getDetail , getRecommend , Goods , Shops , Proms} from 'network/detail'
import{debounce} from 'common/untils'
import{itemImgListerMixin , backTop} from 'common/mixins' 
import DetailNavBar from './childDetail/DetailNavBar'
import DetailSwiper from './childDetail/DetailSwiper'
import DetailInfo from './childDetail/DetailInfo.vue'
import DetailShop from './childDetail/DetailShop.vue'
import DetailGoodsInfo from './childDetail/DetailGoodsInfo.vue'
import DetailParams from './childDetail/DetailParams.vue'
import DetailComment from './childDetail/DetailComment.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import DetailBottomBar from './childDetail/DetailBottomBar.vue'
import Toast from 'components/common/toast/Toast.vue'
export default {
  name: 'Detail',
  mixins: [itemImgListerMixin , backTop],
  data() {
    return {
      iid: null,
      topImages: [],
      infoGoods: {},
      infoShops: {},
      detailGoodsInfo: {},
      itemParams: {},
      commentInfo: [],
      recommends: [],
      itemImgLinter: null,
      templateOffsetTop: [],
      templateY: null,
      currentIndex: 0,
      //addCarMessages: '',
      //isShowToast: false
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailInfo,
    DetailShop,
    BScroll,
    DetailGoodsInfo,
    DetailParams,
    DetailComment,
    GoodsList,
    DetailBottomBar,
    //Toast
  },
  created() {
    this.iid = this.$route.params.iid
    getDetail(this.iid).then(res => {
      //console.log(res)
      this.topImages = res.data.result.itemInfo.topImages
      const goods = res.data.result;
      this.infoGoods = new Goods(goods.itemInfo,goods.columns,goods.shopInfo)
      //console.log(this.infoGoods)
      this.infoShops = new Shops(goods.shopInfo)
      //console.log(this.infoShops);
      this.detailGoodsInfo = goods.detailInfo
      this.itemParams = new Proms(goods.itemParams.info , goods.itemParams.rule)
      //console.log(this.itemParams)
      if(goods.rate.cRate != 0){
        this.commentInfo = goods.rate.list
        //console.log(this.commentInfo)
      }
    })
    getRecommend().then(res => {
      this.recommends = res.data.data.list
      //console.log(this.recommends)
    })
    this.templateY = debounce(() => {
      this.templateOffsetTop = []
      this.templateOffsetTop.push(0)
      this.templateOffsetTop.push(this.$refs.params.$el.offsetTop)
      this.templateOffsetTop.push(this.$refs.comment.$el.offsetTop)
      this.templateOffsetTop.push(this.$refs.goods.$el.offsetTop)
      //console.log(this.templateOffsetTop);
    },400)
    
  },
  destroyed() {
    this.$bus.$off('itemImgLoad',this.itemImgLinter)
  },
  methods: {
    imgLoadf() {
      this.$refs.scroll.refresh()
      this.templateY()
      //console.log('000');
    },
    titleClick(index) {
      //console.log(index);
      this.$refs.scroll.backTop(0,-this.templateOffsetTop[index],200)
    },
    position(position) {
      //console.log(position)
      const positionY =  -position.y;
      for(let i=0 ; i<this.templateOffsetTop.length ; i++){
        //console.log(i);
        if(this.currentIndex != i && ((i < this.templateOffsetTop.length-1 && positionY >= this.templateOffsetTop[i] && positionY < this.templateOffsetTop[i+1]) || (i === this.templateOffsetTop.length-1 && positionY >= this.templateOffsetTop[i]))){
          //console.log(i);
          this.currentIndex = i;
          this.$refs.nav.nowindex = this.currentIndex
        }
      }
      this.isShowBackTop = positionY > 1000
    },
    addToCarClick() {
      //console.log('ddd');
      const product = {}
      product.image = this.topImages[0];
      product.title = this.infoGoods.title;
      product.desc = this.infoGoods.desc;
      product.price = this.infoGoods.lowNowPrice;
      product.iid = this.iid;
      
      //this.$store.commit('addCar' , product)  commit是调用vuex中的mutations，dispatch是调用actions
      this.$store.dispatch('addCar' , product).then((res)=> {
        //console.log(res);
        /* this.addCarMessages = res
        this.isShowToast = true
        setTimeout(()=>{
          this.isShowToast = false
          this.addCarMessages =''
        },2000) */
        this.$toast.show(res, 2000);
      })
    }
  }
}
</script>

<style scoped>
  .detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .detail-nav{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .scroll{
    /* height: calc(100% - 44px - 49px); */
    overflow: hidden;
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
  }

</style>