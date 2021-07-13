<template>
  <div id="category">
    <ul>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
    </ul>
  </div>
</template>

<script>

import BScroll from 'better-scroll';

export default {
  name: 'Category',
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll('#category' , {

    })
  }
}
</script>

<style>
  #category{
    height: 200px;
    background-color: #eee;
    /*overflow-y: scroll;*/
    overflow: hidden;
  }
</style>