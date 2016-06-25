import {Component} from 'angular2/core';
import {BootstrapComponent} from './bootstrap.panel.component';

@Component({
    selector: 'my-app',
    template: 
    `
    	<
    `
})
export class AppComponent {
	canSave=false;

    onClick(){
        this.canSave = !this.canSave;
    }
}