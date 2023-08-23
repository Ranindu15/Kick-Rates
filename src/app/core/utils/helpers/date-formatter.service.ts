import { Injectable } from '@angular/core';

@Injectable()
export class DateFormatter {

  public static DATE_FORMAT = /^\d{4}-\d{1,2}-\d{1,2}$/;

  constructor() {
  }


}
