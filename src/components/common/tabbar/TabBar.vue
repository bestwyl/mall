<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style>
  #tab-bar{
    font-size: 12px;
		height: 49px;
		display: flex;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #f2f2f2;
		box-shadow: 2px 2px 10px  #ececec;
  }
</style>