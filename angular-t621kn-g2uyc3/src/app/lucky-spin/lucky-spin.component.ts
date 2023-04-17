import {Component, OnInit} from '@angular/core';
import {Gift, gifts, totalExceed} from "../gifts";

@Component({
  selector: 'app-lucky-spin',
  templateUrl: './lucky-spin.component.html',
  styleUrls: ['./lucky-spin.component.css']
})
export class LuckySpinComponent implements OnInit {
  objectKeys = Object.keys;
  gifts: Gift[] = [...gifts];
  totalExceed = totalExceed;

  giftsRemain: Gift[] = JSON.parse(JSON.stringify(gifts));

  result:any = [];
  name: string = '';
  // total: number = 0;
  isEnd: boolean = false;

  logs : string[] = [];
  ngOnInit(): void {
    // this.total = this.gifts.reduce((n, {quantity}) => n + quantity, 0);
    // this.gifts.map(v => {
    //   v.probability = Number(((v.quantity / this.total) * 100).toFixed(5));
    //   return v;
    // })
    this.gifts = this.calculateProbability(this.gifts);
    for (const gift of this.gifts) {
      this.result[gift.id] =0;
    }
  }

  calculateProbability(gifts: Gift[]){
    const total = gifts.reduce((n, {quantity}) => n + quantity, 0);
    return gifts.map(v => {
      v.probability = Number(((v.quantity / total) * 100).toFixed(5));
      return v;
    })
  }

  count:any = 0;
  run(){
    let countOrg:number = 1;
    while (!(this.giftsRemain.length === 0)){

      const totalRemain = this.giftsRemain.reduce((n, {quantity}) => n + quantity, 0);
      const giftWin = this.getRandomInt(1,totalRemain);
      const giftWinId = this.getGiftWinId(giftWin);
      this.result[giftWinId] += 1;
      this.logs.push(`Lần ${countOrg}: Trúng ${this.getGiftName(giftWinId)}`);
      this.count++;
      countOrg++;
      this.removeGift();
    }
    if(totalExceed > 0){
      this.logs.push(`Quay vượt:`);
      const defaultGift = this.gifts.find(v => v.default);
      if(defaultGift){
        for(let i = 1; i <= totalExceed; i++){
          this.result[defaultGift.id] += 1;
          this.logs.push(`Lần ${countOrg + i}: Trúng ${defaultGift.name}`);
        }
      }
    }

    this.isEnd = true;
  }

  getGiftName(id:number){
    const gift = this.gifts.find(v => v.id === id);
    return gift ? gift.name : '';
  }

  getGiftWinId(index:number){
    let totalRemain: number = 0;
    for (const gift of this.giftsRemain) {
      totalRemain += gift.quantity;
      if(index <= totalRemain){
        return gift.id;
      }
    }
    return 0;
  }

  removeGift(){
    let tempGiftsRemain = [];
    let addLog: boolean = false;
    for (const gift of this.giftsRemain) {
      if(this.result[gift.id] < gift.quantity){
        tempGiftsRemain.push(gift);
      }else{
        addLog = true;
      }
    }
    if(addLog && this.giftsRemain.length > 1){
      this.giftsRemain = this.calculateProbability(tempGiftsRemain);
      this.logs.push(`Tính lại tỉ lệ trúng giải`);
      let totalRemainn = 0;
      for (const gift of this.giftsRemain) {
        let remain = gift.quantity - this.result[gift.id];
        totalRemainn +=remain;
        this.logs.push(`${gift.id} - ${ gift.name } - SL ban đầu:${ gift.quantity} - Tỉ lệ trúng giải: ${gift.probability}% - SL Còn lại: ${ remain}`);
      }
      this.logs.push(`Tổng còn lại : ${totalRemainn}`);
    }else{
      this.giftsRemain = tempGiftsRemain;
    }
  }

  getRandomInt(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
