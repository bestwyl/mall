<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) in controlitem"
     :key="item.id" :class="{active: index === nowIndex}"
      @click="controlClick(index)"><span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    controlitem: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data(){
    return {
      nowIndex: 0
    }
  },
  methods:{
    controlClick(index){
      this.nowIndex = index;
      this.$emit('tabClick',index);
    }
  }
}
</script>

<style>
  .tab-control{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: rgb(248, 236, 236);
  }
  .tab-control-item{
    flex: 1;
  }
  .active{
    color: red;
  }
  .active span{
    padding: 5px;
    border-bottom: 2px solid red;
  }
</style>