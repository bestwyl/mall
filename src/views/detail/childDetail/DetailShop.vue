<template>
  <div class="detail-shop">

    <div class="title">
      <img :src="shopInfo.shopLogo" alt="">
      <span>{{shopInfo.shopName}}</span>
    </div>

    <div class="shop-info">
      <div class="left">
        <div class="left-l">
          <p class="p1">{{shopInfo.shopXL}}</p>
          <p class="p2">总销量</p>
        </div>
        <div class="left-r">
          <p class="p1">{{shopInfo.shopSL}}</p>
          <p class="p2">全部宝贝</p>
        </div>
      </div>
      <div class="right">
        <div v-for="(item,index) in shopInfo.score" :key="index" class="oneinfo">
          <span>{{item.name}}</span>
          <span class="colorGreen score" :class="{active:item.isBetter}">{{item.score}}</span>
          <span class="colorGreen" :class="{active2:item.isBetter}">{{item.isBetter ? "高" : "低"}}</span>
        </div>
      </div>
    </div>

    <div class="openshop">
      <div class="world">进店逛逛</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'DetailShop',
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .title{
    position: relative;
    margin-top: 15px;
    margin-bottom: 20px;
  }
  .title img{
    width: 65px;
    height: 65px;
  }
  .title span{
    position: absolute;
    top: 40%;
    margin-left: 10px;
    font-size: 16px;
    font-weight: bolder;
  }
  .shop-info{
    display: flex;
  }
  .left{
    display: flex;
    flex: 1;
    text-align: center;
    border-right: 1px solid rgb(153, 149, 149);
    margin-top: 10px;
    height: 50px;
    line-height: 25px;
  }
  .p1{
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 6px;
  }
  .p2{
    font-size: 12px;
  }
  .left-l{
    flex: 1;
  }
  .left-r{
    flex: 1;
  }
  .right{
    flex: 1;
    text-align: right;
  }
  .colorGreen{
    color: green;
  }
  .score{
    display: inline-block;
    width: 40px;
    margin:0 12px 0 10px;
  }
  .active{
    color: pink;
  }
  .active2{
    color: white;
    background-color: pink;
  }
  .oneinfo{
    margin-bottom: 10px;
  }
  .openshop{
    text-align: center;
  }
  .world{
    display: inline-block;
    background-color: #f2f2f2;
		font-size: 12px;
    border-radius: 100px;
    margin-top: 20px;
    padding: 10px 0px 10px 0px;
    width: 140px;
  }
</style>