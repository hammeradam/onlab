import { NgForm } from '@angular/forms';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Project2 } from '../../models/Project2';
import { Week2 } from '../../models/Week2';
import { Skill } from '../../models/Skill';
import { PROJECTS2 } from '../../mockdata/mock-projects2';
import { CALENDAR } from '../../mockdata/mock-calendar';
import { RESOURCES } from '../../mockdata/mock-resources';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddProjectComponent implements OnInit {
  projects = PROJECTS2;
  calendar = CALENDAR;
  resources = RESOURCES;
  resourceCount: number = 0;
  skills: Skill[] = [];
  editing: boolean = false;

  newProject: Project2;

  constructor() {}

  ngOnInit() {
    this.initProject();
  }

  initProject() {
    var weeks: Week2[] = [];

    for (var i: number = 1; i < 53; i++) {
      var tmp: Week2 = {
        id: i,
        skills: [{ count: 0, name: '' }],
        current: 0,
        required: 0
      };
      weeks.push(tmp);
    }

    this.skills = [];
    this.newProject = {
      id: 0,
      name: '',
      projectleader: '',
      company: '',
      risk: 0,
      startdate: null,
      duedate: null,
      plannedhours: null,
      currenthours: null,
      budget: 0,
      calendar: [{ id: 2017, weeks: null }],
      skills: [],
      resources: []
    };

    this.newProject.calendar[0].weeks = weeks;
  }

  onMinus() {
    if (this.resourceCount > 0) this.resourceCount--;
  }

  onPlus() {
    if (50 > this.resourceCount) this.resourceCount++;
  }

  onAddSkill() {
    var DropdownList = document.getElementById(
        'skillselect'
      ) as HTMLSelectElement,
      SelectedIndex = DropdownList.selectedIndex,
      str: string = DropdownList.options[SelectedIndex].value,
      indexOfElement = this.skills.findIndex(i => i.name === str);

    if (indexOfElement > -1) {
      this.skills.splice(indexOfElement, 1);
    }
    this.skills.push({
      count: this.resourceCount,
      name: str
    });
  }

  onAddDefault() {
    for (
      var i: number = this.newProject.startdate - 1;
      i < this.newProject.duedate;
      i++
    ) {
      this.newProject.calendar[0].weeks[
        i
      ].required = this.newProject.plannedhours;
      this.newProject.calendar[0].weeks[i].skills = this.skills;
    }
    this.skills = [];
  }

  onAddProject() {
    if (this.newProject.name && this.newProject.projectleader) {
      var idd: number;
      if (!this.projects.length) {
        idd = 0;
      } else {
        idd = (this.projects[this.projects.length - 1].id | 0) + 1;
      }
      this.projects.push({
        id: idd,
        name: this.newProject.name,
        projectleader: this.newProject.projectleader,
        company: this.newProject.company,
        risk: this.newProject.risk,
        startdate: this.newProject.startdate,
        duedate: this.newProject.duedate,
        plannedhours: this.newProject.plannedhours,
        currenthours: this.newProject.currenthours,
        budget: this.newProject.budget,
        calendar: this.newProject.calendar,
        skills: this.newProject.skills,
        resources: this.newProject.resources
      });
      this.initProject();
    } else {
      window.alert('First 2 inputs are required');
    }
  }

  onEdit(project) {
    if (this.editing) {
      project.id = this.newProject.id;
      project.name = this.newProject.name;
      project.projectleader = this.newProject.projectleader;
      project.company = this.newProject.company;
      project.risk = this.newProject.risk;
      project.startdate = this.newProject.startdate;
      project.duedate = this.newProject.duedate;
      project.plannedhours = this.newProject.plannedhours;
      project.currenthours = this.newProject.currenthours;
      project.budget = this.newProject.budget;
      project.calendar = this.newProject.calendar;
      project.skills = this.newProject.skills;
      project.resources = this.newProject.resources;

      this.editing = false;
    } else {
      this.newProject.id = project.id;
      this.newProject.name = project.name;
      this.newProject.projectleader = project.projectleader;
      this.newProject.company = project.company;
      this.newProject.risk = project.risk;
      this.newProject.startdate = project.startdate;
      this.newProject.duedate = project.duedate;
      this.newProject.plannedhours = project.plannedhours;
      this.newProject.currenthours = project.currenthours;
      this.newProject.budget = project.budget;
      this.newProject.calendar = project.calendar;
      this.newProject.skills = project.skills;
      this.newProject.resources = project.resources;

      this.editing = true;
    }
  }
  onDelete(project) {
    for (var i: number = 0; i < this.projects.length; i++) {
      if (this.projects[i].id == project.id) {
        this.projects.splice(i, 1);
      }
    }
  }

  onRemoveSkill(skill) {
    console.log(skill);
    var indexOfElement: number = this.skills.findIndex(
      i => i.name === skill.name
    );

    if (indexOfElement > -1) {
      this.skills.splice(indexOfElement, 1);
    }
  }
}
