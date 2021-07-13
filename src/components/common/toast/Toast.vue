<template>
  <div class="toast" v-show="isShow">
    <div class="message">{{messages}}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  /* props: {
    messages: {
      type: String,
      default: ''
    },
    isShow:{
      type: Boolean,
      default: false
    }
  } */
  data() {
    return {
      messages: '',
      isShow: false
    }
  },
  methods: {
    show(res = '默认文字', load = 4000) {
      this.messages = res;
      this.isShow = true;
      setTimeout(() => {
        this.messages = '';
        this.isShow = false
      },load)
    }
  }
}
</script>

<style scoped>
 .toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50% , -50%);
    z-index: 99;

    padding: 8px 12px;
    border-radius: 18%;

    color: #fff;
    background-color: rgb(0, 0, 0,.75);
 } 
</style>