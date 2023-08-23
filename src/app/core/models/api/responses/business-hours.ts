export class BusinessHours {
  day: string;
  business_hours: BusinessHour[];
  constructor() {
    this.day = 'mon'
    this.business_hours = []
  }
}

export class BusinessHour {
  constructor() {
    this.opening_hour = '';
    this.closing_hour = '';
  }
  opening_hour: string;
  closing_hour: string;
}
