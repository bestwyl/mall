<template>
  <div v-if="Object.keys(detailInfo).length !== 0">
		<div class="info-text-wrap">
			<div class="text-top-style"></div>
			<div class="desc info-text-desc">{{detailInfo.desc}}</div>
			<div class="text-bot-style"></div>
		</div>
		<div class="img-list-wrap" v-for="(item,index) in detailInfo.detailImage" :key="index">
			<div class="desc">{{item.key}}</div>
			<div v-for="(item, index) in item.list" :key="index">
				<img :src="item" alt="" class="img" @load="imgLoad">
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return{
      imgList:0,
      counter:0
    }
  },
  methods: {
    imgLoad() {
      this.$emit("imgLoad")
    }
  },
/*   watch: {
    imgInfoLength() {
      this.imgList = this.detailInfo.detailImage[0].list.length
    }
  } */
}
</script>

<style scoped>
  .info-text-wrap{
    margin-top: 24px;
  }
  .text-top-style{
    margin-bottom:14px;
    margin-left: 2%;
    width: 60px;
    height: 1px;
    background-color: rgb(0, 0, 0);
  }
  .text-top-style::before{
    width: 5px;
    height: 5px;
    background-color: black;
    display: block;
    content: "";
  }
  .text-bot-style{
    margin-left: calc(98% - 60px);
    margin-bottom: 22px;
    width: 60px;
    height: 1px;
    background-color: black;
  }
  .text-bot-style::after{
    width: 5px;
    height: 5px;
    background-color: black;
    display: block;
    content: "";
  }
  .info-text-desc{
    margin: 5px 3% 5px 3%;
  }
  .desc{
    margin-left: 3%;
    font-size: 14px;
    margin-bottom: 12px;
  }
  .img{
    width: 100%;
  }
</style>