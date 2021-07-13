<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <div class="left" slot="left" @click="backClick">
        <img src="~assets/images/fanhui.png" alt="">
      </div>
      <div slot="center" class="center">
        <div class="titles" v-for="(item,index) in titles"
          :class="{active: index === nowindex}"
          @click="titleClick(index)"
         :key="index">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar'

export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品','参数','评论','推荐'],
      nowindex: 0
    }
  },
  methods: {
    titleClick(index) {
      this.nowindex = index
      this.$emit('titleClick',index)
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
  .center{
    display: flex;
    font-size: 13px;
  }
  .titles{
    flex: 1;
  }
  .active{
    color: red;
  }
  .left img{
    margin-top: 6px;
    width: 30px;
    height: 30px;
  }
</style>