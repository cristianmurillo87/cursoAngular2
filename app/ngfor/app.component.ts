import {Component} from 'angular2/core';
//import {TweetComponent} from './tweet.component';
/*import {CoursesComponent} from './courses.component';
import {AuthorComponent} from './authors.component';*/

@Component({
    selector: 'my-app',
    template:/*propiedades con () indican EventBinding y  con []  PropertyBinding y {{}} es para imprimir text
	cualquiera de los siguientes tres metodos son lo mismo
    */ 
    `
    	<ul>
    		<li *ngFor="#course of courses, #i = index">
                {{ i + 1 }} - {{ course }}
            </li>
    	</ul>
    `
    /*,
    directives: [CoursesComponent, AuthorComponent]*/
})
export class AppComponent {
	courses = ['Course 1', 'Course 2', 'Course 3'];
}