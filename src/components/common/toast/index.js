import Toast from './Toast.vue'

const obj = {}

obj.install = function(Vue){
  //先使用组件构造器构造一个toastC的构造器
  const toastContrustor = Vue.extend(Toast)
  //再用构造好的组件创建一个组件对象
  const toast = new toastContrustor()
  //再将此组件对象挂在到一个div上
  toast.$mount(document.createElement('div'))
  //然后将div（里面就是toast的组件）放到body页面上
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast;


}

export default obj