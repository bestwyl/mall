<template>
  <div class="bottom-bar">
      <div class="item">
        <p class="item-img"><img src="~assets/images/detail/icon01.png" alt=""></p>
        <p>客服</p>
      </div>
      <div class="item">
        <p class="item-img"><img src="~assets/images/detail/icon02.png" alt=""></p>
        <p>店铺</p>
      </div>
      <div class="item">
        <p class="item-img"><img src="~assets/images/detail/icon03.png" alt=""></p>
        <p>收藏</p>
      </div>
      <div class="center-car" @click="addToCarClick">加入购物车</div>
      <div class="buy">购买</div>
    </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  methods: {
    addToCarClick() {
      this.$emit("addToCarClick")
    }
  }
}
</script>

<style scoped>
  .bottom-bar{
    height: 49px;
    background-color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    z-index: 10;
  }
  .item{
    width: 18%;
    text-align: center;
  }
  .item-img img{
    width: 22px;
    height: 22px;
  }
  .center-car{
    width: 23%;
    text-align: center;
    line-height: 49px;
    color: #000;
    background-color: yellow;
  }
  .buy{
    width: 23%;
    text-align: center;
    line-height: 49px;
    color: #fff;
    background-color: thistle;
  }
</style>