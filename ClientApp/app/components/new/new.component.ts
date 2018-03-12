import { Component } from '@angular/core';

@Component({
    selector: 'new',
    templateUrl: './new.component.html'
})
export class NewComponent {
    public currentCount = 0;

    public incrementCounter() {
        this.currentCount++;
    }
}
