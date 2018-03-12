import { Year2 } from '../models/Year2';
import { Resource } from '../models/Resource';
import { Skill } from '../models/Skill';

export interface Project2 {
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
  calendar: Year2[];
  skills: Skill[];
  resources: Resource[];
}
