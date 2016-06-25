import {Component} from 'angular2/core';
import {TweetComponent} from './tweet.component';
/*import {CoursesComponent} from './courses.component';
import {AuthorComponent} from './authors.component';*/

@Component({
    selector: 'my-app',
    template:/*propiedades con () indican EventBinding y  con []  PropertyBinding y {{}} es para imprimir text
	cualquiera de los siguientes tres metodos son lo mismo
    */ 
    `
		<tweet></tweet>
    `,
    directives: [TweetComponent]
    /*,
    directives: [CoursesComponent, AuthorComponent]*/
})
export class AppComponent {
	
}