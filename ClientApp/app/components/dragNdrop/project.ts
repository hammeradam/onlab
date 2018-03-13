import { Human } from "./human";

export class Project {

    constructor(
        private name: string,
        private workOnIt: Array<Human>,
        private deadline: Date
    ) { }

    getWorkOnIt() {
        return this.workOnIt;
    }

    getDeadline() {
        return this.deadline;
    }
}