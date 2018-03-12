import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Resource } from '../../models/Resource';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';

import { Week } from '../../models/Week';
import { RESOURCES } from '../../mockdata/mock-resources';
import { CALENDAR } from '../../mockdata/mock-calendar';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addresource',
  templateUrl: './addresource.component.html',
  styleUrls: ['./addresource.component.css']
})
export class AddResourceComponent implements OnInit {
  //static things
  resources = RESOURCES;
  calendar = CALENDAR;

  availableto: number;
  availablefrom: number;
  workinghours: number;
  editing: boolean = false;

  newResource: Resource;

  optionsModel: number[];

  myOptions: IMultiSelectOption[];

  selectedOptions: { id: number; name: string }[];
  constructor() {
    this.myOptions = [
      { id: 1, name: 'JavaScript' },
      { id: 2, name: 'Java' },
      { id: 3, name: 'C++' },
      { id: 4, name: 'C#' },
      { id: 5, name: 'HTML' },
      { id: 6, name: 'CSS' },
      { id: 7, name: 'SQL' }
    ];
  }

  ngOnInit() {
    this.initResource();
  }

  initResource() {
    this.availableto = 0;
    this.availablefrom = 0;
    this.workinghours = 0;

    var weeks: Week[] = [];

    for (var i: number = 1; i < 53; i++) {
      var tmp: Week = { id: i, current: 0, max: 0 };
      weeks.push(tmp);
    }
    this.newResource = {
      id: 0,
      firstname: '',
      lastname: '',
      email: '',
      salary: 0,
      company: '',
      phone: 0,
      skills: [],
      calendar: [{ id: 2017, weeks: null }],
      occupacity: null
    };
    this.newResource.calendar[0].weeks = weeks;
  }

  addResource(resourceForm) {
    if (
      this.newResource.firstname &&
      this.newResource.lastname &&
      this.newResource.phone &&
      this.newResource.email
    ) {
      var idd: number,
        selOpt: string[] = [];

      if (!this.resources.length) {
        idd = 0;
      } else {
        idd = (this.resources[this.resources.length - 1].id | 0) + 1;
      }

      this.selectedOptions.map(x => selOpt.push(x.name));
      this.resources.push({
        id: idd,
        firstname: this.newResource.firstname,
        lastname: this.newResource.lastname,
        email: this.newResource.email,
        salary: this.newResource.salary,
        company: this.newResource.company,
        phone: this.newResource.phone,
        occupacity: this.newResource.occupacity,
        calendar: this.newResource.calendar,
        skills: selOpt
      });

      this.initResource();
    } else {
      window.alert('First 4 inputs are required');
    }
  }

  onChange() {
    this.selectedOptions =
      this.optionsModel.map(rec => this.myOptions.find(x => x.id === rec)) ||
      [];
  }

    onDelete(resource: Resource) {
    for (var i: number = 0; i < this.resources.length; i++) {
      if (this.resources[i].id == resource.id) {
        this.resources.splice(i, 1);
      }
    }
  }

  onAddDefault() {
    for (var i: number = this.availablefrom - 1; i < this.availableto; i++) {
      this.newResource.calendar[0].weeks[i].max = this.workinghours;
    }
  }

    onEdit(resource: Resource) {
    if (this.editing) {
      resource.id = this.newResource.id;
      resource.firstname = this.newResource.firstname;
      resource.lastname = this.newResource.lastname;
      resource.email = this.newResource.email;
      resource.salary = this.newResource.salary;
      resource.company = this.newResource.company;
      resource.phone = this.newResource.phone;
      resource.skills = this.newResource.skills;
      resource.occupacity = this.newResource.occupacity;
      resource.calendar = this.newResource.calendar;

      this.editing = false;
    } else {
      this.newResource.id = resource.id;
      this.newResource.firstname = resource.firstname;
      this.newResource.lastname = resource.lastname;
      this.newResource.email = resource.email;
      this.newResource.salary = resource.salary;
      this.newResource.company = resource.company;
      this.newResource.phone = resource.phone;
      this.newResource.skills = resource.skills;
      this.newResource.occupacity = resource.occupacity;
      this.newResource.calendar = resource.calendar;

      this.editing = true;
    }
  }
}
