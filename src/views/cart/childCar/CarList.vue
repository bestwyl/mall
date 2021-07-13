<template>
  <div class="car-list">
    <car-list-item v-for="(item , index) in carList" :items='item' :key="index"></car-list-item>
  </div>
</template>

<script>

import CarListItem from './CarListItem.vue'

import {mapGetters} from 'vuex'

export default {
  name: 'CarList',
  components: {
    CarListItem
  },
  computed: {
    ...mapGetters([
      'carList'
    ])
  }
}
</script>

<style scoped>
/*   .car-list{
    background-color: #fff;
  } */
</style>