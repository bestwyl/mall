<template>
  <div class="bottom-bar">
    <div class="left">
      <check-button :is-check="isSeleterCheck" @changeCheck="changeCheck"></check-button>
      <div>全选</div>
    </div>
    <div class="cen">
      结算：{{sum}}
    </div>
    <div class="right" @click="sureClick">
      确认支付{{sure}}
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton.vue"

import {mapGetters} from 'vuex'

export default {
  name:'CarBottomBar',
  components: {
    CheckButton
  },
  computed: {
    sum() {
      return '￥' + this.$store.state.carList.filter((item) => {
        return item.checked
      }).reduce((prev , cur) => {
        return prev + cur.price * cur.count
      },0).toFixed(2)
    },
    sure() {
      return this.$store.state.carList.filter((item) => {
        return item.checked
      }).length
    },
    isSeleterCheck() {
      if(this.carList.length === 0){
        return false  //如果购物车里面一个商品都没有，那么直接返回false
      }
      //然后再判断到底全选按钮显示还是不显示，根据carList商品的选中状态
      //return !this.carList.find(item => item.checked === false)
      return !this.carList.filter(item => item.checked === false).length
    },

    ...mapGetters([
      'carList'
    ])
  },
  methods: {
    changeCheck() {
      //console.log(this.isSeleterCheck)
      if(this.isSeleterCheck){
        this.carList.forEach(element => {
          //如果全选按钮是选中状态的话，那么就让carList的所有商品都变成false，
          //这样全选按钮会根据所有商品的checked的值来改变
          element.checked = false
        });
      }else{
        this.carList.forEach(element => {
          element.checked = true
        });
      }
    },
    sureClick() {
      if(this.carList.length === 0){
        this.$toast.show('请添加商品再支付', 2000)
      }
    }
  }
}
</script>

<style scoped>
  .bottom-bar{
    display: flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: rgb(223, 215, 215);
  }
  .left{
    display: flex;
    width: 60px;
    margin-left: 8px;
  }
  .cen{
    flex: 1;
  }
  .right{
    width: 85px;
    background-color: red;
    color: #fff;
  }
</style>