import {Component} from 'angular2/core';
import {SummaryPipe} from './summary.pipe'
//import {TweetComponent} from './tweet.component';
/*import {CoursesComponent} from './courses.component';
import {AuthorComponent} from './authors.component';*/

@Component({
    selector: 'my-app',
    template:/*propiedades con () indican EventBinding y  con []  PropertyBinding y {{}} es para imprimir text
	cualquiera de los siguientes tres metodos son lo mismo
    */ 
    `
    	{{ post.title }}
        <br/>
        {{ post.body | summary}}
    `,
    pipes: [SummaryPipe]
    /*,
    directives: [CoursesComponent, AuthorComponent]*/
})
export class AppComponent {
	post = {
        title: "Angular 2 for Beginners",
        body: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Etiam in libero tincidunt, efficitur leo feugiat, tristique eros. 
            Aliquam est lectus, efficitur ut magna et, pharetra cursus felis. 
            Cras a consectetur ex. 
        `
    }
}