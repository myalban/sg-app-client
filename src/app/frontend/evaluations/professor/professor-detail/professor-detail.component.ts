import {Component,ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'professor-detail',
    templateUrl: 'professor-detail.template.pug',
    styleUrls:['./professor-detail.styles.scss']
})

export class ProfessorDetailComponent {
    public professorName:string;

    constructor() {}

    getName(event){
       this.professorName = event.professorName;
    }
}