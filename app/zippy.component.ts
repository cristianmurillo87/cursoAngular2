import {Component, Input} from 'angular2/core';
import {Chevron} from './chevron.component';

@Component({
	selector:'zippy',
	templateUrl:'app/zippy.template.html',
	directives:[Chevron]
})
export class ZippyComponent{
	@Input() isExpanded = false;
	@Input() title: string = "Titulo del Panel";

	toggle(){
		this.isExpanded = !this.isExpanded;
	}
}