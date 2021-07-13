import {ADD_COUNT , ADD_CAR} from './mutationsTypes'

export default {
  addCar(context , payload) {
    return new Promise((resolve, reject)=> {
      let haveProduct = null;
      for(let item of context.state.carList){
        if(item.iid === payload.iid){
          haveProduct = item
        }
      }
      if(haveProduct){
        context.commit(ADD_COUNT , haveProduct)
        resolve('当前商品数量+1')
      }else{
        context.commit(ADD_CAR , payload)
        resolve('成功加入到购物车')
      }
    })
  }
  
}