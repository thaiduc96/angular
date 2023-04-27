export interface Gift {
  id: number;
  name: string;
  quantity: number;
  probability: number;
  default: boolean;
}

export const totalExceed = 5;

export const gifts = [
  {
    id: 1,
    name: 'Tiền mặt 100k',
    quantity: 999,
    probability: 0,
    default: true
  },
  {
    id: 2,
    name: 'Tiền mặt 200k',
    quantity: 200,
    probability: 0,
    default: false
  },
  {
    id: 3,
    name: 'Tiền mặt 500k',
    quantity: 97,
    probability: 0,
    default: false
  },
  {
    id: 4,
    name: '1 chỉ vàng ',
    quantity: 3,
    probability: 0,
    default: false
  }
];
