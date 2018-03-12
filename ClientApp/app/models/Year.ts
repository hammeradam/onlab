import { Week } from '../models/Week';

export interface Year {
  id: number; //which year example:2017 as number
  weeks: Week[]; //weeks themselves
}
