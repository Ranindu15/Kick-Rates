export class FeedbackDiscount {
  promotion_id: number;
  promotion_code: number;
  promotion_name: string;
  promotion_discount_amount: number;
  currency_code: string;
  start_date: string;
  end_data: string;
  is_passenger_selected: boolean;
  constructor() {
    this.promotion_name = 'ewr3r'
    this.promotion_id = 4323
    this.promotion_code = 3434
    this.promotion_discount_amount = 434
    this.currency_code = 'LKR'
    this.start_date = '32323'
    this.end_data = 'r844683'
    this.is_passenger_selected = false
  }
}

export class NewFeedbackDiscount {
  name: string = '';
  discount_amount: number = 0;
}
