import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { CONST } from '../constant';

@Injectable()
export class DateFormatter {

  public static DATE_FORMAT = /^\d{4}-\d{1,2}-\d{1,2}$/;

  constructor() {
  }


}
