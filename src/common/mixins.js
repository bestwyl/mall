export const itemImgListerMixin = {
  mounted() {
    this.itemImgLinter = () => { this.$refs.scroll.refresh(); }
    this.$bus.$on('itemImgLoad', this.itemImgLinter)
    //console.log("dddddddd");
  }
}

import BackTop from 'components/content/backtop/BackTop.vue'
export const backTop = {
  data() {
    return {
      isShowBackTop: false
    }
  },
  components: {
    BackTop
  },
  methods: {
    backTopClick() {
      this.$refs.scroll.backTop(0,0);
    }
  }
}