import { Week } from '../models/Week';
import { Year } from '../models/Year';

var weeks: Week[] = [];

for (var i: number = 1; i < 53; i++) {
  var tmp: Week = { id: i, current: 0, max: 0 };
  weeks.push(tmp);
}

export const CALENDAR: Year[] = [{ id: 2017, weeks: weeks }];
