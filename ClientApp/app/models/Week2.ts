import { Skill } from '../models/Skill';

export interface Week2 {
  id: number; //number of week
  skills: Skill[];
  current: number;
  required: number;
}
