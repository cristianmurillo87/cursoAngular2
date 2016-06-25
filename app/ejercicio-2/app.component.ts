import {Component} from 'angular2/core';
import {HeartComponent} from './heart.component';
/*import {CoursesComponent} from './courses.component';
import {AuthorComponent} from './authors.component';*/

@Component({
    selector: 'my-app',
    template:/*propiedades con () indican EventBinding y  con []  PropertyBinding y {{}} es para imprimir text
	cualquiera de los siguientes tres metodos son lo mismo
    */ 
    `
		<heart [isClicked] = "tweets.clicked"  [likes] = "tweets.likes"></heart>
		
    `,
    directives:[HeartComponent]
    /*,
    directives: [CoursesComponent, AuthorComponent]*/
})
export class AppComponent {
	
	tweets = {
		likes: 10,
		clicked: false

	}

}