import {Component, Input} from 'angular2/core';
import {Post} from './post';
import {SpinnerComponent} from '../shared/spinner.component'

@Component({
    selector:'master-detail',
    templateUrl : 'app/posts/master-detail.component.html',
    styles:[`
        .media-object{
            border-radius: 100%;
        }
    `],
    directives:[SpinnerComponent]
})
export class MasterDetailComponent{
   @Input() title = '';
   @Input() body ='';
   @Input() loading = true;
   @Input() comments =[];
}