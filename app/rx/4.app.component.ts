
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

        var observable = Observable.interval(1000);

        observable.flatMap(x=>{
                 console.log("calling the server to get the latest news");
                 return Observable.of([1,2,3]);
                 })
                 .subscribe(news=> console.log(news));

            
    }

}