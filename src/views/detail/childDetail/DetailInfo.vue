<template>
  <div v-if="Object.keys(goods).length!==0" class="detail-info">
    <div class="titles">{{goods.title}}</div>

    <div class="price-info">
      <span class="new-price">{{goods.newprice}}</span>
      <span class="old-price">{{goods.oldprice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>

    <div class="good-info">
      <span>{{goods.sales}}</span>
      <span>{{goods.collect}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>

    <div class="send-info">
      <span v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon">{{goods.services[index-1].name}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailInfo',
  props: {
    goods:{
      type:Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .titles{
    font-size: 16px;
    font-weight: 600;
    margin: 10px 2px 12px 4px;
  }
  .new-price{
    font-size: 20px;
    font-weight: 500;
    color:pink;
    margin-left: 4px;
  }
  .old-price{
    font-size: 12px;
    margin-left: 4px;
  }
  .discount{
    font-size: 14px;
    background-color:pink;
  }
  .good-info{
    margin-top: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #333;
    display: flex;
  }
  .good-info span{
    flex: 1;
    font-size: 13px;
    color: rgb(211, 206, 211);
    text-align: center;
  }
  .send-info{
    margin-top: 18px;
    display: flex;
    padding-bottom: 20px;
    border-bottom: 3px solid rgb(241, 233, 233);
  }
  .send-info span{
    flex: 1;
    font-size: 12px;
    text-align: center;
  }
  .send-info span img{
    width: 12px;
    height: 12px;
    margin-right: 2px;
  }
</style>