import {request} from './request';

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend(){
	return request({
		url:'/recommend'
	})
}

export class Goods{
  constructor(itemInfo,columns,shopInfo) {
    this.title = itemInfo.title;
    this.newprice = itemInfo.price;
    this.oldprice = itemInfo.oldPrice;
    this.lowNowPrice = itemInfo.lowNowPrice;
    this.discount = itemInfo.discountDesc;
    this.sales = columns[0];
    this.collect = columns[1];
    this.services = shopInfo.services;
    this.desc = itemInfo.desc
  }
}

export class Shops{
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo;
    this.shopName = shopInfo.name;
    this.shopXL = shopInfo.cSells;
    this.shopSL = shopInfo.cGoods;
    this.score = shopInfo.score;
  }
}

export class Proms{
  constructor(info,rule) {
    this.set = info.set;
    this.tables = rule.tables;
  }
}