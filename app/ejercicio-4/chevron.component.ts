import {Component, Input} from 'angular2/core';

@Component({
	selector:'chevron',
	templateUrl:'app/chevron.template.html'
})
export class Chevron{
	@Input() clicked = false;

	onClick(){
		this.clicked = !this.clicked;
	}

}