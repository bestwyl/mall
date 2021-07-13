<template>
  <div>
    <div class="car-list-item">
      <div class="button">
        <check-button :is-check="items.checked" @changeCheck="changeChecked"></check-button>
      </div>
      <div class="left">
        <img class="image" :src="items.image">
      </div>
      <div class="right">
        <div class="title">{{items.title}}</div>
        <div class="desc">{{items.desc}}</div>
        <div class="bottom">
          <div class="price">￥{{items.price * items.count}}</div>
          <div class="count">x{{items.count}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import CheckButton from 'components/content/checkButton/CheckButton.vue'

import {mapGetters} from "vuex"

export default {
  name: 'CarListItem',
  props: {
    items: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {
    CheckButton
  },
  methods: {
    changeChecked() {
      this.items.checked = !this.items.checked
      //console.log(this.items.checked);
    }
  },
  computed: {
    ...mapGetters([
      'carList'
    ])
  }
}
</script>

<style scoped>
  .car-list-item{
    display: flex;
    height: 130px;
    margin-top: 10px;
    border-bottom: 1px rgb(128, 124, 124) solid;
  }
  .button{
    width: 10%;
    text-align: center;
    line-height: 110px;
  }
  .left{
    width: 20%;
    text-align: center;
  }
  .right{
    margin-left: 2%;
    width: 68%;
  }
  .image{
    width: 75px;
    height: 120px;
    border: 1px rgb(206, 141, 141) solid;
    border-radius: 6px;
  }
  .title{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .desc{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 11%;
    margin-bottom: 11%;
  }
  .bottom{
    display: flex;
    position: relative;
  }
  .count{
    position: absolute;
    right: 20px;
  }
</style>