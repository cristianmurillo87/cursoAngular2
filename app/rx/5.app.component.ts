
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

        var userStream = Observable.of({
            userId: 1,
            username: 'mosh'
        }).delay(2000);

        var tweetStream = Observable.of([1,2,3]).delay(1500);

        Observable.forkJoin(userStream, tweetStream)
                  .map(joined => new Object({
                      user: joined[0],
                      tweets: joined[1]
                  }))
                  .subscribe(result => console.log(result));

            
    }

}