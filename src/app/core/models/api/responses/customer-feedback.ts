import { OrderOptions } from './order-details';

export class CustomerFeedback {
  days_to_reply: DaysToReply;
  disliked_menuitem_count: number;
  job_completed_timestamp: string;
  job_created_timestamp: string;
  job_id: number;
  feedback_promotion: string;
  job_rated_timestamp: string;
  liked_menuitem_count: number;
  merchant_discount: string;
  merchant_rating: MerchantRatings;
  merchant_replied_timestamp: string;
  merchant_reply: string;
  order_details: FeedbackOrderDetails[];
  passenger_comment: string;
  passenger_firstname: string;
  passenger_order_count: PassengerOrderCount;
  rating_tags: string[];
  passenger_id: number;
  subtotal_order_amount: string;
  total_order_amount: string;

  constructor() {
    this.days_to_reply = DaysToReply.ALREADY_REPLIED
    this.disliked_menuitem_count = 10
    this.job_completed_timestamp = '21:22'
    this.job_created_timestamp = '09:22'
    this.job_id = 22323
    this.feedback_promotion = 'SMSS'
    this.job_rated_timestamp = '06:32'
    this.liked_menuitem_count = 20
    this.merchant_discount = 'df'
    this.merchant_rating = MerchantRatings.NEGATIVE
    this.merchant_replied_timestamp = '11:34'
    this.merchant_reply = 'dsd'
    this.order_details = []
    this.passenger_comment = 'fuc'
    this.passenger_order_count = 34
    this.passenger_firstname = 'hosn'
    this.rating_tags = []
    this.passenger_id = 23232
    this.subtotal_order_amount = '323fd'
    this.total_order_amount = 'ygds'
  }

}

export class FeedbackOrderDetails {
  comment: string;
  item_id: number;
  item_total: string;
  name: string;
  order_options: OrderOptions[];
  qty: number;
  rating: number;
  row_total: string;
  sp_ins: string;
  constructor() {
    this.comment = ''
    this.item_id = 373
    this.item_total = '3653'
    this.name = 'dgsd'
    this.order_options = []
    this.qty = 34
    this.rating = 22
    this.row_total = '2323'
    this.sp_ins = 'ewd'
  }
}

export class FeedbackDiscount {
  promotion_id: number;
  promotion_code: string;
  promotion_name: string;
  promotion_discount_amount: number;
  currency_code: string;
  start_date: string;
  end_data: string;
  is_passenger_selected: boolean;
  constructor() {
    this.promotion_id = 37633
    this.promotion_code = 'ere'
    this.promotion_name = 'edy643'
    this.promotion_discount_amount = 4563
    this.currency_code = 'LKR'
    this.start_date = '23232'
    this.end_data = '3276352'
    this.is_passenger_selected = false
  }
}

export enum MerchantRatings {
  NEGATIVE,
  POSITIVE
}

export enum PassengerOrderCount {
  NEW_CUSTOMER = 1,
}

export enum DaysToReply {
  CANNOT_REPLY = -2,
  ALREADY_REPLIED = -1
}
