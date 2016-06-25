
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

        var counter = 0;

        var ajaxCall = Observable.of('url').flatMap(
                ()=>{
                    if(++counter < 2){
                        return Observable.throw(new Error("Request failed"));
                    }

                    return Observable.of([1,2,3]);
                }
            );

        ajaxCall.retry(3)
                .subscribe(
                    x=> console.log(x),
                    error=> console.error(error)
                );



            
    }

}