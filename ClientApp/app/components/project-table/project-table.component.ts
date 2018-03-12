import { Component, OnInit } from '@angular/core';
import { PROJECTS2 } from '../../mockdata/mock-projects2';
import { Skill } from '../../models/Skill';
import { Project } from '../../models/Project';
import { Project2 } from '../../models/Project2';

@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.css']
})
export class ProjectTableComponent implements OnInit {
  projects = PROJECTS2;

  week = 1;

  constructor() {}

  ngOnInit() {}

  toggleCollapse(id: number) {
    const state = document.getElementById('collapse' + id)!.style.display;
    if (state === 'none') {
      document.getElementById('collapse' + id)!.style.display = 'table-row';
      document.getElementById('collapseIcon' + id)!.className = 'fa fa-arrow-up';
    } else {
      document.getElementById('collapse' + id)!.style.display = 'none';
      document.getElementById('collapseIcon' + id)!.className = 'fa fa-arrow-down';
    }
  }

    setBackgroundColor(plannedhours: number, maxhours: number) {
    if (maxhours > plannedhours) {
      return 'table-danger';
    } else if (maxhours === plannedhours) {
      return 'table-warning';
    }
    return 'table-success';
  }

  showMessage() {
    alert('Callback Test');
  }

  incWeek() {
    if (this.week < 52) {
      this.week += 1;
    }
  }

  decWeek() {
    if (this.week > 1) {
      this.week -= 1;
    }
  }

    incSkill(skill: Skill) {
    skill.count += 1;
  }

  decSkill(skill: Skill, skills: Skill[]) {
    if (skill.count > 1) {
      skill.count -= 1;
    } else {
      const index = skills.indexOf(skill);
      skills.splice(index, 1);
    }
  }

  goToWeek() {
    const inputValue = parseInt(
      (<HTMLInputElement>document.getElementById('weekInput')).value,
      0
    );
    if (inputValue >= 49) {
      this.week = 49;
      return;
    } else if (inputValue <= 1) {
      this.week = 1;
      return;
    }
    this.week = inputValue;
    (<HTMLInputElement>document.getElementById('weekInput')).value = '';
  }

    sumSkillCounts(project: Project2, number: number) {
    const dif = number - 2;
    let sum = 0;
    for (const skill of project.calendar[0].weeks[this.week + dif].skills) {
      sum += skill.count;
    }
    return sum;
  }

    sumWeekCounts(project: Project2) {
    let sum = 0;
    for (let i = 0; i < project.calendar[0].weeks.length; i++) {
      for (const skill of project.calendar[0].weeks[i].skills) {
        sum += skill.count;
      }
    }
    return sum;
  }

  addResource(skills: Skill[], id1: number, id2: number) {
    const temp = (<HTMLInputElement>document.getElementById(
      'input' + id1 + id2
    )).value;
    if (temp !== '') {
      skills.push({ count: 1, name: temp });
      (<HTMLInputElement>document.getElementById('input' + id1 + id2)).value =
        '';
    }
  }
}
