export class CustomerFeedbackPagination {
  page_limit: number;
  offset: number;

  constructor() {
    this.page_limit = 0;
    this.offset = 0;
  }
}

export class CustomerReply {
  job_id: number;
  merchant_id: number;
  customer_feedback: string;
  reply_text: string;
  discount: Discount | null;
  constructor() {
    this.job_id = 10
    this.merchant_id = 11
    this.customer_feedback = 'dsd'
    this.reply_text = 'ds'
    this.discount = new Discount()
  }
}

export class Discount {
  outlet_name: string;
  amount: number;
  expiry_date: string;
  currency_code: string;
  constructor() {
    this.outlet_name = 'kakao'
    this.amount = 1000
    this.expiry_date = '2022-10-11'
    this.currency_code = 'LKR'
  }
}

export class SelectedPassengers {
  passenger_id: number;
  order_id: number;

  constructor() {
    this.passenger_id = 0;
    this.order_id = 0;
  }
}
