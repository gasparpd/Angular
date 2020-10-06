import { Component } from "@angular/core";

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {

    mostrar = true;

    frase: any = {
        mensaje: 'Un gran poder',
        autor: 'Abuelo de Peter parker'
    }

    personajes: string[] = ['Spiderman', 'Venom', 'Dr.Octopus'];
}