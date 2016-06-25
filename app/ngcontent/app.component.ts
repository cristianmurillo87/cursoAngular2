import {Component} from 'angular2/core';
import {BootstrapPanel} from './bootstrap.panel.component';

@Component({
    selector: 'my-app',
    template: 
    `
    	<bs-panel>
            <div class="heading">Titulo del Panel</div>
            <div class="body">Este es el cuerpo del Panel.</div>
        </bs-panel>
    `,
    directives:[BootstrapPanel]
})
export class AppComponent {

}