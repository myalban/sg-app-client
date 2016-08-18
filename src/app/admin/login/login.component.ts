import {Component, ViewEncapsulation} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {UserService} from "../user.service";

@Component({
    selector: 'login',
    encapsulation: ViewEncapsulation.None,
    directives: [],
    template: require('./login.html'),
})
export class Login {

    public form:FormGroup;
    public email:AbstractControl;
    public password:AbstractControl;
    public submitted:boolean = false;

    constructor(fb:FormBuilder,  private userService: UserService) {
        this.form = fb.group({
            'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
        });

        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
    }

    public onSubmit(values:Object):void {
        this.submitted = true;

        if (this.form.valid) {
            
            this.userService.login(values.email, values.password).subscribe((result) => {
                if (result) {
                    console.log('asd');
                   // this.router.navigate(['']);
                }
            });
        }
    }
}
