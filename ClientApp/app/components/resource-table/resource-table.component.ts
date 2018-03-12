import { Component, OnInit } from '@angular/core';
import { RESOURCES } from '../../mockdata/mock-resources';
import { Week } from '../../models/Week';
import { Resource } from '../../models/Resource';

@Component({
  selector: 'app-resource-table',
  templateUrl: './resource-table.component.html',
  styleUrls: ['./resource-table.component.css']
})
export class ResourceTableComponent implements OnInit {
  resources = RESOURCES;
  skills = [
    {
      name: 'available',
      number: 30
    }

  ];

  week = 1;

  constructor() { }

  ngOnInit() {
  }

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

  setBackgroundColor(max: number, current: number) {
    // TODO: only for testing, real algorythm needs to be implemented
    if (current > max) {
      return 'table-danger';
    } else if (current === max) {
      return 'table-warning';
    }
    return 'table-success';
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

  goToWeek() {
    const inputValue = parseInt((<HTMLInputElement>document.getElementById('weekInput')).value, 0);
    if (inputValue >= 49) {
      this.week = 49;
      return;
    } else if (inputValue <= 1) {
      this.week = 1;
      return;
    }
    this.week = inputValue;
  }

    incHours(week: Week) {
    week.current += 1;
  }

  decHours(week: Week) {
    if (week.current > 0) {
      week.current -= 1;
    }
  }

    sumHoursMax(resource: Resource) {
    let sum = 0;
    for (const week of resource.calendar[0].weeks) {
      sum += week.max;
    }
    return sum;
  }
  sumHoursCurrent(resource: Resource) {
    let sum = 0;
    for (const week of resource.calendar[0].weeks) {
      sum += week.current;
    }
    return sum;
  }
}
