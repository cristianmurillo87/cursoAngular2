
import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {ControlGroup, FormBuilder} from 'angular2/common';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromArray';
import 'rxjs/add/observable/range';

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

        var observable = Observable.of([1,2,3]);

        observable.subscribe(x=> console.log(x));

            
    }

}