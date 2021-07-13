<template>
  <div class="goods-list-item" @click="detail">
    <img :src="showimg" alt="" @load="imgload">
    <div class="item-info">
      <p class="info-titile">{{goodslistitem.title}}</p>
      <span class="price">{{goodslistitem.price}}</span>
      <span class="cfav">{{goodslistitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodslistitem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgload() {
      this.$bus.$emit("itemImgLoad");
    },
    detail() {
      //console.log("fff");
      this.$router.push('/detail/' + this.goodslistitem.iid)
    }
  },
  computed: {
    showimg() {
      return this.goodslistitem.image || this.goodslistitem.show.img
    }
  }
}
</script>

<style>
  .goods-list-item{
    width: 49%;
    margin-left: 0.68%;
    font-size: 14px;
    text-align: center;
    margin-bottom: 8px;
  }
  .goods-list-item img{
    width: 100%;
    height: 260px;
    border-radius: 8px;
  }
  .info-titile{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 2px 0;
  }
  .price{
    color: red;
    margin-right: 25px;
  }
  .cfav{
    position: relative;
  }
  .cfav::before{
    content: "";
    position: absolute;
    left: -15px;
    width: 14px;
    height: 14px;
    background: url('~assets/images/detail/icon03.png') 0 0/14px 14px;
  }
</style>