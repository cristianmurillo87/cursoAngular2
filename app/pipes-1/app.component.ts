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
    	{{ course.title | lowercase}}
        <br/>
        {{ course.students | number }}
        <br/>
        {{ course.rating | number: '2.2-2'}}
        <br/>
        {{ course.price | currency: 'AUD':true:'2.2-2'}}
        <br/>
        {{ course.releaseDate | date:'yyyy MM'}}
        <br/>
        {{course | json}}

    `
    /*,
    directives: [CoursesComponent, AuthorComponent]*/
})
export class AppComponent {
	course = {
        title: "Angular 2 for Beginners",
        rating: 4.9745,
        students: 5981,
        price: 99.95,
        releaseDate: new Date(2016, 3, 1)
    }
}