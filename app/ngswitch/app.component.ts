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
    	<br>
    	<ul class="nav nav-pills">
    		<li [class.active] = "viewMode == 'map'"><a (click) ="viewMode = 'map'">Map View</a></li>
    		<li [class.active] = "viewMode == 'list'"><a (click) ="viewMode = 'list'">List View</a></li>
    	</ul>
    	<div [ngSwitch]="viewMode">
    		<template [ngSwitchWhen]="'map'">Map View Content</template>
    		<template [ngSwitchWhen]="'list'">List View Content</template>
    	</div>
    `
    /*,
    directives: [CoursesComponent, AuthorComponent]*/
})
export class AppComponent {
	viewMode = 'map';
}