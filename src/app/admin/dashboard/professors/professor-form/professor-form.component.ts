/**
 * Created by Taulant on 9/26/2016.
 */
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { FileUploader, FileItem} from "ng2-file-upload/ng2-file-upload";
import {Router, ActivatedRoute} from "@angular/router";

import {Professor} from "../../../../shared/models/professor.model";
import {ProfessorsService} from "../../../../shared/services/professors.service";


@Component({
    selector: 'professor-form',
    templateUrl: './professor-form.template.html',
    styleUrls:['./professor-form.component.css'],
    providers:[ProfessorsService]

})
export class ProfessorFormComponent implements OnInit {
    private sub:any;
    public professor:Professor;

    public uploader:FileUploader;
    public hasBaseDropZoneOver:boolean = false;

    constructor(private _service:ProfessorsService,private _router:Router, private _route:ActivatedRoute) {
        this.professor = new Professor();
        this.uploader = new FileUploader({url:'someurl'})
    }

    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
            if(params['id']) {
                this._service.get(params['id']).then(
                    res =>  this.professor = res
                );
            }
        });

    }
    public fileOverBase(e:any):void {
        this.hasBaseDropZoneOver = e;
    }
    addProfessor(){

        let photo:FileItem = this.uploader.queue[0];
        this._service.addProfessor(this.professor, photo._file).subscribe(() => {

            this._router.navigate(['admin/dashboard/professors']);
        });

    }

}