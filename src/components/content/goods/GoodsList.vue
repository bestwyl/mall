<template>
  <div class="goods-list">
    <goods-list-item v-for="item in goodslist"
    :goodslistitem="item"
    :key="item.id"></goods-list-item>
  </div>
</template>

<script>

import GoodsListItem from './GoodsListItem.vue'

export default {
  name: 'GoodsList',
  components: {
    GoodsListItem
  },
  props: {
    goodslist: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
  .goods-list{
   display: flex;
   flex-wrap: wrap;
  }
</style>