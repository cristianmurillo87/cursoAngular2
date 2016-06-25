import {Component, Input} from 'angular2/core';

@Component({
	selector:'heart',
	templateUrl: 'app/heart.template.html',
	styles: [
	`
		.glyphicon-heart{
			color:#ccc;
			cursor: pointer;
		}

		.pink{
			color: deeppink;
		}

	`]
})
export class HeartComponent{
	@Input() isClicked: boolean = false;
    @Input() likes: number = 0;

	onClick() {
		this.isClicked = !this.isClicked;
		this.likes += this.isClicked ? 1 : -1;
	}
}