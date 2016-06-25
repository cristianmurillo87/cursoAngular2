
import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {ControlGroup, FormBuilder} from 'angular2/common';
import 'rxjs/Rx';

@Component({
    selector: 'my-app',
    template: `
        <form [ngFormModel]="form">
            <input type="text" ngControl="search" class="form-control">
        </form>
    `
})
export class AppComponent {
    
    form: ControlGroup;
    
    constructor(fb: FormBuilder){
        this.form = fb.group({
            search:[]
        });

        var observable = Observable.throw(new Error("Something failed."));

            observable.subscribe(
                x=> console.log(x),
                error => console.error(error)
            );

            
    }

}