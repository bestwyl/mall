<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.id">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommendViews',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
  .recommend{
    display: flex;
    font-size: 12px;
    text-align: center;
    padding: 16px 0 34px;
    border-bottom: 9px solid #eee;
  }
  .recommend-item{
    flex: 1;
    text-align: center;
  }
  .recommend-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 8px;
  }
</style>