import { Year } from '../models/Year';

export interface Resource {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  salary: number;
  company: string;
  phone: number;
  occupacity: { project: string; calendar: Year }[];
  calendar: Year[];
  skills: string[];
}
