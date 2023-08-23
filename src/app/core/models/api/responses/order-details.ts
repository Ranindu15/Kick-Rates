

export class OrderOptions {
  name: string;
  option_id: string;
  values: OrderValues[];
  constructor() {
    this.name = 'fdf'
    this.option_id = 'dsgd'
    this.values = []
  }
}

export class OrderValues {
  id: string;
  value: string;
  price: string;
  qty: number;
  constructor() {
    this.id = 'dsf'
    this.value = '232'
    this.price = '3232'
    this.qty = 221
  }
}

export enum OrderStatus {
  NEW = 1,
  PREPARING,
  PICKED,
  COMPLETED = 4,
  CANCELLED = 5,
  REJECTED = 6,
  READY = 7,
  PREP_TIME_EXTENDED = 13
}
