import { CommonMerchantEvent } from './common-merchant';


export class AwardFeedbackDiscountEvent  extends CommonMerchantEvent{
  passenger_id: number;
  order_id: number;
  discount_amount: number;
  constructor() {
    super();
    this.event_name = 'award_feedback_discount';
    this.passenger_id = 10
    this.order_id = 23
    this.discount_amount = 11
  }
}
