import {Component} from 'angular2/core';
import {AuthorService} from './author.service';

@Component({
	selector:'authors',
	template: `
		<h2>Autores</h2>
		{{title}}
		<ul>
			<li *ngFor="#author of authors">
				{{author}}
			</li>
		</ul>
		`,
	providers:[AuthorService]
})
export class AuthorComponent {
	title = "El titulo de la pagina de autores";
	authors: string[];

	constructor(authorService: AuthorService){
		this.authors = authorService.getAuthors();

	}
}