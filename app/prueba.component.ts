import {Component } from 'angular2/core';

@Component({
    selector:'prueba',
    template : `
        <h1 (mouseover)="saludo()" (mouseout)="despedida()">
            {{prueba}}
        </h1>
        `
})
export class PruebaComponent{
    prueba: String = "Hola Mundo";
    chao: String = "Chao!!, Espero verte pronto!";
    
    saludo(){
        console.log(this.prueba);
    }
    
    despedida(){
        console.log(this.chao);
    }
}