<template>
  <div class="check-button">
    <input type="checkbox" :class="{active: isCheck}" @click="changeCheck">
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  props: {
    isCheck: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    changeCheck() {
      //console.log('dd' + this.isCheck);
      this.$emit('changeCheck')
    }
  }


}
</script>

<style scoped>
  .check-button input{
    width: 20px;
    height: 20px;
    border-radius: 100%;
    border: 1px solid rgb(12, 12, 12);
  }
  .active{
    background: url(~assets/images/detail/check_active.png) center;
    background-size: cover;
  }
</style>