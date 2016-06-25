import {Component} from 'angular2/core';
import {ZippyComponent} from './zippy.component';

@Component({
    selector: 'my-app',
    template: 
    `
    	<zippy *ngFor= "#zippy of zippys" title={{zippy.title}}>
            {{zippy.body}}
        </zippy>
    `,
    directives: [ZippyComponent]
})
export class AppComponent {
    zippys = [
        {
            title: "Titulo para el panel #1",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dolor lorem, euismod ut leo eu, posuere mollis sapien. Integer vehicula rhoncus felis, lacinia imperdiet velit luctus ac. Maecenas eu ligula eu odio mollis euismod facilisis at lacus. Fusce varius tincidunt libero non finibus. Curabitur euismod felis vel magna hendrerit fermentum. Nunc nec venenatis nisl, in lacinia ex. Duis imperdiet eu nisi vel ullamcorper. Sed vel lectus non ante vestibulum hendrerit. Vivamus eu nunc placerat, facilisis dui vel, molestie nunc. Praesent interdum sit amet libero sed efficitur. Donec sit amet dolor tincidunt, efficitur libero quis, ultrices quam. Integer bibendum porta purus. Proin semper luctus enim id blandit."
        },
        {
            title: "Titulo para el panel #2",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dolor lorem, euismod ut leo eu, posuere mollis sapien. Integer vehicula rhoncus felis, lacinia imperdiet velit luctus ac. Maecenas eu ligula eu odio mollis euismod facilisis at lacus. Fusce varius tincidunt libero non finibus. Curabitur euismod felis vel magna hendrerit fermentum. Nunc nec venenatis nisl, in lacinia ex. Duis imperdiet eu nisi vel ullamcorper. Sed vel lectus non ante vestibulum hendrerit. Vivamus eu nunc placerat, facilisis dui vel, molestie nunc. Praesent interdum sit amet libero sed efficitur. Donec sit amet dolor tincidunt, efficitur libero quis, ultrices quam. Integer bibendum porta purus. Proin semper luctus enim id blandit."
        },
        {
            title: "Titulo para el panel #3",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dolor lorem, euismod ut leo eu, posuere mollis sapien. Integer vehicula rhoncus felis, lacinia imperdiet velit luctus ac. Maecenas eu ligula eu odio mollis euismod facilisis at lacus. Fusce varius tincidunt libero non finibus. Curabitur euismod felis vel magna hendrerit fermentum. Nunc nec venenatis nisl, in lacinia ex. Duis imperdiet eu nisi vel ullamcorper. Sed vel lectus non ante vestibulum hendrerit. Vivamus eu nunc placerat, facilisis dui vel, molestie nunc. Praesent interdum sit amet libero sed efficitur. Donec sit amet dolor tincidunt, efficitur libero quis, ultrices quam. Integer bibendum porta purus. Proin semper luctus enim id blandit."
        }
    ]

}