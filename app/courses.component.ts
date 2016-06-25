import {Component} from 'angular2/core';
import {CourseService} from './course.service';
import {AutoGrowDirective} from './auto-grow.directive';

@Component({
	//los selectors de unicamente en comillas indican etiquetas html
	selector:'courses',
	template: `
		<h2>Cursos</h2>
		{{title}}
		<input type="text" autoGrow/>
		<ul>
			<li *ngFor="#course of courses">
				{{course}}
			</li>
		</ul>
		`,
	providers:[CourseService],
	directives:[AutoGrowDirective]
})
export class CoursesComponent {
	title/*: string* <- No es obligatorio definir el tipo */ = "El titulo de la pagina de cursos";
	courses;

	constructor(courseService: CourseService){
		this.courses = courseService.getCourses();

	}
}