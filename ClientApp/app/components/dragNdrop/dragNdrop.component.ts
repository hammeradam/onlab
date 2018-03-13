import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { DragulaService } from 'dragula';
import { Human } from './human';
import { Project } from './project';

@Component({
    selector: 'dragNdrop',
    templateUrl: './dragNdrop.component.html',
    styleUrls: ['./dragNdrop.component.css']
})

export class DragNdropComponent implements OnInit {

    //constructor(private dragula: DragulaService) {

    //    this.dragula.dropModel.subscribe((value) => {
    //        this.onDropModel(value.slice(1));
    //    });

    //    this.dragula.drag.subscribe((value) => {
    //        this.onDragModel(value.slice(1));
    //    });
    //}

    private onDropModel(args) {
        let [el, target, source] = args;
    }

    private onDragModel(args) {
        let [el, target, source] = args;
    }

    public workOnIt: Human[] = [];
    public project: Project;
    public people: Array<Human> = [];

    ngOnInit() {

        this.project = new Project("Új projekt", this.workOnIt, new Date("2019-01-01"));

        let elso = new Human("Elsõ ember");
        let masodik = new Human("Második ember");
        let harmadik = new Human("Harmadik ember");

        this.people.push(elso);
        this.people.push(masodik);
        this.people.push(harmadik);
    }

}
