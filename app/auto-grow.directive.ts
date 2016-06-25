import {Directive, ElementRef, Renderer} from 'angular2/core';

@Directive({
	//los selector encerrados en [] indican atributos
	selector:'[autoGrow]',/*<-- se va a aplicar la directiva al elemento que contenga el atributo autoGrow*/
	host:{
		'(focus)': 'onFocus()',
		'(blur)' : 'onBlur()'
	}
})
export class AutoGrowDirective {
	// los atributos que inician con _ son privados

	constructor( private el: ElementRef, private renderer: Renderer){
	}

	onFocus(){
		this.renderer.setElementStyle(this.el.nativeElement, 'width', '200');
	}

	onBlur(){
		this.renderer.setElementStyle(this.el.nativeElement, 'width', '120');
	}
}