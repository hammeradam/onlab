import { Year } from '../models/Year';
import { Resource } from '../models/Resource';

export interface Project {
  id: number;
  name: string;
  projectleader: string;
  company: string;
  risk: number;
  startdate: number;
  duedate: number;
  plannedhours: number;
  currenthours: number;
  budget: number;
  calendar: Year[];
  skills: { count: number; skill: string }[];
  resources: Resource[];
}
