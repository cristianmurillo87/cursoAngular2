import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
	selector:'star',
	templateUrl: 'app/star.template.html',
	styles: [`
		.glyphicon-star{
			color:orange;
		}
	`]
})
export class StarComponent{
	@Input() isClicked: boolean = false;

	@Output() change = new EventEmitter();

	onClick() {
		this.isClicked = !this.isClicked;
		this.change.emit({ newValue: this.isClicked });
	}
}